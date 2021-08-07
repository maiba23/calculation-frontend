import * as React from "react";

/**
 * Button Props
 */
export interface ICalcButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /**
   * Button Type
   */
  type?: "submit" | "button" | "reset";
  /**
   * Full Width for Parent
   */
  fullwidth?: boolean;
}

/**
 * Calc Button Component
 */
export const CalcButton: React.FC<ICalcButtonProps> = ({
  type,
  children,
  className,
  onClick,
  fullwidth,
}): React.ReactElement => {
  return (
    <button
      type={type}
      className={`${className} ${fullwidth ? "w-full" : "w-auto"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
