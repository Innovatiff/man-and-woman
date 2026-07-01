import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const pages = [];
function walk(dir){
  for(const e of readdirSync(dir)){
    const p = join(dir,e);
    if(statSync(p).isDirectory()) walk(p);
    else if(e === 'index.html' || (e.endsWith('.html'))) pages.push(p);
  }
}
walk(root);

function mainText(html){
  let m = html.indexOf('<main');
  let end = html.indexOf('</main>');
  let seg = (m>=0 && end>m) ? html.slice(m, end) : html;
  seg = seg.replace(/<script[\s\S]*?<\/script>/gi,' ')
           .replace(/<style[\s\S]*?<\/style>/gi,' ')
           .replace(/<[^>]+>/g,' ')
           .replace(/&[a-z]+;/gi,' ')
           .replace(/\s+/g,' ').trim();
  return seg;
}

const rows = pages.map(p=>{
  const html = readFileSync(p,'utf8');
  const text = mainText(html);
  const words = text ? text.split(' ').filter(Boolean).length : 0;
  const url = '/' + p.replace(/^dist\//,'').replace(/index\.html$/,'').replace(/\.html$/,'');
  const type = url.startsWith('/insights/') ? 'insight'
    : ['/','/explore/','/about/','/contact/','/privacy-policy/','/terms/','/disclaimer/','/research-methodology/','/data-sources/','/404/'].includes(url) ? 'core'
    : 'category';
  return {url, type, words};
}).sort((a,b)=>a.words-b.words);

const byType = {};
for(const r of rows){ (byType[r.type]??=[]).push(r.words); }
console.log('Total pages:', rows.length);
for(const [t,arr] of Object.entries(byType)){
  arr.sort((a,b)=>a-b);
  const sum=arr.reduce((s,x)=>s+x,0);
  console.log(`\n[${t}] count=${arr.length}  min=${arr[0]}  median=${arr[Math.floor(arr.length/2)]}  avg=${Math.round(sum/arr.length)}  max=${arr[arr.length-1]}`);
}
console.log('\n=== THIN pages (<400 words in main content) ===');
const thin = rows.filter(r=>r.words<400 && r.type!=='core' || (r.type==='core' && r.words<250));
if(!thin.length) console.log('  none');
for(const r of thin) console.log(`  ${String(r.words).padStart(4)}  [${r.type}]  ${r.url}`);
console.log('\n=== 15 lowest overall ===');
for(const r of rows.slice(0,15)) console.log(`  ${String(r.words).padStart(4)}  [${r.type}]  ${r.url}`);
