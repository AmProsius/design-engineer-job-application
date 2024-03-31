import { ExternalLink } from "@/components/ExternalLink";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const Beginning: React.FC = () => (
  <Section>
    <SectionHeadline>Back to the start</SectionHeadline>

    <p>
      Let&apos;s begin at how and why I ended up being where I am today. When I
      was a kid, my dad and I would build Lego figures and take photos of them.
      We then imported the photos to Photoshop 8.0, manually removed the
      background and placed the figures onto a more fitting background like a
      volcano or a jungle.
    </p>

    <Gallery />

    <p>
      In the subsequent years, I mastered Photoshop with the help of{" "}
      <ExternalLink href="https://www.youtube.com/howardpinsky">
        Howard Pinsky
      </ExternalLink>{" "}
      (formerly known as <em>Iceflow Studios</em>). This obsession helped me
      gain access to an internship at a software engineering company which
      ultimately resulted in an apprenticeship and later a permanent employment.
    </p>

    <p>
      There I learned HTML, CSS, JavaScript (or rather{" "}
      <ExternalLink href="https://jquery.com/">jQuery</ExternalLink>) and PHP
      from scratch. We later used{" "}
      <ExternalLink href="https://symfony.com/">Symfony</ExternalLink> for PHP
      development and{" "}
      <ExternalLink href="https://getbootstrap.com/">Bootstrap</ExternalLink> as
      our CSS framework. When Tailwind CSS arrived, I wasn&apos;t convinced at
      first. It felt like using inline styles (
      <span className="italic">ugh!</span>). But with the arrival of React and
      Vue, all of that changed.
    </p>

    <p>
      We started using Nuxt with{" "}
      <ExternalLink href="https://api-platform.com/">API Platform</ExternalLink>{" "}
      and quickly discovered Tailwind CSS&apos; huge potential. I then became
      kind of an upgrade specialist for migrating Bootstrap to Tailwind CSS,
      which was a lot of fun. I also tried to{" "}
      <ExternalLink href="https://github.com/twbs/bootstrap/issues/35408">
        backport
      </ExternalLink>{" "}
      some cool designs from Tailwind to Bootstrap and bring my Symfony and Nuxt
      knowledge back to Tailwind CSS (
      <ExternalLink href="https://github.com/tailwindlabs/tailwindcss.com/pull/1131">
        Symfony framework guide
      </ExternalLink>{" "}
      /{" "}
      <ExternalLink href="https://github.com/tailwindlabs/tailwindcss.com/pull/1383">
        Nuxt framework guide
      </ExternalLink>
      ) .
    </p>
  </Section>
);
