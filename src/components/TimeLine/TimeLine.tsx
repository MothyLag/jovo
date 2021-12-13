import { TimeLineProps } from "./TimeLine.interfaces";
import { TimeLineContainer } from "./TimeLine.styles";

export const TimeLine = (props: TimeLineProps) => {
  const {
    events = [
      { name: "Evento1", time: "1:30" },
      { name: "Evento2", time: "2:30" },
      { name: "Evento3", time: "3:30" },
    ],
  } = props;
  return <TimeLineContainer>{events.map((event, i) => {})}</TimeLineContainer>;
};
