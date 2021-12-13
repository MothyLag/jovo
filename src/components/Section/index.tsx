import { SectionProps } from "./Section.props";
import { SectionContainer } from "./Section.styles";

export const Section = (props: SectionProps) => {
  const { children } = props;
  return (
    <SectionContainer
      onTouchMove={(e) => {
        console.log(e);
      }}
    >
      {children}
    </SectionContainer>
  );
};
