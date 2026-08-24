# Screenshot shot list

Every image the docs reference exists on disk, so the site always builds. Some of those
files are still **labelled placeholders**. Replace the file at the given path, keep the
filename exactly, and the docs pick it up with no edits.

A placeholder is exactly 1280×720 and says PLACEHOLDER across the top, so
`find docs -name '*.png'` plus an image-size check tells you what's left. Real screenshots
don't have to match 1280×720, but keeping a consistent width (1280–1600) and a 16:9-ish crop
makes the pages look even.

## Still placeholders

**Needs the app, and multi-user or moderation state**

| File | Blocked on |
|------|-----------|
| `docs/players/assets/saved-game-accounts.png` | **No UI ships this yet.** Alt accounts exist only on the API (`/users/@me/game-identity/:gameId/accounts`, `/users/@me/game-accounts/:id/primary`); neither the web app nor the bot calls them, and the web `GameIdentity` type carries no `label` or `is_primary`. Profile → Identities edits a single IGN per game. Unshootable until that lands — see the note in `docs/players/account.mdx`. |

**Needs a real Discord server with the bot in it**

| File | Blocked on |
|------|-----------|
| `docs/discord/assets/welcome-card.png` | The card only fires on join — use a throwaway server. |
| `docs/discord/assets/claim-command.png` | `/claim` on an unclaimed server. |
| `docs/discord/assets/register-button.png` | A registration-open announcement in a bound channel. |
| `docs/discord/assets/room-details-reveal.png` | A slotted captain clicking reveal. |
| `docs/discord/assets/tournament-command.png` | `/tournament standings` on an event with points. |

Everything else in this file is a real screenshot.

Tips:

- Use a **dark theme**. The docs and the placeholders are dark, and the site defaults to it.
- Crop to the thing being explained. Full-desktop screenshots read as noise.
- Blur or fake any real emails, tokens, invite links and lobby passwords.
- For Discord shots, capture just the embed and the message, not the whole client.

---

## `docs/assets/`: Getting Started

| File | What to capture |
|------|-----------------|
| `setup-username.png` | The username step new accounts land on, with the live availability check visible. |
| `sign-in.png` | The sign-in page at play.finalist.live, showing the Discord, Google and email options together. |

## `docs/players/assets/`: For Players

| File | What to capture |
|------|-----------------|
| `create-team-page.png` | The Create team page: name field and the captain/join-code/scrim-ready cards. |
| `create-team.png` | The Teams page, with the Create team button. |
| `game-identities.png` | Profile → Game identities, with an IGN filled in for at least two different games. |
| `join-request.png` | A captain's view of an incoming join request, with accept and decline. |
| `join-with-code.png` | The Join with code dialog, where a player enters a team code and sends a request. |
| `notification-bell.png` | The in-app notification bell open, showing a few unread notifications. |
| `profile-page.png` | A player profile showing avatar, banner and recent scrim history. |
| `report-dialog.png` | The report dialog with the six categories listed. |
| `saved-game-accounts.png` | Game identities for one game with two saved accounts, one marked primary. |
| `team-invite-link.png` | The invite-link dialog: the member/substitute choice, max uses and expiry. |
| `team-page.png` | A team page showing the roster, the captain, and the team code. |

## `docs/scrims/assets/`: Scrims

| File | What to capture |
|------|-----------------|
| `assign-slot.png` | Assigning or swapping a team's slot by hand. |
| `chat-settings.png` | The chat settings popover: modes, slow mode, the toggles. |
| `create-preset.png` | The new-preset form, showing daily/weekly recurrence and map rotation. |
| `create-scrim.png` | The new-scrim form, showing game, mode and map selection. |
| `declare-results.png` | The declare-results confirmation, mentioning the 24-hour edit window. |
| `entry-attachments-player.png` | The file picker on a registration form, with the host's note above it. |
| `entry-evidence-review.png` | An entry's attachments as staff see them. |
| `entry-evidence-settings.png` | Entry evidence set to Required with a note written. |
| `leaderboard.png` | An organization's player or team leaderboard. |
| `preset-list.png` | A recurring schedule's page: its cadence summary, Pause/Delete, and the occurrences it generated. |
| `punish-chatter.png` | The Moderate dialog: action, duration, scope. |
| `register-lineup.png` | The registration screen: picking the lineup, each player's role, and an IGN override. |
| `results-page.png` | A completed scrim's declared results, showing placements and scores. |
| `room-details-editor.png` | The room-details editor with key/value fields, one marked secret. |
| `room-details-player.png` | Room details as a slotted captain sees them on the scrim page. |
| `room-details-publish.png` | The publish dialog: reveal now vs. schedule a reveal time. |
| `scrim-browse.png` | The scrim list on play.finalist.live, with at least one scrim open for registration. |
| `scrim-chat.png` | The chat panel on a scrim page, with a few messages and visible rank badges (organizer / player / viewer). |
| `scrim-manage.png` | A scrim's management page with the lifecycle actions (open/close registration, start, end, cancel). |
| `scrim-settings.png` | Scrim settings: max slots, substitutes, visibility, minimum lineup size, require IGN, filter timing. |
| `slotlist.png` | The slot grid for a scrim, with teams assigned to numbered slots. |
| `waitlist-manage.png` | The host's waitlist view, with promote and demote controls. |
| `waitlist.png` | A scrim's waitlist as a player sees it, with the queue order. |

## `docs/organizers/assets/`: For Organizers

| File | What to capture |
|------|-----------------|
| `create-org.png` | The create-organization form, with the name and slug fields. |
| `org-bans.png` | The organization's team and player ban lists. |
| `org-invite.png` | Inviting a member by username, with the role picker open. |
| `org-members.png` | The members list, showing owner, admin and moderator roles side by side. |
| `org-public-page.png` | The public organization page at finalist.live/o/your-slug. |
| `report-case.png` | A case detail: its filings, the target's history, the resolve controls. |
| `reports-queue.png` | The report queue with a few open cases. |

## `docs/tournaments/assets/`: Tournaments

| File | What to capture |
|------|-----------------|
| `add-stage.png` | The Add-a-stage dialog with a BR points config filled in (groups, matches per group, scoring). |
| `create-tournament.png` | The new-tournament wizard, Basics step: game, name, visibility. |
| `draw-stage.png` | The Draw dialog: random seed, schedule from, minutes between rounds. |
| `entries-panel.png` | The Entries tab with a mix of statuses and a seed set. |
| `match-results.png` | A match's result sheet: place and kills per team, before confirming. |
| `match-room-details.png` | The per-match Room details dialog, with **Publish to captains** and a reveal time. |
| `prizes-payouts.png` | The Prizes tab: rank bands above, payout sheet below. |
| `stages-panel.png` | The Stages tab with two stages, one **Drawn**, one **Not drawn**. |
| `standings.png` | A stage's standings, ideally with the qualification cut visible. |
| `submissions-queue.png` | The Submissions queue, with a captain's claim and its screenshot. |
| `tournament-enter.png` | A team entering a tournament, on the event page. |
| `tournament-entry-rules.png` | The Entry rules step: max teams, minimum lineup, require IGN, check-in toggles. |
| `tournament-list.png` | The Tournaments list on play.finalist.live, with at least one event open for entry. |
| `tournament-public-page.png` | A public tournament page at finalist.live/tournaments/p/…, showing format and stages. |

## `docs/discord/assets/`: Discord

| File | What to capture |
|------|-----------------|
| `add-app.png` | The bot's Discord profile, with the **Add App** button. |
| `claim-command.png` | The `/claim` reply: "Organization claimed", with the Open dashboard button. |
| `help-command.png` | The `/help` landing embed with its category dropdown. |
| `host-bind.png` | `/host bind`. *Currently shows the cross-org refusal; the plain success confirmation would be the better shot.* |
| `link-command.png` | The `/link` reply. *Currently shows the already-linked confirmation; the unlinked reply with the "Log in with Discord" button would be the better shot.* |
| `org-discord-settings.png` | Organization Settings → Discord on the dashboard, where a server is connected. |
| `register-button.png` | A registration-open announcement with its **Register** button, or the confirm panel it opens. |
| `room-details-announcement.png` | The room-details announcement embed with the "Reveal room details" button. |
| `room-details-reveal.png` | The private reveal a slotted captain sees after clicking the button. |
| `scrim-list-command.png` | The `/scrim list` reply. *Currently shows the empty state; a reply with scrims grouped into Live / Open / Upcoming would be the better shot.* |
| `tournament-command.png` | A `/tournament standings` reply showing a points table. |
| `welcome-card.png` | The welcome card the bot posts on join, with **Claim this server**. |

---

## Reproducing the states locally

Most shots come straight off a running local stack: the API on `:8080`, `app.finalist.live`
at `localhost:3001` and `play.finalist.live` at `localhost:3002`.

- **A scrim with real state** — create one, open registration, register a team from the play
  app, then slot it from the host's board. That single scrim covers browse, registration,
  lineup, slot board, waitlist, room details and results.
- **Entry attachments** — set Entry evidence to *Required* before opening registration. The
  host reviews them by **double-clicking the team** on the slot board → *View entry
  evidence*.
- **Tournaments** — Tournaments → New, add two stages, register a few seeded teams, close
  registration and draw the first stage. Covers every tournament shot but the public page.
- **Anything needing a second person** — chat badges, report queues, captain result
  submissions — is easier to seed straight into Postgres than to drive from a second
  browser, because `localhost:3001` and `localhost:3002` share cookies and can't hold two
  sessions at once. The rows that matter are `event_chat_messages` (`author_rank`: 0
  spectator, 1 registered, 2 slotted, 3 moderator, 4 admin), `report_cases` +
  `report_filings`, and `event_result_submissions`. A submission's `evidence_urls` renders
  as an `<img>`, so a `data:` URI works and saves fighting the object store's auth.
- **Discord shots** — need a real server with the bot in it. The welcome card only fires on
  join, so use a throwaway server.

---

## Checking your work

```bash
pnpm build
```

A missing or misnamed image **fails the build**, because Docusaurus resolves these paths at
build time. So if it builds, every image resolved.
