import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

import tailwindCssLogo from "../../public/img/logo-tailwindcss.svg";
import Image from "next/image";

export const Excited: React.FC = () => (
  <Section>
    <SectionHeadline>What I am most excited about</SectionHeadline>

    <p>
      This may come as a surprise, but I&apos;m very much looking forward to
      pimp the documentation. I&apos;ve always loved writing and reading
      documentations, but most of the stuff I wrote lies in company internal
      Confluence documents. The last thing I worked on was a{" "}
      <ExternalLink href="https://storybook.js.org/">Storybook</ExternalLink>{" "}
      for our current component library which we plan to publish at some point.
    </p>

    <p>
      I&apos;m also very excited about teaching the things that I will learn
      along the way. That is the reason why I became a trainer in the first
      place. Additionally I like to provide{" "}
      <ExternalLink href="https://twitter.com/amprosius/status/1723394545197400340">
        honest feedback
      </ExternalLink>{" "}
      when being asked to. This helps others (as well as me) to become better at
      what they do.
    </p>

    <p>
      Can&apos;t wait to add a command palette to Catalyst, honestly. I&apos;ve
      been excited about building an accessible command palette since I saw
      Simon&apos;s{" "}
      <ExternalLink href="https://www.youtube.com/watch?v=-jix4KyxLuQ">
        YouTube video
      </ExternalLink>{" "}
      two years ago and it would be an honor to build and perfect this one for a
      broader audience.
    </p>

    <p>
      New templates for Tailwind UI are also very tempting. I already have a few
      ideas in the back of my head (like a comparison portal template for
      example) and I would love to share them in a private interview!
    </p>

    <p>
      I&apos;m a huge fan of style guides and design systems, so naturally I was
      very excited for Tailwind UI and Catalyst. To work on either of those
      would be a dream come true. We could set up Storybook for a quick
      component overview. We can add new components like tags and tag groups.
      The possibilities are endless.
    </p>

    <Image src={tailwindCssLogo} alt="Tailwind CSS logo" className="mx-auto" />
  </Section>
);
