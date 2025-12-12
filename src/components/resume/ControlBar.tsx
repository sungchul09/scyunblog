import React, { useState, useEffect, useCallback } from "react";
import { css } from "@/styled-system/css";

export default function ControlBar({
  scale,
  setScale,
}: {
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [inputValue, setInputValue] = useState(String(scale));
  const [isFocused, setIsFocused] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 10, 150));
  }, [setScale]);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 10, 50));
  }, [setScale]);

  const handleResetZoom = useCallback(() => {
    setScale(100);
  }, [setScale]);

  const applyScale = useCallback(
    (value: string) => {
      const num = parseInt(value, 10);
      if (!isNaN(num) && num >= 50 && num <= 150) {
        setScale(num);
        setInputValue(String(num));
      } else {
        setInputValue(String(scale));
      }
    },
    [scale, setScale],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    applyScale(inputValue);
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    e.target.select();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      applyScale(inputValue);
      (e.target as HTMLInputElement).blur();
    }
    if (e.key === "Escape") {
      setInputValue(String(scale));
      (e.target as HTMLInputElement).blur();
    }
  };

  useEffect(() => {
    if (!isFocused) {
      setInputValue(String(scale));
    }
  }, [scale, isFocused]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT") return;

      if (e.ctrlKey || e.metaKey) {
        if (e.key === "=" || e.key === "+") {
          e.preventDefault();
          handleZoomIn();
        } else if (e.key === "-" || e.key === "_") {
          e.preventDefault();
          handleZoomOut();
        } else if (e.key === "0") {
          e.preventDefault();
          handleResetZoom();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [handleZoomIn, handleZoomOut, handleResetZoom]);

  return (
    <div className={containerStyle}>
      <div className={zoomControlStyle}>
        <button
          type="button"
          onClick={handleZoomOut}
          className={iconButtonStyle}
          aria-label="축소"
        >
          −
        </button>
        <div className={scaleDisplayStyle}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            className={scaleInputStyle}
            maxLength={3}
          />
          <span className={percentStyle}>%</span>
        </div>
        <button
          type="button"
          onClick={handleZoomIn}
          className={iconButtonStyle}
          aria-label="확대"
        >
          +
        </button>
      </div>
      <button type="button" onClick={handlePrint} className={printButtonStyle}>
        PDF 저장
      </button>
    </div>
  );
}

const containerStyle = css({
  pos: "fixed",
  insetInlineEnd: "20px",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  gap: "12px",
  px: "8px",
  py: "6px",
  bgColor: "white",
  rounded: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
  "@media print": {
    display: "none",
  },
});

const zoomControlStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const iconButtonStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "28px",
  h: "28px",
  bgColor: "transparent",
  border: "none",
  rounded: "4px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "500",
  color: "gray.600",
  _hover: { bgColor: "gray.100" },
});

const scaleDisplayStyle = css({
  display: "flex",
  alignItems: "center",
  minW: "52px",
  justifyContent: "center",
});

const scaleInputStyle = css({
  w: "32px",
  textAlign: "right",
  fontWeight: "500",
  color: "gray.700",
  border: "none",
  outline: "none",
  bg: "transparent",
  fontSize: "13px",
});

const percentStyle = css({
  fontSize: "13px",
  fontWeight: "500",
  color: "gray.700",
});

const printButtonStyle = css({
  px: "12px",
  py: "6px",
  fontSize: "13px",
  fontWeight: "500",
  color: "gray.700",
  bgColor: "gray.100",
  border: "none",
  rounded: "6px",
  cursor: "pointer",
  _hover: { bgColor: "gray.200" },
});
