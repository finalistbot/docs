import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  // Real product screenshots, required straight out of docs/ so the front page
  // can never drift from what the docs show. Re-shoot one and both update.
  image: string;
  alt: string;
  description: ReactNode;
  to: string;
  linkLabel: string;
  // Where the 16:8 crop bites. Defaults to the top, which is right for the
  // wide app screenshots; the Discord shot is tall and its embed sits lower.
  focal?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Scrims that run themselves",
    image: require("@site/docs/scrims/assets/slotlist.png").default,
    alt: "A scrim's slot board, with teams in numbered slots",
    description: (
      <>
        Set the times once. Finalist opens registration, fills slots, backfills
        the waitlist, reveals room details and closes out the scrim on schedule.
      </>
    ),
    to: "/docs/scrims/overview",
    linkLabel: "How scrims work",
  },
  {
    title: "Nobody shows up short",
    image: require("@site/docs/scrims/assets/waitlist-manage.png").default,
    alt: "The host's waitlist, with promote and demote controls",
    description: (
      <>
        Pre-match filters check every lineup before start. Missing in-game names
        and undersized rosters are removed, and waiting teams take their slots.
      </>
    ),
    to: "/docs/scrims/registrations-and-slots",
    linkLabel: "Slots and the waitlist",
  },
  {
    title: "Brackets, groups and points",
    image: require("@site/docs/tournaments/assets/standings.png").default,
    alt: "A tournament stage's standings, with the qualification cut",
    description: (
      <>
        Run something bigger than one lobby. Stages draw themselves, standings
        recompute on every confirmed match, and the qualification cut is drawn
        where everyone can see it.
      </>
    ),
    to: "/docs/tournaments/overview",
    linkLabel: "Tournaments",
  },
  {
    title: "Right there in Discord",
    image: require("@site/docs/discord/assets/room-details-announcement.png")
      .default,
    alt: "The room-details announcement embed in a Discord channel",
    description: (
      <>
        Connect a server and announcements land in your channel. Captains reveal
        their own lobby credentials, and only they can.
      </>
    ),
    to: "/docs/discord/connect-server",
    linkLabel: "Connect your server",
    focal: "center",
  },
];

function Feature({
  title,
  image,
  alt,
  description,
  to,
  linkLabel,
  focal,
}: FeatureItem) {
  return (
    <Link to={to} className={styles.card}>
        <div className={styles.shot}>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            style={focal ? { objectPosition: focal } : undefined}
          />
        </div>
        <div className={styles.cardBody}>
          <Heading as="h3" className={styles.cardTitle}>
            {title}
          </Heading>
          <p className={styles.cardText}>{description}</p>
          <span className={styles.cardLink}>{linkLabel} →</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
