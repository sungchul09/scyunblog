"use client";

import { useRouter } from "next/navigation";
import { portfolioConfig } from "@/src/config/portfolio";
import { useEffect } from "react";

export function useOnlyLink() {
  const router = useRouter();
  const onlyLinkMode = portfolioConfig.onlyLinkMode;
  useEffect(() => {
    if (onlyLinkMode) {
      router.push("/portfolio");
    }
  }, []);
}
