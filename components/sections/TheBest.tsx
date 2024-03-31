import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const TheBest: React.FC = () => (
  <Section>
    <SectionHeadline>Why you need me</SectionHeadline>

    <p>
      My tech twitter bubble allows me to always stay up-to-date with the
      technologies I use. These include{" "}
      <ExternalLink href="https://twitter.com/samselikoff">
        Sam Selikoff
      </ExternalLink>
      ,{" "}
      <ExternalLink href="https://twitter.com/devongovett">
        Devon Govett
      </ExternalLink>
      ,{" "}
      <ExternalLink href="https://twitter.com/emilkowalski_">
        Emil Kowalski
      </ExternalLink>{" "}
      and other big players in the React community. Their educational knowledge
      is gold and{" "}
      <ExternalLink href="https://buildui.com/">BuildUI</ExternalLink> was an
      instant buy. I&apos;m also often inspired by{" "}
      <ExternalLink href="https://twitter.com/jh3yy">
        Jhey Tompkins&apos;
      </ExternalLink>{" "}
      CSS content, which opens up my horizons.
    </p>

    <p>
      I have already{" "}
      <ExternalLink href="https://pokecamp.de/2016-retro">dabbled</ExternalLink>{" "}
      with Premiere Pro and After Effects and I absolutely love to cut videos
      based on their soundtrack. To learn more about After Effects would be
      super fun for me.
    </p>

    <p>
      Pixel-perfect design is a passion of mine. That is one of the reasons I
      like to use{" "}
      <ExternalLink href="https://heroicons.com/">Heroicons</ExternalLink> or{" "}
      <ExternalLink href="https://iconic.app/">Iconic</ExternalLink>. I am a
      true perfectionist, but I also know when to put something aside if the
      priorities shift. If you let me loose though, I will not rest before my
      work is perfect.
    </p>

    <p>
      Also I&apos;m a trainer certified by the{" "}
      <ExternalLink href="https://www.ihk.de/oldenburg/english-5351018">
        Chamber of Commerce and Industry
      </ExternalLink>{" "}
      since 2017. In Germany, we have something called an apprenticeship, which
      is usually a period of three years to learn a professional field. The
      trainees have to visit a professional school for one or two times a week
      and are taught in the company the rest of the time. The apprenticeship I
      train can be roughly translated to <em>Digital Media Designer</em>. So I
      already have about 7 years of experience in teaching the stuff I know in
      person.
    </p>
  </Section>
);
