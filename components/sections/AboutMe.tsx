import { ExternalLink } from "@/components/ExternalLink";
import { InternalLink } from "@/components/InternalLink";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const AboutMe: React.FC = () => (
  <Section>
    <SectionHeadline>About me</SectionHeadline>
    <p>
      Hi, my name is Fabian Bastwöste, I&apos;m 31 and I&apos;ve been a frontend
      developer for more than{" "}
      <ExternalLink href="https://en.wikipedia.org/wiki/12_Years_a_Slave_(film)">
        12 years
      </ExternalLink>
      . It&apos;s sunny outside and Easter is approaching, so I&apos;m in a good
      mood.
    </p>

    <p>
      I wanted to tell you more about my current job status, but I honestly
      can&apos;t find better words than <em>Robin Malfait</em> did in 2020, so
      I&apos;ll just quote him on this one:
    </p>

    <Quote>
      <p>
        I currently still work a full time job, and also am not actively
        searching for a job. However when I saw this job posting I <em>had</em>{" "}
        to apply since this sounds like a dream job and a once in a lifetime
        opportunity.
      </p>
      <footer className="sr-only">Quote by Robin Malfait</footer>
    </Quote>

    <p>
      Unfortunately I can&apos;t show you much of any recent public projects I
      worked on, because they are either{" "}
      <ExternalLink href="https://zentrale.crime-mails.com/login">
        hidden beneath an authentication
      </ExternalLink>{" "}
      or{" "}
      <ExternalLink href="https://www.nord-akademie.de/">so old</ExternalLink>{" "}
      that they don&apos;t reflect my current skills anymore. That&apos;s also
      the reason why I don&apos;t have a portfolio yet.
    </p>

    <p>
      At work, we are a small team of around 10 developers with the goal to
      rewrite the entire product (Saas) the company is based on in JavaScript.
      The current product was started in 2007 and is written in PHP and{" "}
      <ExternalLink href="https://twig.symfony.com/">Twig</ExternalLink>{" "}
      templates. It doesn&apos;t even use a PHP framework.
    </p>

    <p>
      The new tech stack for the rewrite that started in 2022 includes (among
      other libraries):
    </p>

    <ul className="list-disc space-y-2 pl-8 marker:text-gray-300">
      <li>
        <ExternalLink href="https://nx.dev/getting-started/intro">
          Nx
        </ExternalLink>{" "}
        workspace with{" "}
        <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://tailwindcss.com/">
          Tailwind CSS
        </ExternalLink>{" "}
        (of course)
      </li>
      <li>
        <ExternalLink href="https://react-spectrum.adobe.com/react-aria/components.html">
          React Aria Components
        </ExternalLink>{" "}
        for <InternalLink anchor="accessibility">accessibility</InternalLink>
      </li>
      <li>
        <ExternalLink href="https://www.framer.com/motion/">
          Framer Motion
        </ExternalLink>{" "}
        for <InternalLink anchor="animation">animation</InternalLink>
      </li>
    </ul>
  </Section>
);
