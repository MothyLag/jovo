import { InvitationLayout, ParagraphGold } from "./Invitation.styles";
import { ParallaxImage } from "../../components/ParalllaxImage/ParallaxImage";
import { TimeLineContainer } from "../../components/TimeLine/TimeLine.styles";
export const Invitation = () => {
  return (
    <InvitationLayout>
      <ParagraphGold>Fam Morales Ponce</ParagraphGold>
      <ParagraphGold>
        con la bendición de dios y en compañia de nuestros padres
      </ParagraphGold>
      <ParagraphGold>
        Angélica Alonso Martínez <br /> Tereso de Jesús Ponce Pérez
        <br />&<br />
        Nombde de la otra mamá <br /> Nombdre del otro papá
      </ParagraphGold>
      <ParagraphGold>Nosotros</ParagraphGold>
      <ParallaxImage src="/images/wedding.jpg" />
      <TimeLineContainer />
    </InvitationLayout>
  );
};
