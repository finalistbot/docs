export const links = {
  // The platform's own install route, not a hand-written Discord URL. It was
  // one: a retired application id asking for **Administrator**, which is the
  // worst possible first impression and had drifted out of sync with the bot
  // twice over. Redirecting through the backend means the client id, the
  // permission mask and the `identify` scope that records who added the bot all
  // come from one place — internal/app/comms/discord_connect.go.
  botInvite: "https://api.finalist.live/api/v1/discord/install",
  supportServer: "https://discord.gg/4u3pF8XH3W",
  github: "https://github.com/finalistbot/finalist",
  youtube: "https://www.youtube.com/@finalistbot",
  // The walkthrough video, embedded on the front page and in Getting Started.
  // The id is what <YouTubeEmbed> needs; the watch URL is for plain links.
  tutorialVideoId: "s1ULlJLspR0",
  tutorialVideo: "https://youtu.be/s1ULlJLspR0",

  // The three surfaces of the platform.
  //
  // Tagged so the platform can tell docs traffic apart from everything else.
  // The tags are read once, on landing, into a first-party cookie and then
  // dropped — see packages/app-shell/src/lib/attribution.ts in the frontend
  // repo. Without them every arrival from here counts as "referral" at best.
  web: "https://finalist.live?utm_source=docs&utm_medium=referral",
  play: "https://play.finalist.live?utm_source=docs&utm_medium=referral",
  manage: "https://app.finalist.live?utm_source=docs&utm_medium=referral",
};
