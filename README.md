# Quiet Audio

Static, browser-local media tools for Cloudflare Pages and Vercel. No paid APIs, uploaded media, accounts or database.

## Run locally

`npm run build` then `npm run dev`. Open http://127.0.0.1:4173.

## Tools

- Audio transcription: multilingual speech-to-text, timestamp editing, TXT/SRT/VTT exports and copy.
- Video to frames: select a time range, sample JPEG/PNG frames, preview/select stills and download images or a ZIP.
- Media converter: one workspace with Audio / Video / Image mode selection. Audio: MP3/WAV/FLAC/M4A/OGG/Opus; video: MP4/WebM/MOV/MKV/GIF; images: PNG/JPG/WebP/BMP. Audio mode can extract a soundtrack from video.

Other standalone tools have been removed from the public site. Old converter URLs redirect to /converter/ with the relevant type selected.

## Processing limits

FFmpeg tools download @ffmpeg/core 0.12.10 (~31 MB) from jsDelivr on first use. The pinned @ffmpeg/ffmpeg 0.12.15 wrapper is vendored locally. Media stays on the device. Software downloads expose ordinary network information to external providers. Audio converter inputs are limited to 50 MB; video/frame inputs to 100 MB. FFmpeg processing times out after 3 minutes. Browser memory and codec compatibility impose additional limits; start with short files. Native FFmpeg and WASM do not have identical capabilities.

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

See docs/keyword-map.md for 8 acquisition-page targets, secondary phrases, search intent, editorial priority and overlap rules. keyword-map.mjs is the metadata source used during builds. Priorities are not measured keyword difficulty or search volume. No paid keyword dataset was used.

Core upgrade checks: `node verify-core-upgrades.mjs` tests subtitle formatting/timing, Unicode text, invalid time ranges, native frame extraction over a selected range, both noise profile modes and keyword ownership. Browser file tests for these upgrades remain incomplete; native FFmpeg command success does not verify WebAssembly browser execution.

### Deployment verification

After either host deploys, check /frames/, /transcribe/, /fonts/dm-sans.woff2 and /vendor/ffmpeg/worker.js. Check /image/ redirects to /image-converter/ and /video/ to /video-converter/. Unknown routes should return the custom 404 with HTTP 404. Confirm the three response headers are present. This app uses single-threaded FFmpeg and does not require cross-origin isolation headers; COOP/COEP are intentionally not enabled. No SPA catch-all rewrite is used.

Local config checks: node verify-hosting.mjs. Live hosted behavior must still be verified after deployment.

Video-to-frames now accepts inputs up to 250 MB. Frame widths: 1280, 1920 (default), 3840, or original size. The current cap is 1,000 frames and 80 MB extracted output. Large files can still exceed device memory, especially on phones.

Standalone /extract/ tool: first video audio track to MP3/WAV/FLAC/M4A/OGG/Opus. Input cap 250 MB and 20 minutes, checked using browser metadata with an FFmpeg input-metadata fallback before extraction. Processing timeout 10 minutes. These limits are ceilings, not a device-performance guarantee. Full 20-minute browser integration testing is not complete.

## Timestamp-seeking frame extractor

Frames now use browser video decoding and sequential timestamp seeking, not FFmpeg and not video playback. Default 1 fps; presets every 5 seconds / 1 / 2 / 5 fps; custom 0.01–30 fps. A live estimate blocks selections over 1,000 images. JPEG is default at 85% with a 50–100% quality slider; PNG remains available. The 250 MB input and 80 MB output caps remain. The selected range is bounded by the detected video duration rather than the old 30-second cap. Browser codec support and approximate seeking can cause repeated or slightly offset frames; no frame-exact claim is made.

Run node verify-seek-frames.mjs for count boundaries, timestamp control flow, JPEG quality, cancellation and output-budget checks. Decoder behavior in that test is simulated. Browser UI testing verified the live 600-image estimate; actual seeking accuracy, long-GOP behavior and cross-browser extraction remain unverified because browser file selection was previously declined. Before launch, test a known timestamp-burned video and compare requested/decoded frame timestamps in Chrome, Firefox, Safari and Android.

## Transcription workspace upgrade

Balanced (Whisper base) is now default; Lightweight (tiny) and a larger desktop-oriented Whisper small option are available. Small is an accuracy-oriented option, not a measured accuracy guarantee; all modes currently use WASM. Desktop small-model performance and multilingual accuracy remain unbenchmarked. The editor supports search, clickable timestamp playback, active-segment highlighting, copy and TXT/SRT/VTT exports. Cancellation terminates the worker; silent recordings are rejected before inference. An indeterminate progress indicator avoids pretending to know inference completion time.

Run node verify-transcription.mjs for model selection/timestamp/cleanup controls. Real audio/browser integration, cancellation during inference and accuracy benchmarks remain outstanding. No paid API is used. Changes are local until explicitly pushed.

Timestamp validation fix: missing model times remain blank instead of becoming zero or the full recording duration. All transcript text is retained. Start/end seconds can be edited; missing, overlapping, backward, out-of-range or sub-millisecond-invalid timelines block SRT/VTT exports while TXT remains available. Text edits do not realign speech automatically. Tests: node verify-timestamps.mjs.

Extractor duration fix: removed the failing FFprobe dependency. Browser metadata is preferred; unsupported browser containers fall back to parsing FFmpeg input inspection logs. The expected nonzero exit from input-only inspection is not treated as a conversion error. The 20-minute limit remains. Tests: node verify-media-duration.mjs; mocked engine regression tests are not a full browser-file compatibility benchmark.

Transcription progress: one monotonic overall estimate starts at 1% each run, aggregates model-file preparation progress, and advances by explicit stages. It may pause during inference because exact token/compute completion is unavailable; no timer-driven fake progress is used. Only successful editor/download preparation sets 100%. Failure and cancellation show Not completed. Regression test: node verify-progress.mjs.
