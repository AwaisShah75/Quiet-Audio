const paths={
frames:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
noise:'<path d="M3 10v4m4-8v12m5-15v18m5-15v12m4-8v4"/><path d="m3 3 18 18"/>',
'audio-converter':'<path d="M4 7h14m-3-3 3 3-3 3M20 17H6m3-3-3 3 3 3"/><path d="M3 11v2m18-2v2"/>',
'video-converter':'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4Z"/>',
'image-converter':'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m4 17 5-5 4 4 3-3 5 5"/>',
normalize:'<path d="M4 7h16M4 17h16M7 10v4m5-8v12m5-8v4"/>',
transcribe:'<path d="M4 8v8m4-11v14m4-9v4M16 7h5m-5 5h5m-5 5h3"/>',
extract:'<rect x="3" y="3" width="13" height="11" rx="2"/><path d="m8 6 4 2.5L8 11Z M16 16v4m-3-1 3 3 3-3M6 18v3m-3-2v1m6-4v5"/>',
trim:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m8.2 8.2 12 12m-12-4.4L20 4M14 10l-4 4"/>',
convert:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z M14 3v6h6M7 14v3m4-5v7m4-5v3"/>',
volume:'<path d="m11 4-5 4H3v8h3l5 4ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
speed:'<path d="M4 17a9 9 0 1 1 16 0M12 13l5-5M4 17h4m8 0h4"/><circle cx="12" cy="14" r="2"/>',
reverse:'<path d="M4 9h10a6 6 0 0 1 0 12h-3M8 4 3 9l5 5"/>',
record:'<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 11v1a7 7 0 0 0 14 0v-1M12 19v3m-4 0h8"/>',
arrow:'<path d="M6 18 18 6M6 6h12v12"/>',
back:'<path d="M20 12H4m6-6-6 6 6 6"/>',
down:'<path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4"/>',
logo:'<path d="M3 10v4m4-7v10m5-14v18m5-15v12m4-8v4"/>'};
export function icon(name){return `<svg class="icon icon-${name}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]||paths.logo}</svg>`;}
export function decorate(body){return body.replaceAll('↗',icon('arrow')).replaceAll('←',icon('back')).replaceAll('↓',icon('down'));}
