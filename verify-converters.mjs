import {spawnSync} from 'node:child_process';
import {mkdir,readFile,writeFile,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
import {audioFormats,videoFormats,conversionCommand} from './public/converter-config.js';
import {zipFiles} from './public/zip.js';
import {encodeBMP} from './public/image-codecs.js';
const base=path.resolve('fixtures/conversion-tests');await mkdir(base,{recursive:true});const input=path.resolve('fixtures/test-video.mp4');
function ff(args){const r=spawnSync('C:/ffmpeg/bin/ffmpeg.exe',['-hide_banner','-loglevel','error','-y',...args],{cwd:base,encoding:'utf8',timeout:60000});assert.equal(r.status,0,r.stderr||r.error?.message);}
for(const kind of ['audio-converter','video-converter'])for(const format of Object.keys(kind==='audio-converter'?audioFormats:videoFormats)){const c=conversionCommand(kind,format);c.args[1]=input;ff(c.args);const data=await readFile(path.join(base,'output.'+format));assert.ok(data.length>44,format+' empty');}
ff(['-f','lavfi','-i','anoisesrc=amplitude=0.02:duration=3:seed=42','noise.wav']);const noise=conversionCommand('noise','wav',{strength:'12'});noise.args[1]='noise.wav';ff(noise.args);ff(['-i','noise.wav','-f','f32le','before.raw']);ff(['-i','output.wav','-f','f32le','after.raw']);const rms=async name=>{const bytes=await readFile(path.join(base,name));const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);let sum=0,count=0;for(let i=44100*4;i<Math.min(bytes.length,2*44100*4);i+=4){sum+=view.getFloat32(i,true)**2;count++;}return Math.sqrt(sum/count);};const before=await rms('before.raw'),after=await rms('after.raw');assert.ok(after<before*.95,'Noise not reduced');console.log('Noise-only RMS reduction: '+(20*Math.log10(before/after)).toFixed(1)+' dB (synthetic fixture, not a speech quality score).');
for(const format of ['jpg','png']){const c=conversionCommand('frames',format,{frameRate:'2'});c.args[1]=input;ff(c.args);const names=(await readdir(base)).filter(name=>/^frame-[0-9]+[.](jpg|png)$/.test(name)&&name.endsWith('.'+format)).sort();assert.equal(names.length,4);const files=await Promise.all(names.map(async name=>({name,data:await readFile(path.join(base,name))})));await writeFile(path.join(base,'frames-'+format+'.zip'),new Uint8Array(await zipFiles(files).arrayBuffer()));}
const bmp=encodeBMP({width:1,height:1,data:new Uint8ClampedArray([255,0,0,255])});const b=new DataView(await bmp.arrayBuffer());assert.equal(b.getUint32(2,true),58);assert.equal(b.getUint8(56),255);await writeFile(path.join(base,'red.bmp'),new Uint8Array(await bmp.arrayBuffer()));ff(['-i','red.bmp','-frames:v','1','red.png']);
assert.throws(()=>conversionCommand('audio-converter','not-a-format'));
console.log('PASS: native FFmpeg commands for six audio and five video formats; noise attenuation; JPG/PNG frame extraction; ZIP generation; BMP encoding. Browser WASM integration still requires a browser file test.');
