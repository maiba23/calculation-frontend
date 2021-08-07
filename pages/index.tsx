import { useMutation } from "@apollo/client";
import { Calculator } from "../components/Calculator";
import { Header } from "../components/Header";
import { MUTATE_SUM } from "../gql/mutations";

export default function Home() {
  const [sum, { data, loading, error }] = useMutation(MUTATE_SUM);

  /**
   * On Sum Handler
   * @param {} values
   */
  const onCalcHandler = (values: { [key: string]: number }, type: string) => {
    const numbers = Object.keys(values).map((_i) => values[_i]);

    if (type === "sum") {
      sum({
        variables: {
          numbers,
        },
      });
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <Header title="calculator" />
      <div className="pt-14 flex justify-center">
        <Calculator
          onCalc={onCalcHandler}
          numbers={5}
          title="Enter the numbers"
          calculating={loading}
          result={data && data.sum}
          error={error}
        />
      </div>
    </div>
  );
}
