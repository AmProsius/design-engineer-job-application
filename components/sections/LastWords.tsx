import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const LastWords: React.FC = () => (
  <Section>
    <SectionHeadline>Last words</SectionHeadline>

    <p>
      Congratulations for noticing the pun in the title! I knew I could count on
      you (not you,{" "}
      <ExternalLink href="https://en.wikipedia.org/wiki/Jerry_Gergich">
        Garry
      </ExternalLink>
      ).
    </p>

    <p>
      And as I&apos;ve learned in school: always end with a complimentary close:
      <br />I am looking forward to hearing from you soon!
    </p>
  </Section>
);
