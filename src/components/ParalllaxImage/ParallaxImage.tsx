import { TimeLine } from "../TimeLine/TimeLine";
import { TLEvent } from "../TimeLine/TimeLine.interfaces";
import { ParallaxImagePros } from "./ParallaxImage.models";
import {
  ParallaxImageContainer,
  ParallaxImageImg,
} from "./ParallaxImage.styles";

export const ParallaxImage = (props: ParallaxImagePros) => {
  const { src } = props;
  const events = [
    { name: "Inicio", description: "Inicia La Boda", time: "8:00 A.M" },
  ] as TLEvent[];
  return (
    <ParallaxImageContainer>
      <ParallaxImageImg src={src} />
      <TimeLine events={events} />
    </ParallaxImageContainer>
  );
};
