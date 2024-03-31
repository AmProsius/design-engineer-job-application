import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const Accessibility: React.FC = () => (
  <Section>
    <SectionHeadline id="accessibility">A11Y</SectionHeadline>

    <p>
      As I&apos;m on the{" "}
      <ExternalLink href="https://en.wikipedia.org/wiki/Autism_spectrum">
        spectrum
      </ExternalLink>
      , accessibility is a big topic for me. It&apos;s not affecting me
      directly, but I&apos;ve been in contact with people with disabilities from
      all over the world since I have been diagnosed with Asperger&apos;s in
      2021.
    </p>

    <p>
      Being on the spectrum allows me to concentrate on a single task for a long
      time, which proved very helpful in the past. I also love grammar and how{" "}
      <ExternalLink href="https://www.youtube.com/@RobWords">
        language evolves
      </ExternalLink>{" "}
      (which includes programming languages as well).
    </p>

    <p>
      When{" "}
      <ExternalLink href="https://react-spectrum.adobe.com/react-aria/components.html">
        React Aria Components
      </ExternalLink>{" "}
      became stable late last year, I immediately started migrating our existing
      components to React Aria Components, which allowed us to have a ton of
      accessibility features out of the box. I hate to admit it, but this
      library completely replaced Headless UI for us. 🙈
    </p>

    <p>
      I wanted to write blog posts along the migration process, but
      unfortunately there just wasn&apos;t enough time for that. I even started
      building{" "}
      <ExternalLink href="https://codesandbox.io/p/sandbox/rac-table-provider-typescript-p4qk54">
        minimal examples
      </ExternalLink>{" "}
      of things I discovered, but I couldn&apos;t follow up with an in-depth
      article about the challenges and gains of the whole process. There were
      definitely some interesting learnings along the way and I would love to
      tell you more about it in a personal interview.
    </p>
  </Section>
);
