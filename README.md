# Quiet Audio

Static, browser-local media tools for Cloudflare Pages and Vercel. No paid APIs, uploaded media, accounts or database.

## Run locally

`npm run build` then `npm run dev`. Open http://127.0.0.1:4173.

## Tools

- Multilingual transcription: automatic detection / 32 language choices, tiny/base Whisper models, right-to-left editing, timestamped segments, copy text and TXT/SRT/VTT downloads. 10 minutes / 100 MB. Accuracy varies substantially.
- Audio noise reduction: FFmpeg FFT denoising with gentle/balanced/strong settings, optional low-rumble filter and learning from a noise-only first 0.5 seconds, original/processed playback, WAV output. Targets steady hiss, not every type of interference.
- Audio converter: MP3, WAV, FLAC, M4A/AAC, OGG/Vorbis, Opus. Can extract the first audio track from supported video.
- Video converter: MP4/H.264, WebM/VP8, MOV/H.264, MKV/H.264, animated GIF (no audio).
- Image converter: browser-supported inputs to PNG, JPG, WebP or BMP. Animated images become still frames; JPG/BMP flatten transparency onto white. 20 MB / 24 MP.
- Video to frames: sample any selected range up to 30 seconds at 0.2, 1, 2 or 5 fps, up to 100 JPG/PNG frames, maximum 1280 px wide; thumbnail previews, individual-image downloads and selected-image ZIP download. At most 80 MB of extracted images.
- Peak audio normalization, audio trimming, WAV conversion, volume/speed adjustment, reversal, microphone recording and WAV video audio extraction.

The former image enhancer and video adjustment pages were removed. Both platforms redirect their URLs to the respective converters. This site does not offer AI restoration or upscaling.

## Processing limits

FFmpeg tools download @ffmpeg/core 0.12.10 (~31 MB) from jsDelivr on first use. The pinned @ffmpeg/ffmpeg 0.12.15 wrapper is vendored locally. Media stays on the device. Software downloads expose ordinary network information to external providers. Audio/noise tool inputs are limited to 50 MB; video/frame inputs to 100 MB. FFmpeg processing times out after 3 minutes. Browser memory and codec compatibility impose additional limits; start with short files. Native FFmpeg and WASM do not have identical capabilities.

## Deployment: Cloudflare Pages and Vercel

The same source and dist output work on both platforms. Vercel reads root vercel.json; Cloudflare Pages reads public/_headers and public/_redirects, which the build copies to dist.

### Vercel testing

Import this repository into Vercel. Framework preset: Other; build: npm run build; output: dist. The root vercel.json supplies these settings, response headers, permanent redirects and trailing-slash URLs. Leave SITE_URL unset for a non-indexed test deployment, including tests created from main.

Vercel preview/development builds stay noindex even if SITE_URL is inherited. For an intentional public production launch, set SITE_URL only in Production and redeploy. This does not change plan eligibility; keep Hobby usage non-commercial.

### Cloudflare Pages


Connect this project to Cloudflare Pages: build `npm run build`, output `dist`. No package installation is needed for this static build. Alternatively upload dist with Direct Upload. Keep paid Workers/storage/services disabled to preserve the domain-only budget.

Set production SITE_URL to your exact HTTPS domain, e.g. https://yourdomain.com, and rebuild. This enables canonical URLs, JSON-LD and sitemap.xml. Unconfigured/preview builds are noindex. Keep SITE_URL unset in preview deployments. Cloudflare branch previews also automatically remain noindex. The production branch defaults to main; if you change it, set SITE_PRODUCTION_BRANCH to the actual production branch. Vercel uses VERCEL_ENV to distinguish production from previews.

Once public: verify domain ownership in Search Console and submit /sitemap.xml. Add real owner contact details before applying for ads. No ad code, fake publisher IDs, analytics, backlinks or outreach are included. Configure consent and update privacy disclosures before enabling ads. No ranking, ad approval or revenue timeline is guaranteed.

## Verification

- `node verify.mjs`: WAV output, trim bounds, language routing and main routes.
- `node verify-media.mjs`: normalization and pixel/dimension math.
- `node verify-converters.mjs`: uses locally installed C:/ffmpeg/bin/ffmpeg.exe and generated fixtures. Checks commands for six audio / five video formats, steady-noise attenuation, JPG/PNG frame extraction, ZIP creation and BMP encoding. This verifies native commands, not browser WASM integration.
- `node verify-seo.mjs`: sitemap coverage, unique titles, canonical URLs, JSON-LD, links, and noindex preview state. Restores a preview build afterward; rebuild with your production domain before deployment.

The image adjustment prototype was browser-tested before it was removed. Current converter/frame/noise interfaces were inspected. End-to-end browser file tests remain incomplete because a previous browser file-selection permission was declined; that action was not retried. Test actual WASM conversion, cancellation, downloads, and noise quality on target browsers before public launch.

## Open-source credits

See /third-party/ for FFmpeg wrapper/core and Whisper/Transformers.js credits and source links. FFmpeg core includes software with component-specific GPL/LGPL licenses. Review upstream source/build information before changing or redistributing the engine.

## Keyword mapping

See docs/keyword-map.md for 19 acquisition-page targets, secondary phrases, search intent, editorial priority and overlap rules. keyword-map.mjs is the metadata source used during builds. Priorities are not measured keyword difficulty or search volume. No paid keyword dataset was used.

Core upgrade checks: `node verify-core-upgrades.mjs` tests subtitle formatting/timing, Unicode text, invalid time ranges, native frame extraction over a selected range, both noise profile modes and keyword ownership. Browser file tests for these upgrades remain incomplete; native FFmpeg command success does not verify WebAssembly browser execution.

### Deployment verification

After either host deploys, check /frames/, /transcribe/, /fonts/dm-sans.woff2 and /vendor/ffmpeg/worker.js. Check /image/ redirects to /image-converter/ and /video/ to /video-converter/. Unknown routes should return the custom 404 with HTTP 404. Confirm the three response headers are present. This app uses single-threaded FFmpeg and does not require cross-origin isolation headers; COOP/COEP are intentionally not enabled. No SPA catch-all rewrite is used.

Local config checks: node verify-hosting.mjs. Live hosted behavior must still be verified after deployment.
