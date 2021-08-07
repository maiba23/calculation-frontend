import * as React from "react";

export interface IHeaderProps {
  /**
   * Title of Website
   */
  title: string;
}

/**
 * Header Compoennt
 */
export const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <div className="w-screen h-70 flex items-center justify-center bg-calcMain">
      <span className="text-white text-lg uppercase">{title}</span>
    </div>
  );
};
