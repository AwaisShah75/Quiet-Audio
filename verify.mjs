import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('public/app.js','utf8')).replace(/^import .*;$/gm,'');
const elements=new Map();const el=()=>({hidden:true,disabled:false,value:'',textContent:'',dataset:{},classList:{add(){},remove(){}},files:[]});
for(const id of ['#status','#process','#download','#file','#drop','#file-name','#player','#start','#end'])elements.set(id,el());
elements.get('#start').value='0.1';elements.get('#end').value='0.3';
let saved;const data=new Float32Array(8000).fill(.5);const buffer={numberOfChannels:1,length:8000,sampleRate:8000,duration:1,getChannelData:()=>data};
const sandbox={document:{querySelector:()=>({dataset:{tool:'trim'},querySelector:s=>elements.get(s)})},window:{addEventListener(){}},URL:{createObjectURL:b=>{saved=b;return 'blob:test';},revokeObjectURL(){}},Blob,DataView,ArrayBuffer,Float32Array,AudioContext:class{async decodeAudioData(){return buffer;}async close(){}},console};
vm.runInNewContext(source,sandbox);
elements.get('#file').onchange({target:{files:[{name:'test.wav',size:16044,arrayBuffer:async()=>new ArrayBuffer(0)}]}});
await elements.get('#process').onclick();assert.equal(saved.size,44+1600*2);const view=new DataView(await saved.arrayBuffer());assert.equal(view.getUint32(24,true),8000);assert.equal(view.getInt16(44,true),16383);assert.equal(elements.get('#download').download,'test-trim.wav');
elements.get('#end').value='0.05';await elements.get('#process').onclick();assert.match(elements.get('#status').textContent,/Choose valid times/);
for(const route of ['/','/transcribe/','/frames/','/converter/','/privacy/','/about/','/terms/']){const res=await fetch('http://127.0.0.1:4173'+route);assert.equal(res.status,200);assert.match(await res.text(),/<title>.+Quiet Audio/);}
console.log('PASS: WAV encoding, trim bounds, invalid-range handling, and nine HTTP pages.');

const transcriptionPage=await (await fetch('http://127.0.0.1:4173/transcribe/')).text();assert.match(transcriptionPage,/Urdu/);assert.match(transcriptionPage,/Hindi/);assert.match(transcriptionPage,/id="language"/);assert.match(transcriptionPage,/dir="auto"/);assert.doesNotMatch(transcriptionPage,/English speech model/);
const workerSource=(await readFile('public/transcribe-worker.js','utf8')).replace("await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1')",'mockLibrary');
for(const language of ['ur','hi','ar','']){let modelSeen,optionsSeen,disposed=false;const messages=[];const mockLibrary={env:{},pipeline:async(task,model)=>{modelSeen=model;const modelFn=async(audio,options)=>{optionsSeen=options;return {text:'نمونہ'};};modelFn.dispose=async()=>{disposed=true;};return modelFn;}};const self={postMessage:m=>messages.push(m)};vm.runInNewContext(workerSource,{self,mockLibrary});await self.onmessage({data:{audio:new Float32Array(16000),language,model:'base'}});assert.equal(modelSeen,'onnx-community/whisper-base');assert.equal(optionsSeen.task,'transcribe');assert.equal(optionsSeen.language,language||undefined);assert.equal(messages.at(-1).type,'result');assert.equal(disposed,true);}
console.log('PASS: multilingual worker routing, auto detection, language forwarding, model cleanup and RTL UI.');
