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
      for Gothic, a game which is over 20 years old. The patch has over 90k
      downloads and is the third most subscribed mod on the{" "}
      <ExternalLink href="https://steamcommunity.com/workshop/browse/?appid=65540&browsesort=totaluniquesubscribers&section=readytouseitems&actualsort=totaluniquesubscribers&p=1">
        Steam workshop
      </ExternalLink>
      . Please note that the issue tracker in the GitHub repo is used to collect
      issues of the <em>game</em>, not the <em>patch</em>. I&apos;m also
      involved in some other mods (like the Gothic Reloaded Mod, which visually
      overhauls the game) and an{" "}
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
      As I regularly participate in pen and paper events with my friends (either
      as a game master or as a player), my imagination consistently improves. We
      explore different systems and play everything from high fantasy (e.g. The
      Dark Eye) over alternative current timelines (e.g. Vampire: The Masquerade
      ) to a cyberpunk future (e.g. Shadowrun).
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
