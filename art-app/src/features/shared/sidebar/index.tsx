import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className = "" }) => {
  return (
    <aside className={`sidebar ${className}`}>
      {children}
    </aside>
  );
};
