import React from "react";

export const gallery = (color: string) => ({
  hamburger: {
    viewBox: "0 0 48 48",
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M7.94977 11.9498H39.9498"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.94977 23.9498H39.9498"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.94977 35.9498H39.9498"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
});
