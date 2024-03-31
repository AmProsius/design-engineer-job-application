import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

import principlesOfMotion from "../../public/img/principles-motion.gif";
import Image from "next/image";

export const Animation: React.FC = () => (
  <Section>
    <SectionHeadline id="animation">Animation</SectionHeadline>

    <p>
      I absolutely love{" "}
      <ExternalLink href="https://buildui.com/recipes/animated-tabs">
        little animations
      </ExternalLink>{" "}
      that enhance the user experience. It&apos;s a thin line between a joyful
      animation and a distracting animation, so I try to evaluate every
      animation I use on a project. We currently use a lot of micro-animations
      to make the page feel smoother and more app-like.
    </p>

    <p>
      At first, we used{" "}
      <ExternalLink href="https://lottiefiles.com/">LottieFiles</ExternalLink>{" "}
      for icon animation, but we soon felt it was just to big of a dependency
      for such a small use case. I then rebuilt all of the icon animations that
      were previously done in After Effects as animated SVG paths with Framer
      Motion and that was just a game changer.
    </p>

    <p>
      Also Framer Motion and React Aria Components are a really good team and
      I&apos;m looking forward to bringing this experience to Tailwind UI as
      well.
    </p>

    <figure>
      <Image
        src={principlesOfMotion}
        alt="10 principles of motion design"
        className="h-auto w-full"
      />
      <figcaption className="mt-3">
        <ExternalLink href="http://jrcanest.co/">
          10 Principles of Motion Design by Jorge R. Canedo
        </ExternalLink>
      </figcaption>
    </figure>
  </Section>
);
