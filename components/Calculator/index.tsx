import * as React from "react";
import { CalcButton } from "../CalcButton";

export interface ICacluatorProps {
  /**
   * Title of Form
   */
  title?: string;
  /**
   * Numbers of Input Numbers
   */
  numbers?: number;
  /**
   * Caculation Handler
   */
  onCalc?: (values: { [key: string]: number }, type: string) => void;
  /**
   * Result Number
   */
  result?: number;
  /**
   * Status of Calculating
   */
  calculating?: boolean;
  /**
   * Error
   */
  error?: any;
}

/**
 * Calculator Component
 */
export const Calculator: React.FC<ICacluatorProps> = ({
  title,
  numbers,
  onCalc,
  result,
  error,
  calculating = false,
}): React.ReactElement => {
  const [values, setValues] = React.useState<{
    [k: string]: number;
  }>({});

  const inputs = React.useMemo(() => Array(numbers).fill(0), [numbers]);

  /**
   * On Change of Input Number
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e Input Event
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: Number(e.target.value),
    });
  };

  /**
   * On Sum Click Handler
   */
  const onClickSum = () => {
    onCalc && onCalc(values, "sum");
  };

  return (
    <div className="shadow-md rounded-md px-5 py-4 w-96 md:w-740">
      {title && (
        <h1 className="text-center text-calcText text-base my-2">{title}</h1>
      )}
      {/* Start Form */}
      <form onSubmit={(e) => e.preventDefault()}>
        {inputs.map((i, _i) => (
          <div key={_i} className="my-1 w-335 m-auto">
            <input
              type="number"
              name={`number_${_i + 1}`}
              onChange={onChange}
              value={values[`number_${_i + 1}`] || ""}
              placeholder={`Number ${_i + 1}`}
              className="mt-10 p-2 border w-full border-calcText placeholder-calcText rounded-md"
            />
          </div>
        ))}
        <div className="my-1 w-335 m-auto">
          <CalcButton
            type="submit"
            onClick={onClickSum}
            fullwidth
            className="bg-calcMain py-2 px-3 text-white mt-4"
          >
            {calculating ? "Summing" : "Sum"}
          </CalcButton>
        </div>
      </form>
      {/* End Form */}

      {/* Start Divider */}
      <hr className="bg-calcMain w-full border-t border-calcMain my-11" />
      {/* End Divider */}

      {/* Start Result Section */}
      <div className="my-11 w-335 m-auto">
        <h2 className="text-calcText text-base text-center">Results</h2>
        <input
          type="text"
          value={error ? "Something wrong!" : result ? result : ""}
          placeholder="Results here"
          readOnly
          className="mt-10 p-2 border w-full border-calcText placeholder-calcText rounded-md"
        />
      </div>
      {/* End Result Section */}
    </div>
  );
};
