import { memo } from "react";
import { Bar, Container } from "./styles";

interface IChart {
  data: {
    [key: string]: any;
  };
}

const Chart = ({ data }: IChart) => {
  return (
    <Container>
      {Object.entries(data).map((value) => {
        const Randomcolor = () => {
          let o = Math.round,
            r = Math.random,
            s = 255;
          return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")";
        };

        return (
          <div>
            <Bar size={value[1]} color={Randomcolor()}></Bar>
            <div>{value[0]}</div>
          </div>
        );
      })}
    </Container>
  );
};

export default Chart;
