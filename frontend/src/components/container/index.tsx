import { ReactNode } from "react";
export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-7xl min-h-screen mx-auto my-6  px-2 rounded-xl">
      {children}
    </div>
  );
}
