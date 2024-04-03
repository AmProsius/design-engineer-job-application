import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

import buttonGroupSvg from "../../public/img/button-group.svg";
import buttonGroupPng from "../../public/img/button-group.png";

export const TheBest: React.FC = () => (
  <Section>
    <SectionHeadline>Why you need me</SectionHeadline>

    <p>
      Pixel-perfect design is a passion of mine. That is one of the reasons I
      like to use Heroicons or Iconic. I am a true perfectionist, but I also
      know when to put something aside if the priorities shift. If you let me
      loose though, I will not rest before my work is perfect.
    </p>

    <p>
      Also I&apos;m a trainer certified by the Chamber of Commerce and Industry
      since 2017. In Germany, we have something called an apprenticeship, which
      is usually a period of three years to learn a professional field. The
      trainees have to attend a professional school once or twice a week and are
      taught in the company the rest of the time. The apprenticeship I train can
      be roughly translated to <em>Digital Media Designer</em>. So I already
      have about 7 years of experience in teaching the stuff I know in person.
    </p>

    <p>
      I have basic video editing knowledge, because I already{" "}
      <ExternalLink href="https://pokecamp.de/2016-retro">dabbled</ExternalLink>{" "}
      with Premiere Pro and After Effects and I absolutely love to cut videos
      based on their soundtrack. To learn more about After Effects would be
      super fun for me.
    </p>

    <p>
      My tech twitter bubble allows me to always stay up-to-date with the
      technologies I use. These include Sam Selikoff, Devon Govett, Emil
      Kowalski and other big players in the React community. Their educational
      knowledge is gold and BuildUI was an instant buy. I&apos;m also often
      inspired by Jhey Tompkins&apos; CSS content, which opens up my horizons.
      This is an example component which I recently developed for our rewritten
      product with cutting-edge CSS features:
    </p>

    <Image
      src={buttonGroupPng}
      alt="Button group component code"
      className="h-auto w-full sm:hidden"
    />

    <Image
      src={buttonGroupSvg}
      alt="Button group component code"
      className="h-auto w-full max-sm:hidden"
    />
  </Section>
);
