import { Section } from "components/Section";
import { InfoView } from "views/InfoView/InfoView";
import { InvitationLayout } from "./Invitation.styles";
export const Invitation = () => {
  return (
    <InvitationLayout>
      <Section>
        <InfoView />
      </Section>
      <Section>
        <InfoView />
      </Section>
    </InvitationLayout>
  );
};
