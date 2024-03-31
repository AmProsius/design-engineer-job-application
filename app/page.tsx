import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Headline } from "@/components/Headline";
import { AboutMe } from "@/components/sections/AboutMe";
import { Accessibility } from "@/components/sections/Accessibility";
import { Animation } from "@/components/sections/Animation";
import { Beginning } from "@/components/sections/Beginning";
import { Excited } from "@/components/sections/Excited";
import { LastWords } from "@/components/sections/LastWords";
import { Minimalism } from "@/components/sections/Minimalism";
import { PrivateLife } from "@/components/sections/PrivateLife";
import { TheBest } from "@/components/sections/TheBest";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 leading-relaxed max-lg:mt-6">
        <div className="mx-auto w-full max-w-prose">
          <Headline>Your Next Design Engineer</Headline>

          <AboutMe />
          <Beginning />
          <TheBest />
          <Excited />
          <Accessibility />
          <Animation />
          <Minimalism />
          <PrivateLife />
          <LastWords />
        </div>
      </main>

      <Footer />
    </>
  );
}
