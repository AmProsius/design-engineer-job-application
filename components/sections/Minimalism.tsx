import { ExternalLink } from "@/components/ExternalLink";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const Minimalism: React.FC = () => (
  <Section>
    <SectionHeadline>Minimalism</SectionHeadline>

    <p>
      I know it&apos;s bold to apply for this position with a minimal job
      application (based on my{" "}
      <ExternalLink href="https://github.com/AmProsius/next-boilerplate">
        Next.js boilerplate
      </ExternalLink>
      ), but I&apos;ve heard Adam likes his readings{" "}
      <ExternalLink href="https://twitter.com/adamwathan/status/1770986699599888537">
        minimalistic
      </ExternalLink>
      . But that&apos;s just one side of the coin. After seeing the
      documentation <em>Minimalism</em> by The Minimalists on Netflix, I
      radically changed my lifestyle.
    </p>

    <Quote>
      <p>
        You can’t change the people around you, but you can change the people
        around you.
      </p>
      <footer className="mt-4">—The Minimalists</footer>
    </Quote>

    <p>
      For me, minimalism is not only about having less physical stuff, it&apos;s
      also about de-cluttering my life. I have since changed relationships,
      diets and finances. When less is more, I can focus on the important things
      and leave behind anything that blocks me in any way.
    </p>

    <p>
      Also, having less stuff makes moving a breeze. I recently moved into a new
      flat and I had no more than eight removal crates to move{" "}
      <em>all my belongings</em> (aside from furniture). I invited a friend over
      and we moved everything in four hours. That includes fixing up the
      furniture!
    </p>
  </Section>
);
