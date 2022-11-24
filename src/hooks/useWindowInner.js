import * as React from "react";

// Hooks React
const { useEffect, useState } = React;

export const useWindowInner = (width = 600) => {
  let Inner;

  if (typeof window !== "undefined") {
    Inner = window.innerWidth;
  }

  const [isInnerWidth, setIsInnerWidth] = useState(Inner);

  useEffect(() => {
    const handelWindowResize = setIsInnerWidth(window.innerWidth);

    window.addEventListener("resize", handelWindowResize);
    return () => window.removeEventListener("resize", handelWindowResize);
  }, []);

  return {
    isMobile: isInnerWidth <= width ? true : false,
    isInnerWidth,
  };
};
