import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const Animation: React.FC = () => (
  <Section>
    <SectionHeadline id="animation">Animation</SectionHeadline>

    <p>
      I absolutely love little animations that enhance the user experience.
      It&apos;s a thin line between a joyful animation and a distracting
      animation, so I try to evaluate every animation I use on a project. We
      currently use a lot of micro-animations to make the page feel smoother and
      more app-like.
    </p>

    <p>
      At first, we used LottieFiles for icon animation, but we soon felt it was
      just to big of a dependency for such a small use case. I then rebuilt all
      of the icon animations that were previously done in After Effects as
      animated SVG paths with Framer Motion and that was just a game changer.
    </p>

    <p>
      React Aria Components have really great examples with Framer Motion and
      I&apos;m looking forward to bringing this experience to Tailwind UI as
      well.
    </p>
  </Section>
);
