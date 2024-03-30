import { ExternalLink } from "@/components/ExternalLink";
import { Header } from "@/components/Header";
import { Headline } from "@/components/Headline";
import { Section } from "@/components/Section";
import { InternalLink } from "@/components/InternalLink";
import { SectionHeadline } from "@/components/SectionHeadline";
import { Gallery } from "@/components/Gallery";
import { Quote } from "@/components/Quote";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 leading-relaxed max-lg:mt-6">
        <div className="mx-auto w-full max-w-prose">
          <Headline>Your Next Design Engineer</Headline>

          <Section>
            <SectionHeadline>About me</SectionHeadline>
            <p>
              Hi, my name is Fabian Bastwöste and I&apos;ve been a Germany based
              frontend developer for more than{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/12_Years_a_Slave_(film)">
                12 years
              </ExternalLink>
              . It&apos;s sunny outside and Easter is approaching, so I&apos;m
              in a good mood.
            </p>

            <p>
              I wanted to tell you more about my current job status, but I
              honestly can&apos;t find better words than <em>Robin Malfait</em>{" "}
              did in 2020, so I&apos;ll just quote him on this one:
            </p>
            <Quote>
              <p>
                I currently still work a full time job, and also am not actively
                searching for a job. However when I saw this job posting I{" "}
                <em>had</em> to apply since this sounds like a dream job and a
                once in a lifetime opportunity.
              </p>
              <footer className="sr-only">Quote by Robin Malfait</footer>
            </Quote>
            <p>
              Unfortunately I can&apos;t show you much of any recent public
              projects I worked on, because they are either{" "}
              <ExternalLink href="https://zentrale.crime-mails.com/login">
                hidden beneath an authentication
              </ExternalLink>{" "}
              or{" "}
              <ExternalLink href="https://www.nord-akademie.de/">
                so old
              </ExternalLink>{" "}
              that they don&apos;t reflect my current skills anymore.
            </p>
            <p>
              At work, we are small team of around 10 developers with the goal
              to rewrite the entire product (Saas) the company is based on in
              JavaScript. The current product was started in 2007 and is written
              in PHP and{" "}
              <ExternalLink href="https://twig.symfony.com/">Twig</ExternalLink>{" "}
              templates. It doesn&apos;t even use a PHP framework.
            </p>
            <p>
              The new tech stack for the rewrite that started in 2022 includes
              (among other libraries):
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
                for{" "}
                <InternalLink anchor="accessibility">
                  accessibility
                </InternalLink>
              </li>
              <li>
                <ExternalLink href="https://www.framer.com/motion/">
                  Framer Motion
                </ExternalLink>{" "}
                for <InternalLink anchor="animation">animation</InternalLink>
              </li>
            </ul>
          </Section>

          <Section>
            <SectionHeadline>Back to the start</SectionHeadline>
            <p>
              Let's begin at how and why I ended up being where I am today. When
              I was a kid, my dad and I would build Lego figures and take photos
              of them. We then imported the photos to Photoshop 8.0, manually
              removed the background and placed the figures onto a more fitting
              background like a volcano or a jungle.
            </p>
            <Gallery />
            <p>
              In the subsequent years, I mastered Photoshop with the help of{" "}
              <ExternalLink href="https://www.youtube.com/howardpinsky">
                Howard Pinsky
              </ExternalLink>{" "}
              (formerly known as <em>Iceflow Studios</em>). This obsession
              helped me gain access to an internship at a software engineering
              company which ultimately resulted in a apprenticeship and later a
              permanent employment.
            </p>
            <p>
              There I learned HTML, CSS, JavaScript (or rather{" "}
              <ExternalLink href="https://jquery.com/">jQuery</ExternalLink>)
              and PHP from scratch. We later used{" "}
              <ExternalLink href="https://symfony.com/">Symfony</ExternalLink>{" "}
              for PHP development and{" "}
              <ExternalLink href="https://getbootstrap.com/">
                Bootstrap
              </ExternalLink>{" "}
              as our CSS framework. When Tailwind CSS arrived, I wasn't
              convinced at first. It felt like using inline styles (ugh!). But
              with the arrival of React and Vue, all of that changed.
            </p>
            <p>
              We started using Nuxt with{" "}
              <ExternalLink href="https://api-platform.com/">
                API Platform
              </ExternalLink>{" "}
              and quickly discovered Tailwind CSS's huge potential. I then
              became some kind of upgrade specialist for migrating Bootstrap to
              Tailwind CSS, which was a lot of fun. I also tried to{" "}
              <ExternalLink href="https://github.com/twbs/bootstrap/issues/35408">
                backport
              </ExternalLink>{" "}
              some cool things from Tailwind to Bootstrap and bring my Symfony
              and Nuxt knowledge back to Tailwind CSS (
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

          <Section>
            <SectionHeadline>Why you need me</SectionHeadline>
            <p>
              My tech twitter bubble allows to to always stay up-to-date with
              the technologies I use. These include{" "}
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
              and other big players in the React scene. Their educational
              knowledge is gold and{" "}
              <ExternalLink href="https://buildui.com/">BuildUI</ExternalLink>{" "}
              was an instant buy.
            </p>
            <p>
              I have already{" "}
              <ExternalLink href="https://pokecamp.de/2016-retro">
                dabbled
              </ExternalLink>{" "}
              with Premiere Pro and After effects and I absolutely love to cut
              videos based on their soundtrack. To learn more about After
              Effects would be super fun for me.
            </p>
            <p>
              Pixel-perfect design is a passion of mine. That is one of the
              reasons I use Heroicons btw. I am a true perfectionist, but I also
              know when to put something aside if the priorities shift. If you
              let me loose though, I will not rest before my work is perfect.
            </p>
            <p>
              Also I'm an official trainer since 2017. In Germany, we have
              something called an apprenticeship, which is usually a period of
              three years to learn a professional field. The trainees have to
              visit a professional school for one or two times a week and are
              taught in the company the rest of the time. The apprenticeship I
              train can be roughly translated to <em>Digital Media Designer</em>
              . So I already have about 7 years of experience in teaching the
              stuff I know in person.
            </p>
          </Section>

          <Section>
            <SectionHeadline>What I am most excited about</SectionHeadline>
            <p>
              This may come as a surprise, but I'm very much looking forward to
              pimp the documentation. I've always loved writing and reading
              documentations, but most of the stuff I wrote lies in company
              internal Confluence documents. The last thing I wrote and designed
              was a{" "}
              <ExternalLink href="https://storybook.js.org/">
                Storybook
              </ExternalLink>{" "}
              for our current component library which we plan to publish at some
              point.
            </p>
            <p>
              I'm also very excited about teaching the things that I will learn
              along the way. I never actually got or took the time to do it, but
              the urge is still within me. One thing I'm already good at though
              is giving{" "}
              <ExternalLink href="https://twitter.com/amprosius/status/1723394545197400340">
                honest feedback
              </ExternalLink>{" "}
              when being asked so. Gotta build that audience somehow.
            </p>
            <p>
              Can't wait to add a command palette to Catalyst, if I'm honest.
              This trend is one of the coolest trends in the last few years and
              it would be an honor to build and perfect this one for a broader
              audience.
            </p>
            <p>
              New templates for Tailwind UI are also very tempting. I already
              have a few in the back of my head and I would love to share some
              ideas in a private interview!
            </p>
            <p>
              I'm a huge fan of style guides and design systems, so naturally I
              was very excited for Tailwind UI and Catalyst. To work on either
              of those would be a dream come true.
            </p>
          </Section>

          <Section>
            <SectionHeadline id="accessibility">A11Y</SectionHeadline>
            <p>
              As I&apos;m on the{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Autism_spectrum">
                spectrum
              </ExternalLink>
              , accessibility is a big topic for me. It&apos;s not affecting me
              directly, but I&apos;ve been in contact with people with
              disabilities from all over the world since I have been diagnosed
              with Asperger&apos;s in 2021.
            </p>
            <p>
              Being on the spectrum allows me to concentrate on a single task
              for a long time, which proved very helpful in the past. I also
              love grammar and how{" "}
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
              became stable late last year, I immediately started migrating our
              existing components to React Aria Components, which allowed us to
              have a ton of accessibility features out of the box. I hate to
              admit it, but this library completely replaced Headless UI for us.
              🙈
            </p>
            <p>
              I wanted to write blog posts along the migration process, but
              unfortunately there just wasn&apos;t enough time for that. I even
              started building{" "}
              <ExternalLink href="https://codesandbox.io/p/sandbox/rac-table-provider-typescript-p4qk54">
                minimal examples
              </ExternalLink>{" "}
              of things I discovered, but I couldn&apos;t follow up with an
              in-depth article about the challenges and gains of the whole
              process. There were definitely some interesting learnings along
              the way and I would love to tell you more about it in a personal
              interview.
            </p>
          </Section>

          <Section>
            <SectionHeadline id="animation">Animation</SectionHeadline>
            <p>
              I absolutely love{" "}
              <ExternalLink href="https://buildui.com/recipes/animated-tabs">
                little animations
              </ExternalLink>{" "}
              that enhance the user experience. It's a thin line between a
              joyful animation and a distracting animation, so I try to evaluate
              every animation I use on a project. We currently use a lot of
              micro-animations to make the page feel smoother and more app-like.
            </p>
            <p>
              At first, we used{" "}
              <ExternalLink href="https://lottiefiles.com/">
                LottieFiles
              </ExternalLink>{" "}
              for icon animation, but we soon felt it was just to big of a
              dependency for such a small use case. I then rebuilt all of the
              icon animations that were previously done in After Effects as
              animated SVG paths with Framer Motion and that was just a game
              changer.
            </p>
            <p>
              Also Framer Motion and React Aria Components are a really good
              team and I'm looking forward to bringing this experience to
              Tailwind UI as well.
            </p>
          </Section>

          <Section>
            <SectionHeadline>Minimalism</SectionHeadline>
            <p>
              I know it's bold to apply for this position with a minimal job
              application (based on my{" "}
              <ExternalLink href="https://github.com/AmProsius/next-boilerplate">
                Next.js boilerplate
              </ExternalLink>
              ), but I've heard Adam likes his readings{" "}
              <ExternalLink href="https://twitter.com/adamwathan/status/1770986699599888537">
                minimalistic
              </ExternalLink>
              . But that's just one side of the coin. After seeing the
              documention <em>Minimalism</em> by{" "}
              <ExternalLink href="https://www.theminimalists.com/">
                The Minimalists
              </ExternalLink>{" "}
              on Netflix, I radically changed my lifestyle.
            </p>
            <Quote>
              <p>
                You can’t change the people around you, but you can change the
                people around you.
              </p>
              <footer className="mt-4">—The Minimalists</footer>
            </Quote>
            <p>
              For me, minimalism is not only about having less physical stuff,
              it's also about de-cluttering my life. I have since changed
              relationships, diets and finances. When less is more, I can focus
              on the important things and leave behind anything that blocks me
              in any way.
            </p>
            <p>
              Also, having less stuff makes moving a breeze. I recently moved
              into a new flat and I had no more than eight removal crates to
              move <em>all my belongings</em> (aside from furniture). I invited
              a friend over and we moved everything in four hours. That includes
              fixing up the furniture!
            </p>
          </Section>

          <Section>
            <SectionHeadline>Famous last words</SectionHeadline>
            <p>
              Congratulations for noticing the pun in the title! I knew I could
              count on you (not you,{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Jerry_Gergich">
                Garry
              </ExternalLink>
              ).
            </p>
            <p>
              And as I've learned in school: always end with a complimentary
              close:
              <br />I am looking forward to hearing from you soon!
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}
