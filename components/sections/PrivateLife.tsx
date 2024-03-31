import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { SectionHeadline } from "@/components/SectionHeadline";

import gothicLogo from "../../public/img/logo-gothic.png";

export const PrivateLife: React.FC = () => (
  <Section>
    <SectionHeadline>Private life</SectionHeadline>

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
      , a game which is over 20 years old (and currently 75% off, so go and buy
      it). The patch has over 90k downloads and is the third most subscribed mod
      on the{" "}
      <ExternalLink href="https://steamcommunity.com/workshop/browse/?appid=65540&browsesort=totaluniquesubscribers&section=readytouseitems&actualsort=totaluniquesubscribers&p=1">
        Steam workshop
      </ExternalLink>
      . Please note that the issue tracker is used to collect issues of the{" "}
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

    <Image
      src={gothicLogo}
      alt="Gothic 1 Community Patch logo"
      className="mx-auto h-48 w-auto"
    />

    <p>
      As I regularly participate in{" "}
      <ExternalLink href="https://en.wikipedia.org/wiki/Tabletop_role-playing_game">
        pen and paper
      </ExternalLink>{" "}
      events with my friends (either as a game master or as a player), my
      imagination consistently improves. We play everything from high fantasy (
      <ExternalLink href="https://en.wikipedia.org/wiki/The_Dark_Eye">
        The Dark Eye
      </ExternalLink>
      ,{" "}
      <ExternalLink href="https://rtalsoriangames.com/witcher-trpg/">
        The Witcher
      </ExternalLink>
      ) over alternative current timelines (e.g.
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
