export const links = {
  botInvite:
    "https://discord.com/api/oauth2/authorize?client_id=1125186342035734096&permissions=8&scope=bot%20applications.commands",
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
