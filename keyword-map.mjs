export const keywordMap=[
  {
    "path": "/",
    "type": "hub",
    "priority": 2,
    "primary": "free online media tools",
    "secondary": [
      "free audio video tools",
      "browser media tools"
    ],
    "intent": "Find a collection of utilities",
    "title": "Free Online Media Tools — Audio, Images & Video",
    "description": "Free browser tools for transcription, video frames, soundtrack extraction and media conversion.",
    "links": [
      "/transcribe/",
      "/converter/",
      "/frames/"
    ]
  },
  {
    "path": "/transcribe/",
    "type": "tool",
    "priority": 1,
    "primary": "audio to text online",
    "secondary": [
      "free audio transcription",
      "multilingual audio transcription",
      "audio to SRT",
      "audio to VTT"
    ],
    "intent": "Transcribe speech and export text or subtitles",
    "title": "Audio to Text Online — Free Transcript & Subtitle Tool",
    "description": "Transcribe audio locally in multiple languages. Edit timestamped segments and export TXT, SRT or VTT. No account required.",
    "links": [
      "/guides/transcribe-urdu-audio/",
      "/converter/"
    ]
  },
  {
    "path": "/frames/",
    "type": "tool",
    "priority": 1,
    "primary": "video to frames",
    "secondary": [
      "extract frames from video",
      "video to JPG frames",
      "video to PNG frames",
      "video frames to ZIP"
    ],
    "intent": "Extract and select video stills",
    "title": "Video to Frames — Extract JPG & PNG Images Online",
    "description": "Choose a video time range and frame rate, preview JPG or PNG stills, and download individual images or selected frames as a ZIP.",
    "links": [
      "/converter/"
    ]
  },
  {
    "path": "/guides/",
    "type": "hub",
    "priority": 2,
    "primary": "audio tool guides",
    "secondary": [
      "audio conversion help",
      "browser transcription guides"
    ],
    "intent": "Browse help articles",
    "title": "Audio Guides — Transcription, Extraction & WAV Files",
    "description": "Practical guides to private transcription, video audio extraction and WAV file sizes.",
    "links": [
      "/guides/transcribe-urdu-audio/",
      "/guides/extract-audio-from-video/",
      "/guides/why-wav-files-are-large/"
    ]
  },
  {
    "path": "/guides/transcribe-urdu-audio/",
    "type": "guide",
    "priority": 1,
    "primary": "how to transcribe Urdu audio",
    "secondary": [
      "Urdu transcription in browser",
      "Urdu transcript accuracy",
      "Urdu speech to text guide"
    ],
    "intent": "Learn the Urdu transcription workflow",
    "title": "How to Transcribe Urdu Audio in Your Browser",
    "description": "Choose Urdu, compare local speech models, and review right-to-left transcripts. Learn the limits of small multilingual models.",
    "links": [
      "/transcribe/",
      "/converter/"
    ]
  },
  {
    "path": "/guides/extract-audio-from-video/",
    "type": "guide",
    "priority": 2,
    "primary": "how to extract audio from video",
    "secondary": [
      "extract video audio without uploading",
      "MP4 audio extraction help"
    ],
    "intent": "Learn extraction steps and compatibility limits",
    "title": "How to Extract Audio from Video Without Uploading",
    "description": "Extract browser-supported video audio as WAV, troubleshoot codec errors, and choose what to do with the result.",
    "links": [
      "/converter/"
    ]
  },
  {
    "path": "/guides/why-wav-files-are-large/",
    "type": "guide",
    "priority": 2,
    "primary": "why are WAV files so large",
    "secondary": [
      "WAV file size calculation",
      "WAV vs MP3 file size",
      "does MP3 to WAV improve quality"
    ],
    "intent": "Understand uncompressed audio size",
    "title": "Why WAV Files Are Larger Than MP3",
    "description": "Understand 16-bit WAV file size with a worked example, and learn when to use compressed audio for smaller downloads.",
    "links": [
      "/converter/"
    ]
  },
  {
    "path": "/converter/",
    "type": "tool",
    "priority": 1,
    "primary": "media converter online",
    "secondary": [
      "audio converter online",
      "video converter online",
      "image converter online"
    ],
    "intent": "Choose a media type and convert its format",
    "title": "Media Converter — Audio, Video & Images Online",
    "description": "Convert audio, video and images locally. Choose MP3, WAV, FLAC, MP4, WebM, MOV, PNG, JPG, WebP and more in one converter.",
    "links": [
      "/frames/",
      "/transcribe/",
      "/guides/why-wav-files-are-large/"
    ]
  },
  {
    "path": "/extract/",
    "type": "tool",
    "priority": 1,
    "primary": "extract audio from video",
    "secondary": [
      "video to audio",
      "video to MP3",
      "extract soundtrack"
    ],
    "intent": "Save the first audio track from a video",
    "title": "Extract Audio from Video — MP3, WAV & More",
    "description": "Extract a video soundtrack locally and save it as MP3, WAV, FLAC, M4A, OGG or Opus. No signup or file upload required.",
    "links": [
      "/converter/",
      "/frames/"
    ]
  }
];
