import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

export const PrivateLife: React.FC = () => (
  <Section>
    <SectionHeadline>Private life</SectionHeadline>

    <p>
      I currently live alone with my 4-year-old son visiting on the weekends.
    </p>

    <p>
      As I&apos;m a big fan of retro games, I decided to become actually
      involved and started developing an extensive{" "}
      <ExternalLink href="https://github.com/AmProsius/gothic-1-community-patch">
        patch
      </ExternalLink>{" "}
      for{" "}
      <ExternalLink href="https://www.gog.com/en/game/gothic">
        Gothic
      </ExternalLink>
      , a game that&apos;s over 20 years old (and currently 75% off, so go and
      buy it). The patch has over 90k downloads and is the third most subscribed
      mod on the{" "}
      <ExternalLink href="https://steamcommunity.com/workshop/browse/?appid=65540&browsesort=totaluniquesubscribers&section=readytouseitems&actualsort=totaluniquesubscribers&p=1">
        Steam workshop
      </ExternalLink>
      . Please note that is issue tracker is used to collect issues of the{" "}
      <em>game</em>, not the <em>patch</em>. I&apos;m also involved in some
      other mods (like the{" "}
      <ExternalLink href="https://www.gothic-reloaded-mod.org/en/">
        Gothic Reloaded Mod
      </ExternalLink>
      , which visually overhauls the game) and an{" "}
      <ExternalLink href="https://forum.worldofplayers.de/forum/threads/1574630-Release-Gothic-1-Community-Patch?p=26713410&viewfull=1#post26713410">
        active community member
      </ExternalLink>
      .
    </p>

    <p>
      To consistently improve my imagination, I regularly participate in{" "}
      <ExternalLink href="https://en.wikipedia.org/wiki/Tabletop_role-playing_game">
        pen and paper
      </ExternalLink>{" "}
      events with my friends. Everyting from high fantasy (
      <ExternalLink href="https://en.wikipedia.org/wiki/The_Dark_Eye">
        The Dark Eye
      </ExternalLink>
      ) over the current timeline (
      <ExternalLink href="https://en.wikipedia.org/wiki/Vampire:_The_Masquerade">
        Vampire: The Masquerade
      </ExternalLink>
      ) to a cyberpunk future (
      <ExternalLink href="https://en.wikipedia.org/wiki/Shadowrun">
        Shadowrun
      </ExternalLink>
      ).
    </p>

    <p>
      To focus at work, I created a{" "}
      <ExternalLink href="https://open.spotify.com/playlist/20AitWDd3aryUJKq221nhT?si=921ad85cb4354ff6">
        psychill playlist
      </ExternalLink>{" "}
      on Spotify. Try it out, if you&apos;re into electronic music!
    </p>
  </Section>
);
