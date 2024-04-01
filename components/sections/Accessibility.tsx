import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const Accessibility: React.FC = () => (
  <Section>
    <SectionHeadline id="accessibility">Accessibility</SectionHeadline>

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
      time, which proved very helpful in the past. I also love grammar and how
      languages evolve (that includes programming languages as well). RobWords
      is a fantastic YouTube channel in that regard.
    </p>

    <p>
      When React Aria Components became stable late last year, I immediately
      started migrating our existing components to React Aria Components, which
      allowed us to have a ton of accessibility features out of the box. I hate
      to admit it, but this library completely replaced Headless UI for us. 🙈
    </p>

    <p>
      I planned to write blog posts along the migration process and even started
      building{" "}
      <ExternalLink href="https://codesandbox.io/p/sandbox/rac-table-provider-typescript-p4qk54">
        minimal examples
      </ExternalLink>{" "}
      of things I discovered, but I couldn&apos;t yet follow up with an in-depth
      article about the challenges and gains of the whole process. I&apos;m also
      not afraid to{" "}
      <ExternalLink href="https://stackoverflow.com/questions/77806380/how-can-i-correctly-set-the-type-of-a-value-in-the-onchange-method-in-react-with">
        ask
      </ExternalLink>{" "}
      if I really can&apos;t find a solution for my problem. There were
      definitely some interesting learnings along the way and I would love to
      tell you more about it in a personal interview.
    </p>
  </Section>
);
