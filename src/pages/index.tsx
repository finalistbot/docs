import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { links } from "@site/constants";

import styles from "./index.module.css";

// The three ways people arrive, in the order they're most common. Each lands on
// the page that actually answers "what do I do first", not on a section index.
const PATHS = [
  {
    eyebrow: "If you play",
    title: "Bring a team",
    body: "Create or join a team, then register a lineup for a scrim.",
    to: "/docs/scrims/registering",
  },
  {
    eyebrow: "If you host",
    title: "Run a scrim",
    body: "Create an organization, publish a scrim, work the slot board, declare results.",
    to: "/docs/scrims/running",
  },
  {
    eyebrow: "If you run a server",
    title: "Connect Discord",
    body: "Invite the bot and run /claim. Announcements land in your channels.",
    to: "/docs/discord/connect-server",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to={links.play}
          >
            Browse scrims
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepagePaths() {
  return (
    <section className={styles.paths}>
      <div className="container">
        <div className="row">
          {PATHS.map((path) => (
            <div className="col col--4" key={path.to}>
              <Link to={path.to} className={styles.pathCard}>
                <span className={styles.pathEyebrow}>{path.eyebrow}</span>
                <Heading as="h3" className={styles.pathTitle}>
                  {path.title}
                </Heading>
                <p className={styles.pathBody}>{path.body}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Run scrims and tournaments your community actually shows up for."
    >
      <HomepageHeader />
      <main>
        <HomepagePaths />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
