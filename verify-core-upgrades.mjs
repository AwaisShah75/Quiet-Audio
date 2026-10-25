import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import path from 'node:path';
import {transcriptCues,subtitleText,timecode} from './public/transcripts.js';
import {conversionCommand} from './public/converter-config.js';
import {keywordMap} from './keyword-map.mjs';
const cues=transcriptCues([{timestamp:[0,1.25],text:' Hello '},{timestamp:[1.25,3],text:'اردو'}],3);
assert.equal(cues[1].end,3);assert.match(subtitleText(cues,'srt'),/1\n00:00:00,000 --> 00:00:01,250\nHello/);assert.ok(subtitleText(cues,'vtt').startsWith('WEBVTT\n\n'));assert.equal(subtitleText(cues,'txt'),'Hello\nاردو');assert.equal(timecode(59.9996),'00:01:00,000');assert.ok(subtitleText([{start:0,end:1,text:'<b>Hi</b>'}],'vtt').includes('&lt;b&gt;'));assert.equal(transcriptCues([{timestamp:[9,10],text:'bad'}],3).length,1);
assert.throws(()=>conversionCommand('frames','jpg',{start:10,end:5}));assert.throws(()=>conversionCommand('frames','jpg',{start:0,end:31}));assert.throws(()=>conversionCommand('frames','jpg',{start:-1,end:1}));
const base=path.resolve('fixtures/core-upgrades');await mkdir(base,{recursive:true});const ff=args=>{const r=spawnSync('C:/ffmpeg/bin/ffmpeg.exe',['-hide_banner','-loglevel','error','-y',...args],{cwd:base,encoding:'utf8',timeout:60000});assert.equal(r.status,0,r.stderr||r.error?.message);};
const range=conversionCommand('frames','jpg',{start:'1',end:'2',frameRate:'2'});range.args[1]=path.resolve('fixtures/test-video.mp4');ff(range.args);const frames=(await readdir(base)).filter(f=>/^frame-\d+\.jpg$/.test(f));assert.equal(frames.length,2);
for(const learn of [true,false]){const config=conversionCommand('noise','wav',{learn,strength:'12',rumble:true});config.args[1]=path.resolve('fixtures/conversion-tests/noise.wav');ff(config.args);assert.ok((await readFile(path.join(base,'output.wav'))).length>44);}
assert.equal(new Set(keywordMap.map(k=>k.primary)).size,keywordMap.length);assert.equal(new Set(keywordMap.map(k=>k.path)).size,keywordMap.length);for(const entry of keywordMap){const html=await readFile(path.join('dist',entry.path,'index.html'),'utf8');assert.ok(html.includes('<title>'),entry.path);for(const target of entry.links)assert.ok(keywordMap.some(k=>k.path===target),'Unknown keyword-map link '+target);}
console.log('PASS: subtitle timing, UTF-8 text, markup safety, range validation, native frame range extraction, both noise profile modes and keyword ownership.');
