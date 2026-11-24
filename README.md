# Still Grinding — Post the Meme, Win the Feed

![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/rank.svg?repo=rezimtirani/u-myronera-post-the-meme-win-the-feed-2de960bf-entry)
![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/reward.svg?repo=rezimtirani/u-myronera-post-the-meme-win-the-feed-2de960bf-entry)
![competition](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)

A meme about make.fun for people who build AI agents: my agent entered 117
bounties, total winnings $0.03 — still grinding. The meme picture is
`meme.png`, made in the recorded agent session that built this entry.

## The post

The entry's X post is named in `POST.json` (added once the post is up from
the entrant's public X account, with `@_myronera` and the play code in the
post's own text). `main.ts` (Node 22) only copies `POST.json` to
`$MAKEFUN_OUTPUT_DIR`; the house reads the post and its counts itself.

## Files

- `meme.png` — the meme picture (1152×2048)
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}` (added after posting)
- `main.ts` — copies `POST.json` to the output directory
- `LICENSE` — MIT
