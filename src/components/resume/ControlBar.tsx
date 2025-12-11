import React, { useRef, useState, useEffect } from "react";
import { css } from "@/styled-system/css";

export default function ControlBar({
  resumeRef,
  scale,
  setScale,
}: {
  resumeRef: React.RefObject<HTMLDivElement>;
  scale: number;
  setScale: (scale: number) => void;
}) {
  const [inputBuffer, setInputBuffer] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 10, 50));
  };

  const handleResetZoom = () => {
    setScale(100);
  };

  const applyInputBuffer = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 50 && num <= 150) {
      setScale(num);
    }
    setInputBuffer("");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd 키가 눌렸는지 확인
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
        return;
      }

      // 숫자 키 입력
      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        const newBuffer = inputBuffer + e.key;
        setInputBuffer(newBuffer);

        // 기존 타이머 취소
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // 1초 후 자동 적용
        timeoutRef.current = setTimeout(() => {
          applyInputBuffer(newBuffer);
        }, 1000);
      }

      // Enter 키로 즉시 적용
      if (e.key === "Enter" && inputBuffer) {
        e.preventDefault();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        applyInputBuffer(inputBuffer);
      }

      // Escape 키로 취소
      if (e.key === "Escape" && inputBuffer) {
        e.preventDefault();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setInputBuffer("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inputBuffer]);

  return (
    <div className={controlBarStyle}>
      <button onClick={handleZoomOut} className={controlButtonStyle}>
        축소
      </button>
      <button onClick={handleResetZoom} className={controlButtonStyle}>
        {inputBuffer ? `${inputBuffer}_` : `${scale}%`}
      </button>
      <button onClick={handleZoomIn} className={controlButtonStyle}>
        확대
      </button>
      <button onClick={handlePrint} className={pdfButtonStyle}>
        PDF로 저장
      </button>
    </div>
  );
}

const controlBarStyle = css({
  pos: "fixed",
  insetBlockStart: "220px",
  insetInlineEnd: "20px",
  display: "flex",
  flexDir: "column",
  columnGap: "10px",
  rowGap: "10px",
  zIndex: 1000,
  "@media print": {
    display: "none",
  },
});

const controlButtonStyle = css({
  px: "16px",
  py: "8px",
  bgColor: "white",
  borderTopWidth: "2px",
  borderRightWidth: "2px",
  borderBottomWidth: "2px",
  borderLeftWidth: "2px",
  borderTopStyle: "solid",
  borderRightStyle: "solid",
  borderBottomStyle: "solid",
  borderLeftStyle: "solid",
  borderTopColor: "primary",
  borderRightColor: "primary",
  borderBottomColor: "primary",
  borderLeftColor: "primary",
  rounded: "6px",
  cursor: "pointer",
  fontWeight: "600",
  color: "primary",
  _hover: { bgColor: "bg.grouped.base" },
});

const pdfButtonStyle = css({
  px: "20px",
  py: "8px",
  bgColor: "primary",
  color: "white",
  borderTopWidth: "0",
  borderRightWidth: "0",
  borderBottomWidth: "0",
  borderLeftWidth: "0",
  rounded: "6px",
  cursor: "pointer",
  fontWeight: "700",
  _hover: { bgColor: "primary" },
});
