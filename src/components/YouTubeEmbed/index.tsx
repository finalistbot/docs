import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  // The 11-character video id, not a watch/share URL — see constants.ts.
  id: string;
  // Used as the iframe's accessible name, so it has to say what the video is.
  title: string;
};

// Responsive 16:9 YouTube embed.
//
// nocookie + loading="lazy": the player is the heaviest thing on any page that
// carries one, and it sits below the fold on both pages that use it, so it
// should not be fetched (or set a tracking cookie) for readers who never
// scroll that far.
export function YouTubeEmbed({ id, title }: Props): ReactNode {
  return (
    <div className={styles.frame}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default YouTubeEmbed;
