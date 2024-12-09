"use client";

import { ReactNode } from "react";
import { helloLog } from "./hello";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => {
        helloLog();
        alert(`Hello from your ${appName} app!!`);
      }}
    >
      {children}
    </button>
  );
};
