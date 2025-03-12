import { ReactNode } from "react";

interface AppBaseProps {
  title?: string;
  children?: ReactNode;
}

export default function AppBase({ title = "Window Title", children = null }: AppBaseProps) {
  return (
    <div className="relative w-[85%] h-[85%] bg-white shadow-lg flex flex-col">
      <div className="flex justify-between items-center bg-blue-500 text-white p-3 h-[50px]">
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}
