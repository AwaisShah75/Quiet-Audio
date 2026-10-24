# Quiet Audio keyword map

Research date: 24 October 2026. English search phrases; global audience, with one Urdu-focused guide. This is an intent-based editorial map informed by current search results and the actual tools. No paid volume or difficulty dataset was used. Priorities are launch choices, not measured traffic potential.

## Page ownership

| Priority | Page | Primary keyword | Related phrases | Search intent |
|---|---|---|---|---|
| 2 | / | free online media tools | free audio video tools; browser media tools | Find a collection of utilities |
| 1 | /transcribe/ | audio to text online | free audio transcription; multilingual audio transcription; audio to SRT; audio to VTT | Transcribe speech and export text or subtitles |
| 1 | /noise/ | audio noise reduction online | reduce background noise in audio; remove hiss from audio; audio noise remover | Reduce steady noise in a recording |
| 1 | /frames/ | video to frames | extract frames from video; video to JPG frames; video to PNG frames; video frames to ZIP | Extract and select video stills |
| 2 | /audio-converter/ | audio converter online | convert audio to MP3; M4A to MP3; FLAC to MP3; audio format converter | Convert between supported audio formats |
| 2 | /video-converter/ | video converter online | convert video to MP4; WebM to MP4; MOV to MP4; video to GIF | Change video format or create a GIF |
| 2 | /image-converter/ | image converter online | PNG to JPG; JPG to PNG; WebP to PNG; image to BMP | Change a still image format |
| 2 | /extract/ | video to audio extractor | extract audio from video; MP4 to WAV; video soundtrack extractor | Save a video soundtrack as WAV |
| 2 | /convert/ | audio to WAV converter | MP3 to WAV; M4A to WAV; convert audio to WAV online | Produce uncompressed WAV specifically |
| 2 | /trim/ | audio cutter online | trim audio online; cut audio file; audio clip cutter | Keep a chosen section of audio |
| 2 | /normalize/ | audio normalizer online | peak normalize audio; normalize audio volume; WAV normalizer | Set the peak level of an entire recording |
| 2 | /volume/ | audio volume changer online | increase audio volume; lower audio volume; audio volume booster | Manually increase or decrease gain |
| 3 | /speed/ | audio speed changer online | speed up audio; slow down audio; change audio playback speed | Change recording speed with pitch change |
| 3 | /reverse/ | reverse audio online | audio reverser; play audio backwards; reverse sound file | Create a reversed audio file |
| 3 | /record/ | online voice recorder | record microphone online; browser audio recorder; record voice and download | Record microphone input and save it |
| 2 | /guides/ | audio tool guides | audio conversion help; browser transcription guides | Browse help articles |
| 1 | /guides/transcribe-urdu-audio/ | how to transcribe Urdu audio | Urdu transcription in browser; Urdu transcript accuracy; Urdu speech to text guide | Learn the Urdu transcription workflow |
| 2 | /guides/extract-audio-from-video/ | how to extract audio from video | extract video audio without uploading; MP4 audio extraction help | Learn extraction steps and compatibility limits |
| 2 | /guides/why-wav-files-are-large/ | why are WAV files so large | WAV file size calculation; WAV vs MP3 file size; does MP3 to WAV improve quality | Understand uncompressed audio size |

## Keep overlapping pages distinct

- `/audio-converter/` owns general audio format conversion; `/convert/` owns conversion specifically to WAV. Do not create separate near-identical MP3-to-WAV or M4A-to-WAV landing pages.
- `/noise/` owns steady noise reduction; `/normalize/` owns peak normalization; `/volume/` owns manual gain changes. Do not label the latter two as noise removal.
- `/frames/` owns extracting still images; `/video-converter/` owns video format changes; `/extract/` owns soundtrack extraction.
- `/transcribe/` owns transcription actions and subtitle output; the Urdu guide owns how-to questions. There is no dedicated Urdu tool page or translated UI, so no hreflang or cloned language landing pages are added.
- Homepage is a collection hub. It should link to the specific tool instead of trying to rank every tool keyword itself.

## Metadata and internal links

The machine-readable source is `keyword-map.mjs`. The build uses its titles and descriptions. Each tool should link to its relevant guides and adjacent workflow steps. Recommended link targets follow below.

- **/** → /transcribe/, /noise/, /frames/
- **/transcribe/** → /guides/transcribe-urdu-audio/, /noise/, /trim/
- **/noise/** → /normalize/, /transcribe/
- **/frames/** → /video-converter/, /image-converter/
- **/audio-converter/** → /convert/, /noise/
- **/video-converter/** → /frames/, /extract/
- **/image-converter/** → /frames/, /video-converter/
- **/extract/** → /audio-converter/, /guides/extract-audio-from-video/
- **/convert/** → /audio-converter/, /guides/why-wav-files-are-large/
- **/trim/** → /audio-converter/, /noise/
- **/normalize/** → /volume/, /noise/
- **/volume/** → /normalize/, /trim/
- **/speed/** → /trim/, /reverse/
- **/reverse/** → /speed/, /trim/
- **/record/** → /transcribe/, /noise/
- **/guides/** → /guides/transcribe-urdu-audio/, /guides/extract-audio-from-video/, /guides/why-wav-files-are-large/
- **/guides/transcribe-urdu-audio/** → /transcribe/, /noise/
- **/guides/extract-audio-from-video/** → /extract/, /audio-converter/
- **/guides/why-wav-files-are-large/** → /convert/, /audio-converter/

## Pages without acquisition keyword targets

About, Privacy, Terms and software credits support trust and legal information. Their content should remain accurate; they are not landing pages for converter keywords. Removed image/video enhancement URLs redirect to the relevant converters and are excluded from the sitemap.

## Launch and measurement

1. Configure SITE_URL and publish. Localhost cannot appear in public search.
2. Submit the sitemap in Google Search Console; inspect key pages.
3. Once data exists, review page/query pairs for impressions, clicks and intent mismatch. Fix a page when its queries show a different user need.
4. Revisit overlapping pages only if actual Search Console data indicates confusion. Multiple URLs appearing for a query is not automatically a problem.
5. Add a new page only when it solves a distinct task; no keyword stuffing, cloned format/language pages, bought links or fabricated ratings.

## Research references

- [Google: descriptive title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google: helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: crawlable links and meaningful anchor text](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Video-to-frames intent example](https://marvins.tools/video-to-frames)
- [Multilingual transcription competitor](https://turboscribe.com/speech-to-text/Urdu)
- [Speech-enhancement competitor](https://podcast.adobe.com/en/guides/what-is-enhance-speech)

Competitor pages inform intent only; no claim is made about their traffic, keyword volumes or tested output quality. Rankings are not guaranteed.
