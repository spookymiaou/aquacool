(()=>{
const H=144,WW=512,SAND=118;const isPhone=()=>innerWidth<760;function calcW(){return Math.round(Math.max(92,Math.min(420,144*innerWidth/innerHeight)))}let W=calcW();let VH=H,OY=0,FY=3;function calcVH(){VH=Math.min(300,Math.max(H,Math.round(W*innerHeight/innerWidth))),OY=Math.round((VH-H)*.6);FY=3-OY+Math.min(OY,16)}calcVH();
const P={k:'#4a4266',nv:'#8796cc',pu:'#c99ad6',dg:'#7cc9a2',br:'#d9a888',dk:'#a59fb8',lg:'#e2e0ee',wh:'#fffaf0',rd:'#ff9eb5',or:'#ffc79e',ye:'#fff0a0',gr:'#aeeac0',bl:'#9fd8f5',la:'#c7b8e6',pk:'#ffb8d9',pe:'#ffe2cf'};
const OUT='#5b5580';
const $=s=>document.querySelector(s);
const rand=(a,b)=>a+Math.random()*(b-a);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function hash(s){let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function shuffle(a,r=Math.random){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const pick=(a,r=Math.random)=>a[Math.floor(r()*a.length)];
function hx(c){return [1,3,5].map(i=>parseInt(c.slice(i,i+2),16))}
function mix(a,b,t){const A=hx(a),B=hx(b);return 'rgb('+A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')+')'}
const dkey=d=>d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
function moonPhase(d){const syn=29.530588853,ref=Date.UTC(2000,0,6,18,14);let p=(((d.getTime()-ref)/864e5)%syn)/syn;return p<0?p+1:p}
const isFullMoon=d=>Math.abs(moonPhase(d)-.5)<.034;
const hr=n=>n.getHours();

/* ================= SPRITES ================= */
const SHAPES={
small:["....ddd...","..bbbbbb..","f.bbbbbbb.","ffbbbbbwkb","ffbbbbbbbb","f.lllllll.","...llll..."],
long:["......ddd....","...bbbbbbbb..","ff.bbbbbbbbb.","fffbbbbbbbwkb","ff.lllllllll.","....lllllll.."],
round:[".....dd....","....dbbd...","f..bbbbbbb.","ffbbbbbbwkb","ffbbbbbbbbb","f..lllllll.","....lbbl...",".....dd...."],
clown:[".....dd.....","...bsbbsbb..","f.bbsbbsbbb.","ffbbsbbsbwkb","ffbbsbbsbbbb","f.llsllslll.","....lsll...."],
angel:["......d....",".....dd....","....dbbd...","f..bsbbsb..","ffbbsbbsbwk","f..bsbbsbbb","....lsll...",".....ll....","......l....","......l...."],
betta:["..dddd.......","ffddbbbbbb...","fffbbbbbbbbwk","ffffbbbbbbbbb","fffbllllllbb.","ff..fff......","f...ff......."],
puffer:["...d.d.d...","..bbbbbbb..","fbsbbsbbbb.","fbbbbbbbwkb","fbbsbbsbbbb","..lllllll..","...d.d.d..."],
seahorse:["..dd...",".bbbb..",".bwkbbb","..bbb..",".dbbl..","dbbbl..",".dbbl..","..bbl..","...bl..","..bb...","..b.b..","...b..."],
jelly:["...bbbb...",".bbbbbbbb.","bblllbbbbb","bbwkbbwkbb","bbbbbbbbbb",".f.f..f.f.",".f..f.f..f","f..f..f.f.",".f.f...f.."],
lantern:["........y.",".......d..","......d...","...dddd...","fbbbbbbbb.","ffbbbbbwkb","fbblllllb.","...dd....."],
ray:[".......dd.......",".....bbbbbb.....","...bbbbbbbbbb...","ffbbbbbbbbbwkbbb","...llllllllll...",".....llllll.....",".......ll......."],
eel:["...ddddddddddd...","fbbbbbbbbbbbbbbb.","fbsbbbsbbbsbbbwkb",".llllllllllllll.."],
koi:[".......ddd.....","....bbbbbbbb...","ff.bbsbsbbbbb..","fffbsbsbbbbbwkb","fffbbbbbsbbbbbb","ff..lllllllll..",".....lllllll..."],
whale:["..........dd........",".....bbbbbbbbbb.....","f..bbbbbbbbbbbbbb...","ffbbbbbbbbbbbbbbbb..","ffbbbbbbbbbbbbbwkbb.","f..bbbbbbbbbbbbbbbb.","...lllllllllllllll..",".....llllllllll....."],
dragon:["...d..d..d..d.....","..bbbbbbbbbbbbbb..","fbbbbbbbbbbbbbbwkb","ffbsbsbsbsbsbbbbbd","fbbbbbbbbbbbbbbbb.","..llllllllllllll..","...d...d....d....."],
shark:["..........d.........",".........dd.........","......bbbbbbbbb.....","f...bbsbbbsbbbsbb...","ffbbbbbbbbbbbbbbwkb.","f..lllllllllllllllbb","....llll.d..lllll..."],
hammer:["..........d......bb",".........dd......bb","......bbbbbbbbbbbbb","f...bbbbbbbbbbbbbwk","ffbbbbbbbbbbbbbbbbb","f..lllllllllllllbbb","....ll.d...lll...bb"],
hermit:["..sss.....",".sssss..k.","ssdsdss.b.","sssssssbb.",".sssssbbbb","..b.b.b.b."],
crab:["b.......b","bb.k.k.bb",".bbbbbbb.","bbbbbbbbb",".lllllll.","b.b...b.b"],
shrimp:[".......dd..","........d.k","f....bbbbbb","ffbbbbsbsbb","f.lllllll..","..l.l.l.l.."],
turtle:["....dddd......","..ddsdsddd....",".dssdssdsd.bbb","bdddddddddbbwk","..b......b.bb.",".bb......bb..."],
octo:["..bbbbb..",".bbbbbbb.","bbwkbwkbb","bbbbbbbbb",".bllbllb.","b.b.b.b.b","b.b.b.b.b",".b.b.b.b."],
axolotl:[".......s.s.","......sbbbs","f.bbbbbbwkb","ffbbbbbbbbs","f.lllllllb.","..b..b....."],
catfish:[".......d.d...","......ddddd..","f..bbbbbbbb..","ffbbbbbbbbwkb","ffbbbbbbbbbbm","f..lllllllbm.","..........m.m"],
flounder:["....dddddd....","..bbbbsbbbbb..","fbbsbbbbbswkb.","ffbbbbbsbbbbbb","fbllllllllllb.","..dddddddd...."],
mola:["....d.....","...ddd....","..bbbbbb..",".bbbbbbbb.","fbbbbbbwkb","fbbbbbbbbb","fbllllllbb",".bllllllb.","..lllll...","...ddd....","....d....."],
blob:["...bbbb...",".bbbbbbbb.","bbbwkbwkbb","bbbbbbbbbb","fbbblllbbb",".bbbbbbbb."],
snail:["...sss.....","..sdssss...",".ssdsdsss.k",".sssdsss..b",".sssssssbbb","bbbbbbbbbb."],
lobster:["bb.........bb","b.b.......b.b","..bb.k.k.bb..","...bbbbbbb...","..bbbbbbbbb..","...lllllll...","..b.b.b.b.b.."],
nudi:[".s.s.s.s..s.","sbsbsbsbs.bk","bbbbbbbbbbbb",".llllllllll."],
urchin:["s.s.s.s",".bbbbb.","sbwkwks",".bbbbb.","s.s.s.s"],
starfish:["...b...","...b...","bbwkwkb",".bbbbb.","..b.b..",".b...b."],
dolphin:["........d.......",".......dd.......","....bbbbbbbb....","f.bbbbbbbbbbbb..","ffbbbbbbbbbbwkb.","f.llllllllllllbb","....lll.d.lll..."],
narwhal:["..........dd..........",".....bbbbbbbbbb.......","f..bbbbbbbbbbbbbbsssss","ffbbbbbbbbbbbbbwkb....","ffbbbbbbbbbbbbbbbb....","f..bbbbbbbbbbbbbbb....","...lllllllllllllll....",".....llllllllll......."],
swordfish:["......d..........",".....dd..........","f..bbbbbbbb......","ffbbbbbbbbwkbssss","f..lllllllll....."],
squid:["ff.......bb.","fff.bbbbbbbb","ffbbbbbbbbwk","fff.bbbbbbbb","ff.......bb."]
};
const ANIM={jelly:'wave',octo:'wave',hermit:'legs',crab:'legs',turtle:'legs',seahorse:'none',snail:'legs',lobster:'legs',nudi:'legs',urchin:'legs',starfish:'legs'};
function frame2(sh){const rows=SHAPES[sh],a=ANIM[sh]||'tail',h=rows.length,w=Math.max(...rows.map(r=>r.length));const g=rows.map(r=>r.padEnd(w,'.').split(''));
 if(a==='legs'){g[h-1]=['.',...g[h-1].slice(0,w-1)]}
 else if(a==='wave'){for(let j=Math.floor(h*.6);j<h;j++)g[j]=j%2?[...g[j].slice(1),'.']:['.',...g[j].slice(0,w-1)]}
 else if(a==='tail'){const mid=(h-1)/2,lim=Math.ceil(w*.3),fs=[];for(let j=0;j<h;j++)for(let i=0;i<lim;i++)if(g[j][i]==='f'){fs.push([i,j]);g[j][i]='.'}
  for(const [i,j] of fs){const nj=j<mid?j+1:j>mid?j-1:j;if(g[nj][i]==='.')g[nj][i]='f'}}
 return g.map(r=>r.join(''))}
const FIX={w:P.wh,k:P.k,y:P.ye};
function build(rows,colorOf,ol=OUT){const pd=ol?1:0,w=Math.max(...rows.map(r=>r.length)),h=rows.length;const c=document.createElement('canvas');c.width=w+pd*2;c.height=h+pd*2;const x=c.getContext('2d');
 const px=[];rows.forEach((r,j)=>[...r].forEach((ch,i)=>{if(ch==='.'||ch===' ')return;const col=colorOf(ch);if(col)px.push([i+pd,j+pd,col])}));
 if(ol){x.fillStyle=ol;for(const [i,j] of px){x.fillRect(i-1,j,1,1);x.fillRect(i+1,j,1,1);x.fillRect(i,j-1,1,1);x.fillRect(i,j+1,1,1)}}
 for(const [i,j,col] of px){x.fillStyle=col;x.fillRect(i,j,1,1)}return c}

function upscale(g,f){const h=g.length,w=g[0].length,o=Array.from({length:h*f},()=>new Array(w*f).fill(null));const at=(x,y)=>(x<0||y<0||x>=w||y>=h)?null:g[y][x];
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const E=g[y][x],A=at(x-1,y-1),B=at(x,y-1),C=at(x+1,y-1),D=at(x-1,y),F_=at(x+1,y),G=at(x-1,y+1),H_=at(x,y+1),I=at(x+1,y+1);let r;
  if(f===2){r=[(D===B&&B!==F_&&D!==H_)?D:E,(B===F_&&B!==D&&F_!==H_)?F_:E,(D===H_&&D!==B&&H_!==F_)?D:E,(H_===F_&&D!==H_&&B!==F_)?F_:E]}
  else{const c1=D===B&&D!==H_&&B!==F_,c2=B===F_&&B!==D&&F_!==H_,c3=D===H_&&D!==B&&H_!==F_,c4=H_===F_&&D!==H_&&B!==F_;
   r=[c1?D:E,(c1&&E!==C)||(c2&&E!==A)?B:E,c2?F_:E,(c1&&E!==G)||(c3&&E!==A)?D:E,E,(c2&&E!==I)||(c4&&E!==C)?F_:E,c3?D:E,(c3&&E!==I)||(c4&&E!==G)?H_:E,c4?F_:E]}
  for(let j=0;j<f;j++)for(let i=0;i<f;i++)o[y*f+j][x*f+i]=r[j*f+i]}return o}
const _tc={};function shadeC(c,k){const key=c+k;if(_tc[key])return _tc[key];if(c[0]!=='#'||c.length!==7)return c;const a=hx(c),r=k>0?a.map(v=>Math.round(v+(255-v)*k)):a.map(v=>Math.round(v*(1+k)));return _tc[key]='#'+r.map(v=>v.toString(16).padStart(2,'0')).join('')}
function outC(c,ol){const key='o'+c+ol;if(_tc[key])return _tc[key];if(c[0]!=='#'||c.length!==7)return ol;const a=hx(shadeC(c,-.5)),b=hx(ol);return _tc[key]='#'+a.map((v,i)=>Math.round(v*.55+b[i]*.45).toString(16).padStart(2,'0')).join('')}
function buildHD(rows,colorOf,ol=OUT,steps=[2,2],post=null){const w=Math.max(...rows.map(r=>r.length));let g=rows.map(r=>[...r.padEnd(w,'.')].map(ch=>ch==='.'||ch===' '?null:(colorOf(ch)||null)));
 for(const f of steps)g=upscale(g,f);const pd=ol?1:0,H2=g.length,W2=g[0].length,c=document.createElement('canvas');c.width=W2+pd*2;c.height=H2+pd*2;const x=c.getContext('2d');
 let gs=g;if(ol){gs=g.map(r=>r.slice());const sc2=steps.reduce((a,b)=>a*b,1);
  for(let i=0;i<W2;i++){let j=0;while(j<H2){if(!g[j][i]){j++;continue}let b=j;while(b<H2&&g[b][i])b++;const L=b-j;
    for(let k=j;k<b;k++){const t=(k-j)/L,c0=g[k][i];if(L>=3&&t<.2)gs[k][i]=shadeC(c0,.3);else if(L>=4&&t>=.78)gs[k][i]=shadeC(c0,-.13)}
    if(L>=3*sc2/2&&j+1<b)gs[j+1][i]=gs[j][i];j=b}}
  const at=(i,j)=>(i<0||j<0||i>=W2||j>=H2)?null:g[j][i];
  for(let j=-1;j<=H2;j++)for(let i=-1;i<=W2;i++){if(at(i,j))continue;const n=at(i-1,j)||at(i,j-1)||at(i+1,j)||at(i,j+1);if(n){x.fillStyle=outC(n,ol);x.fillRect(i+pd,j+pd,1,1)}}}
 for(let j=0;j<H2;j++)for(let i=0;i<W2;i++)if(gs[j][i]){x.fillStyle=gs[j][i];x.fillRect(i+pd,j+pd,1,1)}if(post)post(x,g,steps.reduce((a,b)=>a*b,1),pd);return c}
function eyesOf(rows){const E=[];rows.forEach((r,j)=>{for(let i=0;i<r.length;i++){if(r[i]==='w'&&r[i+1]==='k'){E.push([i+1,j+.5]);i++}else if(r[i]==='k'&&r[i-1]!=='w'&&r[i+1]!=='w')E.push([i+.5,j+.5])}});return E}
function cuteFace(rows,happy){const E=eyesOf(rows);return(x,g,f,pd)=>{const has=(i,j)=>g[j]&&g[j][i];for(const [cx0,cy0] of E){const cx=cx0*f,cy=cy0*f;
  const ew=Math.max(2,Math.round(f*1.05)),eh=Math.max(3,Math.round(f*1.3)),x0=Math.round(cx-ew/2),y0=Math.round(cy-eh/2);
  // joues
  if(f>=4){x.fillStyle='rgba(255,128,170,.75)';const bw=Math.round(f*.9),bh=Math.max(1,Math.round(f/3)),bx=x0-Math.round(f*.55),by=y0+eh+Math.round(f*.15);for(let j=0;j<bh;j++)for(let i=0;i<bw;i++)if(has(bx+i,by+j))x.fillRect(bx+i+pd,by+j+pd,1,1)}
  // oeil
  if(happy){x.fillStyle='#3d3350';const th=f>=6?2:1;for(let i=0;i<ew+1;i++){const dx=(i+.5-(ew+1)/2)/((ew+1)/2),yy=Math.round(eh*.6-Math.sqrt(Math.max(0,1-dx*dx))*eh*.45);for(let t=0;t<th;t++)x.fillRect(x0+i+pd,y0+yy+t+pd,1,1)}if(f>=4){const sx=x0+ew+Math.round(f*.3),sy=y0+eh-Math.round(f*.3),pts=[[0,0],[1,1],[2,1],[3,0]];if(pts.every(([i,j])=>has(sx+i,sy+j))){x.fillStyle=OUT;for(const [i,j] of pts)x.fillRect(sx+i+pd,sy+j+pd,1,1)}}continue}
  x.fillStyle='#3d3350';for(let j=0;j<eh;j++)for(let i=0;i<ew;i++){const dx=(i+.5-ew/2)/(ew/2),dy=(j+.5-eh/2)/(eh/2);if(dx*dx+dy*dy<=1.2)x.fillRect(x0+i+pd,y0+j+pd,1,1)}
  x.fillStyle='#fff';const hs=Math.max(1,Math.floor(f/3));x.fillRect(x0+Math.max(0,Math.floor(ew*.18))+pd,y0+Math.floor(eh*.15)+pd,hs,hs);if(f>=4)x.fillRect(x0+ew-2+pd,y0+eh-2+pd,1,1);
  // sourire
  if(f>=4){const sx=x0+ew+Math.round(f*.35),sy=y0+eh-Math.round(f*.2),pts=f>=6?[[0,0],[1,1],[2,1],[3,0]]:[[0,0],[1,1],[2,0]];if(pts.every(([i,j])=>has(sx+i,sy+j))){x.fillStyle=OUT;for(const [i,j] of pts)x.fillRect(sx+i+pd,sy+j+pd,1,1)}}}}}
const stepsOf=sp=>sp.sc===3?[3,2]:sp.sc===1?[2]:[2,2];
/* ================= DONNÉES ================= */
const RAR={c:{n:'Commun',col:'#a59fb8',w:15,coin:2,xp:1},u:{n:'Peu commun',col:'#5fbf86',w:12,coin:5,xp:2},r:{n:'Rare',col:'#5aa8d6',w:10,coin:15,xp:5},e:{n:'Épique',col:'#e07fb0',w:6,coin:40,xp:10},l:{n:'Légendaire',col:'#e0b830',w:5,coin:150,xp:25}};
const TANKS={
 ruisseau:{n:'Ruisseau',ic:'❀',lv:1,poolC:7,poolU:4,theme:'ruisseau',style:'reeds'},
 recif:{n:'Récif',ic:'ψ',lv:3,poolC:7,poolU:5,theme:'recif',style:'coral'},
 abysses:{n:'Abysses',ic:'✦',lv:9,poolC:6,poolU:4,theme:'abysses',style:'spires'}
};
const SPECIES=[
 // ---------- RUISSEAU ----------
 {id:'guppy',hab:'ruisseau',n:'Guppy',r:'c',sh:'small',c:{b:P.or,d:P.rd,l:P.pe,f:P.pk},desc:'Petit, coloré et toujours de bonne humeur.'},
 {id:'neon',hab:'ruisseau',n:'Néon',r:'c',sh:'long',c:{b:P.bl,d:P.nv,l:P.rd,f:P.bl},desc:'Sa bande bleue brille sous la lumière.'},
 {id:'rouge',hab:'ruisseau',n:'Poisson rouge',r:'c',sh:'small',c:{b:P.or,d:P.or,l:P.ye,f:P.rd},desc:'Mémoire de 3 secondes ? Faux, il se souvient de toi.'},
 {id:'platy',hab:'ruisseau',n:'Platy',r:'c',sh:'small',c:{b:P.rd,d:P.pu,l:P.or,f:P.rd},desc:'Adore grignoter les algues.'},
 {id:'danio',hab:'ruisseau',n:'Danio zébré',r:'c',sh:'long',c:{b:P.lg,d:P.nv,l:P.nv,f:P.lg},desc:'Toujours pressé, jamais en retard.'},
 {id:'molly',hab:'ruisseau',n:'Molly gris',r:'c',sh:'round',c:{b:P.dk,d:P.k,l:P.lg,f:P.dk},desc:'Élégant et discret.'},
 {id:'tetra',hab:'ruisseau',n:'Tétra citron',r:'c',sh:'small',c:{b:P.ye,d:P.or,l:P.wh,f:P.ye},desc:'Acidulé mais très doux.'},
 {id:'gourami',hab:'ruisseau',n:'Gourami perlé',r:'c',sh:'round',c:{b:P.pe,d:P.or,l:P.wh,f:P.bl},desc:'Couvert de minuscules perles.'},
 {id:'cobalt',hab:'ruisseau',n:'Bleu cobalt',r:'c',sh:'small',c:{b:P.bl,d:P.nv,l:P.wh,f:P.la},desc:"Bleu comme un ciel d'été."},
 {id:'gobie',hab:'ruisseau',n:'Gobie',r:'c',sh:'small',c:{b:P.gr,d:P.dg,l:P.wh,f:P.gr},beh:'bottom',desc:'Petit gardien des galets.'},
 {id:'crevette',hab:'ruisseau',n:'Crevette rose',r:'c',sh:'shrimp',c:{b:P.pk,s:P.wh,d:P.rd,l:P.pe,f:P.pk},beh:'bottom',desc:'Elle nage à reculons quand elle a peur.'},
 {id:'scalaire',hab:'ruisseau',n:'Scalaire',r:'u',sh:'angel',c:{b:P.lg,s:P.k,d:P.lg,l:P.wh,f:P.lg},desc:'Majestueux comme une voile.'},
 {id:'betta',hab:'ruisseau',n:'Betta',r:'u',sh:'betta',c:{b:P.bl,d:P.pu,l:P.bl,f:P.pu},desc:'Ses nageoires dansent comme une robe.'},
 {id:'discus',hab:'ruisseau',n:'Discus',r:'u',sh:'round',c:{b:P.rd,d:P.or,l:P.or,f:P.rd},desc:"Le roi tout rond de l'aquarium."},
 {id:'cory',hab:'ruisseau',n:'Corydoras',r:'u',sh:'small',c:{b:P.pe,d:P.dk,l:P.wh,f:P.pe},beh:'bottom',needs:['coquillage'],desc:'Fouille le sable à la recherche de miettes.'},
 {id:'aube',hab:'ruisseau',n:'Aube dorée',r:'r',sh:'long',c:{b:P.ye,d:P.or,l:P.wh,f:P.pe},cond:n=>hr(n)>=6&&hr(n)<9,hint:'6h–9h',desc:'Ses écailles captent les premiers rayons.'},
 {id:'axolotl',hab:'ruisseau',n:'Axolotl',r:'r',sh:'axolotl',c:{b:P.pk,s:P.rd,l:P.pe,f:P.pk},beh:'bottom',needs:['algue'],cond:n=>hr(n)>=12&&hr(n)<14,hint:'12h–14h',desc:'Il sourit tout le temps. Tout le temps.'},
 {id:'koi',hab:'ruisseau',n:'Koï céleste',r:'e',sh:'koi',c:{b:P.wh,s:P.rd,d:P.rd,l:P.wh,f:P.pe},cond:n=>n.getDay()===0&&hr(n)>=12&&hr(n)<15,hint:'Dimanche · 12h–15h',desc:"On dit qu'elle porte bonheur."},
 {id:'arcenciel',hab:'ruisseau',n:'Poisson arc-en-ciel',r:'e',sh:'small',rainbow:true,c:{b:P.rd,d:P.or,l:P.wh,f:P.ye},cond:n=>n.getDate()%2===0&&n.getMinutes()<10,hint:'Jours pairs · 10 premières min de chaque heure',desc:'Change de couleur quand il est content.'},
 {id:'lune',hab:'ruisseau',n:"Lune d'argent",r:'l',sh:'round',sc:3,c:{b:P.lg,d:P.wh,l:P.wh,f:P.lg},glow:P.wh,cond:n=>isFullMoon(n)&&(hr(n)>=20||hr(n)<6),hint:'Les nuits de pleine lune (20h–6h)',desc:"Elle reflète la lune dans l'eau du ruisseau."},
 // ---------- RÉCIF ----------
 {id:'bernard',hab:'recif',n:"Bernard-l'ermite",r:'c',sh:'hermit',c:{b:P.or,s:P.pe,d:P.br},beh:'walk',desc:'Il cherche toujours une coquille plus grande.'},
 {id:'papillon',hab:'recif',n:'Poisson-papillon',r:'c',sh:'angel',c:{b:P.ye,s:P.wh,d:P.or,l:P.wh,f:P.ye},desc:'Il butine les coraux comme des fleurs.'},
 {id:'chirurgien',hab:'recif',n:'Chirurgien bleu',r:'c',sh:'round',c:{b:P.bl,d:P.nv,l:P.bl,f:P.ye},desc:'Toujours de bonne humeur, même perdu.'},
 {id:'demoiselle',hab:'recif',n:'Demoiselle',r:'c',sh:'small',c:{b:P.bl,d:P.nv,l:P.ye,f:P.ye},desc:'Petite mais très territoriale.'},
 {id:'gramma',hab:'recif',n:'Gramma royal',r:'c',sh:'small',c:{b:P.pu,d:P.pu,l:P.ye,f:P.ye},desc:'Moitié violet, moitié soleil.'},
 {id:'clown',hab:'recif',n:'Poisson-clown',r:'u',sh:'clown',c:{b:P.or,s:P.wh,d:P.k,l:P.or,f:P.or},needs:['corail'],desc:'Ne sort jamais sans son corail.'},
 {id:'ballon',hab:'recif',n:'Poisson-ballon',r:'u',sh:'puffer',c:{b:P.ye,s:P.br,d:P.br,l:P.wh,f:P.ye},desc:'Se gonfle quand il est surpris.'},
 {id:'crabe',hab:'recif',n:'Crabe corail',r:'u',sh:'crab',c:{b:P.rd,l:P.pe},beh:'walk',needs:['rocher'],desc:'Marche en crabe, évidemment.'},
 {id:'nettoyeuse',hab:'recif',n:'Crevette nettoyeuse',r:'u',sh:'shrimp',c:{b:P.rd,s:P.wh,d:P.wh,l:P.wh,f:P.rd},beh:'bottom',needs:['rocher'],desc:'Elle fait le ménage chez les autres poissons.'},
 {id:'requinchat',hab:'recif',n:'Requin-chat',r:'u',sh:'shark',c:{b:P.la,s:P.pu,d:P.pu,l:P.wh,f:P.la},desc:'Un tout petit requin qui ronronne (presque).'},
 {id:'hippo',hab:'recif',n:'Hippocampe',r:'r',sh:'seahorse',c:{b:P.or,d:P.br,l:P.ye},beh:'drift',needs:['algue'],cond:n=>[0,6].includes(n.getDay()),hint:'Week-end',desc:"S'accroche aux algues pour faire la sieste."},
 {id:'raie',hab:'recif',n:'Raie pastel',r:'r',sh:'ray',c:{b:P.la,d:P.pk,l:P.pk,f:P.la},cond:n=>n.getDay()===1,hint:'Lundi',desc:'Plane doucement comme un cerf-volant.'},
 {id:'mandarin',hab:'recif',n:'Poisson-mandarin',r:'r',sh:'clown',c:{b:P.bl,s:P.or,d:P.or,l:P.gr,f:P.or},needs:['rocher'],cond:n=>n.getDay()===3&&hr(n)>=14&&hr(n)<18,hint:'Mercredi · 14h–18h',desc:'Le plus psychédélique des poissons.'},
 {id:'requincitron',hab:'recif',n:'Requin-citron',r:'r',sh:'shark',c:{b:P.ye,s:P.ye,d:P.or,l:P.wh,f:P.ye},cond:n=>[2,4].includes(n.getDay()),hint:'Mardi et jeudi',desc:'Acidulé mais très gentil.'},
 {id:'tortue',hab:'recif',n:'Tortue de mer',r:'r',sh:'turtle',c:{b:P.gr,s:P.dg,d:P.dg},beh:'drift',cond:n=>hr(n)>=15&&hr(n)<18,hint:"À l'heure du goûter (15h–18h)",desc:'Elle a 100 ans et toujours la forme.'},
 {id:'bernardor',hab:'recif',n:'Bernard doré',r:'r',sh:'hermit',c:{b:P.or,s:P.ye,d:P.wh},beh:'walk',needs:['coquillage'],cond:n=>hr(n)>=9&&hr(n)<12,hint:'9h–12h',desc:'Sa coquille brille comme un trésor.'},
 {id:'marteau',hab:'recif',n:'Requin-marteau',r:'e',sh:'hammer',c:{b:P.lg,d:P.dk,l:P.wh,f:P.lg},cond:n=>n.getDay()===6&&hr(n)>=17&&hr(n)<20,hint:'Samedi · 17h–20h',desc:'Il bricole quand personne ne regarde.'},
 {id:'mante',hab:'recif',n:'Crevette-mante',r:'e',sh:'shrimp',rainbow:true,c:{b:P.gr},beh:'bottom',cond:n=>n.getDay()===0&&hr(n)>=18&&hr(n)<22,hint:'Dimanche · 18h–22h',desc:'La crevette la plus colorée du monde.'},
 {id:'dragon',hab:'recif',n:'Dragon des mers',r:'l',sh:'dragon',sc:3,c:{b:P.gr,d:P.dg,s:P.ye,l:P.ye,f:P.dg},cond:n=>n.getDate()===13&&hr(n)===13,hint:'Le 13 du mois, quand sonnent les 13 coups',desc:'Gardien des trésors engloutis.'},
 {id:'requinbaleine',hab:'recif',n:'Requin-baleine étoilé',r:'l',sh:'shark',sc:3,c:{b:P.nv,s:P.wh,d:P.la,l:P.wh,f:P.nv},cond:n=>n.getDate()===7&&hr(n)>=19&&hr(n)<21,hint:'Le 7 du mois, entre 19h et 21h',desc:'Le plus grand poisson du monde. Et le plus doux.'},
 // ---------- ABYSSES ----------
 {id:'hachette',hab:'abysses',n:'Poisson-hachette',r:'c',sh:'round',c:{b:P.lg,d:P.la,l:P.wh,f:P.lg},desc:'Brillant comme une petite cuillère.'},
 {id:'crevabyss',hab:'abysses',n:'Crevette abyssale',r:'c',sh:'shrimp',c:{b:P.rd,s:P.pk,d:P.pk,l:P.pe,f:P.rd},beh:'bottom',desc:'Rouge pour être invisible dans le noir.'},
 {id:'medusette',hab:'abysses',n:'Méduse-bulle',r:'c',sh:'jelly',sc:1,c:{b:P.bl,l:P.wh,f:P.bl},beh:'drift',desc:'Une bulle avec des petites jambes.'},
 {id:'calmar',hab:'abysses',n:'Calmar luciole',r:'u',sh:'squid',c:{b:P.la,f:P.pu},glow:P.bl,desc:'Il clignote pour dire bonjour.'},
 {id:'gosier',hab:'abysses',n:'Grand-gosier',r:'u',sh:'eel',c:{b:P.nv,s:P.la,d:P.la,l:P.la,f:P.nv},desc:'Une bouche immense, un cœur encore plus grand.'},
 {id:'meduse',hab:'abysses',n:'Méduse rose',r:'r',sh:'jelly',c:{b:P.pk,l:P.wh,f:P.pk},beh:'drift',glow:P.pk,cond:n=>hr(n)>=18&&hr(n)<21,hint:'18h–21h',desc:'Elle ne pique pas, promis.'},
 {id:'lanterne',hab:'abysses',n:'Poisson-lanterne',r:'r',sh:'lantern',c:{b:P.nv,d:P.la,l:P.la,f:P.nv},glow:P.ye,cond:n=>hr(n)>=22||hr(n)<5,hint:'22h–5h',desc:'Sa petite lampe éclaire les abysses.'},
 {id:'pieuvre',hab:'abysses',n:'Pieuvre câline',r:'r',sh:'octo',c:{b:P.pu,l:P.pk},beh:'drift',needs:['coffre'],cond:n=>hr(n)>=20||hr(n)<2,hint:'20h–2h',desc:'Huit bras, huit câlins.'},
 {id:'fantome',hab:'abysses',n:'Poisson-fantôme',r:'e',sh:'small',c:{b:P.lg,d:P.wh,l:P.wh,f:P.lg},ghost:true,cond:n=>hr(n)===3,hint:'3h–4h',desc:'Tu le vois ? Moi non plus.'},
 {id:'anguille',hab:'abysses',n:'Anguille électrique',r:'e',sh:'eel',c:{b:P.ye,s:P.bl,d:P.or,l:P.wh,f:P.ye},glow:P.ye,cond:n=>n.getDay()===5&&hr(n)>=20,hint:'Vendredi · 20h–minuit',desc:"Elle met l'ambiance. Littéralement."},
 {id:'phenix',hab:'abysses',n:'Phénix des abysses',r:'l',sh:'ray',sc:3,c:{b:P.rd,d:P.or,l:P.or,f:P.ye},glow:P.or,cond:n=>n.getDate()===21&&hr(n)>=22,hint:'Le 21 du mois, entre 22h et minuit',desc:'Il renaît chaque mois de ses propres bulles.'},
 {id:'chatpoisson',hab:'any',visitOnly:true,toy:'carton',n:'Chat-poisson',r:'r',sh:'catfish',c:{b:P.or,d:P.or,l:P.wh,f:P.or,m:P.k},desc:'Miaou ? Il adore les boîtes en carton.'},
 {id:'dormeur',hab:'any',visitOnly:true,toy:'lit',n:'Mérou dormeur',r:'r',sh:'round',c:{b:P.la,d:P.pu,l:P.lg,f:P.la},desc:'Zzz… il ne se réveille que pour manger.'},
 {id:'disco',hab:'any',visitOnly:true,toy:'disco',n:'Poisson-disco',r:'e',sh:'angel',rainbow:true,c:{b:P.pk},desc:'Il danse dès que la boule tourne.'},
 {id:'glisse',hab:'any',visitOnly:true,toy:'toboggan',n:'Raie toboggan',r:'e',sh:'ray',c:{b:P.gr,d:P.ye,l:P.ye,f:P.gr},desc:'Wiiiii ! Elle fait du toboggan toute la journée.'},
 {id:'baleine',hab:'abysses',n:'Baleine pixel',r:'l',sh:'whale',sc:3,c:{b:P.bl,d:P.nv,l:P.wh,f:P.bl},cond:n=>n.getDate()===1&&hr(n)>=12&&hr(n)<14,hint:'Le 1er du mois, entre 12h et 14h',desc:"Comment elle rentre dans l'aquarium ? Mystère."}
];
const NEWSP=[
 {id:'platysol',hab:'ruisseau',n:"Platy soleil",r:'c',sh:'small',c:{b:P.ye,d:P.or,l:P.pe,f:P.or},desc:"Il brille comme un petit soleil."},
 {id:'neonrose',hab:'ruisseau',n:"Néon rose",r:'c',sh:'long',c:{b:P.pk,d:P.pu,l:P.wh,f:P.pk},desc:"La version rose bonbon du néon."},
 {id:'guppyazur',hab:'ruisseau',n:"Guppy azur",r:'c',sh:'small',c:{b:P.bl,d:P.nv,l:P.wh,f:P.la},desc:"Sa queue ondule comme un drapeau."},
 {id:'barbus',hab:'ruisseau',n:"Barbus tigré",r:'c',sh:'clown',c:{b:P.or,s:P.nv,d:P.nv,l:P.pe,f:P.or},desc:"Rayé comme un petit tigre."},
 {id:'rasbora',hab:'ruisseau',n:"Rasbora",r:'c',sh:'long',c:{b:P.pe,d:P.rd,l:P.wh,f:P.rd},desc:"Nage toujours en bande avec ses amis."},
 {id:'cardinal',hab:'ruisseau',n:"Tétra cardinal",r:'c',sh:'long',c:{b:P.bl,d:P.nv,l:P.rd,f:P.bl},desc:"Habillé pour une grande fête."},
 {id:'killi',hab:'ruisseau',n:"Killi arc-en-ciel",r:'c',sh:'small',c:{b:P.gr,d:P.bl,l:P.ye,f:P.rd},desc:"Toutes les couleurs sur un seul poisson."},
 {id:'loche',hab:'ruisseau',n:"Loche kuhli",r:'c',sh:'eel',c:{b:P.or,s:P.br,d:P.br,l:P.pe,f:P.or},desc:"Se faufile partout comme un ruban.",beh:'bottom'},
 {id:'cerise',hab:'ruisseau',n:"Crevette cerise",r:'c',sh:'shrimp',c:{b:P.rd,s:P.pk,d:P.rd,l:P.pe,f:P.rd},desc:"Petite, rouge et gourmande.",beh:'bottom'},
 {id:'escargot',hab:'ruisseau',n:"Escargot d'eau",r:'c',sh:'snail',c:{b:P.pe,s:P.ye,d:P.or},desc:"Pas pressé du tout.",beh:'walk'},
 {id:'epinoche',hab:'ruisseau',n:"Épinoche",r:'c',sh:'small',c:{b:P.lg,d:P.dg,l:P.rd,f:P.lg},desc:"Petite mais courageuse."},
 {id:'vairon',hab:'ruisseau',n:"Vairon",r:'c',sh:'long',c:{b:P.lg,d:P.dg,l:P.pe,f:P.lg},desc:"Le roi des petits ruisseaux."},
 {id:'dalmatien',hab:'ruisseau',n:"Molly dalmatien",r:'c',sh:'round',c:{b:P.wh,d:P.k,l:P.wh,f:P.lg},desc:"Tout blanc avec des petites taches."},
 {id:'miel',hab:'ruisseau',n:"Gourami miel",r:'c',sh:'round',c:{b:P.or,d:P.ye,l:P.pe,f:P.or},desc:"Doux comme du miel."},
 {id:'ramirezi',hab:'ruisseau',n:"Ramirezi",r:'u',sh:'angel',c:{b:P.ye,s:P.bl,d:P.bl,l:P.pe,f:P.bl},desc:"Un petit bijou bleu et doré."},
 {id:'scalkoi',hab:'ruisseau',n:"Scalaire koï",r:'u',sh:'angel',c:{b:P.wh,s:P.or,d:P.or,l:P.wh,f:P.wh},desc:"Un scalaire déguisé en koï."},
 {id:'galaxie',hab:'ruisseau',n:"Betta galaxie",r:'u',sh:'betta',c:{b:P.nv,d:P.la,l:P.bl,f:P.pu},desc:"Il a des étoiles dans les nageoires."},
 {id:'pleco',hab:'ruisseau',n:"Pléco",r:'u',sh:'flounder',c:{b:P.dk,s:P.br,d:P.br,l:P.lg,f:P.dk},desc:"Il nettoie les vitres avec sa bouche.",beh:'bottom'},
 {id:'pigeon',hab:'ruisseau',n:"Discus pigeon",r:'u',sh:'round',c:{b:P.pe,d:P.rd,l:P.wh,f:P.rd},desc:"Rond comme une assiette décorée."},
 {id:'crevbleue',hab:'ruisseau',n:"Crevette bleue",r:'u',sh:'shrimp',c:{b:P.bl,s:P.wh,d:P.nv,l:P.wh,f:P.bl},desc:"Bleue comme un ciel d'été.",beh:'bottom'},
 {id:'bebetortue',hab:'ruisseau',n:"Bébé tortue",r:'u',sh:'turtle',c:{b:P.gr,s:P.ye,d:P.dg},desc:"Elle vient de sortir de son œuf.",beh:'drift',needs:['algue']},
 {id:'bisou',hab:'ruisseau',n:"Gourami embrasseur",r:'u',sh:'round',c:{b:P.pk,d:P.rd,l:P.wh,f:P.pk},desc:"Il fait des bisous à tout le monde."},
 {id:'axodore',hab:'ruisseau',n:"Axolotl doré",r:'r',sh:'axolotl',c:{b:P.ye,s:P.or,l:P.pe,f:P.ye},desc:"Il brille un peu dans le noir.",beh:'bottom',spec:'h20-23',needs:['algue']},
 {id:'yeuxbulles',hab:'ruisseau',n:"Yeux-bulles",r:'r',sh:'blob',c:{b:P.or,l:P.pe,f:P.or},desc:"Ses yeux sont deux petites bulles.",beh:'drift',spec:'d6'},
 {id:'anguiller',hab:'ruisseau',n:"Anguille de rivière",r:'r',sh:'eel',c:{b:P.dg,s:P.gr,d:P.gr,l:P.pe,f:P.dg},desc:"Elle sort quand tout le monde dort.",spec:'h0-4'},
 {id:'carperuban',hab:'ruisseau',n:"Carpe ruban",r:'r',sh:'koi',c:{b:P.la,s:P.pk,d:P.pk,l:P.wh,f:P.la},desc:"Elle danse avec ses nageoires.",spec:'d2'},
 {id:'escargotor',hab:'ruisseau',n:"Escargot pomme d'or",r:'r',sh:'snail',c:{b:P.pe,s:P.ye,d:P.or},desc:"Sa coquille est en or (presque).",beh:'walk',spec:'h7-10',needs:['galets']},
 {id:'crevambre',hab:'ruisseau',n:"Crevette ambre",r:'r',sh:'shrimp',c:{b:P.or,s:P.ye,d:P.or,l:P.pe,f:P.or},desc:"Couleur caramel.",beh:'bottom',spec:'h12-15'},
 {id:'bettadragon',hab:'ruisseau',n:"Betta dragon",r:'e',sh:'betta',c:{b:P.rd,d:P.ye,l:P.or,f:P.or},desc:"Ses nageoires ressemblent à des flammes.",spec:'d5 h18-22'},
 {id:'koighost',hab:'ruisseau',n:"Koï fantôme",r:'e',sh:'koi',c:{b:P.lg,s:P.wh,d:P.wh,l:P.wh,f:P.lg},desc:"Elle traverse les algues sans les toucher.",spec:'h1-3',ghost:true},
 {id:'carpedragon',hab:'ruisseau',n:"Carpe dragon",r:'l',sh:'dragon',c:{b:P.or,d:P.rd,s:P.ye,l:P.ye,f:P.rd},desc:"Une carpe qui a remonté la cascade.",spec:'md25 h17-19',sc:3},
 {id:'koiimperiale',hab:'ruisseau',n:"Koï impériale",r:'l',sh:'koi',c:{b:P.ye,s:P.or,d:P.or,l:P.wh,f:P.pe},desc:"La koï des empereurs.",spec:'md8 h8-9',sc:3},
 {id:'demoverte',hab:'recif',n:"Demoiselle verte",r:'c',sh:'small',c:{b:P.gr,d:P.dg,l:P.ye,f:P.gr},desc:"Verte comme une feuille."},
 {id:'perroquet',hab:'recif',n:"Poisson-perroquet",r:'c',sh:'round',c:{b:P.gr,d:P.bl,l:P.pk,f:P.bl},desc:"Il croque le corail et fait du sable."},
 {id:'labre',hab:'recif',n:"Labre nettoyeur",r:'c',sh:'long',c:{b:P.bl,d:P.nv,l:P.ye,f:P.nv},desc:"Le dentiste du récif."},
 {id:'sergent',hab:'recif',n:"Poisson-sergent",r:'c',sh:'clown',c:{b:P.ye,s:P.nv,d:P.nv,l:P.wh,f:P.ye},desc:"Toujours au garde-à-vous."},
 {id:'gobiecitron',hab:'recif',n:"Gobie citron",r:'c',sh:'small',c:{b:P.ye,d:P.or,l:P.wh,f:P.ye},desc:"Il vit dans un petit trou.",beh:'bottom'},
 {id:'crevcorail',hab:'recif',n:"Crevette corail",r:'c',sh:'shrimp',c:{b:P.or,s:P.wh,d:P.wh,l:P.wh,f:P.or},desc:"Rayée orange et blanc.",beh:'bottom'},
 {id:'etoilemer',hab:'recif',n:"Étoile de mer",r:'c',sh:'starfish',c:{b:P.or},desc:"Elle avance tout doucement.",beh:'walk'},
 {id:'oursin',hab:'recif',n:"Oursin rose",r:'c',sh:'urchin',c:{b:P.pk,s:P.pu},desc:"Piquant mais gentil.",beh:'walk'},
 {id:'limace',hab:'recif',n:"Limace de mer",r:'c',sh:'nudi',c:{b:P.pu,s:P.or,l:P.pe},desc:"Une limace très élégante.",beh:'walk'},
 {id:'chromis',hab:'recif',n:"Chromis bleu",r:'c',sh:'small',c:{b:P.bl,d:P.la,l:P.wh,f:P.bl},desc:"Bleu turquoise brillant."},
 {id:'ecureuil',hab:'recif',n:"Poisson-écureuil",r:'c',sh:'round',c:{b:P.rd,d:P.or,l:P.pe,f:P.rd},desc:"Il a de grands yeux de nuit."},
 {id:'baliste',hab:'recif',n:"Baliste",r:'c',sh:'angel',c:{b:P.bl,s:P.ye,d:P.nv,l:P.wh,f:P.bl},desc:"Il dessine sur ses écailles."},
 {id:'lion',hab:'recif',n:"Poisson-lion",r:'u',sh:'angel',c:{b:P.rd,s:P.wh,d:P.pe,l:P.wh,f:P.pe},desc:"Ses nageoires font une crinière."},
 {id:'hipponain',hab:'recif',n:"Hippocampe nain",r:'u',sh:'seahorse',c:{b:P.pk,d:P.pu,l:P.wh},desc:"Pas plus grand qu'un grain de riz.",beh:'drift',needs:['algue'],sc:1},
 {id:'homard',hab:'recif',n:"Homard bleu",r:'u',sh:'lobster',c:{b:P.bl,l:P.la},desc:"Il se cache sous les rochers.",beh:'walk',needs:['rocher']},
 {id:'seiche',hab:'recif',n:"Seiche",r:'u',sh:'squid',c:{b:P.pe,f:P.or},desc:"Elle change de couleur quand elle rit."},
 {id:'coffre',hab:'recif',n:"Poisson-coffre",r:'u',sh:'puffer',c:{b:P.ye,s:P.k,d:P.or,l:P.wh,f:P.ye},desc:"Carré comme une petite boîte."},
 {id:'trompette',hab:'recif',n:"Poisson-trompette",r:'u',sh:'swordfish',c:{b:P.ye,d:P.or,l:P.wh,f:P.ye},desc:"Il joue de la trompette (non)."},
 {id:'leopard',hab:'recif',n:"Raie léopard",r:'u',sh:'ray',c:{b:P.nv,d:P.wh,l:P.wh,f:P.nv},desc:"Couverte de petits points."},
 {id:'doris',hab:'recif',n:"Doris bleue",r:'u',sh:'nudi',c:{b:P.bl,s:P.ye,l:P.wh},desc:"Une limace bleu électrique.",beh:'walk'},
 {id:'murene',hab:'recif',n:"Murène",r:'u',sh:'eel',c:{b:P.ye,s:P.gr,d:P.dg,l:P.ye,f:P.ye},desc:"Elle sourit toujours, même la bouche ouverte."},
 {id:'bernardcorail',hab:'recif',n:"Bernard corail",r:'u',sh:'hermit',c:{b:P.rd,s:P.pk,d:P.pu},desc:"Il a décoré sa coquille.",beh:'walk',needs:['corail']},
 {id:'caouanne',hab:'recif',n:"Tortue caouanne",r:'r',sh:'turtle',c:{b:P.la,s:P.nv,d:P.nv},desc:"Elle a fait le tour du monde.",beh:'drift',spec:'d4'},
 {id:'dauphin',hab:'recif',n:"Dauphin",r:'r',sh:'dolphin',c:{b:P.bl,l:P.wh,d:P.bl,f:P.bl},desc:"Il saute de joie quand il te voit.",spec:'h10-12'},
 {id:'napoleon',hab:'recif',n:"Napoléon",r:'r',sh:'round',c:{b:P.gr,d:P.bl,l:P.la,f:P.gr},desc:"Un gros poisson très sérieux.",spec:'d0 h9-12'},
 {id:'zebre',hab:'recif',n:"Requin-zèbre",r:'r',sh:'shark',c:{b:P.ye,s:P.nv,d:P.or,l:P.wh,f:P.ye},desc:"Rayé comme un zèbre.",spec:'h14-16'},
 {id:'homarddore',hab:'recif',n:"Homard doré",r:'r',sh:'lobster',c:{b:P.ye,l:P.pe},desc:"Un trésor qui marche.",beh:'walk',spec:'h4-6',needs:['rocher']},
 {id:'espadon',hab:'recif',n:"Espadon",r:'r',sh:'swordfish',c:{b:P.nv,d:P.la,l:P.wh,f:P.nv},desc:"Le plus rapide de l'océan.",spec:'d3'},
 {id:'manta',hab:'recif',n:"Raie manta",r:'r',sh:'ray',c:{b:P.nv,d:P.la,l:P.wh,f:P.nv},desc:"Elle vole sous l'eau.",spec:'h21-24'},
 {id:'mola',hab:'recif',n:"Poisson-lune",r:'r',sh:'mola',c:{b:P.lg,d:P.la,l:P.wh,f:P.lg},desc:"Rond comme la lune, lent comme un nuage.",spec:'d6 h12-15'},
 {id:'orque',hab:'recif',n:"Orque",r:'e',sh:'dolphin',c:{b:P.k,l:P.wh,d:P.k,f:P.k},desc:"Une baleine noire et blanche très douce.",spec:'d1 h20-23'},
 {id:'limacearc',hab:'recif',n:"Limace arc-en-ciel",r:'e',sh:'nudi',c:{b:P.pk,s:P.ye,l:P.wh},desc:"Elle laisse des traces colorées.",beh:'walk',spec:'h5-7',rainbow:true},
 {id:'feuillu',hab:'recif',n:"Dragon feuillu",r:'e',sh:'seahorse',c:{b:P.gr,d:P.ye,l:P.ye},desc:"On dirait une petite algue vivante.",beh:'drift',spec:'d2 h18-21',needs:['algue']},
 {id:'narval',hab:'recif',n:"Narval des glaces",r:'l',sh:'narwhal',c:{b:P.lg,s:P.ye,d:P.la,l:P.wh,f:P.lg},desc:"La licorne des mers.",spec:'md18 h20-22',sc:3},
 {id:'dauphinarc',hab:'recif',n:"Dauphin arc-en-ciel",r:'l',sh:'dolphin',c:{b:P.pk,l:P.wh},desc:"Il laisse un arc-en-ciel derrière lui.",spec:'md5 h15-17',sc:3,rainbow:true},
 {id:'tortuegeante',hab:'recif',n:"Tortue géante",r:'l',sh:'turtle',c:{b:P.gr,s:P.dg,d:P.dg},desc:"Elle a 300 ans et des histoires plein la tête.",beh:'drift',spec:'md27 h10-12',sc:3},
 {id:'blobfish',hab:'abysses',n:"Blobfish",r:'c',sh:'blob',c:{b:P.pk,l:P.pe,f:P.pk},desc:"Un peu mou, très mignon.",beh:'drift'},
 {id:'hachetteor',hab:'abysses',n:"Hachette dorée",r:'c',sh:'round',c:{b:P.ye,d:P.or,l:P.wh,f:P.ye},desc:"Une hachette qui a trouvé un trésor."},
 {id:'vipere',hab:'abysses',n:"Poisson-vipère",r:'c',sh:'eel',c:{b:P.nv,s:P.bl,d:P.la,l:P.la,f:P.nv},desc:"Il a l'air méchant mais il est timide."},
 {id:'crevlumi',hab:'abysses',n:"Crevette lumineuse",r:'c',sh:'shrimp',c:{b:P.bl,s:P.wh,d:P.bl,l:P.wh,f:P.bl},desc:"Elle s'allume comme une veilleuse.",beh:'bottom',glow:P.bl},
 {id:'casquee',hab:'abysses',n:"Méduse casquée",r:'c',sh:'jelly',c:{b:P.pu,l:P.wh,f:P.pk},desc:"Elle porte un petit casque.",beh:'drift'},
 {id:'holothurie',hab:'abysses',n:"Concombre de mer",r:'c',sh:'nudi',c:{b:P.rd,s:P.pk,l:P.pe},desc:"Il fait la sieste au fond de l'eau.",beh:'walk'},
 {id:'araignee',hab:'abysses',n:"Crabe-araignée",r:'c',sh:'crab',c:{b:P.or,l:P.pe},desc:"De très longues pattes.",beh:'walk'},
 {id:'ogre',hab:'abysses',n:"Poisson-ogre",r:'c',sh:'round',c:{b:P.dk,d:P.k,l:P.lg,f:P.dk},desc:"Une grande bouche, un petit cœur."},
 {id:'dumbo',hab:'abysses',n:"Pieuvre Dumbo",r:'u',sh:'octo',c:{b:P.pk,l:P.wh},desc:"Elle nage avec ses oreilles.",beh:'drift'},
 {id:'lanbleue',hab:'abysses',n:"Lanterne bleue",r:'u',sh:'lantern',c:{b:P.bl,d:P.nv,l:P.la,f:P.bl},desc:"Sa lampe est bleue.",glow:P.bl},
 {id:'grenadier',hab:'abysses',n:"Grenadier",r:'u',sh:'long',c:{b:P.lg,d:P.la,l:P.wh,f:P.lg},desc:"Une longue queue de souris."},
 {id:'isopode',hab:'abysses',n:"Isopode géant",r:'u',sh:'lobster',c:{b:P.lg,l:P.wh},desc:"Un cloporte géant tout gentil.",beh:'walk'},
 {id:'chimere',hab:'abysses',n:"Chimère",r:'u',sh:'swordfish',c:{b:P.la,d:P.pu,l:P.wh,f:P.la},desc:"Un poisson qui vient d'un rêve."},
 {id:'soleab',hab:'abysses',n:"Sole abyssale",r:'u',sh:'flounder',c:{b:P.la,s:P.nv,d:P.nv,l:P.lg,f:P.la},desc:"Toute plate, cachée dans le sable.",beh:'bottom'},
 {id:'vampire',hab:'abysses',n:"Calmar vampire",r:'r',sh:'squid',c:{b:P.rd,f:P.pu},desc:"Il ne mord personne, promis.",spec:'h0-3'},
 {id:'couronne',hab:'abysses',n:"Méduse couronne",r:'r',sh:'jelly',c:{b:P.rd,l:P.or,f:P.or},desc:"Une méduse royale.",beh:'drift',spec:'h22-24',glow:P.or},
 {id:'lutin',hab:'abysses',n:"Requin-lutin",r:'r',sh:'hammer',c:{b:P.pk,d:P.rd,l:P.wh,f:P.pk},desc:"Un requin avec un drôle de nez.",spec:'d4 h19-22'},
 {id:'baudroie',hab:'abysses',n:"Baudroie",r:'r',sh:'lantern',c:{b:P.dk,d:P.k,l:P.lg,f:P.dk},desc:"Elle pêche avec sa lampe.",spec:'d6 h21-24',glow:P.ye},
 {id:'siphono',hab:'abysses',n:"Siphonophore",r:'r',sh:'eel',c:{b:P.bl,s:P.pk,d:P.pk,l:P.wh,f:P.bl},desc:"Une guirlande vivante.",spec:'even h20-24',glow:P.pk},
 {id:'bebekraken',hab:'abysses',n:"Bébé kraken",r:'e',sh:'octo',c:{b:P.pu,l:P.pk},desc:"Il deviendra très grand. Un jour.",beh:'drift',spec:'d0 h0-3'},
 {id:'meduarc',hab:'abysses',n:"Méduse arc-en-ciel",r:'e',sh:'jelly',c:{b:P.pk,l:P.wh},desc:"Elle change de couleur toutes les secondes.",beh:'drift',spec:'min30-40',rainbow:true},
 {id:'kraken',hab:'abysses',n:"Kraken câlin",r:'l',sh:'octo',c:{b:P.pu,l:P.pk},desc:"Il a huit bras pour faire huit câlins.",beh:'drift',spec:'md3 h22-24',sc:3},
 {id:'dragonab',hab:'abysses',n:"Dragon abyssal",r:'l',sh:'dragon',c:{b:P.nv,d:P.pu,s:P.bl,l:P.la,f:P.pu},desc:"Ses écailles brillent comme des étoiles.",spec:'md29 h0-2',sc:3,glow:P.bl},
 {id:'baleineetoile',hab:'abysses',n:"Baleine-étoile",r:'l',sh:'whale',c:{b:P.nv,d:P.la,l:P.ye,f:P.nv},desc:"Elle chante sous la pleine lune.",spec:'full h23-24',sc:3,glow:P.ye},
 {id:'patissier',hab:'any',n:"Poisson-pâtissier",r:'r',sh:'round',c:{b:P.pe,d:P.pk,l:P.wh,f:P.pk},desc:"Il sent le gâteau à la fraise.",visitOnly:true,toy:'gateau'},
 {id:'lecteur',hab:'any',n:"Tortue lectrice",r:'r',sh:'turtle',c:{b:P.gr,s:P.pe,d:P.br},desc:"Elle lit des histoires aux petits poissons.",beh:'drift',visitOnly:true,toy:'livres'},
 {id:'musicien',hab:'any',n:"Poisson-musicien",r:'r',sh:'small',c:{b:P.la,d:P.pu,l:P.wh,f:P.pk},desc:"Il joue du piano avec ses nageoires.",visitOnly:true,toy:'piano'},
 {id:'astronaute',hab:'any',n:"Poisson-astronaute",r:'e',sh:'round',c:{b:P.wh,d:P.bl,l:P.lg,f:P.bl},desc:"Il rêve d'aller sur la lune.",visitOnly:true,toy:'fusee'},
 {id:'lapinmer',hab:'any',n:"Lapin de mer",r:'r',sh:'nudi',c:{b:P.wh,s:P.k,l:P.wh},desc:"Une limace avec des oreilles de lapin !",beh:'walk',visitOnly:true,toy:'coussin'},
 {id:'peintre',hab:'any',n:"Crabe peintre",r:'r',sh:'crab',c:{b:P.pk,l:P.ye},desc:"Il peint des tableaux de coquillages.",beh:'walk',visitOnly:true,toy:'chevalet'},
 {id:'jardinier',hab:'any',n:"Hippocampe jardinier",r:'r',sh:'seahorse',c:{b:P.gr,d:P.dg,l:P.ye},desc:"Il arrose les fleurs sous l'eau (?).",beh:'drift',visitOnly:true,toy:'potfleur'},
 {id:'requinrose',hab:'any',n:"Requin rose",r:'e',sh:'shark',c:{b:P.pk,s:P.pk,d:P.rd,l:P.wh,f:P.pk},desc:"Le requin le plus doux du monde.",visitOnly:true,toy:'coeurc'},
 {id:'joueur',hab:'any',n:"Poisson-joueur",r:'u',sh:'clown',c:{b:P.bl,s:P.ye,d:P.nv,l:P.wh,f:P.bl},desc:"Il fait rebondir la balle sur son nez.",visitOnly:true,toy:'balle'}
];
const DAYN=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
function mkCond(spec){const tests=[],hs=[];for(const p of spec.split(' ')){let m;
 if(m=p.match(/^h(\d+)-(\d+)$/)){const a=+m[1],b=+m[2];tests.push(n=>{const h=n.getHours();return a<b?h>=a&&h<b:h>=a||h<b});hs.push(`${a}h–${b===24?'minuit':b+'h'}`)}
 else if(m=p.match(/^d([\d,]+)$/)){const ds=m[1].split(',').map(Number);tests.push(n=>ds.includes(n.getDay()));hs.push('le '+ds.map(d=>DAYN[d]).join(' et le '))}
 else if(m=p.match(/^md(\d+)$/)){const d=+m[1];tests.push(n=>n.getDate()===d);hs.push(`le ${d===1?'1er':d} du mois`)}
 else if(p==='full'){tests.push(isFullMoon);hs.push('les nuits de pleine lune')}
 else if(p==='even'){tests.push(n=>n.getDate()%2===0);hs.push('jours pairs')}
 else if(m=p.match(/^min(\d+)-(\d+)$/)){const a=+m[1],b=+m[2];tests.push(n=>{const x=n.getMinutes();return x>=a&&x<b});hs.push(a===0?`${b} premières min de chaque heure`:`chaque heure, de la ${a}e à la ${b}e min`)}}
 const h=hs.join(' · ').replace(/^le /,'').replace(/ et le /g,' et ');return{cond:n=>tests.every(t=>t(n)),hint:h.charAt(0).toUpperCase()+h.slice(1)}}
NEWSP.forEach(o=>{if(o.spec){const m=mkCond(o.spec);o.cond=m.cond;o.hint=m.hint}SPECIES.push(o)});
const byId=Object.fromEntries(SPECIES.map(s=>[s.id,s]));
// niveau d'apparition de chaque espèce : étalé jusqu'au niveau 20
const SPLV={};(()=>{const RG={c:[0,3],u:[1,8],r:[2,18],e:[4,19],l:[6,20]};
 for(const t in TANKS){const L0=TANKS[t].lv;for(const r of 'curel'){const g=SPECIES.filter(s=>s.hab===t&&s.r===r).sort((a,b)=>hash(a.id+'~lv')-hash(b.id+'~lv')),n=g.length;
  const lo=L0+RG[r][0],hi=r==='c'?L0+RG[r][1]:Math.min(20,Math.max(lo+3,RG[r][1]));
  g.forEach((sp,i)=>{let lv;if(r==='c'){const k0=Math.max(4,Math.ceil(n*.4));lv=i<k0?L0:L0+1+Math.floor((i-k0)/Math.max(1,n-k0)*(hi-L0))}else lv=lo+Math.round(i*(hi-lo)/Math.max(1,n-1));SPLV[sp.id]=Math.min(20,lv)})}}})();
const lvOf=sp=>SPLV[sp.id]||1,lvOk=sp=>lvOf(sp)<=S.lv;
const resHab=sp=>sp.hab==='any'?'ruisseau':sp.hab;
function resIds(){return[...new Set(Object.values(S.tanks).flatMap(t=>t.res))].filter(id=>byId[id])}
const known=id=>!!(S.caught[id]||S.visits[id]);
const CRUST=['crevette','bernard','crabe','nettoyeuse','bernardor','mante','crevabyss'];
const CTAG={[P.pk]:'rose',[P.rd]:'rose',[P.pu]:'rose',[P.bl]:'bleu',[P.nv]:'bleu',[P.la]:'bleu',[P.ye]:'jaune',[P.or]:'jaune',[P.pe]:'jaune'};

const DECOR={
 algue:{n:'Algue verte',p:15,lv:1,grp:'algue',kelp:{h:26,c1:P.gr,c2:P.dg}},
 algue_rose:{n:'Algue rose',p:25,lv:1,grp:'algue',kelp:{h:20,c1:P.pk,c2:P.pu}},
 rocher:{n:'Rocher',p:20,lv:1,grp:'rocher',rows:["...gggg....","..gllggg...",".glllgggg..","gglggggggg.","gggggggdggg","dggggggdddd"],pal:{g:P.dk,l:P.lg,d:P.nv}},
 coquillage:{n:'Coquillage',p:15,lv:1,grp:'coquillage',rows:["..ppp..",".pwpwp.","pwpwpwp","pwpwpwp",".ppppp.","..ooo.."],pal:{p:P.pe,w:P.wh,o:P.or}},
 galets:{n:'Galets colorés',p:15,lv:1,grp:'galets',rows:["..pp...bb..",".pppp.bbbb.","yy.pp.gg.bb","yyy..gggg.."],pal:{p:P.pk,b:P.bl,y:P.ye,g:P.gr}},
 kelp:{n:'Kelp géant',p:40,lv:2,grp:'algue',kelp:{h:54,c1:P.dg,c2:'#6fb894'}},
 etoile:{n:'Étoile de mer',p:30,lv:2,grp:'etoile',rows:["...o...","..ooo..","ooooooo",".oyoyo.","..ooo..",".oo.oo.","oo...oo"],pal:{o:P.or,y:P.ye}},
 corail:{n:'Corail',p:50,lv:3,grp:'corail',rows:[".p...p..p.",".pp.pp.pp.","..ppp.pp..","p..ppppp.p","pp..ppp.pp",".ppppppp..","...ppp....","...ppp....","..rrrrr..."],pal:{p:P.pk,r:P.pu}},
 racine:{n:'Racine de bois',p:45,lv:3,grp:'racine',rows:["b........b..",".b......bb..","..bb..bbb...","...bbbbb....","..bbbbbbbb..",".bbdbbbdbbbb","bbbbbbbbbbbb"],pal:{b:P.br,d:P.dk}},
 champi:{n:'Champi lumineux',p:70,lv:4,grp:'champi',glow:P.bl,rows:["..rrrrr..",".rrwrrwr.","rrrrrrrrr","rwrrrrwrr","...www...","...www...","..wwwww.."],pal:{r:P.bl,w:P.pe}},
 bulleur:{n:'Scaphandre bulleur',p:90,lv:4,grp:'bulleur',bub:true,rows:["..ggg..",".gwwwg.","gwkwkwg","gwwwwwg",".gwwwg.","..ggg..",".ggggg.","ggggggg"],pal:{g:P.or,w:P.bl,k:P.nv}},
 coffre:{n:'Coffre au trésor',p:110,lv:5,grp:'coffre',chest:true,rows:[".bbbbbbbbbb.","bbobbbbbbobb","oooooyyooooo","bbobbyybbobb","bbobbbbbbobb","bbbbbbbbbbbb"],pal:{b:P.br,o:P.or,y:P.ye}},
 chateau:{n:'Château',p:160,lv:7,grp:'chateau',rows:["l.l.l.......l.l.l","lllll.......lllll",".lgl...l.l...lgl.",".lll..lllll..lll.",".lkl..lgllg..lkl.",".lll..lllll..lll.",".lllllllllllllll.",".llllllkkkllllll.",".lllllkkkkklllll.",".lllllkkkkklllll.","ddddddddddddddddd"],pal:{l:P.lg,g:P.la,k:P.nv,d:P.dk}},
 cristal:{n:'Cristal lumineux',p:130,lv:8,grp:'cristal',glow:P.pk,rows:["....w....","...wcw...","..wcccw.w","w.cccccwc","cwcccccwc","ccwcccwcc",".ccccccc."],pal:{c:P.pk,w:P.wh}},
 herbe:{n:'Herbe marine',p:10,lv:1,grp:'algue',kelp:{h:12,c1:P.gr,c2:P.dg,n:3}},
 algue_bleue:{n:'Algue bleue',p:30,lv:2,grp:'algue',kelp:{h:32,c1:P.bl,c2:P.nv}},
 anemone:{n:'Anémone',p:35,lv:2,grp:'anemone',rows:["p..p..p",".p.p.p.","p.ppp.p",".ppppp.","..ooo..","..ooo.."],pal:{p:P.pk,o:P.pu}},
 champis:{n:'Champignons roses',p:35,lv:2,grp:'champis',rows:[".ppp.....","pwppp.pp.","ppppppwpp",".ww..pppp",".ww...ww.",".ww...ww."],pal:{p:P.pk,w:P.pe}},
 panneau:{n:'Panneau cœur',p:30,lv:2,grp:'panneau',rows:["bbbbbbbbb","bwwrwrwwb","bwwrrrwwb","bwwwrwwwb","bbbbbbbbb","....b....","....b...."],pal:{b:P.br,w:P.pe,r:P.pk}},
 benitier:{n:'Bénitier à perle',p:60,lv:3,grp:'benitier',rows:["..bbbbbbb..",".bwbwbwbwb.","bbbbbbbbbbb",".ppppwpppp.","bbbbbbbbbbb",".bwbwbwbwb."],pal:{b:P.la,w:P.wh,p:P.pk}},
 ancre:{n:'Ancre',p:55,lv:4,grp:'ancre',rows:["...ggg...","...g.g...","...ggg...","....g....",".ggggggg.","....g....","g...g...g","gg..g..gg",".ggggggg."],pal:{g:P.dk}},
 tasse:{n:'Tasse de thé géante',p:80,lv:4,grp:'tasse',rows:[".w.w......","..w.w.....","ppppppp...","pwpwpwpp.p","pppppppp.p","ppppppppp.",".ppppppp..","bbbbbbbbb."],pal:{p:P.pk,w:P.wh,b:P.wh}},
 lanterne:{n:'Lanterne en papier',p:90,lv:5,grp:'lanterne',glow:P.ye,rows:["..kkk..",".rrrrr.","rryyyrr","ryyyyyr","rryyyrr",".rrrrr.","..kkk..","...k...","...k...","..kkk.."],pal:{r:P.rd,y:P.ye,k:P.dk}},
 bulleur_coeur:{n:'Bulleur à cœurs',p:100,lv:5,grp:'bulleur',hb:true,rows:[".pp.pp.","ppppppp","ppwpppp",".ppppp.","..ppp..","...p...","..ggg.."],pal:{p:P.pk,w:P.wh,g:P.dk}},
 tete:{n:'Tête de pierre',p:120,lv:6,grp:'tete',rows:[".gggggg.","gggggggg","gddggddg","gggggggg","ggggdggg","gggggggg","gggddggg","gggggggg",".gggggg.","gggggggg"],pal:{g:P.dk,d:'#7b7596'}},
 epave:{n:'Épave de bateau',p:180,lv:6,grp:'epave',rows:["......m.........","......m.........","....sssss.......","......m.........","......m....s....","bbbbbbbbbbbbbbb.",".bdbbbdbbbdbbb..","..bbbbbbbbbbb..."],pal:{b:P.br,d:P.dk,m:P.dk,s:P.wh}},
 arcenciel:{n:'Arc-en-ciel',p:150,lv:7,grp:'arcenciel',rows:["....rrrr....","..rroooorr..",".rooyyyyoor.","royygggyyor.","roygg..ggyor","royg....gyor","royg....gyor","ww........ww"],pal:{r:P.rd,o:P.or,y:P.ye,g:P.gr,w:P.wh}},
 maison:{n:'Petite maison',p:220,lv:8,grp:'maison',rows:["....rrr.....","...rrrrr.c..","..rrrrrrrcc.",".rrrrrrrrrr.","rrrrrrrrrrrr",".wwwwwwwwww.",".wbbwwwwbbw.",".wbbwddwbbw.",".wwwwddwwww.",".wwwwddwwww."],pal:{r:P.pk,c:P.dk,w:P.pe,b:P.bl,d:P.br}},
 carton:{n:'Boîte en carton',p:20,lv:1,toy:true,grp:'carton',rows:["bb.......bb",".bb.....bb.","..bbbbbbb..","bdddddddddb","bdbbbbbbbdb","bdbbbbbbbdb","bbbbbbbbbbb"],pal:{b:'#ecd0aa',d:P.br}},
 balle:{n:'Balle à bulles',p:25,lv:1,toy:true,grp:'balle',rows:["..prry..",".pprryy.","ppprryyy","bbbwwyyy","bbbwwggg",".bbwwgg.","..bwwg.."],pal:{p:P.pk,r:P.rd,y:P.ye,b:P.bl,w:P.wh,g:P.gr}},
 coussin:{n:'Coussin coquillage',p:40,lv:1,toy:true,grp:'coussin',rows:["...pwpwp...","..pwpwpwp..",".ppppppppp.","ppppppppppp",".lllllllll."],pal:{p:P.pk,w:P.wh,l:P.la}},
 tunnel:{n:'Tunnel de corail',p:60,lv:2,toy:true,grp:'tunnel',rows:["...pppppp...",".pppwpppwpp.","ppp......ppp","pp........pp","pp........pp","pp........pp"],pal:{p:P.pu,w:P.pk}},
 hamac:{n:"Hamac d'algues",p:70,lv:3,toy:true,grp:'hamac',rows:["k..........k","k..........k","kg........gk","k.gg....gg.k","k...gggg...k","k..........k","kk........kk"],pal:{k:P.br,g:P.gr}},
 disco:{n:'Boule disco',pp:4,lv:3,toy:true,grp:'disco',glow:P.pk,rows:["....k....","....k....","..wbwbw..",".bwbwbwb.","wbwbwbwbw",".bwbwbwb.","..wbwbw.."],pal:{w:P.wh,b:P.la,k:P.dk}},
 lit:{n:'Petit lit douillet',pp:6,lv:4,toy:true,grp:'lit',rows:["pp..........","pwp.........","pwwppppppppp","pwwlllllllll","pppppppppppp","b..........b"],pal:{p:P.pk,w:P.wh,l:P.la,b:P.br}},
 toboggan:{n:'Toboggan',pp:8,lv:5,toy:true,grp:'toboggan',rows:["kk.........","kkp........","k.pp.......","k..pp......","k...pp.....","k....pp....","k.....ppp..","k......pppp"],pal:{k:P.lg,p:P.ye}},
 bambou:{n:"Bambou d'eau",p:30,lv:1,grp:'algue',kelp:{h:34,c1:'#b8e6a0',c2:P.dg}},
 roseaux:{n:'Roseaux',p:20,lv:1,grp:'algue',kelp:{h:22,c1:P.dg,c2:P.gr,n:3}},
 eventail:{n:'Éventail de mer',p:45,lv:2,grp:'corail',rows:["..p.p.p.p..",".p.p.p.p.p.","p.ppppppp.p",".pp.ppp.pp.","..ppppppp..","...ppppp...","....ppp....",".....r.....","....rrr...."],pal:{p:P.la,r:P.pu}},
 tubes:{n:'Coraux tubes',p:40,lv:2,grp:'corail',rows:["o...o..o.","oo.oo.oo.","yo.yo.yo.","oo.oo.oo.","oo.oo.oo.","ooooooooo"],pal:{o:P.or,y:P.ye}},
 mousse:{n:'Rocher moussu',p:30,lv:2,grp:'rocher',rows:["...gggg....","..gGGgGg...",".gGllgggG..","gglggggggg.","gggggggdggg","dggggggdddd"],pal:{g:P.dk,G:P.gr,l:P.lg,d:P.nv}},
 coeurc:{n:'Cœur de corail',p:60,lv:3,grp:'corail',rows:[".pp...pp.","pppp.pppp","ppwpppppp","ppppppppp",".ppppppp.","..ppppp..","...ppp...","....r....","...rrr..."],pal:{p:P.pk,w:P.wh,r:P.pu}},
 banc:{n:'Petit banc',p:50,lv:3,grp:'banc',rows:["bbbbbbbbbbb","bdbdbdbdbdb","bbbbbbbbbbb",".k.......k.",".k.......k."],pal:{b:P.br,d:'#c4906e',k:P.dk}},
 bouee:{n:'Bouée',p:45,lv:3,grp:'bouee',rows:["..rrwrr..",".rr...rr.","rw.....wr","r.......r","rw.....wr",".rr...rr.","..rrwrr.."],pal:{r:P.rd,w:P.wh}},
 tonneau:{n:'Tonneau',p:55,lv:4,grp:'tonneau',rows:[".bbbbbb.","kkkkkkkk","bbbbbbbb","bdbbbbdb","kkkkkkkk","bbbbbbbb",".bbbbbb."],pal:{b:P.br,d:'#c4906e',k:P.dk}},
 phare:{n:'Phare',p:140,lv:6,grp:'phare',glow:P.ye,rows:["...k...","..yyy..","..kkk..","..rwr..","..www..","..rrr..",".wwwww.",".rrrrr.",".wwwww.","rrrrrrr"],pal:{k:P.dk,y:P.ye,r:P.rd,w:P.wh}},
 gateau:{n:'Gâteau fraise',p:60,lv:2,toy:true,grp:'gateau',rows:["...r...","..www..",".pppppp","wwwwwww","ppppppp","bbbbbbb"],pal:{r:P.rd,w:P.wh,p:P.pk,b:P.pe}},
 livres:{n:'Pile de livres',p:55,lv:2,toy:true,grp:'livres',rows:[".bbbbbb.","..rrrrrr","wwwwwwww","gggggg..","yyyyyyy."],pal:{b:P.bl,r:P.rd,w:P.wh,g:P.gr,y:P.ye}},
 piano:{n:'Piano coquillage',pp:5,lv:4,toy:true,grp:'piano',rows:["pppppppppp","pppppppppp","wkwkwwkwkw","wwwwwwwwww","p........p","p........p"],pal:{p:P.pk,w:P.wh,k:P.k}},
 fusee:{n:'Fusée jouet',pp:7,lv:5,toy:true,grp:'fusee',rows:["...r...","..www..","..wbw..","..www..",".rwwwr.","rr.w.rr","...o...","..oyo.."],pal:{r:P.rd,w:P.wh,b:P.bl,o:P.or,y:P.ye}},
 chevalet:{n:'Chevalet de peintre',p:70,lv:3,toy:true,grp:'chevalet',rows:["...b...","..bbb..",".wwwww.",".wpgyw.",".wbbrw.",".wwwww.","..b.b..",".b...b.","b.....b"],pal:{b:P.br,w:P.wh,p:P.pk,g:P.gr,y:P.ye,r:P.rd}},
 potfleur:{n:'Pot de fleurs',p:45,lv:2,toy:true,grp:'potfleur',rows:[".p..y..",".py.p.b","..g.gb.","..ggg..",".ooooo.","..ooo.."],pal:{p:P.pk,y:P.ye,b:P.bl,g:P.gr,o:P.or}},
 chat:{n:'Chat porte-bonheur',p:200,lv:9,grp:'chat',rows:["b...b..","bb.bb..","bbbbb..","bwbwb..","bbpbb.b",".bbbbbb",".bbbbb.",".b..b.."],pal:{b:P.wh,w:P.k,p:P.pk}}
};
const GRPN={galets:'des galets colorés',algue:'des algues',rocher:'un rocher',coquillage:'un coquillage',corail:'un corail',coffre:'un coffre au trésor'};
const UPS={
 filtre:{n:'Filtre',d:'Plus de poissons en même temps',lv:[4,6,8,10],p:[80,200,450],fmt:v=>v+' poissons max'},
 nourriture:{n:'Distributeur',d:'Les poissons arrivent plus vite',lv:[6,4.5,3.5,2.5],p:[60,160,400],fmt:v=>'~1 toutes les '+v+'s'},
 lumiere:{n:'Lampe magique',d:'Attire les poissons rares',lv:[1,1.4,1.9,2.5],p:[120,300,700],fmt:v=>'chance rare ×'+v},
 vitrine:{n:'Vitrine',d:'Plus de résidents par bac',lv:[2,4,6,8],p:[100,250,500],fmt:v=>v+' résidents par bac'}
};
const THEMES={
 ruisseau:{n:'Ruisseau (défaut)',tank:'ruisseau',top:'#e4f8ea',bot:'#98d4c2',far:'#7fbda8',sand:['#f3ead8','#e2d4b6','#cbb999']},
 recif:{n:'Récif (défaut)',tank:'recif',top:'#d8f5ff',bot:'#8ccbea',far:'#74aed6',sand:['#fff1d4','#f5ddb4','#e8c49c']},
 abysses:{n:'Abysses (défaut)',tank:'abysses',top:'#cfc8f4',bot:'#7069b4',far:'#59549c',sand:['#aaa1da','#958bcb','#7e74ba']},
 menthe:{n:'Menthe glacée',p:150,lv:2,top:'#e8fff6',bot:'#9fe0cc',far:'#80c9b2',sand:['#fffaf0','#efe6cc','#d8cca8']},
 bonbon:{n:'Rose bonbon',p:200,lv:3,top:'#ffe8f2',bot:'#f4b4d0',far:'#e39bbd',sand:['#fffaf0','#ffe2cf','#f6bcd6']},
 lavande:{n:'Lavande',p:250,lv:5,top:'#efe9ff',bot:'#b4a9e2',far:'#9c91d2',sand:['#f6f2ff','#ded4f6','#c6b8ea']},
 citron:{n:'Citron rosé',p:300,lv:7,top:'#fff7c8',bot:'#ffc0d0',far:'#f0a6bb',sand:['#fff1d4','#ffe0a8','#f5c4a0']}
};
const need=lv=>80+(lv-1)*60;
const FOODS={
 flocons:{n:'Flocons simples',p:10,h:2,q:1,d:'Le classique. Quelques visites.'},
 granules:{n:'Granulés croquants',p:30,h:4,q:2,d:'Plus de visiteurs.'},
 crevettes:{n:'Crevettes séchées',p:60,h:6,q:3,d:'Les rares commencent à venir.'},
 plancton:{n:'Plancton frais',pp:2,h:8,q:4,d:'Très apprécié des poissons rares.'},
 sushi:{n:'Sushi doré',pp:5,h:8,q:5,d:'Les légendaires ne résistent pas…'}
};
const FQ_RATE=[0,.75,.9,1.05,1.2,1.35],FQ_RARE=[0,1,1.3,1.8,2.6,3.8];
const FAVO={guppy:['balle','champis'],neon:['tunnel','algue_bleue'],rouge:['tasse','balle'],koi:['lanterne','coussin'],axolotl:['lit','champis'],lune:['disco','cristal'],
 clown:['anemone','corail'],hippo:['kelp','hamac'],tortue:['hamac','epave'],pieuvre:['tasse','coffre'],requinchat:['carton','tunnel'],dragon:['chateau','coffre'],
 requinbaleine:['epave','arcenciel'],phenix:['lanterne','cristal'],baleine:['epave','maison'],meduse:['disco','champi'],lanterne:['lanterne','champi'],bernard:['coquillage','carton'],
 bernardor:['benitier','coffre'],crabe:['rocher','carton'],marteau:['ancre','epave'],mante:['disco','galets'],fantome:['chateau','tete'],anguille:['tunnel','racine']};
function favOf(sp){if(sp.visitOnly)return[sp.toy];if(FAVO[sp.id])return FAVO[sp.id];const r=mulberry(hash(sp.id));
 const g=sp.beh==='walk'?['coquillage','carton','benitier']:sp.beh==='bottom'?['galets','coussin','herbe','lit']:sp.beh==='drift'?['algue','kelp','hamac','tasse']:
  ['shark','hammer','eel'].includes(sp.sh)?['epave','ancre','tunnel','racine']:['balle','coussin','anemone','champis','tunnel','panneau','bulleur_coeur','maison'];return shuffle(g,r).slice(0,2)}
SPECIES.forEach(sp=>sp.fav=favOf(sp));
const SOUV=['Écaille brillante','Bulle porte-bonheur','Petite perle','Coquillage gravé','Nageoire de soie','Galet cœur','Ruban d\'algue','Étoile de sable'];
const HEARTS=[1,3,6,10,15];const heartsOf=v=>HEARTS.map(t=>v>=t?'♥︎':'♡').join('');
const fmtDur=ms=>{const m=Math.max(0,Math.round(ms/6e4));return m>=60?Math.floor(m/60)+'h'+String(m%60).padStart(2,'0'):m+' min'};
const fmtH=t=>{const d=new Date(t);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')};

/* ================= SAUVEGARDE ================= */
const KEY='aquapixel_v1',AKEY='aquapixel_album_v1';
function defTanks(){return{
 ruisseau:{decor:[{t:'algue',x:40,y:136},{t:'kelp',x:230,y:140},{t:'rocher',x:80,y:139},{t:'algue_rose',x:300,y:134},{t:'galets',x:400,y:138},{t:'algue',x:470,y:140}],res:[],theme:null},
 recif:{decor:[{t:'rocher',x:70,y:139},{t:'algue_rose',x:180,y:136},{t:'coquillage',x:330,y:138},{t:'kelp',x:450,y:140}],res:[],theme:null},
 abysses:{decor:[{t:'rocher',x:110,y:139},{t:'kelp',x:260,y:140},{t:'rocher',x:420,y:137}],res:[],theme:null}}}
function defSave(){return{v:2,coins:40,caught:{},photo:{},inv:{},tanks:defTanks(),cur:'ruisseau',up:{filtre:0,nourriture:0,lumiere:0,vitrine:0},themes:[],lastDay:'',sound:true,music:false,total:0,intro:false,lv:1,xp:0,quests:{day:'',list:[]},acc:{},accOwned:[],pearls:0,visits:{},log:[],souv:{},simT:0,uidN:1,v3:false}}
let S;
try{const raw=JSON.parse(localStorage.getItem(KEY)||'{}');S=Object.assign(defSave(),raw);
 if(!raw.v||raw.v<2){ // migration v1 -> v2
  const T=defTanks();if(Array.isArray(raw.decor))T.ruisseau.decor=raw.decor.map(d=>({t:d.t,x:Math.round(d.x*2),y:d.y+(d.y<124?18:0)}));
  (raw.res||[]).forEach(id=>{const sp=byId[id];if(sp)T[sp.hab].res.push(id)});S.tanks=T;
  let xp=0;for(const id in S.caught){const sp=byId[id];if(sp)xp+=10+RAR[sp.r].xp*S.caught[id]}
  S.lv=1;S.xp=0;S.themes=(raw.themes||[]).filter(t=>THEMES[t]&&!THEMES[t].tank);delete S.decor;delete S.res;delete S.theme;S.v=2;
  S._pendingXP=xp}
}catch(e){S=defSave()}
S.acc=S.acc||{};delete S.resP;S.accOwned=S.accOwned||[];S.visits=S.visits||{};S.log=S.log||[];S.souv=S.souv||{};S.pearls=S.pearls||0;S.uidN=S.uidN||1;S.up=Object.assign({filtre:0,nourriture:0,lumiere:0,vitrine:0},S.up);for(const t in TANKS)if(!S.tanks[t])S.tanks[t]=defTanks()[t];
const nextUid=()=>S.uidN++;
for(const t in S.tanks){const tk=S.tanks[t];tk.visits=tk.visits||[];tk.gifts=tk.gifts||[];if(tk.food===undefined)tk.food=null;tk.decor.forEach(d=>{if(!d.uid)d.uid=nextUid()})}
if(!S.v3){S.v3=true;S.pearls+=3;S.inv.carton=(S.inv.carton||0)+1;S.tanks.ruisseau.food={type:'flocons',until:Date.now()+2*36e5};S.simT=Date.now();S._v3news=true}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
let album=[];try{album=JSON.parse(localStorage.getItem(AKEY)||'[]')}catch(e){album=[]}
function saveAlbum(){while(true){try{localStorage.setItem(AKEY,JSON.stringify(album));return true}catch(e){if(album.length>1)album.pop();else return false}}}
const upv=k=>UPS[k].lv[S.up[k]];
const TK=()=>S.tanks[S.cur];
const themeOf=t=>THEMES[S.tanks[t].theme||TANKS[t].theme];

/* ================= SPRITE CACHE ================= */
const sprCache={};
function spr(sp,v=''){const k=sp.id+'|'+v;if(sprCache[k])return sprCache[k];
 if(v==='sil')return sprCache[k]=buildHD(SHAPES[sp.sh],()=>'#bdb6d6',null,stepsOf(sp));
 const happy=v.endsWith('h'),v2=happy?v.slice(0,-1):v,anim=v2.endsWith('a'),base=anim?v2.slice(0,-1):v2,rows=anim?frame2(sp.sh):SHAPES[sp.sh];let col;
 if(base.startsWith('rb')){const i=+base.slice(2),rb=[P.rd,P.or,P.ye,P.gr,P.bl,P.pk];col=ch=>(ch==='w'||ch==='k')?rb[i%6]:FIX[ch]||(ch==='l'?P.wh:rb[(i+(ch==='f'?2:ch==='d'?4:0))%6])}
 else col=ch=>(ch==='w'||ch==='k')?sp.c.b:FIX[ch]||sp.c[ch]||(ch==='s'?(sp.c.d||sp.c.b):sp.c.b);
 return sprCache[k]=buildHD(rows,col,OUT,stepsOf(sp),cuteFace(rows,happy))}
const dCache={};
function dspr(t){if(dCache[t])return dCache[t];const d=DECOR[t];
 if(d.kelp){const k=d.kelp,c=document.createElement('canvas');c.width=24;c.height=k.h*2+2;const x=c.getContext('2d');x.scale(2,2);for(let i=0;i<k.h;i+=.5){x.fillStyle=(i%6<3)?k.c1:k.c2;x.fillRect(4.5,k.h-i,2.5,.5);if(Math.floor(i)%5===2&&i%1===0){x.fillStyle=k.c1;x.fillRect(i%10<5?7:1.5,k.h-i,2.5,1)}}return dCache[t]=c}
 return dCache[t]=buildHD(d.rows,ch=>d.pal[ch])}
const HEART=buildHD([".r.r.","rrrrr","rrrrr",".rrr.","..r.."],()=>P.pk,OUT,[2]);
const fsc=sp=>.5;const tpx=sp=>sp.sc||2;
const ACC={
 noeud:{n:'Nœud rose',p:30,lv:1,type:'top',rows:["pp.pp","ppkpp","pp.pp"],pal:{p:P.pk,k:P.rd}},
 fleur:{n:'Petite fleur',p:25,lv:1,type:'top',rows:[".p.","pyp",".p."],pal:{p:P.pk,y:P.ye}},
 joues:{n:'Joues roses',p:20,lv:1,type:'cheek'},
 lunettes:{n:'Lunettes rondes',p:40,lv:2,type:'eye',rows:["kkkk","k..k","kkkk"],pal:{k:OUT}},
 chats:{n:'Oreilles de chat',p:45,lv:2,type:'top',rows:["k...k","kk.kk"],pal:{k:P.pk}},
 bonnet:{n:'Bonnet',p:50,lv:2,type:'top',rows:["..w..",".bbb.","bbbbb","wwwww"],pal:{b:P.bl,w:P.wh}},
 casquette:{n:'Casquette',p:50,lv:3,type:'top',rows:[".rrr...","rrrrr..","rrrrrrr"],pal:{r:P.gr}},
 couronne_f:{n:'Couronne de fleurs',p:60,lv:3,type:'top',rows:["p.y.b","ggggg"],pal:{p:P.pk,y:P.ye,b:P.bl,g:P.gr}},
 etoile:{n:'Barrette étoile',p:60,lv:4,type:'top',rows:["..y..","yyyyy",".y.y."],pal:{y:P.ye}},
 coeur:{n:'Lunettes cœur',p:70,lv:4,type:'eye',rows:[".r.r.","rrrrr",".rrr.","..r.."],pal:{r:P.rd}},
 soleil:{n:'Lunettes de soleil',p:70,lv:4,type:'eye',rows:["kkkk","kwkk","kkkk"],pal:{k:OUT,w:P.wh}},
 hautforme:{n:'Haut-de-forme',p:90,lv:5,type:'top',rows:[".kkk.",".kkk.",".rrr.","kkkkk"],pal:{k:'#7a6fa3',r:P.pk}},
 sorciere:{n:'Chapeau de sorcière',p:90,lv:5,type:'top',rows:["...k.","..kk.",".kkk.",".kkk.","kpkkk"],pal:{k:P.pu,p:P.ye}},
 aureole:{n:'Auréole',p:120,lv:6,type:'halo',rows:[".yyy.","y...y",".yyy."],pal:{y:P.ye}},
 etoilelun:{n:'Lunettes étoile',p:80,lv:5,type:'eye',rows:["..y..","yyyyy",".yyy.","y...y"],pal:{y:P.ye}},
 monocle:{n:'Monocle',p:60,lv:3,type:'eye',rows:["kkk","k.k","kkk"],pal:{k:'#e0b830'}},
 masque:{n:'Masque de plongée',p:75,lv:4,type:'eye',rows:["kkkkk","kbbbk","kbbbk","kkkkk"],pal:{k:P.or,b:P.bl}},
 coquillages:{n:'Couronne de coquillages',p:70,lv:3,type:'top',rows:["p.o.p","wwwww"],pal:{p:P.pk,o:P.pe,w:P.wh}},
 paille:{n:'Chapeau de paille',p:55,lv:2,type:'top',rows:["..yyy..","..rrr..","yyyyyyy"],pal:{y:P.ye,r:P.rd}},
 diademe:{n:'Diadème',p:110,lv:6,type:'top',rows:["..b..","y.y.y","yyyyy"],pal:{y:P.ye,b:P.bl}},
 antennes:{n:'Antennes cœur',p:50,lv:2,type:'top',rows:["p...p",".k.k.","..k.."],pal:{p:P.pk,k:P.dk}},
 hibiscus:{n:'Fleur d\'hibiscus',p:45,lv:1,type:'top',rows:[".r.r.","rryrr",".rrr."],pal:{r:P.rd,y:P.ye}},
 cowboy:{n:'Chapeau de cowboy',p:90,lv:5,type:'top',rows:["..bbb..",".bbbbb.","b.ddd.b","bbbbbbb"],pal:{b:P.br,d:'#c4906e'}},
 nuit:{n:'Bonnet de nuit',p:65,lv:3,type:'top',rows:["....w","...bb","..bbb",".bbbb","wwwww"],pal:{b:P.la,w:P.wh}},
 licorne:{n:'Corne de licorne',p:150,lv:7,type:'top',rows:["..y..","..p..",".yyy.",".ppp."],pal:{y:P.ye,p:P.pk}},
 fraise:{n:'Chapeau fraise',p:70,lv:4,type:'top',rows:[".ggg.","rrrrr","ryrry","rrrrr"],pal:{g:P.gr,r:P.rd,y:P.ye}},
 couronne:{n:'Couronne royale',p:200,lv:8,type:'top',rows:["y.y.y","yyyyy","ypyby"],pal:{y:P.ye,p:P.pk,b:P.bl}}
};
const aCache={},ANCH={};
const accSpr=id=>aCache[id]||(aCache[id]=buildHD(ACC[id].rows,ch=>ACC[id].pal[ch],ACC[id].type==='eye'?null:OUT,[2]));
function anchor(sh){if(ANCH[sh])return ANCH[sh];const rows=SHAPES[sh];let ex=-1,ey=-1;for(const ch of ['w','k'])if(ex<0)rows.forEach((r,j)=>{const i=r.indexOf(ch);if(i>=0&&ex<0){ex=i;ey=j}});if(ex<0){ex=Math.floor(rows[0].length*.7);ey=1}
 let top=ey;for(let j=0;j<rows.length;j++){if(rows[j][ex]&&rows[j][ex]!=='.'){top=j;break}}return ANCH[sh]={ex,ey,top}}
// repère les yeux et le haut de la tête directement sur le dessin du poisson
const AANC={};
function accAnchor(sp){if(AANC[sp.id])return AANC[sp.id];const s=spr(sp),w=s.width,h=s.height,d=s.getContext('2d').getImageData(0,0,w,h).data;
 const op=(x,y)=>x>=0&&y>=0&&x<w&&y<h&&d[(y*w+x)*4+3]>128,lum=(x,y)=>{const i=(y*w+x)*4;return .3*d[i]+.59*d[i+1]+.11*d[i+2]};
 const find=(L,r)=>{const m=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++){if(!op(x,y)||lum(x,y)>L)continue;let ok=true;for(let j=-r;j<=r&&ok;j++)for(let i=-r;i<=r;i++)if(!op(x+i,y+j)){ok=false;break}if(ok)m.push([x,y])}return m};
 let pts=find(100,2);if(!pts.length)pts=find(120,1);
 const seen=new Set(),cl=[];for(const p of pts){const k=p+'';if(seen.has(k))continue;const st=[p],c=[];seen.add(k);while(st.length){const [x,y]=st.pop();c.push([x,y]);for(const q of pts){const kk=q+'';if(!seen.has(kk)&&Math.abs(q[0]-x)<=1&&Math.abs(q[1]-y)<=1){seen.add(kk);st.push(q)}}}
  cl.push({x:c.reduce((a,p)=>a+p[0],0)/c.length,y:c.reduce((a,p)=>a+p[1],0)/c.length,n:c.length})}
 const big=cl.filter(c=>c.n>=2);const C=(big.length?big:cl).sort((a,b)=>b.x-a.x);
 let ex,ey,pair=false;if(C.length){ex=C[0].x;ey=C[0].y;const o=C.find((c,i)=>i>0&&Math.abs(c.y-ey)<=3&&ex-c.x<w*.45&&ex-c.x>2);if(o){ex=(ex+o.x)/2;ey=(ey+o.y)/2;pair=true}}
 else{ex=w*.72;ey=h*.4}
 let same=0,tot=0;for(let y=0;y<h*.55;y++)for(let x=0;x<w>>1;x++){const a1=op(x,y),a2=op(w-1-x,y);if(a1||a2){tot++;if(a1===a2)same++}}const sym=tot&&same/tot>.9;
 if(sym){ex=(w-1)/2;pair=true}
 ex=Math.round(ex);ey=Math.round(ey);
 const topAt=x=>{for(let y=0;y<h;y++)if(op(x,y))return y;return ey};
 const hx=pair?ex:Math.round(ex-Math.max(2,w*.04)),top=Math.min(topAt(hx),topAt(hx-1),topAt(hx+1));
 return AANC[sp.id]={ex,ey,hx,top,w,h,pair}}
function drawAcc(c,sp,pxs,w,h,id){const a=ACC[id];if(!a)return;const an=accAnchor(sp),sc=w/an.w,ox=-w/2,oy=-h/2;
 const m=Math.max(tpx(sp)/2,Math.min(2,Math.round(an.h/34*2)/2)),u=sc*m;
 if(a.type==='cheek'){c.fillStyle='#ff8fb8';const cx=ox+(an.ex-(an.pair?0:3))*sc,cy=oy+(an.ey+3)*sc;c.fillRect(cx-3*u,cy,5*u,2*u);return}
 const A=accSpr(id),aw=A.width*u,ah=A.height*u;let x,y;
 if(a.type==='eye'){x=ox+(an.ex+.5)*sc-aw/2;y=oy+(an.ey+.5)*sc-ah/2}
 else{x=ox+(an.hx+.5)*sc-aw/2;y=oy+an.top*sc-ah+3*u-(a.type==='halo'?6*u:0)}
 c.drawImage(A,Math.round(x*2)/2,Math.round(y*2)/2,aw,ah)}

/* ================= CANVAS & DÉCORS ================= */
const Q=2,q=v=>Math.round(v*Q)/Q;const cv=$('#game'),ctx=cv.getContext('2d');cv.width=W*Q;cv.height=VH*Q;ctx.imageSmoothingEnabled=false;
const sandTop=x=>SAND+Math.round(Math.sin(x*.07)*1.5+Math.sin(x*.19));
const bgCache={};
function waterBg(th){const k='w'+th.top+th.bot;if(bgCache[k])return bgCache[k];const c=document.createElement('canvas');c.width=W*Q;c.height=H*Q;const x=c.getContext('2d');x.scale(Q,Q);const N=12,bh=SAND/N;
 for(let i=0;i<N;i++){x.fillStyle=mix(th.top,th.bot,i/(N-1));x.fillRect(0,Math.floor(i*bh),W,Math.ceil(bh)+1)}
 for(let i=0;i<N-1;i++){x.fillStyle=mix(th.top,th.bot,(i+1)/(N-1));const yb=Math.floor((i+1)*bh)-1;for(let yy=yb;yy<yb+1.5;yy+=.5)for(let xx=(yy*2)%2/2;xx<W;xx+=1)x.fillRect(xx,yy,.5,.5)}
 x.fillStyle=th.bot;x.fillRect(0,SAND-2,W,H-SAND+2);return bgCache[k]=c}
let FW=W+(WW-W)/2;
function farBg(tank,th){const k='f'+tank+th.far;if(bgCache[k])return bgCache[k];const c=document.createElement('canvas');c.width=FW*Q;c.height=H*Q;const x=c.getContext('2d');x.scale(Q,Q);x.fillStyle=th.far;const r=mulberry(hash(tank));const st=TANKS[tank].style;
 if(st==='reeds'){for(let i=0;i<34;i++){const bx=Math.floor(r()*FW),h=30+Math.floor(r()*55),bend=r()*6-3;for(let j=0;j<h;j+=.5){const xx=q(bx+bend*(j/h)**2);x.fillRect(xx,SAND-j,1.5,.5);if(j>h*.4&&j%9===0){x.fillRect(xx+(j%18?1.5:-2.5),SAND-j,2.5,.5)}}
   if(r()<.3){x.fillRect(bx-1,SAND-h-6,4,7)}}
  for(let i=0;i<10;i++){const bx=Math.floor(r()*FW),w=10+Math.floor(r()*18),h=5+Math.floor(r()*7);for(let yy=0;yy<h;yy++){const ww=Math.round(w*Math.sqrt(1-(yy/h)**2));x.fillRect(bx-ww,SAND-yy,ww*2,1)}}}
 else if(st==='coral'){for(let i=0;i<16;i++){const bx=Math.floor(r()*FW),n=2+Math.floor(r()*4);for(let b=0;b<n;b++){const ox=bx+Math.floor(r()*16-8),h=12+Math.floor(r()*30);x.fillRect(ox,SAND-h,3,h);x.fillRect(ox-1,SAND-h-2,5,3);if(r()<.6){const sh=Math.floor(h*.5);x.fillRect(ox-5,SAND-sh,5,2);x.fillRect(ox-5,SAND-sh-6,2,6)}}}
  for(let i=0;i<9;i++){const bx=Math.floor(r()*FW),R=8+Math.floor(r()*10);for(let a=0;a<Math.PI;a+=.12)for(let d=2;d<R;d+=3)x.fillRect(Math.round(bx+Math.cos(a)*d),Math.round(SAND-Math.sin(a)*d),1,1)}
  for(let i=0;i<8;i++){const bx=Math.floor(r()*FW),w=8+Math.floor(r()*12),h=6+Math.floor(r()*8);for(let yy=0;yy<h;yy++){const ww=Math.round(w*Math.sqrt(1-(yy/h)**2));x.fillRect(bx-ww,SAND-yy,ww*2,1)}}}
 else{for(let i=0;i<14;i++){const bx=Math.floor(r()*FW),h=30+Math.floor(r()*70),w=6+Math.floor(r()*10);for(let yy=0;yy<h;yy++){const ww=Math.max(1,Math.round(w*(1-yy/h)+Math.sin(yy*.4+i)*1.5));x.fillRect(bx-ww,SAND-yy,ww*2,1)}}
  x.fillStyle=P.wh;for(let i=0;i<60;i++)x.fillRect(q(r()*FW),q(r()*SAND),.5,.5)}
 return bgCache[k]=c}
function sandBg(tank,th){const k='s'+tank+th.sand.join();if(bgCache[k])return bgCache[k];const c=document.createElement('canvas');c.width=WW*Q;c.height=H*Q;const x=c.getContext('2d');x.scale(Q,Q);const r=mulberry(hash(tank+'s'));
 for(let xx=0;xx<WW;xx+=.5){const t=q(SAND+Math.sin(xx*.07)*1.5+Math.sin(xx*.19));x.fillStyle=th.sand[0];x.fillRect(xx,t,.5,H-t);x.fillStyle=th.sand[1];x.fillRect(xx,t,.5,.5);x.fillStyle='rgba(255,255,255,.6)';x.fillRect(xx,t-.5,.5,.5)}
 for(let i=0;i<1600;i++){const xx=q(r()*WW),yy=SAND+3+q(r()*(H-SAND-3));x.fillStyle=r()<.6?th.sand[1]:th.sand[2];x.fillRect(xx,yy,.5,.5)}
 const st=TANKS[tank].style;
 if(st==='reeds'){const cols=[P.pk,P.bl,P.gr,P.ye,P.la,P.lg];for(let i=0;i<90;i++){const xx=Math.floor(r()*WW),yy=SAND+4+Math.floor(r()*(H-SAND-6)),w=1.5+q(r()*2);x.fillStyle=OUT;x.globalAlpha=.25;x.fillRect(xx+.5,yy+.5,w,1.5);x.globalAlpha=1;x.fillStyle=pick(cols,r);x.fillRect(xx,yy,w,1.5);x.fillStyle=P.wh;x.fillRect(xx+.5,yy,.5,.5)}}
 else if(st==='coral'){for(let i=0;i<30;i++){const xx=Math.floor(r()*WW),yy=SAND+6+Math.floor(r()*(H-SAND-8));x.fillStyle=pick([P.pe,P.wh,P.pk],r);x.fillRect(xx,yy,1.5,.5);x.fillRect(xx+.5,yy-.5,.5,.5)}}
 else{for(let i=0;i<40;i++){const xx=Math.floor(r()*WW),yy=SAND+4+Math.floor(r()*(H-SAND-6));x.fillStyle=pick([P.la,P.lg],r);x.fillRect(xx,yy,1,.5)}}
 return bgCache[k]=c}

/* ================= MONDE CONTINU ================= */
const ZONES=Object.keys(TANKS),WWT=WW*ZONES.length,zoff=t=>ZONES.indexOf(t)*WW;
const CAM={x:0,t:0,v:0};let EOX=0;
const openCount=()=>ZONES.filter(tankOpen).length;
const maxCam=()=>Math.max(0,openCount()*WW-W+(openCount()<ZONES.length?44:0));
const smooth=t=>t*t*(3-2*t);
function zoneW(x,B){const w=ZONES.map(()=>0),i=clamp(Math.floor(x/WW),0,ZONES.length-1);w[i]=1;
 const bR=(i+1)*WW,bL=i*WW;
 if(i<ZONES.length-1&&x>bR-B/2){const t=smooth(clamp((x-(bR-B/2))/B,0,1));w[i]=1-t;w[i+1]=t}
 else if(i>0&&x<bL+B/2){const t=smooth(clamp((x-(bL-B/2))/B,0,1));w[i]=t;w[i-1]=1-t}return w}
const zoneAt=x=>ZONES[clamp(Math.floor(x/WW),0,ZONES.length-1)];
function mixN(cols,w){const r=[0,0,0];cols.forEach((c,i)=>{if(!w[i])return;const a=hx(c);r[0]+=a[0]*w[i];r[1]+=a[1]*w[i];r[2]+=a[2]*w[i]});return'rgb('+r.map(Math.round).join(',')+')'}
function mixA(a,b,t){const A=a.match(/\d+/g).map(Number),B2=b.match(/\d+/g).map(Number);return'rgb('+A.map((v,i)=>Math.round(v+(B2[i]-v)*t)).join(',')+')'}
const themesKey=()=>ZONES.map(t=>themeOf(t).top+themeOf(t).bot+themeOf(t).sand.join()+themeOf(t).far).join('|');
function worldWater(){const k='WW'+themesKey();if(bgCache[k])return bgCache[k];const c=document.createElement('canvas');c.width=WWT*Q;c.height=SAND*Q+8;const x=c.getContext('2d');const N=12,bh=SAND/N,ths=ZONES.map(themeOf);
 for(let px=0;px<WWT*Q;px++){const w=zoneW(px/Q,160),top=mixN(ths.map(t=>t.top),w),bot=mixN(ths.map(t=>t.bot),w);
  for(let i=0;i<N;i++){const y0=Math.floor(i*bh*Q),y1=Math.floor((i+1)*bh*Q)+1;x.fillStyle=mixA(top,bot,i/(N-1));x.fillRect(px,y0,1,y1-y0)}
  for(let i=0;i<N-1;i++){x.fillStyle=mixA(top,bot,(i+1)/(N-1));const yb=Math.floor((i+1)*bh*Q)-2;for(let yy=yb;yy<yb+2;yy++)if((px+yy)%2)x.fillRect(px,yy,1,1)}
  x.fillStyle=bot;x.fillRect(px,SAND*Q-2,1,10)}
 return bgCache[k]=c}
const FWT=WWT*.5+440;
function worldFar(){const k='WF'+themesKey();if(bgCache[k])return bgCache[k];const c=document.createElement('canvas');c.width=FWT*Q;c.height=H*Q;const x=c.getContext('2d');x.scale(Q,Q);const r=mulberry(77),ths=ZONES.map(themeOf);
 const n=Math.round(FWT/9);
 for(let e=0;e<n;e++){const fx=r()*FWT,wx=clamp(fx*2-W*.5,0,WWT-1),w=zoneW(wx,180);let pk=r(),zi=0;for(;zi<w.length-1;zi++){if(pk<w[zi])break;pk-=w[zi]}
  const st=TANKS[ZONES[zi]].style;x.fillStyle=mixN(ths.map(t=>t.far),w);
  if(st==='reeds'){if(r()<.75){const h=30+r()*55,bend=r()*6-3;for(let j=0;j<h;j+=.5){const xx=q(fx+bend*(j/h)**2);x.fillRect(xx,SAND-j,1.5,.5);if(j>h*.4&&j%9===0)x.fillRect(xx+(j%18?1.5:-2.5),SAND-j,2.5,.5)}if(r()<.3)x.fillRect(q(fx)-1,SAND-h-6,3,6.5)}
   else{const w2=10+r()*16,h=5+r()*7;for(let yy=0;yy<h;yy+=.5){const ww=q(w2*Math.sqrt(1-(yy/h)**2));x.fillRect(q(fx)-ww,SAND-yy,ww*2,.5)}}}
  else if(st==='coral'){const t2=r();if(t2<.6){const nb=2+Math.floor(r()*3);for(let b=0;b<nb;b++){const ox=q(fx+r()*14-7),h=12+r()*28;x.fillRect(ox,SAND-h,2.5,h);x.fillRect(ox-1,SAND-h-1.5,4.5,2.5);if(r()<.6){const sh=q(h*.5);x.fillRect(ox-4.5,SAND-sh,4.5,1.5);x.fillRect(ox-4.5,SAND-sh-5,1.5,5)}}}
   else{const R=8+r()*10;for(let a=0;a<Math.PI;a+=.1)for(let d=2;d<R;d+=2.5)x.fillRect(q(fx+Math.cos(a)*d),q(SAND-Math.sin(a)*d),.5,.5)}}
  else{const h=30+r()*70,w2=6+r()*10;for(let yy=0;yy<h;yy+=.5){const ww=Math.max(.5,q(w2*(1-yy/h)+Math.sin(yy*.4+e)*1.5));x.fillRect(q(fx)-ww,SAND-yy,ww*2,.5)}if(r()<.5){x.fillStyle=P.wh;x.fillRect(q(fx+r()*20-10),q(r()*SAND),.5,.5)}}}
 return bgCache[k]=c}
function worldSand(){const k='WS'+themesKey();if(bgCache[k])return bgCache[k];const c=document.createElement('canvas');c.width=WWT*Q;c.height=H*Q;const x=c.getContext('2d');x.scale(Q,Q);const r=mulberry(99),ths=ZONES.map(themeOf);
 for(let xx=0;xx<WWT;xx+=.5){const w=zoneW(xx,120),t=q(SAND+Math.sin(xx*.07)*1.5+Math.sin(xx*.19));x.fillStyle=mixN(ths.map(t2=>t2.sand[0]),w);x.fillRect(xx,t,.5,H-t);x.fillStyle=mixN(ths.map(t2=>t2.sand[1]),w);x.fillRect(xx,t,.5,.5);x.fillStyle='rgba(255,255,255,.6)';x.fillRect(xx,t-.5,.5,.5)}
 for(let i=0;i<4800;i++){const xx=q(r()*WWT),yy=SAND+3+q(r()*(H-SAND-3)),w=zoneW(xx,120);x.fillStyle=mixN(ths.map(t2=>r()<.6?t2.sand[1]:t2.sand[2]),w);x.fillRect(xx,yy,.5,.5)}
 for(let i=0;i<260;i++){const xx=q(r()*WWT),yy=SAND+4+q(r()*(H-SAND-6)),w=zoneW(xx,120);let pk=r(),zi=0;for(;zi<w.length-1;zi++){if(pk<w[zi])break;pk-=w[zi]}const st=TANKS[ZONES[zi]].style;
  if(st==='reeds'){const ww=1.5+q(r()*2);x.fillStyle=OUT;x.globalAlpha=.25;x.fillRect(xx+.5,yy+.5,ww,1.5);x.globalAlpha=1;x.fillStyle=pick([P.pk,P.bl,P.gr,P.ye,P.la,P.lg],r);x.fillRect(xx,yy,ww,1.5);x.fillStyle=P.wh;x.fillRect(xx+.5,yy,.5,.5)}
  else if(st==='coral'){if(r()<.5){x.fillStyle=pick([P.pe,P.wh,P.pk],r);x.fillRect(xx,yy,1.5,.5);x.fillRect(xx+.5,yy-.5,.5,.5)}}
  else{x.fillStyle=pick([P.la,P.lg,P.bl],r);x.fillRect(xx,yy,1,.5)}}
 return bgCache[k]=c}

/* ================= SON ================= */
let AC=null;
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume().catch(()=>{});return AC}
function tone(f,d,type='square',v=.05,delay=0,slide=0,force=false){const a=AC;if(!a||(!S.sound&&!force))return;const t=a.currentTime+delay,o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.03)}
function noise(d,v=.08){const a=AC;if(!a||!S.sound)return;const b=a.createBuffer(1,a.sampleRate*d,a.sampleRate),ch=b.getChannelData(0);for(let i=0;i<ch.length;i++)ch[i]=(Math.random()*2-1)*(1-i/ch.length);const s=a.createBufferSource(),g=a.createGain();g.gain.value=v;s.buffer=b;s.connect(g);g.connect(a.destination);s.start()}
const SFX={
 catch:()=>[660,880,1320].forEach((f,i)=>tone(f,.09,'square',.045,i*.06)),
 coin:()=>{tone(988,.06,'square',.045);tone(1319,.14,'square',.045,.06)},
 pop:()=>tone(420,.07,'square',.035,0,1300),
 click:()=>tone(520,.04,'square',.03),
 heart:()=>{tone(784,.08,'triangle',.06);tone(1047,.12,'triangle',.06,.08)},
 rare:()=>[523,659,784,1047].forEach((f,i)=>tone(f,.15,'triangle',.07,i*.1)),
 legend:()=>[392,523,659,784,1047,1319,1568].forEach((f,i)=>tone(f,.22,'triangle',.08,i*.11)),
 level:()=>[523,659,784,659,784,1047].forEach((f,i)=>tone(f,.16,'square',.05,i*.09)),
 photo:()=>{noise(.12,.12);tone(1800,.03,'square',.03,.02)},
 buy:()=>[784,988,1175].forEach((f,i)=>tone(f,.08,'square',.04,i*.05)),
 bad:()=>tone(220,.18,'square',.04,0,110),
 place:()=>tone(330,.06,'triangle',.06,0,220),
 swoosh:()=>tone(300,.15,'triangle',.04,0,700)
};
const SCALE=[262,294,330,392,440,523,587,659,784];let mT=0,mI=4,mStep=0;
function music(dt){if(!S.music||!AC)return;mT-=dt;if(mT>0)return;mT=.45;mI=clamp(mI+Math.floor(rand(-2,3)),0,SCALE.length-1);
 if(Math.random()<.8)tone(SCALE[mI],.5,'triangle',.022,0,0,true);if(mStep%4===0)tone(SCALE[[0,3,1,2][(mStep/4)%4|0]]/2,1.6,'triangle',.02,0,0,true);mStep++}

/* ================= ÉTAT ================= */
const RT={};for(const t in TANKS)RT[t]={fish:[],cam:0,camT:0};
let syncT=0,parts=[],floats=[],bubbles=[],banner=null,T=0,flash=0,spawnT=2,decoMode=false,held=null,ptr={x:-99,y:-99},chestT=8,lastClock='',navDir=0;
const plankton=Array.from({length:200},()=>({x:Math.random()*WWT,y:Math.random()*SAND,ph:Math.random()*6,s:rand(.3,1)}));
const fishOf=()=>RT[S.cur].fish;
const cam=()=>RT[S.cur].cam;
const poolCache={};
function dailyPool(now,tank){const k=dkey(now)+tank+'|'+S.lv;if(poolCache[k])return poolCache[k];const r=mulberry(hash(k)),cf=TANKS[tank];
 const cs=shuffle(SPECIES.filter(s=>s.hab===tank&&s.r==='c'&&!s.cond&&lvOk(s)),r).slice(0,cf.poolC),us=shuffle(SPECIES.filter(s=>s.hab===tank&&s.r==='u'&&!s.cond&&lvOk(s)),r).slice(0,cf.poolU);
 return poolCache[k]=[...cs,...us].map(s=>s.id)}
const hasGrp=(g,tank)=>S.tanks[tank].decor.some(d=>DECOR[d.t]&&DECOR[d.t].grp===g);
const needsOk=sp=>!sp.needs||sp.needs.every(g=>hasGrp(g,sp.hab));
const tankOpen=t=>TANKS[t]?S.lv>=TANKS[t].lv:true;
function eligible(now,tank){const pool=dailyPool(now,tank);return SPECIES.filter(sp=>sp.hab===tank&&lvOk(sp)&&(sp.cond?sp.cond(now):pool.includes(sp.id))&&needsOk(sp))}

function yRange(sp,h){if(sp.beh==='walk')return[127,137];if(sp.beh==='bottom')return[SAND-h/2-4,SAND-h/2+1];return[Math.min(12,-OY+20)+h/2,SAND-8-h/2]}
function spawnFish(sp,resident=false,tank=S.cur){const s=spr(sp),sc=fsc(sp),w=s.width*sc,h=s.height*sc,dir=Math.random()<.5?1:-1;const [y0,y1]=yRange(sp,h);const y=rand(y0,y1);
 const slow=sp.beh==='drift'||sp.beh==='walk';const c=RT[tank].cam;
 const f={sp,x:resident?rand(30,WW-30):clamp(dir>0?c-w:c+W+w,-w,WW+w),y,baseY:y,ty:y,tyT:rand(1,4),dir,speed:(slow?(sp.beh==='walk'?6:7):rand(12,20))*(sp.r==='l'?.7:1),t:Math.random()*10,seed:Math.random()*6,
  life:resident?Infinity:rand(22,36)*(sp.r==='l'?1.8:1),age:0,state:'swim',w,h,resident,turnT:rand(4,10),sparkT:0,boost:0,puffT:rand(1,4)};
 RT[tank].fish.push(f);return f}
const visitors=()=>fishOf().filter(f=>!f.resident&&!f.vid&&f.state!=='caught').length;
function trySpawn(){const now=new Date(),fs=fishOf();let el=eligible(now,S.cur).filter(sp=>!(sp.r!=='c'&&sp.r!=='u'&&fs.some(f=>!f.resident&&f.sp===sp&&f.state!=='caught')));
 if(!el.length)return;const lm=upv('lumiere'),wts=el.map(sp=>RAR[sp.r].w*('rel'.includes(sp.r)?lm:1));let tot=wts.reduce((a,b)=>a+b,0),r=Math.random()*tot,i=0;
 while(r>wts[i]){r-=wts[i];i++}const sp=el[i];spawnFish(sp);
 if(sp.r==='l'){banner={t:'UN POISSON LEGENDAIRE !',c:P.ye,life:4};SFX.legend();say('☆*:.｡.o(≧▽≦)o.｡.:*☆ Un poisson <b style="color:#e0b830">LÉGENDAIRE</b> vient d\'entrer dans le bac… suis la flèche !')}
 else if(sp.r==='e'){banner={t:'Un poisson EPIQUE !',c:P.pk,life:3};SFX.rare();say('(♡˙︶˙♡) Un poisson <b>épique</b> est apparu !')}
 else if(sp.r==='r'){banner={t:'Un poisson rare...',c:P.bl,life:2.5};SFX.rare();say('(*˘︶˘*)✧ Un poisson <b style="color:#5aa8d6">rare</b> passe par là…')}}
function syncResidents(){for(const t in TANKS){const res=S.tanks[t].res;RT[t].fish=RT[t].fish.filter(f=>!f.resident||res.includes(f.sp.id));for(const id of res)if(byId[id]&&!RT[t].fish.some(f=>f.resident&&f.sp.id===id))spawnFish(byId[id],true,t)}}
function burst(x,y,col,n=10){x+=EOX;for(let i=0;i<n;i++){const a=Math.random()*6.28,s=rand(15,45);parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:rand(.4,.8),col})}}
function dust(x,y){for(let i=0;i<3;i++)parts.push({x:EOX+x+rand(-3,3),y,vx:rand(-8,8),vy:rand(-10,-3),life:rand(.3,.6),col:themeOf(S.cur).sand[2]})}
function addBubble(x,y,r){bubbles.push({x:x+EOX,y,r:r||(Math.random()<.7?1:2),vy:rand(10,22),ph:Math.random()*6})}

/* ================= XP / QUÊTES ================= */
function addXP(n){S.xp+=n;let up=false;while(S.xp>=need(S.lv)){S.xp-=need(S.lv);S.lv++;up=true;levelUp()}hud();return up}
function unlocksAt(lv){const u=[];for(const t in TANKS)if(TANKS[t].lv===lv)u.push({ic:TANKS[t].ic,n:(t==='abysses'?'Les ':'Le ')+TANKS[t].n,k:'bac'});
 for(const k in DECOR)if(DECOR[k].lv===lv)u.push({ic:'❀',n:DECOR[k].n,k:'déco'});for(const k in THEMES)if(THEMES[k].lv===lv)u.push({ic:'◐',n:'Fond '+THEMES[k].n,k:'fond'});
 for(const k in ACC)if(ACC[k].lv===lv)u.push({ic:'♡',n:ACC[k].n,k:'accessoire'});
 const fr={};for(const sp of SPECIES)if(!sp.visitOnly&&lvOf(sp)===lv)fr[sp.r]=(fr[sp.r]||0)+1;
 const RN={c:['commun','communs'],u:['peu commun','peu communs'],r:['rare','rares'],e:['épique','épiques'],l:['légendaire secret','légendaires secrets']};
 const fl=[];for(const r of 'curel')if(fr[r])fl.push({ic:r==='l'?'✧':'◆',n:fr[r]+' poisson'+(fr[r]>1?'s ':' ')+RN[r][fr[r]>1?1:0],k:'poisson'});return[...fl,...u]}
const palier=lv=>lv%5===0?{coins:lv*20,pearls:5}:null;
let lvQueue=[];
function showLvUp(){if(!lvQueue.length)return;const lv=lvQueue[lvQueue.length-1],skip=lvQueue.length>1;lvQueue=[];const u=unlocksAt(lv),pa=palier(lv);
 $('#lvUpBody').innerHTML=`<div class="lvbig">٩(◕‿◕)۶<br>Niveau ${lv} !</div>${skip?'<div class="sub">Tu as pris plusieurs niveaux d\'un coup ✧</div>':''}
 <div class="lvgifts"><span class="bchip">✧ +2 perles</span>${pa?`<span class="bchip gold">☆ Cadeau de palier : +${pa.coins} ◎ et +${pa.pearls} ✧</span>`:''}</div>
 ${u.length?'<h3>Débloqué</h3><div class="lvun">'+u.map(x=>`<span class="unl">${x.ic} ${x.n}</span>`).join('')+'</div>':''}
 <div class="row"><button class="btn sm" id="lvSee">Voir le chemin des niveaux</button><button class="btn p" data-close>Trop bien !</button></div>`;
 $('#lvSee').onclick=()=>{closeM($('#mLvUp'));renderLevels();openM('#mLevels')};$('#lvUpBody [data-close]').onclick=()=>{ac();closeM($('#mLvUp'))};openM('#mLvUp');SFX.level()}
function renderLevels(){const top=Math.max(20,S.lv+3),pct=Math.round(S.xp/need(S.lv)*100);let h=`<div class="lvhead"><div class="lvnum">☆ ${S.lv}</div><div class="lvbarw"><div class="lvbar"><i style="width:${pct}%"></i></div><div class="sub">${S.xp} / ${need(S.lv)} XP · encore ${need(S.lv)-S.xp} XP pour le niveau ${S.lv+1}</div></div></div>
 <div class="sub">Chaque niveau : +2 perles ✧ · tous les 5 niveaux : un cadeau de palier ☆</div><div class="lvpath">`;
 for(let lv=2;lv<=top;lv++){const u=unlocksAt(lv),pa=palier(lv),st=lv<=S.lv?'done':lv===S.lv+1?'next':'lock';
  h+=`<div class="lvrow ${st}${pa?' pal':''}"><div class="lvdot">${st==='done'?'✓':lv}</div><div class="lvc"><b>Niveau ${lv}</b>${pa?` <span class="gold">☆ +${pa.coins} ◎ · +${pa.pearls} ✧</span>`:''}<div class="lvun">${u.map(x=>`<span class="unl">${x.ic} ${x.n}</span>`).join('')||'<span class="sub">+2 perles</span>'}</div></div></div>`}
 $('#levelsBody').innerHTML=h+'</div>';setTimeout(()=>{const n=$('#levelsBody .lvrow.next');if(n)n.scrollIntoView({block:'center'})},30)}
function levelUp(){const lv=S.lv,gift=2;S.pearls+=gift;const un=[];const pa=palier(lv);if(pa){S.coins+=pa.coins;S.pearls+=pa.pearls}lvQueue.push(lv);setTimeout(showLvUp,900);
 for(const t in TANKS)if(TANKS[t].lv===lv)un.push('le bac '+TANKS[t].ic+' '+TANKS[t].n);
 for(const k in DECOR)if(DECOR[k].lv===lv)un.push(DECOR[k].n);
 for(const k in THEMES)if(THEMES[k].lv===lv)un.push('le fond '+THEMES[k].n);for(const k in ACC)if(ACC[k].lv===lv)un.push('♡ '+ACC[k].n);
 banner={t:'NIVEAU '+lv+' !',c:P.gr,life:4};SFX.level();
 say(`٩(◕‿◕)۶ <b>Niveau ${lv} !</b> +${gift} ✧`+(un.length?' · Débloqué : '+un.join(', '):''));renderTanks()}
const QMAKE={
 catch:r=>{const n=8+Math.floor(r()*8);return{id:'catch',t:`Attrape ${n} poissons`,goal:n,rw:25+n*2,xp:15}},
 rare:()=>({id:'rare',t:'Attrape 2 poissons peu communs ou plus rares',goal:2,rw:45,xp:20}),
 color:r=>{const c=pick(['rose','bleu','jaune'],r);return{id:'color',arg:c,t:`Attrape 3 poissons ${c}s`,goal:3,rw:40,xp:15}},
 photo:()=>({id:'photo',t:'Prends une photo avec au moins 3 poissons',goal:1,rw:35,xp:15}),
 mg:r=>{const n=pick([20,30,40],r);return{id:'mg',arg:n,t:`Gagne au moins ${n} pièces en une partie de mini-jeu`,goal:1,rw:30,xp:15}},
 deco:()=>({id:'deco',t:'Pose ou déplace 3 décorations',goal:3,rw:25,xp:10}),
 crust:()=>({id:'crust',t:'Attrape 2 crustacés (crevette, crabe, bernard…)',goal:2,rw:40,xp:20}),
 nouveau:()=>({id:'nouveau',t:'Découvre une nouvelle espèce',goal:1,rw:60,xp:25}),
 visit:()=>({id:'visit',t:'Reçois 3 visites grâce à la mangeoire',goal:3,rw:35,xp:15}),
 gift:()=>({id:'gift',t:'Ramasse 3 cadeaux sur le sable',goal:3,rw:30,xp:10}),
 dress:()=>({id:'dress',t:'Mets un accessoire à un de tes poissons',goal:1,rw:25,xp:10}),
 pet:()=>({id:'pet',t:'Fais 5 câlins à tes poissons résidents',goal:5,rw:20,xp:10})
};
function ensureQuests(now){const k=dkey(now);if(S.quests.day===k&&S.quests.list.length)return;const r=mulberry(hash('q'+k));const pool=['catch','rare','color','photo','mg','deco','crust','nouveau','visit','gift','visit'];if(Object.keys(S.caught).length)pool.push('pet','dress');
 S.quests={day:k,list:shuffle(pool,r).slice(0,3).map(id=>Object.assign(QMAKE[id](r),{prog:0,claimed:false}))};save();questDot()}
function questEv(id,n=1,arg){let any=false;for(const q of S.quests.list){if(q.id!==id||q.prog>=q.goal)continue;
  if(id==='color'&&q.arg!==arg)continue;if(id==='mg'){if(n<q.arg)continue;n=1}
  q.prog=Math.min(q.goal,q.prog+n);if(q.prog>=q.goal){any=true;say('(๑˃ᴗ˂)ﻭ Quête terminée : <b>'+q.t+'</b> ! Récupère ta récompense dans ☆ Quêtes.');SFX.coin()}}
 if(any)banner={t:'Quete terminee !',c:P.pk,life:2.5};save();questDot()}
function questDot(){$('#bQuest').classList.toggle('dot',S.quests.list.some(q=>q.prog>=q.goal&&!q.claimed))}

function catchFish(f){const sp=f.sp;f.state='caught';f.cAge=0;const first=!known(sp.id);S.caught[sp.id]=(S.caught[sp.id]||0)+1;S.total++;
 const xpg=RAR[sp.r].xp+(first?5:0);floats.push({x:EOX+f.x,y:f.y-f.h/2-4,t:'+'+xpg+' xp',c:P.gr,life:1.2});burst(f.x,f.y,RAR[sp.r].col,sp.r==='l'?30:14);
 SFX.catch();
 if(first)say(`ヽ(•‿•)ノ Nouveau ! <b style="color:${RAR[sp.r].col}">${sp.n}</b> (${RAR[sp.r].n}) rejoint ta collection !`);
 else say(`${sp.n} ×${S.caught[sp.id]}`);
 questEv('catch');if(sp.r!=='c')questEv('rare');const ct=CTAG[sp.c.b];if(ct)questEv('color',1,ct);if(CRUST.includes(sp.id))questEv('crust');if(first)questEv('nouveau');
 addXP(xpg);save();hud()}


/* ================= VISITES (façon Neko Atsume) ================= */
const TICK=6e5,FEEDX=26;
const GIFT=buildHD(["..r.r..","...r...","bbbrbbb","bbbrbbb","rrrrrrr","bbbrbbb","bbbrbbb"],ch=>({r:P.pk,b:P.bl})[ch]);
const GIFTP=buildHD(["..r.r..","...r...","bbbrbbb","bbbrbbb","rrrrrrr","bbbrbbb","bbbrbbb"],ch=>({r:P.pu,b:P.ye})[ch]);
const FEEDER=buildHD([".kkkkkkk.","k.......k",".kkkkkkk."],()=>P.wh);
const foodOn=(t,now=Date.now())=>{const fd=S.tanks[t].food;return fd&&fd.until>now};
function decorTop(d){const def=DECOR[d.t];if(def.kelp)return d.y-def.kelp.h;return d.y-dspr(d.t).height*.5}
function spotFor(sp,d,fw,fh){const def=DECOR[d.t],wid=def.kelp?6:dspr(d.t).width*.25;
 if(sp.beh==='walk')return{x:d.x+wid+fw/2-2,y:d.y-fh/2+1};
 if(sp.beh==='bottom')return{x:d.x+wid+fw/2-2,y:Math.min(SAND+2,d.y)-fh/2};
 if(def.kelp)return{x:d.x+fw/2+5,y:Math.max(14+fh/2,d.y-def.kelp.h*.6)};
 return{x:d.x,y:Math.max(14+fh/2,decorTop(d)-fh/2+3)}}
function visitPool(tank,d){const pool=eligible(d,tank).filter(sp=>sp.r!=='l'||true);const extra=SPECIES.filter(sp=>sp.visitOnly&&hasGrp(sp.toy,tank));return[...pool,...extra]}
function startVisit(tank,t,q){const tk=S.tanks[tank],d=new Date(t);const busy=new Set(tk.visits.map(v=>v.uid)),busySp=new Set(tk.visits.map(v=>v.id));
 const free=tk.decor.filter(x=>!busy.has(x.uid));if(!free.length)return;
 const cands=visitPool(tank,d).filter(sp=>!busySp.has(sp.id));if(!cands.length)return;
 const types=new Set(free.map(x=>x.t));
 const wts=cands.map(sp=>RAR[sp.r].w*('rel'.includes(sp.r)?FQ_RARE[q]:1)*(sp.fav.some(k=>types.has(k))?3:1)*(sp.visitOnly?2.5:1));
 let tot=wts.reduce((a,b)=>a+b,0),r=Math.random()*tot,i=0;while(r>wts[i]){r-=wts[i];i++}const sp=cands[i];
 const favFree=free.filter(x=>sp.fav.includes(x.t));const spot=favFree.length?pick(favFree):sp.visitOnly?null:pick(free);if(!spot)return;
 const st=t+Math.random()*TICK,dur=(sp.r==='l'?rand(60,120):rand(30,150))*6e4;
 tk.visits.push({vid:nextUid(),id:sp.id,uid:spot.uid,toy:spot.t,start:st,end:st+dur})}
function endVisit(tank,v,out){const tk=S.tanks[tank],sp=byId[v.id];if(!sp)return;const d=tk.decor.find(x=>x.uid===v.uid);
 const coins=RAR[sp.r].coin*4+Math.floor(rand(2,9)),pch={c:.06,u:.12,r:.45,e:.85,l:1}[sp.r],pearls=Math.random()<pch?(sp.r==='l'?3:sp.r==='e'?2:1):0;
 const first=!known(sp.id);S.visits[sp.id]=(S.visits[sp.id]||0)+1;
 if(tk.gifts.length<24)tk.gifts.push({gid:nextUid(),x:Math.round(clamp((d?d.x:rand(30,WW-30))+rand(-14,14),8,WW-8)),y:Math.round(rand(136,142)),coins,pearls,id:sp.id});
 else{const g=tk.gifts[tk.gifts.length-1];g.coins+=coins;g.pearls+=pearls}
 let souv=null;if(S.visits[sp.id]>=6&&!S.souv[sp.id]){souv=SOUV[hash(sp.id)%SOUV.length]+' de '+sp.n;S.souv[sp.id]={n:souv,t:v.end}}
 const e={id:sp.id,tank,toy:v.toy,start:v.start,end:v.end,coins,pearls,first,souv};S.log.unshift(e);if(S.log.length>60)S.log.length=60;out.push(e);
 questEv('visit');if(first)questEv('nouveau');addXP(RAR[sp.r].xp+(first?10:0))}
function simulate(to){let t=S.simT||to;if(to-t>3*864e5)t=to-3*864e5;const out=[];
 while(t+TICK<=to){t+=TICK;
  for(const tank in TANKS){if(!tankOpen(tank))continue;const tk=S.tanks[tank];
   tk.visits=tk.visits.filter(v=>{if(v.end<=t||!tk.decor.some(x=>x.uid===v.uid)){endVisit(tank,v,out);return false}return true});
   if(!foodOn(tank,t))continue;const q=FOODS[tk.food.type].q,toys=tk.decor.filter(x=>DECOR[x.t]&&DECOR[x.t].toy).length;
   if(tk.visits.length>=Math.min(tk.decor.length,7))continue;
   if(Math.random()<clamp(.3*FQ_RATE[q]+.03*toys,0,.85))startVisit(tank,t,q)}}
 S.simT=t;if(out.length)save();return out}
function collectGift(tank,g,silent){S.coins+=g.coins;S.pearls+=g.pearls;const tk=S.tanks[tank];tk.gifts=tk.gifts.filter(x=>x!==g);questEv('gift');
 if(!silent){EOX=zoff(tank);floats.push({x:EOX+g.x,y:g.y-20,t:'+'+g.coins,c:P.ye,life:1.3});if(g.pearls)floats.push({x:EOX+g.x,y:g.y-30,t:'+'+g.pearls+' perle'+(g.pearls>1?'s':''),c:P.pu,life:1.6});burst(g.x,g.y-6,P.pk,12);SFX.coin();
  say(`ʕ•ᴥ•ʔ♡ Cadeau de <b>${byId[g.id]?byId[g.id].n:'?'}</b> : +${g.coins} ◎${g.pearls?' +'+g.pearls+' ✧':''}`)}save();hud()}
function collectAll(){let c=0,p=0,n=0;for(const t in TANKS){for(const g of [...S.tanks[t].gifts]){c+=g.coins;p+=g.pearls;n++;collectGift(t,g,true)}}if(n){SFX.buy();say(`⊹ Tu as ramassé ${n} cadeau${n>1?'x':''} : +${c} ◎${p?' +'+p+' ✧':''}`)}return n}
function syncVisits(){for(const t of ZONES)if(tankOpen(t))syncVisitsZ(t)}
function syncVisitsZ(tank){const now=Date.now(),tk=S.tanks[tank],rt=RT[tank];
 const act=tk.visits.filter(v=>v.start<=now);const ids=new Set(act.map(v=>v.vid));
 for(const f of rt.fish)if(f.vid&&!ids.has(f.vid)&&f.state!=='caught'){f.vid=null;f.state='leave';f.life=0;f.speed=Math.max(f.speed,12)}
 for(const v of act){if(rt.fish.some(f=>f.vid===v.vid))continue;const sp=byId[v.id],d=tk.decor.find(x=>x.uid===v.uid);if(!sp||!d)continue;
  const f=spawnFish(sp,false,tank);const p=spotFor(sp,d,f.w,f.h);f.vid=v.vid;f.life=Infinity;f.tx=p.x;f.tyy=p.y;f.noteT=rand(2,6);
  if(now-v.start<9e4){f.state='arrive';f.x=p.x<rt.cam+W/2?rt.cam-f.w:rt.cam+W+f.w;f.y=f.baseY=clamp(p.y,14,SAND);f.dir=f.x<p.x?1:-1;
   if(sp.r!=='c'&&sp.r!=='u')say(`ʕ•ᴥ•ʔ <b>${known(sp.id)?sp.n:'Un poisson inconnu'}</b> arrive pour jouer avec ${DECOR[d.t].n} !`)}
  else{f.state='visit';f.x=p.x;f.y=f.baseY=p.y;f.dir=Math.random()<.5?1:-1}}}

/* ================= UPDATE ================= */
function onZoneChange(z){if(z===S.cur)return;S.cur=z;spawnT=1.2;EOX=zoff(z);
 if(!RT[z].fish.some(f=>!f.resident&&!f.vid)){for(let i=0;i<2;i++){trySpawn();const f=RT[z].fish[RT[z].fish.length-1];if(f&&!f.resident&&!f.vid)f.x=clamp(RT[z].cam+rand(30,W-30),10,WW-10)}}
 banner={t:TANKS[z].n,c:P.wh,life:2.4,big:true};setBackdrop();SFX.swoosh();save();if(decoMode)renderChips()}
function updFish(dt,now,tank){const rt=RT[tank],fs=rt.fish;EOX=zoff(tank);
 for(const f of fs){f.t+=dt;f.age+=dt;
  if(f.state==='caught'){f.cAge+=dt;f.y-=18*dt;continue}
  if(f.state==='arrive'){const dx=f.tx-f.x,dy=f.tyy-f.y,dd=Math.hypot(dx,dy);if(dd<1.5){f.state='visit';f.x=f.tx;f.y=f.tyy}else{const v=Math.min(dd,26*dt);f.x+=dx/dd*v;f.y+=dy/dd*v;if(Math.abs(dx)>1)f.dir=dx>0?1:-1}f.moving=true;continue}
  if(f.state==='visit'){f.moving=Math.sin(f.t*.7)>.3;f.y=f.tyy+(f.sp.beh==='walk'?0:Math.sin(f.t*1.5)*1);f.turnT-=dt;if(f.turnT<=0){f.dir*=-1;f.turnT=rand(3,9)}
   f.noteT-=dt;if(f.noteT<=0){f.noteT=rand(4,9);const night=tintFor(now).ic==='☾';floats.push({x:EOX+f.x+f.dir*f.w/3,y:f.y-f.h/2-6,t:night?'z':Math.random()<.5?'♪':'~',c:night?P.la:P.pk,life:1.4})}continue}
  const sp=f.sp,[y0,y1]=yRange(sp,f.h);
  if(sp.beh==='walk'){const go=Math.sin(f.t*.8+f.seed)>-.2;if(go){f.x+=f.dir*f.speed*(f.boost>0?2.5:1)*dt;f.puffT-=dt;if(f.puffT<=0){f.puffT=rand(.6,1.4);dust(f.x-f.dir*f.w/3,f.y+f.h/2)}}f.y=f.baseY-(go&&Math.sin(f.t*12)>0?1:0);f.moving=go}
  else{const m=(sp.beh==='drift'?1:(.6+.4*Math.sin(f.t*.6+f.seed)))*(f.boost>0?2.6:1);f.x+=f.dir*f.speed*m*dt;f.moving=true;
   f.tyT-=dt;if(f.tyT<=0){f.tyT=rand(2,6);f.ty=clamp(f.baseY+rand(-28,28),y0,y1)}
   f.baseY+=(f.ty-f.baseY)*Math.min(1,dt*.7);f.baseY=clamp(f.baseY,y0,y1);
   f.y=f.baseY+Math.sin(f.t*(sp.beh==='drift'?1.2:2))*(sp.beh==='drift'?3:1.2);
   if(sp.beh==='bottom'){f.puffT-=dt;if(f.puffT<=0){f.puffT=rand(2,5);dust(f.x+f.dir*f.w/2,SAND+2)}}}
  f.boost-=dt;if((f.resident)&&Math.random()<dt*.08)f.blinkT=T+.5;
  if(f.state==='swim'){f.turnT-=dt;if(f.turnT<=0&&f.x>20&&f.x<WW-20){f.dir*=-1;f.turnT=rand(5,12)}
   if(f.age>3&&((f.x<12&&f.dir<0)||(f.x>WW-12&&f.dir>0)))f.dir*=-1;if(f.age>f.life)f.state='leave'}
  if(sp.r==='l'){f.sparkT-=dt;if(f.sparkT<=0){f.sparkT=.12;parts.push({x:EOX+f.x+rand(-f.w/2,f.w/2),y:f.y+rand(-f.h/2,f.h/2),vx:0,vy:-6,life:.7,col:P.ye})}}
  if(sp.beh!=='walk'&&Math.random()<dt*.15)addBubble(f.x+f.dir*f.w/2,f.y-2,1)}
 rt.fish=fs.filter(f=>!(f.state==='caught'&&f.cAge>.6)&&!(f.state==='leave'&&(f.x<-f.w-4||f.x>WW+f.w+4)));
 for(const d of S.tanks[tank].decor){const def=DECOR[d.t];if(def&&def.hb&&Math.random()<dt*.8)floats.push({x:EOX+d.x+rand(-2,2),y:d.y-16,heart:true,life:1.6});if(def&&def.bub&&Math.random()<dt*5)addBubble(d.x+rand(-1,1),d.y-14,Math.random()<.5?1:2)}
 if(foodOn(tank)&&Math.random()<dt*2.5)parts.push({x:EOX+FEEDX+rand(-3,3),y:FY+4,vx:rand(-2,2),vy:rand(6,10),life:rand(1.5,3),col:P.or})}
function update(dt){T+=dt;const now=new Date();
 const ck=now.getMinutes();if(ck+''!==lastClock){lastClock=ck+'';hud();dailyCheck(now);const o=simulate(Date.now());if(o.length)renderJournalDot()}
 syncT-=dt;if(syncT<=0){syncT=1;syncVisits()}
 if(decoMode&&held&&(trayDrag||(down&&down.placing))&&ptr.x>-50){if(ptr.x<W*.1)CAM.t-=140*dt;else if(ptr.x>W*.9)CAM.t+=140*dt}
 if(!down){CAM.t+=CAM.v*dt+navDir*170*dt;CAM.v*=Math.pow(.05,dt)}const mc=maxCam();if(CAM.t<0){CAM.t=0;CAM.v=0}if(CAM.t>mc){CAM.t=mc;CAM.v=0}
 CAM.x+=(CAM.t-CAM.x)*Math.min(1,dt*14);if(Math.abs(CAM.t-CAM.x)<.05)CAM.x=CAM.t;
 for(const t of ZONES){RT[t].cam=RT[t].camT=CAM.x-zoff(t)}
 const oc=openCount();onZoneChange(ZONES[clamp(Math.floor((CAM.x+W/2)/WW),0,oc-1)]);
 spawnT-=dt;if(spawnT<=0){spawnT=upv('nourriture')*rand(.7,1.3);EOX=zoff(S.cur);if(visitors()<upv('filtre'))trySpawn()}
 for(const t of ZONES)if(tankOpen(t))updFish(dt,now,t);
 chestT-=dt;if(chestT<=0){chestT=rand(7,12);for(const t of ZONES){if(!tankOpen(t))continue;EOX=zoff(t);for(const d of S.tanks[t].decor)if(DECOR[d.t]&&DECOR[d.t].chest)for(let i=0;i<6;i++)addBubble(d.x+rand(-6,6),d.y-12-rand(0,4),2)}}
 EOX=0;if(Math.random()<dt*2.5)addBubble(CAM.x+rand(0,W),SAND+2);EOX=zoff(S.cur);
 for(const b of bubbles){b.y-=b.vy*dt;b.ph+=dt*3}bubbles=bubbles.filter(b=>b.y>2);
 for(const p of plankton){p.ph+=dt*.5;p.x+=Math.sin(p.ph)*dt*2*p.s;p.y+=Math.cos(p.ph*.7)*dt*1.5*p.s;if(p.y<2)p.y=SAND-2;if(p.y>SAND)p.y=4;if(p.x<0)p.x+=WWT;if(p.x>WWT)p.x-=WWT}
 for(const p of parts){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=.92;p.vy*=.92;p.life-=dt}parts=parts.filter(p=>p.life>0);
 for(const f of floats){f.y-=12*dt;f.life-=dt}floats=floats.filter(f=>f.life>0);
 if(banner){banner.life-=dt;if(banner.life<=0)banner=null}
 flash=Math.max(0,flash-dt*3);music(dt)}

/* ================= DRAW ================= */
function tintFor(n){const h=n.getHours()+n.getMinutes()/60;
 if(h>=21||h<5)return{c:'#7a7ac8',a:.24,ic:'☾'};if(h<7)return{c:'#ffb8d9',a:.18,ic:'☼'};if(h<17)return{c:'#000000',a:0,ic:'☼'};if(h<19)return{c:'#ffc79e',a:.15,ic:'☼'};return{c:'#c99ad6',a:.22,ic:'☾'}}
const tc=$('#gtxt'),tx=tc.getContext('2d');
function txt(c,s,x,y,col,al='left',size=8,ol=OUT){let ov=false;if(c===ctx&&tc.width>1){const m=ctx.getTransform(),k=tc.width/cv.width;tx.setTransform(m.a*k,m.b*k,m.c*k,m.d*k,m.e*k,m.f*k);tx.globalAlpha=ctx.globalAlpha;c=tx;ov=true}c.font=Math.round(size*1.35)+'px "VT323", "DotGothic16", "M PLUS Rounded 1c", sans-serif';c.textAlign=al;c.textBaseline='top';c.lineJoin='round';c.strokeStyle=ol;c.lineWidth=Math.max(.8,size*.22);c.strokeText(s,x,y);c.fillStyle=col;c.fillText(s,x,y);if(ov)tx.globalAlpha=1}
function glow(x,y,col,r){ctx.save();[[r,.08],[r*.6,.12],[r*.3,.2]].forEach(([rr,a])=>{ctx.globalAlpha=a*(0.85+0.15*Math.sin(T*3+x));ctx.fillStyle=col;ctx.beginPath();ctx.arc(x,y,rr,0,6.283);ctx.fill()});ctx.restore()}
function drawDecor(d,cx,alpha=1){const def=DECOR[d.t];if(!def)return;const X=d.x-cx;if(X<-40||X>W+40)return;ctx.globalAlpha=alpha;
 if(def.kelp){const k=def.kelp,n=k.n||1;for(let b=0;b<n;b++){const ox=Math.round((b-(n-1)/2)*4),hh=Math.round(b===(n-1)/2||n===1?k.h:k.h*.7);for(let i=0;i<hh;i+=.5){const sway=q(Math.sin(T*1.3+d.x*.1+b+i*.15)*(i/hh)*4);ctx.fillStyle=(i%6<3)?k.c1:k.c2;ctx.fillRect(q(X)-1+ox+sway,d.y-i,2.5,.5);if(i%5===2&&n===1){ctx.fillStyle=k.c1;ctx.fillRect(q(X)+sway+(i%10<5?1.5:-3.5),d.y-i,2.5,1)}}}}
 else{const s=dspr(d.t);ctx.drawImage(s,q(X-s.width/4),q(d.y-s.height/2),s.width/2,s.height/2)}
 ctx.globalAlpha=1}
function decorBox(d){const def=DECOR[d.t];if(def.kelp){const n=def.kelp.n||1;return{x0:d.x-5-n*2,x1:d.x+6+n*2,y0:d.y-def.kelp.h,y1:d.y+1}}const s=dspr(d.t);return{x0:d.x-s.width/4,x1:d.x+s.width/4,y0:d.y-s.height/2,y1:d.y}}
const NOWAVE=new Set(['crab','hermit','lobster','snail','starfish','urchin','nudi','jelly','octo','seahorse','turtle','blob']);
function drawFish(f,cx){const X=f.x-cx;if(X<-f.w||X>W+f.w)return;const sp=f.sp,wave=!NOWAVE.has(sp.sh)&&f.state!=='caught',fr=((!wave&&f.moving&&Math.floor(f.t*(f.boost>0?12:5))%2)?'a':'')+((f.happyUntil>T||(f.blinkT&&f.blinkT>T))?'h':''),s=sp.rainbow?spr(sp,'rb'+(Math.floor(T*6)%6)+fr):spr(sp,fr),sc=fsc(sp),w=s.width*sc,h=s.height*sc;let a=1;
 if(sp.ghost)a=.35+.25*Math.sin(T*3);if(f.state==='caught')a*=Math.max(0,1-f.cAge/.6);
 ctx.globalAlpha=a;ctx.save();ctx.translate(q(X),q(f.y));
 if(f.resident){const pu=.5+.5*Math.sin(T*2.2+f.seed),R0=Math.max(w,h)*.62+2+pu*1.5,g=ctx.createRadialGradient(0,0,R0*.25,0,0,R0);
  g.addColorStop(0,'rgba(255,244,180,.7)');g.addColorStop(.55,'rgba(255,205,230,.45)');g.addColorStop(1,'rgba(255,200,225,0)');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,0,R0,R0*Math.min(1,(h+8)/(w+4)),0,0,Math.PI*2);ctx.fill();
  for(let i=0;i<3;i++){const an=T*1.1+f.seed+i*2.094,sx=Math.cos(an)*(w/2+3),sy=Math.sin(an)*(h/2+3),tw=(Math.sin(T*5+i*1.7+f.seed)+1)/2;ctx.globalAlpha=a*(.5+.5*tw);ctx.fillStyle=i%2?'#ff9ccc':'#ffd34d';
   const px=q(sx),py=q(sy);ctx.fillRect(px,py-1.5,.5,3.5);ctx.fillRect(px-1.5,py,3.5,.5);ctx.fillStyle='#fff';ctx.fillRect(px,py,.5,.5)}ctx.globalAlpha=a}
 if(f.dir<0)ctx.scale(-1,1);if(wave){const amp=Math.min(1.5,.4+h*.05)*(f.boost>0?1.5:1)*(f.moving?1:.4),ph=f.t*(f.boost>0?13:6.5)+f.seed,x0=q(-w/2),y0=q(-h/2);for(let i=0;i<s.width;i+=2){const u=i/s.width,off=Math.round(Math.sin(ph-u*4.2)*amp*Math.pow(1-u,1.4)*2)/2;ctx.drawImage(s,i,0,2,s.height,x0+i*sc,y0+off,2*sc,h)}}else ctx.drawImage(s,q(-w/2),q(-h/2),w,h);if(f.resident&&S.acc[sp.id])drawAcc(ctx,sp,tpx(sp),w,h,S.acc[sp.id]);ctx.restore();ctx.globalAlpha=1}
function draw(){const now=new Date(),tn=tintFor(now),CX=q(CAM.x),abW=zoneW(CAM.x+W/2,160)[2]||0;
 tx.setTransform(1,0,0,1,0,0);tx.clearRect(0,0,tc.width,tc.height);
 ctx.setTransform(Q,0,0,Q,0,0);ctx.imageSmoothingEnabled=false;
 if(VH>H){const ww=worldWater(),ws=worldSand(),sx=Math.max(0,CX*Q);ctx.drawImage(ww,sx,0,W*Q,2,0,0,W,OY+1);const bh=VH-H-OY;for(let y=0;y<bh+1;y+=14)ctx.drawImage(ws,sx,(H-15)*Q,W*Q,14*Q,0,OY+H-1+y,W,14)}
 ctx.setTransform(Q,0,0,Q,0,OY*Q);
 ctx.drawImage(worldWater(),-CX,0,WWT,SAND+4/Q);
 if(tn.a<.2&&abW<.95){ctx.save();ctx.globalAlpha=.08*(1-abW);ctx.fillStyle='#fff';for(let i=0;i<5;i++){const x=((i*90+T*4-CX*.3)%(W+120)+W+120)%(W+120)-60;ctx.beginPath();ctx.moveTo(x,-OY);ctx.lineTo(x+14,-OY);ctx.lineTo(x+46,SAND);ctx.lineTo(x+24,SAND);ctx.fill()}ctx.restore()}
 ctx.globalAlpha=.45;ctx.drawImage(worldFar(),-q(CX*.5),0,FWT,H);ctx.globalAlpha=1;
 ctx.fillStyle='rgba(255,255,255,.6)';for(let x=0;x<W;x+=1)ctx.fillRect(x,q(1-OY+Math.sin(T*2+(x+CX)*.15)),1,.5);
 ctx.drawImage(worldSand(),-CX,0,WWT,H);
 for(let k=0;k<110;k++){const wx=(k*14.3+Math.sin(T*.7+k*1.7)*7)%WWT,X=wx-CX;if(X<-4||X>W)continue;const ab=zoneW(wx,120)[2]||0,y=SAND+4+(k*7)%22;
  if(ab<.9){ctx.globalAlpha=(.25+.2*Math.sin(T*1.3+k))*(1-ab);ctx.fillStyle='#fff';ctx.fillRect(q(X),y,3.5,.5);ctx.fillRect(q(X)+.5,y+.5,2.5,.5)}
  if(ab>.1){ctx.globalAlpha=(.3+.3*Math.sin(T*2+k))*ab;ctx.fillStyle=[P.pk,P.bl,P.ye][k%3];ctx.fillRect(q(X)+1,SAND+5+(k*5)%20,.5,.5)}}ctx.globalAlpha=1;
 const vis=ZONES.filter(t=>tankOpen(t)&&zoff(t)<CX+W+60&&zoff(t)+WW>CX-60);
 for(const t of vis){const cx=CX-zoff(t),fs=RT[t].fish,tk=S.tanks[t];
  const list=[...tk.decor.map(d=>({y:d.y,d})),...fs.filter(f=>f.sp.beh==='walk').map(f=>({y:f.y+f.h/2,f}))].sort((a,b)=>a.y-b.y);
  for(const it of list)it.d?drawDecor(it.d,cx):drawFish(it.f,cx);
  for(const g of tk.gifts){const X=Math.round(g.x-cx);if(X<-12||X>W+12)continue;const im=g.pearls?GIFTP:GIFT,bob=q(Math.sin(T*2+g.gid)*.6);ctx.drawImage(im,X-im.width/4,g.y-im.height/2+bob,im.width/2,im.height/2)}}
 for(const t of vis){const cx=CX-zoff(t);for(const f of RT[t].fish)if(f.sp.beh!=='walk')drawFish(f,cx);
  const X=FEEDX-cx;if(X>-20&&X<W+20){ctx.drawImage(FEEDER,q(X-FEEDER.width/4),FY,FEEDER.width/2,FEEDER.height/2);if(foodOn(t)){ctx.fillStyle=P.or;for(let i=0;i<6;i++)ctx.fillRect(q(X-5+i*2),FY+2,1,.5)}else if(Math.floor(T*2)%2){txt(ctx,'!',q(X),FY+6,P.rd,'center',7)}}}
 for(const b of bubbles){const x=q(b.x+Math.sin(b.ph)*1.5-CX),y=q(b.y);if(x<-3||x>W+3)continue;ctx.fillStyle='rgba(90,140,190,.55)';
  if(b.r<=1){ctx.fillRect(x,y,.5,.5)}else{ctx.fillRect(x-.5,y-1,1,.5);ctx.fillRect(x-.5,y+.5,1,.5);ctx.fillRect(x-1,y-.5,.5,1);ctx.fillRect(x+.5,y-.5,.5,1);ctx.fillStyle='#fff';ctx.fillRect(x-.5,y-.5,.5,.5)}}
 for(const p of plankton){const X=p.x-CX;if(X<0||X>W)continue;ctx.fillStyle=(zoneW(p.x,160)[2]||0)>.5?P.bl:'#fff';ctx.globalAlpha=.35+.25*Math.sin(p.ph*3);ctx.fillRect(q(X),q(p.y),.5,.5)}ctx.globalAlpha=1;
 if(tn.a>0){ctx.globalAlpha=tn.a;ctx.fillStyle=tn.c;ctx.fillRect(0,-OY,W,VH);ctx.globalAlpha=1}
 {const a0=2*WW-90-CX,a1=2*WW+90-CX;if(a1>-10&&a0<W+400){const g=ctx.createLinearGradient(a0,0,a1,0);g.addColorStop(0,'rgba(61,56,128,0)');g.addColorStop(1,'rgba(61,56,128,.12)');ctx.fillStyle=g;ctx.fillRect(Math.max(0,a0),-OY,W-Math.max(0,a0),VH)}}
 for(const t of vis){const cx=CX-zoff(t),ab=t==='abysses';
  for(const f of RT[t].fish)if(f.sp.glow&&f.state!=='caught'){const X=f.x-cx;if(X<-40||X>W+40)continue;const lt=f.sp.sh==='lantern';glow(lt?X+f.dir*(f.w/2-2):X,lt?f.y-f.h/2+2:f.y,f.sp.glow,Math.max(10,f.w*.55))}
  if(tn.a>=.15||ab)for(const d of S.tanks[t].decor){const def=DECOR[d.t];if(def&&def.glow)glow(d.x-cx,d.y-10,def.glow,16)}}
 // brume des zones verrouillées
 {const oc=openCount();if(oc<ZONES.length){const x0=oc*WW-CX;if(x0<W+10){const g=ctx.createLinearGradient(x0-36,0,x0+8,0);g.addColorStop(0,'rgba(255,250,240,0)');g.addColorStop(1,'rgba(255,250,240,.92)');ctx.fillStyle=g;ctx.fillRect(x0-36,-OY,W-x0+36,VH);const nz=TANKS[ZONES[oc]];txt(ctx,'(•︿•)',x0+18,56,'#fff','center',9,'#b3a6cc');txt(ctx,nz.n,x0+18,70,'#fff','center',6,'#b3a6cc');txt(ctx,'niv. '+nz.lv,x0+18,79,'#fff','center',6,'#b3a6cc')}}}
 for(const p of parts){ctx.globalAlpha=Math.min(1,p.life*2);ctx.fillStyle=p.col;ctx.fillRect(q(p.x-CX),q(p.y),1,1)}ctx.globalAlpha=1;
 for(const f of floats){ctx.globalAlpha=Math.min(1,f.life*2);if(f.heart)ctx.drawImage(HEART,q(f.x-CX-3),q(f.y),HEART.width/2,HEART.height/2);else txt(ctx,f.t,q(f.x-CX),q(f.y),f.c,'center',6);ctx.globalAlpha=1}
 // mini-carte du monde
 const mw=Math.min(54,Math.round(W*.3)),mx0=5,my=VH-OY-9-(VH>H?7:0);ctx.fillStyle='rgba(91,85,128,.4)';ctx.fillRect(mx0-1,my-1,mw+2,7);
 ZONES.forEach((t,i)=>{const th=themeOf(t);ctx.fillStyle=tankOpen(t)?th.bot:'rgba(255,250,240,.5)';ctx.fillRect(mx0+i*mw/3+.5,my,mw/3-1,5)});
 ctx.fillStyle='rgba(255,255,255,.45)';ctx.fillRect(mx0+CX/WWT*mw,my-1,W/WWT*mw,7);
 for(const t of ZONES){if(!tankOpen(t))continue;for(const f of RT[t].fish)if(f.state!=='caught'&&f.x>0&&f.x<WW){ctx.fillStyle=f.resident?P.pk:f.vid?P.pu:RAR[f.sp.r].col;const big='rel'.includes(f.sp.r)&&!f.resident&&!f.vid;ctx.fillRect(q(mx0+(zoff(t)+f.x)/WWT*mw),big?my+1:my+2,big?1.5:.5,big?1.5:.5)}}
 // flèches hors écran (rares)
 if(Math.floor(T*3)%2)for(const t of ZONES){if(!tankOpen(t))continue;for(const f of RT[t].fish){if(f.resident||f.vid||f.state==='caught'||!'rel'.includes(f.sp.r))continue;const X=zoff(t)+f.x-CX;if(X>-4&&X<W+4)continue;const left=X<0,y=clamp(Math.round(f.y),16,SAND-4);ctx.fillStyle=RAR[f.sp.r].col;
  for(let i=0;i<4;i++)ctx.fillRect(left?3+i:W-4-i,y-3+i,1,7-2*i);ctx.fillStyle=OUT;ctx.fillRect(left?2:W-3,y-4,1,9)}}
 if(banner){const a=Math.min(1,banner.life),bob=Math.sin(T*3)*1;ctx.globalAlpha=a;let bsz=banner.big?11:8;const fitF=z=>{ctx.font=Math.round(z*1.35)+'px "VT323", "DotGothic16", "M PLUS Rounded 1c", sans-serif';return ctx.measureText(banner.t).width};while(bsz>4&&fitF(bsz)>W-8)bsz-=.5;txt(ctx,banner.t,W/2,14+bob,banner.c===P.wh?'#ffffff':banner.c,'center',bsz,banner.c===P.wh?'#8a7bb5':OUT);ctx.globalAlpha=1}
 if(decoMode){ctx.fillStyle='rgba(174,234,192,.25)';ctx.fillRect(0,124,W,H-124);ctx.fillStyle=P.gr;for(let x=0;x<W;x+=2)ctx.fillRect(x,124,1,.5);
  if(held&&ptr.x>-50){const wx=ptr.x+CX,zi=Math.floor(wx/WW);if(zi<openCount()){ctx.fillStyle='rgba(91,85,128,.18)';ctx.beginPath();ctx.ellipse(q(ptr.x),clampY(ptr.y),10,2.2,0,0,6.283);ctx.fill();drawDecor({t:held.t,x:q(wx-zi*WW),y:clampY(ptr.y)-1+Math.sin(T*6)*.8},CX-zi*WW,.8)}}}
 if(flash>0){ctx.globalAlpha=flash;ctx.fillStyle=P.wh;ctx.fillRect(0,-OY,W,VH);ctx.globalAlpha=1}}

const clampY=y=>Math.round(clamp(y,126,142));

/* ================= INTERACTIONS ================= */
function cpos(e,c,w,h){const r=c.getBoundingClientRect();if(c===cv)return{x:(e.clientX-r.left)/r.width*W,y:(e.clientY-r.top)/r.height*VH-OY};return{x:(e.clientX-r.left)/r.width*w,y:(e.clientY-r.top)/r.height*h}}
let down=null;
$('#wrap').addEventListener('pointerdown',e=>{if(e.target!==cv&&e.target!==$('#wrap'))return;ac();const p=cpos(e,cv,W,H);ptr=p;down={x:p.x,y:p.y,cam:CAM.t,drag:false,type:e.pointerType,lx:p.x,lt:performance.now(),v:0};CAM.v=0;try{cv.setPointerCapture(e.pointerId)}catch(_){}
 if(decoMode){if(held){down.placing=true}else{const h=decoHit(p);if(h){pickDecor(h);down.placing=true}}}});
cv.addEventListener('pointermove',e=>{const p=cpos(e,cv,W,H);ptr=p;if(down&&down.placing){trashHot(e);return}if(down){const dx=p.x-down.x;if(!down.drag&&Math.abs(dx)>5&&!(decoMode&&held))down.drag=true;
 if(down.drag){CAM.t=clamp(down.cam-dx,-20,maxCam()+20);CAM.x=CAM.t;const now=performance.now(),dtm=Math.max(1,now-down.lt);down.v=down.v*.6+(-(p.x-down.lx)/dtm*1000)*.4;down.lx=p.x;down.lt=now;hideHint()}}});
cv.addEventListener('pointerup',e=>{const p=cpos(e,cv,W,H);const d=down;down=null;if(!d)return;if(d.placing){dropHeld(e);return}if(d.drag){CAM.v=clamp(d.v,-600,600);return}clickAt(p,d.type)});
cv.addEventListener('pointercancel',()=>{down=null});
cv.addEventListener('pointerleave',()=>{if(!down)ptr={x:-99,y:-99}});
cv.addEventListener('wheel',e=>{const d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;CAM.t=clamp(CAM.t+d*.25,0,maxCam());CAM.v=0;hideHint();e.preventDefault()},{passive:false});
function clickAt(p,type){const wxW=p.x+CAM.x,zi=clamp(Math.floor(wxW/WW),0,openCount()-1),z=ZONES[zi],wx=wxW-zi*WW,tk=S.tanks[z];EOX=zi*WW;
 if(decoMode)return;
 if(wx>FEEDX-14&&wx<FEEDX+14&&p.y<FY+13){SFX.click();renderFood();openM('#mFood');return}
 const pad=type==='touch'?8:5;let best=null,bd=1e9;
 for(const t of ZONES){if(!tankOpen(t))continue;const lx=wxW-zoff(t);
  for(const g of S.tanks[t].gifts){if(lx>=g.x-9&&lx<=g.x+9&&p.y>=g.y-18&&p.y<=g.y+2){EOX=zoff(t);collectGift(t,g);return}}
  for(const f of RT[t].fish){if(f.state==='caught')continue;if(lx>=f.x-f.w/2-pad&&lx<=f.x+f.w/2+pad&&p.y>=f.y-f.h/2-pad&&p.y<=f.y+f.h/2+pad){const d=Math.hypot(lx-f.x,p.y-f.y);if(d<bd){bd=d;best={f,t}}}}}
 if(best){const f=best.f;EOX=zoff(best.t);
  if(f.resident||f.vid){f.happyUntil=T+1.2;floats.push({x:EOX+f.x,y:f.y-f.h/2-8,heart:true,life:1.2});SFX.heart();questEv('pet');if(!f.vid){f.dir*=-1;f.boost=.6}else if(!known(f.sp.id))say('ʕ•ᴥ•ʔ Un visiteur mystère… attends qu\'il reparte pour découvrir qui c\'est !');else say(`♡ ${f.sp.n} est content de te voir !`)}
  else catchFish(f);return}
 addBubble(wx,p.y,2);SFX.pop();
 for(const t of ZONES){if(!tankOpen(t))continue;const lx=wxW-zoff(t);for(const f of RT[t].fish){if(f.state==='caught'||f.vid)continue;const dx=f.x-lx,dy=f.y-p.y;if(dx*dx+dy*dy<38*38){f.dir=dx>=0?1:-1;f.boost=1.2;f.turnT=rand(3,6)}}}}
const anyModal=()=>!!document.querySelector('.modal.show');
document.addEventListener('keydown',e=>{if(anyModal())return;if(e.key==='ArrowLeft'){navDir=-1;hideHint();e.preventDefault()}if(e.key==='ArrowRight'){navDir=1;hideHint();e.preventDefault()}});
document.addEventListener('keyup',e=>{if((e.key==='ArrowLeft'&&navDir<0)||(e.key==='ArrowRight'&&navDir>0))navDir=0});
function hideHint(){const h=$('#hint');if(h&&!h.classList.contains('gone')){h.classList.add('gone');if(!S.hintDone){S.hintDone=true;save()}}}

/* ================= HUD ================= */
const JOURS=['dim.','lun.','mar.','mer.','jeu.','ven.','sam.'],MOIS=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
function hud(){const n=new Date();$('#coins').textContent='◎ '+S.coins;$('#pearls').textContent='✧ '+S.pearls;$('#dexCount').textContent='✿ '+SPECIES.filter(s=>known(s.id)).length+'/'+SPECIES.length;
 $('#lvl').firstChild.textContent='☆ Niv. '+S.lv+' ';$('#xpFill').style.width=Math.round(S.xp/need(S.lv)*100)+'%';$('#lvl').title=S.xp+' / '+need(S.lv)+' XP';
 $('#clock').textContent=tintFor(n).ic+' '+JOURS[n.getDay()]+' '+n.getDate()+' '+MOIS[n.getMonth()]+' · '+String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0')+(isFullMoon(n)?' ○':'');
 $('#bSound').firstChild.textContent=S.sound?'♪':'×';$('#bMusic').classList.toggle('on',S.music);paintBubbles()}
let sayT=0;function say(h){const t=$('#ticker');t.innerHTML=h;t.classList.add('show');clearTimeout(sayT);sayT=setTimeout(()=>t.classList.remove('show'),6000)}
function dailyCheck(n){const k=dkey(n);if(S.lastDay!==k){const had=!!S.lastDay;S.lastDay=k;if(had){say('☼ (｡•ᴗ•｡) Nouveau jour, nouveaux poissons et nouvelles quêtes !');}save();hud()}ensureQuests(n)}
function renderTanks(){}
function switchTank(t){if(!tankOpen(t))return;CAM.t=CAM.x=Math.min(zoff(t)+10,maxCam());CAM.v=0}

/* ================= BULLES PIXEL ================= */
const bubCache={};
function pixelBubble(fill){if(bubCache[fill])return bubCache[fill];const N=24,c=document.createElement('canvas');c.width=N;c.height=N;const x=c.getContext('2d'),cx=11.5,cy=11.5,R=11;
 const A=hx(fill),light='rgb('+A.map(v=>Math.round(v+(255-v)*.55)).join(',')+')',deep='rgb('+A.map(v=>Math.round(v*.9)).join(',')+')';
 for(let j=0;j<N;j++)for(let i=0;i<N;i++){const d=Math.hypot(i-cx,j-cy);if(d>R+.2)continue;
  if(d>R-1.1){x.fillStyle=OUT}else if(d>R-2.2){x.fillStyle=(i+j<N-2)?light:deep}else{const t=Math.hypot(i-cx+3,j-cy+3)/R;x.fillStyle=t<.55?light:fill}x.fillRect(i,j,1,1)}
 x.fillStyle='#fff';[[6,5],[7,5],[8,5],[5,6],[5,7],[5,8],[6,6],[9,4],[10,4],[4,9],[4,10]].forEach(([i,j])=>x.fillRect(i,j,1,1));x.fillRect(16,17,1,1);x.fillRect(17,16,1,1);x.globalAlpha=.6;x.fillRect(7,7,2,2);
 return bubCache[fill]=c.toDataURL()}
function paintBubbles(){const cols=['#bfe8f7','#ffd3e6','#cdf3dd','#fff0bf'];
 document.querySelectorAll('.bub').forEach((b,i)=>{const ic=b.querySelector('.ic');ic.style.setProperty('--bimg',`url(${pixelBubble(b.classList.contains('on')?'#ffc2dc':cols[i%4])})`)});
 const m=$('#menuBtn');m.style.setProperty('--bimg',`url(${pixelBubble(m.classList.contains('on')?'#ffc2dc':'#c9ecfb')})`)}
paintBubbles();
/* ================= MENU ================= */
const drawer=$('#drawer');$('#menuBtn').onclick=e=>{ac();SFX.click();drawer.classList.toggle('open');$('#menuBtn').classList.toggle('on',drawer.classList.contains('open'));paintBubbles()};
drawer.querySelectorAll('.bub').forEach(b=>b.addEventListener('click',()=>{if(b.id!=='bSound'&&b.id!=='bMusic'){drawer.classList.remove('open');$('#menuBtn').classList.remove('on');paintBubbles()}}));
$('#wrap').addEventListener('pointerdown',e=>{if(e.target!==cv&&e.target!==$('#wrap'))return;if(drawer.classList.contains('open')){drawer.classList.remove('open');$('#menuBtn').classList.remove('on');paintBubbles()}});
/* ================= MODALES ================= */
function openM(id){$(id).classList.add('show');navDir=0}
function closeM(el){el.classList.remove('show');if(el.id==='mMg'){stopMg();el.classList.remove('playing')}
 if(el.id==='mHelp'&&!S.instTip){S.instTip=true;save();const sa=matchMedia('(display-mode: standalone)').matches||navigator.standalone;if(!sa)setTimeout(()=>openM('#mInstall'),250)}}
function orderInstall(){const and=/android/i.test(navigator.userAgent),b=$('#mInstall .box');if(and)b.insertBefore($('#instAndroid'),$('#instIos'))}
document.querySelectorAll('.modal').forEach(m=>{m.addEventListener('pointerdown',e=>{if(e.target===m)closeM(m)});m.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{ac();closeM(m)}))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.show').forEach(closeM);if(decoMode)exitDeco()}});
function fitSprite(c,s,sc){const x=c.getContext('2d');x.imageSmoothingEnabled=false;x.clearRect(0,0,c.width,c.height);const k=sc||Math.max(1,Math.floor(Math.min((c.width-4)/s.width,(c.height-4)/s.height)));x.drawImage(s,Math.floor((c.width-s.width*k)/2),Math.floor((c.height-s.height*k)/2),s.width*k,s.height*k)}

/* Collection */
function dexCard(s,now,open,pool){const g=known(s.id),R=RAR[s.r],active=open&&!s.visitOnly&&lvOk(s)&&(s.cond?s.cond(now):pool.includes(s.id))&&needsOk(s),n=S.caught[s.id]||0;
 const tip=s.visitOnly?'ʕ•ᴥ•ʔ Via la mangeoire':(!g&&!lvOk(s))?'⊘ niv. '+lvOf(s):s.r==='l'?'✧ ???':s.cond?s.hint:'au hasard';
 return `<div class="card mini ${g?'':'unk'}" style="--bc:${R.col}" ><canvas width="104" height="72" data-sp="${s.id}"></canvas>
  <div class="nm">${g?s.n:'???'}${active&&!g?' ✧':''}</div><div class="rr" style="color:${R.col}">${R.n}</div><div class="when">${tip}</div>${g?`<div class="cnt">${n?'×'+n:''}${S.photo[s.id]?' ◉':''}</div>`:''}</div>`}
function renderDex(){const now=new Date(),n=SPECIES.filter(s=>known(s.id)).length;
 $('#dexHead').innerHTML=`<h2>✿ Collection ${n}/${SPECIES.length}</h2>`;
 let h='';for(const [tk,T0] of Object.entries(TANKS)){const open=tankOpen(tk),pool=dailyPool(now,tk),sps=SPECIES.filter(s=>s.hab===tk),got=sps.filter(s=>known(s.id)).length;
  h+=`<h3>${T0.ic} ${T0.n} <span class="sub">${got}/${sps.length}${open?'':' · ⊘ niv. '+T0.lv}</span></h3><div class="grid mini">`+sps.map(s=>dexCard(s,now,open,pool)).join('')+'</div>'}
 const sv=SPECIES.filter(s=>s.visitOnly);h+=`<h3>ʕ•ᴥ•ʔ Spéciaux <span class="sub">${sv.filter(s=>known(s.id)).length}/${sv.length}</span></h3><div class="grid mini">`+sv.map(s=>dexCard(s,now,true,[])).join('')+'</div>';
 $('#dexBody').innerHTML=h;
 document.querySelectorAll('#dexBody canvas').forEach(c=>{const s=byId[c.dataset.sp];fitSprite(c,spr(s,known(s.id)?'':'sil'))})}
function renderRes(){const b=$('#resBody'),max=upv('vitrine');
 const card=(sp,sel)=>{const t=resHab(sp),T0=TANKS[t];return`<div class="rcard${sel?' sel':''}" data-rs="${sp.id}"><canvas width="60" height="44"></canvas><div class="rinfo"><b>${sp.n}</b><span class="rhab">${T0.ic} ${sp.hab==='any'?'Visiteur · va au '+T0.n:T0.n}</span></div></div>`};

 let h=`<div class="sub">${max} par zone · touche un poisson pour l'ajouter ou l'enlever</div>`;
 for(const [t,T0] of Object.entries(TANKS)){if(!tankOpen(t))continue;const res=S.tanks[t].res;h+=`<h3>${T0.ic} ${T0.n} <span class="sub">${res.length}/${max}</span></h3><div class="rgrid">${res.filter(id=>byId[id]).map(id=>card(byId[id],true)).join('')||'<span class="sub">Personne pour l\'instant</span>'}</div>`}
 const ks=SPECIES.filter(s=>known(s.id));h+=`<h3>Mes poissons</h3><div class="rgrid">${ks.length?ks.map(s=>card(s,S.tanks[resHab(s)].res.includes(s.id))).join(''):'<span class="sub">Attrape d\'abord des poissons !</span>'}</div>`;
 b.innerHTML=h;b.querySelectorAll('.rcard[data-rs]').forEach(el=>{const sp=byId[el.dataset.rs];drawPreview(el.querySelector('canvas'),sp,S.acc[sp.id]);el.onclick=()=>{const rh=resHab(sp),res=S.tanks[rh].res,i=res.indexOf(sp.id);
  if(i>=0)res.splice(i,1);else{if(!tankOpen(rh)){SFX.bad();say(`⌂ Le ${TANKS[rh].n} n'est pas encore ouvert`);return}if(res.length>=max){SFX.bad();say(`⌂ ${TANKS[rh].n} plein ! (vitrine dans la boutique)`);return}res.push(sp.id)}SFX.heart();syncResidents();save();renderRes()}})}
$('#bRes').onclick=()=>{ac();SFX.click();renderRes();openM('#mRes')};
$('#bDex').onclick=()=>{ac();SFX.click();renderDex();openM('#mDex')};

/* Quêtes */
function renderQuests(){ensureQuests(new Date());const lvTxt=`☆ Niveau ${S.lv} — ${S.xp}/${need(S.lv)} XP`;
 const nxt=[];for(const t in TANKS)if(TANKS[t].lv>S.lv)nxt.push({lv:TANKS[t].lv,n:TANKS[t].ic+' '+TANKS[t].n});for(const k in DECOR)if(DECOR[k].lv>S.lv)nxt.push({lv:DECOR[k].lv,n:DECOR[k].n});
 nxt.sort((a,b)=>a.lv-b.lv);const nl=nxt.filter(x=>x.lv===(nxt[0]||{}).lv);
 $('#questBody').innerHTML=`<div class="sub">${lvTxt}${nl.length?' · Prochain déblocage (niv. '+nl[0].lv+') : '+nl.map(x=>x.n).join(', '):''}</div><div class="sub">De nouvelles quêtes arrivent chaque jour à minuit.</div>`+
  S.quests.list.map((q,i)=>{const done=q.prog>=q.goal;return `<div class="quest ${done?'done':''}"><div><div>${q.claimed?'✓':done?'⊹':'☆'} ${q.t}</div><div class="bar"><i style="width:${Math.round(q.prog/q.goal*100)}%"></i></div><div class="sub" style="margin:6px 0 0">${q.prog}/${q.goal} · Récompense : ${q.xp} XP + 1 ✧</div></div>
  ${q.claimed?'<span class="sub">Récupérée</span>':`<button class="btn sm p" data-claim="${i}" ${done?'':'disabled'}>Récupérer</button>`}</div>`}).join('');
 document.querySelectorAll('[data-claim]').forEach(b=>b.onclick=()=>{const q=S.quests.list[+b.dataset.claim];if(q.claimed||q.prog<q.goal)return;q.claimed=true;S.pearls+=1;SFX.buy();addXP(q.xp);save();hud();questDot();renderQuests()})}
$('#bQuest').onclick=()=>{ac();SFX.click();renderQuests();openM('#mQuest')};$('#bLevels').onclick=()=>{ac();SFX.click();renderLevels();openM('#mLevels')};$('#lvl').style.cursor='pointer';$('#lvl').onclick=()=>{ac();SFX.click();renderLevels();openM('#mLevels')};


/* Mangeoire / Journal / Absence */
function renderFood(){const now=Date.now();let h='<div class="sub">Tant qu\'il reste de la nourriture, des poissons viennent te rendre visite, <b>même quand le jeu est fermé</b>. Ils s\'installent sur ta déco et tes jouets ʕ•ᴥ•ʔ, puis repartent en laissant un ⊹ cadeau sur le sable.</div>';
 for(const [t,T0] of Object.entries(TANKS)){if(!tankOpen(t))continue;const fd=S.tanks[t].food,on=foodOn(t,now),nv=S.tanks[t].visits.filter(v=>v.start<=now).length;
  h+=`<h3>${T0.ic} ${T0.n} — ${on?FOODS[fd.type].n+' · encore '+fmtDur(fd.until-now):'Mangeoire vide (╥﹏╥)'} · ${nv} visiteur${nv>1?'s':''} · ${S.tanks[t].decor.length} place${S.tanks[t].decor.length>1?'s':''}</h3><div class="grid">`+
  Object.entries(FOODS).map(([k,F])=>{const lock=F.pp?S.pearls<F.pp:S.coins<F.p;return `<div class="card"><div class="nm">${F.n}</div><div class="desc">${F.d}</div><div class="hint">Dure ${F.h}h · rares ${'★'.repeat(F.q)}${'☆'.repeat(5-F.q)}</div><div class="price">${F.pp?'✧ '+F.pp+' perles':'◎ '+F.p}</div><button class="btn sm y" data-food="${t}|${k}" ${lock?'disabled':''}>${on&&fd.type===k?'Rajouter (+'+F.h+'h)':'Mettre'}</button></div>`}).join('')+'</div>'}
 h+='<div class="sub" style="margin-top:14px">☆ Chaque déco ou jouet est une place où un visiteur peut s\'installer. Plus tu as de jouets, plus les visites sont fréquentes !</div>';
 $('#foodBody').innerHTML=h;
 document.querySelectorAll('[data-food]').forEach(b=>b.onclick=()=>{const [t,k]=b.dataset.food.split('|'),F=FOODS[k];if(F.pp){if(S.pearls<F.pp)return;S.pearls-=F.pp}else{if(S.coins<F.p)return;S.coins-=F.p}
  const tk=S.tanks[t],now=Date.now();if(foodOn(t,now)&&tk.food.type===k)tk.food.until=Math.min(tk.food.until+F.h*36e5,now+24*36e5);else tk.food={type:k,until:now+F.h*36e5};
  if(!S.simT||S.simT<now-TICK)S.simT=now-TICK;SFX.buy();save();hud();renderFood();say(`(っ˘ڡ˘ς) ${F.n} dans la mangeoire du ${TANKS[t].n} ! Les visiteurs vont arriver…`)})}
$('#bFood').onclick=()=>{ac();SFX.click();renderFood();openM('#mFood')};
function thumb(id){return `<canvas width="60" height="44" data-th="${id}"></canvas>`}
function paintThumbs(root){root.querySelectorAll('canvas[data-th]').forEach(c=>drawPreview(c,byId[c.dataset.th],null))}
function renderJournal(){const b=$('#journalBody');const sv=Object.entries(S.souv);
 let h=`<div class="sub">Les ${Math.min(S.log.length,60)} dernières visites. Clique sur les ⊹ dans l'aquarium pour ramasser les cadeaux.</div>`;
 h+=S.log.length?S.log.slice(0,40).map(e=>{const sp=byId[e.id];if(!sp)return'';return `<div class="vrow">${thumb(e.id)}<div><div class="nm">${sp.n}${e.first?' <b>· nouveau !</b>':''}</div><div class="hint">${TANKS[e.tank].ic} ${fmtH(e.start)} → ${fmtH(e.end)} · a joué avec ${DECOR[e.toy]?DECOR[e.toy].n:'ta déco'}</div><div>⊹ ${e.coins} ◎${e.pearls?' + '+e.pearls+' ✧':''}${e.souv?' · ♡ Souvenir : '+e.souv:''}</div></div></div>`}).join(''):'<div class="sub">Aucune visite pour l\'instant. Remplis la ◒ mangeoire et reviens plus tard !</div>';
 h+=`<h3>♡ Souvenirs — ${sv.length}</h3><div class="sub">Un poisson qui vient 6 fois te laisse un souvenir.</div>`+(sv.length?sv.map(([id,o])=>`<div class="vrow">${thumb(id)}<div class="nm">${o.n}</div></div>`).join(''):'');
 b.innerHTML=h;paintThumbs(b);$('#bJournal').classList.remove('dot')}
function renderJournalDot(){$('#bJournal').classList.add('dot')}
$('#bJournal').onclick=()=>{ac();SFX.click();renderJournal();openM('#mJournal')};
function showAway(out,awayMs){const now=Date.now();const cur=[];for(const t in TANKS)S.tanks[t].visits.filter(v=>v.start<=now).forEach(v=>cur.push({t,v}));
 const ng=Object.values(S.tanks).reduce((a,t)=>a+t.gifts.length,0);if(!out.length&&!ng&&!cur.length)return;
 const by={};out.forEach(e=>{(by[e.id]=by[e.id]||{n:0,c:0,p:0,first:false,toy:e.toy,souv:null});const o=by[e.id];o.n++;o.c+=e.coins;o.p+=e.pearls;o.first=o.first||e.first;o.souv=o.souv||e.souv});
 $('#awayTitle').textContent=awayMs>6e5?'☾ Pendant ton absence ('+fmtDur(awayMs)+')…':'໒꒱ Des nouvelles de ton aquarium';
 let h='';if(out.length)h+='<div class="sub">Ils sont venus jouer et ont laissé des cadeaux :</div>'+Object.entries(by).map(([id,o])=>`<div class="vrow">${thumb(id)}<div><div class="nm">${byId[id].n}${o.first?' <b>· nouveau dans ta collection !</b>':''}${o.n>1?' ×'+o.n:''}</div><div class="hint">a joué avec ${DECOR[o.toy]?DECOR[o.toy].n:'ta déco'} · ♡ ${heartsOf(S.visits[id]||0)}</div>${o.souv?'<div>♡ Souvenir : '+o.souv+'</div>':''}</div></div>`).join('');
 if(cur.length)h+='<h3>En ce moment chez toi</h3>'+cur.map(({t,v})=>`<div class="vrow">${thumb(v.id)}<div><div class="nm">${known(v.id)?byId[v.id].n:'??? (un visiteur mystère)'}</div><div class="hint">${TANKS[t].ic} ${TANKS[t].n} · joue avec ${DECOR[v.toy]?DECOR[v.toy].n:'ta déco'}</div></div></div>`).join('');
 const empty=Object.keys(TANKS).filter(t=>tankOpen(t)&&!foodOn(t));
 h+=`<div class="row">${ng?`<button class="btn p" id="awayAll">⊹ Ramasser les ${ng} cadeaux</button>`:''}${empty.length?'<button class="btn y" id="awayFood">◒ Remplir la mangeoire</button>':''}<button class="btn" data-close2>Voir l'aquarium</button></div>`;
 if(empty.length)h+=`<div class="sub">! Mangeoire vide : ${empty.map(t=>TANKS[t].n).join(', ')}</div>`;
 const b=$('#awayBody');b.innerHTML=h;paintThumbs(b);openM('#mAway');
 const a=$('#awayAll');if(a)a.onclick=()=>{collectAll();closeM($('#mAway'))};const fb=$('#awayFood');if(fb)fb.onclick=()=>{closeM($('#mAway'));renderFood();openM('#mFood')};
 b.querySelector('[data-close2]').onclick=()=>closeM($('#mAway'))}

/* Dressing */
let dressSel=null;
function drawPreview(c,sp,acc){const x=c.getContext('2d');x.imageSmoothingEnabled=false;x.clearRect(0,0,c.width,c.height);const s=spr(sp);const extra=acc?s.height*.45:0;
 const k=Math.max(1,Math.floor(Math.min((c.width-4)/s.width,(c.height-4)/(s.height+extra))));x.save();x.translate(Math.floor(c.width/2),Math.floor(c.height/2+extra*k/2));
 x.drawImage(s,-Math.floor(s.width*k/2),-Math.floor(s.height*k/2),s.width*k,s.height*k);if(acc)drawAcc(x,sp,tpx(sp)*2*k,s.width*k,s.height*k,acc);x.restore()}
function renderDress(){const caught=SPECIES.filter(s=>known(s.id)),b=$('#dressBody');
 if(!caught.length){b.innerHTML='<div class="sub">Attrape d\'abord des poissons pour pouvoir les habiller !</div>';return}
 if(!dressSel||!known(dressSel)){const res=Object.values(S.tanks).flatMap(t=>t.res);dressSel=res[0]||caught[0].id}
 const sp=byId[dressSel],isRes=S.tanks[resHab(sp)].res.includes(sp.id),cur=S.acc[sp.id];
 b.innerHTML=`<div class="sub">Les accessoires se voient sur tes poissons <b>résidents</b> ⌂ dans l'aquarium. Un accessoire acheté peut aller sur autant de poissons que tu veux !</div>
 <div class="dress"><div class="dprev"><canvas id="dCan" width="240" height="168"></canvas><div class="nm">${sp.n}</div>${isRes?'<div class="now">⌂ Résident ('+TANKS[resHab(sp)].n+')</div>':`<button class="btn sm g" id="dInv">⌂ Inviter comme résident</button>`}${cur?'<button class="btn sm p" id="dOff">Retirer l\'accessoire</button>':''}</div>
 <div><div class="sub">Choisis un poisson :</div><div class="thumbs">${caught.map(s=>`<canvas width="60" height="44" data-ds="${s.id}" class="${s.id===dressSel?'sel':''}" title="${s.n}"></canvas>`).join('')}</div></div></div>
 <h3>Accessoires</h3><div class="grid">${Object.entries(ACC).map(([k,a])=>{const own=S.accOwned.includes(k),lock=S.lv<a.lv;return `<div class="card ${lock?'lock':''}" style="--bc:${cur===k?'#e07fb0':'#c3b4e0'}"><canvas width="104" height="72" data-acc="${k}"></canvas><div class="nm">${a.n}</div>${lock?`<div class="hint">⊘ Niveau ${a.lv}</div>`:own?(cur===k?'<div class="now">Porté ✓</div>':`<button class="btn sm p" data-wear="${k}">Mettre</button>`):`<div class="price">◎ ${a.p}</div><button class="btn sm y" data-buyacc="${k}" ${S.coins<a.p?'disabled':''}>Acheter</button>`}</div>`}).join('')}</div>`;
 drawPreview($('#dCan'),sp,cur);
 b.querySelectorAll('[data-ds]').forEach(c=>{drawPreview(c,byId[c.dataset.ds],S.acc[c.dataset.ds]);c.onclick=()=>{dressSel=c.dataset.ds;SFX.click();renderDress()}});
 b.querySelectorAll('[data-acc]').forEach(c=>drawPreview(c,sp,c.dataset.acc));
 const wear=k=>{S.acc[sp.id]=k;questEv('dress');SFX.heart();save();renderDress();say(`♡ ${sp.n} porte maintenant : ${ACC[k].n} !`+(isRes?'':' Invite-le comme résident pour le voir dans l\'aquarium.'))};
 b.querySelectorAll('[data-wear]').forEach(x=>x.onclick=()=>wear(x.dataset.wear));
 b.querySelectorAll('[data-buyacc]').forEach(x=>x.onclick=()=>{const k=x.dataset.buyacc,a=ACC[k];if(S.coins<a.p)return;S.coins-=a.p;S.accOwned.push(k);SFX.buy();hud();wear(k)});
 const off=$('#dOff');if(off)off.onclick=()=>{delete S.acc[sp.id];SFX.click();save();renderDress()};
 const inv=$('#dInv');if(inv)inv.onclick=()=>{const rh=resHab(sp),res=S.tanks[rh].res;if(!tankOpen(rh))return;if(res.length>=upv('vitrine')){SFX.bad();say('⌂ La vitrine du '+TANKS[rh].n+' est pleine ! Retire un résident dans ✿ Collection ou améliore la vitrine.');return}res.push(sp.id);syncResidents();SFX.heart();save();renderDress()}}
$('#bDress').onclick=()=>{ac();SFX.click();renderDress();openM('#mDress')};

/* Boutique */
let shopTab='deco';
function renderShop(){$('#shopCoins').textContent='◎ '+S.coins;document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===shopTab));let h='';
 if(shopTab==='deco'||shopTab==='toy')h=(shopTab==='toy'?'<div class="sub" style="grid-column:1/-1">Les jouets attirent les visiteurs de la mangeoire. Chaque poisson a ses jouets préférés… et certains visiteurs spéciaux ne viennent que pour un jouet !</div>':'')+Object.entries(DECOR).filter(([k,d])=>!!d.toy===(shopTab==='toy')).map(([k,d])=>{const lock=S.lv<d.lv;return `<div class="card ${lock?'lock':''}"><canvas width="104" height="${d.kelp?120:72}" data-dec="${k}"></canvas><div class="nm">${d.n}</div>${lock?`<div class="hint">⊘ Niveau ${d.lv}</div>`:`<div class="price">${d.pp?'✧ '+d.pp+' perles':'◎ '+d.p}</div><div class="hint">En stock : ${S.inv[k]||0}</div><button class="btn sm" data-buy="${k}" ${(d.pp?S.pearls<d.pp:S.coins<d.p)?'disabled':''}>Acheter</button>`}</div>`}).join('');
 if(shopTab==='up')h=Object.entries(UPS).map(([k,u])=>{const lv=S.up[k],max=lv>=u.p.length;return `<div class="card"><div class="nm">${u.n}</div><div class="desc">${u.d}</div><div>Niveau ${lv+1}/${u.lv.length}</div><div class="hint">Actuel : ${u.fmt(u.lv[lv])}</div>${max?'<div class="now">MAX ✓</div>':`<div class="hint">Suivant : ${u.fmt(u.lv[lv+1])}</div><div class="price">◎ ${u.p[lv]}</div><button class="btn sm" data-up="${k}" ${S.coins<u.p[lv]?'disabled':''}>Améliorer</button>`}</div>`}).join('');
 if(shopTab==='th'){const cur=S.tanks[S.cur].theme||TANKS[S.cur].theme;h=`<div class="sub" style="grid-column:1/-1">Le fond s'applique au bac actuel : ${TANKS[S.cur].ic} ${TANKS[S.cur].n}</div>`+Object.entries(THEMES).filter(([k,t])=>!t.tank||t.tank===S.cur).map(([k,t])=>{const own=t.tank||S.themes.includes(k),lock=t.lv&&S.lv<t.lv;
  return `<div class="card ${lock?'lock':''}"><div style="height:46px;background:linear-gradient(${t.top},${t.bot} 75%,${t.sand[0]} 75%);box-shadow:0 0 0 2px #5b5580"></div><div class="nm">${t.n}</div>${lock?`<div class="hint">⊘ Niveau ${t.lv}</div>`:own?(cur===k?'<div class="now">Utilisé ✓</div>':`<button class="btn sm" data-th="${k}">Utiliser</button>`):`<div class="price">◎ ${t.p}</div><button class="btn sm" data-th="${k}" ${S.coins<t.p?'disabled':''}>Acheter</button>`}</div>`}).join('')}
 $('#shopGrid').innerHTML=h;
 document.querySelectorAll('[data-dec]').forEach(c=>fitSprite(c,dspr(c.dataset.dec)));
 document.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>{const k=b.dataset.buy,d=DECOR[k];if(d.pp){if(S.pearls<d.pp)return;S.pearls-=d.pp}else{if(S.coins<d.p)return;S.coins-=d.p}S.inv[k]=(S.inv[k]||0)+1;SFX.buy();save();hud();renderShop();say(`♡ ${d.n} acheté ! Place-le avec ❀ Déco, dans le bac de ton choix.`)});
 document.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>{const k=b.dataset.up,u=UPS[k],c=u.p[S.up[k]];if(S.coins<c)return;S.coins-=c;S.up[k]++;SFX.buy();save();hud();renderShop();say(`✧ ${u.n} amélioré : ${u.fmt(upv(k))} !`)});
 document.querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>{const k=b.dataset.th,t=THEMES[k];if(!t.tank&&!S.themes.includes(k)){if(S.coins<t.p)return;S.coins-=t.p;S.themes.push(k);SFX.buy()}else SFX.click();S.tanks[S.cur].theme=t.tank?null:k;save();hud();renderShop()})}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{shopTab=b.dataset.tab;SFX.click();renderShop()});
$('#bShop').onclick=()=>{ac();SFX.click();renderShop();openM('#mShop')};

/* Déco */
function decoHit(p){const wxW=p.x+CAM.x,zi=Math.floor(wxW/WW);if(zi<0||zi>=openCount())return null;const z=ZONES[zi],wx=wxW-zi*WW,tk=S.tanks[z];
 const hits=tk.decor.map((d,i)=>({d,i})).filter(({d})=>{const b=decorBox(d);return wx>=b.x0-3&&wx<=b.x1+3&&p.y>=b.y0-3&&p.y<=b.y1+3}).sort((a,b)=>b.d.y-a.d.y);return hits.length?{z,i:hits[0].i}:null}
function pickDecor(h){const d=S.tanks[h.z].decor.splice(h.i,1)[0];held={t:d.t,uid:d.uid};SFX.click();showTrash(true);save()}
function placeAt(p){const wxW=p.x+CAM.x,zi=Math.floor(wxW/WW);if(zi<0||zi>=openCount())return false;const z=ZONES[zi];
 S.tanks[z].decor.push({t:held.t,x:Math.round(clamp(wxW-zi*WW,4,WW-4)),y:clampY(p.y),uid:held.uid||nextUid()});EOX=zi*WW;burst(wxW-zi*WW,clampY(p.y)-4,P.gr,8);held=null;SFX.place();questEv('deco');save();return true}
function returnHeld(){if(!held)return;S.inv[held.t]=(S.inv[held.t]||0)+1;held=null;SFX.pop();save()}
function overEl(e,el){if(!el||el.hidden)return false;const r=el.getBoundingClientRect();return e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom}
function trashHot(e){$('#decoTrash').classList.toggle('hot',overEl(e,$('#decoTrash'))||overEl(e,$('#decoBar')))}
function showTrash(v){const t=$('#decoTrash');t.style.setProperty('--bimg',`url(${pixelBubble(v?'#ffd3e6':'#cdf3dd')})`);if(!v)t.classList.remove('hot')}
function dropHeld(e){if(!held)return;if(overEl(e,$('#decoTrash'))||overEl(e,$('#decoBar'))){returnHeld()}else if(overEl(e,cv)){if(!placeAt(cpos(e,cv,W,H)))returnHeld()}else returnHeld();showTrash(false);renderChips()}
let trayDrag=null;
function renderChips(){const ks=Object.keys(DECOR).filter(k=>S.inv[k]>0),c=$('#chips');
 c.innerHTML=ks.length?ks.map(k=>`<div class="titem ${held&&held.t===k&&!held.uid?'armed':''}" data-chip="${k}"><canvas width="64" height="46"></canvas>${DECOR[k].n}<span class="n">${S.inv[k]}</span></div>`).join(''):'<div class="titem empty" id="toShop">¥ Plus d\'objets ? Va à la boutique</div>';
 c.querySelectorAll('.titem[data-chip]').forEach(el=>{fitSprite(el.querySelector('canvas'),dspr(el.dataset.chip));
  el.addEventListener('pointerdown',e=>{ac();e.preventDefault();if(held)returnHeld();const k=el.dataset.chip;S.inv[k]--;held={t:k};trayDrag={x:e.clientX,y:e.clientY,moved:false};SFX.click();showTrash(true)})});
 const ts=$('#toShop');if(ts)ts.onclick=()=>{exitDeco();renderShop();openM('#mShop')}}
document.addEventListener('pointermove',e=>{if(!trayDrag)return;if(Math.hypot(e.clientX-trayDrag.x,e.clientY-trayDrag.y)>8)trayDrag.moved=true;if(overEl(e,cv)&&!overEl(e,$('#decoBar')))ptr=cpos(e,cv,W,H);else ptr={x:-99,y:-99};trashHot(e)});
document.addEventListener('pointerup',e=>{if(!trayDrag)return;const t=trayDrag;trayDrag=null;if(t.moved)dropHeld(e);else{ptr={x:W/2,y:136};renderChips();say('Touche l\'aquarium pour poser '+DECOR[held.t].n)}});
function enterDeco(){decoMode=true;$('#decoBar').hidden=false;showTrash(false);$('#bDeco').classList.add('on');renderChips();$('#decoTitle').textContent='❀ Déco';}
function exitDeco(){returnHeld();decoMode=false;$('#decoBar').hidden=true;showTrash(false);$('#bDeco').classList.remove('on');save()}
$('#bDeco').onclick=()=>{ac();SFX.click();decoMode?exitDeco():enterDeco()};
$('#bDecoDone').onclick=()=>{SFX.click();exitDeco()};


/* Photo */
$('#bPhoto').onclick=()=>{ac();const c=document.createElement('canvas'),k=4;c.width=W*k;c.height=VH*k;const x=c.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(cv,0,0,W*k,VH*k);x.imageSmoothingEnabled=true;x.drawImage(tc,0,0,W*k,VH*k);x.imageSmoothingEnabled=false;
 const n=new Date(),st=n.getDate()+'/'+(n.getMonth()+1)+'/'+n.getFullYear()+'  '+String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');
 x.font='38px "VT323", "DotGothic16", sans-serif';x.textBaseline='bottom';x.textAlign='right';x.lineJoin='round';x.strokeStyle=OUT;x.lineWidth=7;x.strokeText(st,W*k-14,H*k-12);x.fillStyle='#fff';x.fillText(st,W*k-14,H*k-12);
 const cx=cam(),vis=fishOf().filter(f=>f.state!=='caught'&&f.x>cx&&f.x<cx+W),seen=[...new Set(vis.map(f=>f.sp.id))];const nouveaux=seen.filter(id=>!S.photo[id]&&known(id));seen.forEach(id=>{if(known(id))S.photo[id]=true});
 if(vis.length>=3)questEv('photo');
 album.unshift({url:c.toDataURL('image/png'),date:n.getTime()});if(album.length>16)album.length=16;const ok=saveAlbum();save();flash=1;SFX.photo();
 say('(｡•̀ᴗ-)✧ Clic ! Photo rangée dans ton ▤ Album.'+(nouveaux.length?' Nouveaux poissons photographiés : '+nouveaux.map(id=>byId[id].n).join(', ')+' ◉':'')+(ok?'':' (mémoire pleine, la photo ne sera pas gardée)'))};

/* Album */
function renderAlbum(sel){const b=$('#albumBody');
 if(sel!=null&&album[sel]){b.innerHTML=`<img id="bigPhoto" src="${album[sel].url}" alt="Photo de l'aquarium"><div class="sub">${new Date(album[sel].date).toLocaleString('fr-FR')} — clic droit (ou appui long) sur la photo → « Enregistrer l'image » pour la garder.</div><div class="row"><button class="btn sm" id="aBack">↩ Retour</button><button class="btn sm p" id="aDel">× Supprimer</button></div>`;
  $('#aBack').onclick=()=>renderAlbum();$('#aDel').onclick=()=>{album.splice(sel,1);saveAlbum();renderAlbum()};return}
 b.innerHTML=album.length?`<div class="sub">${album.length}/16 photos · clique sur une photo pour l'agrandir.</div><div class="album">${album.map((p,i)=>`<img src="${p.url}" data-ph="${i}" alt="Photo ${i+1}">`).join('')}</div>`:'<div class="sub">Pas encore de photo ! Appuie sur ◉ Photo quand un joli poisson passe.</div>';
 b.querySelectorAll('[data-ph]').forEach(im=>im.onclick=()=>renderAlbum(+im.dataset.ph))}
$('#bAlbum').onclick=()=>{ac();SFX.click();renderAlbum();openM('#mAlbum')};
$('#bSound').onclick=()=>{ac();S.sound=!S.sound;save();hud();SFX.click()};
$('#bMusic').onclick=()=>{ac();S.music=!S.music;save();hud();paintBubbles()};
$('#bHelp').onclick=()=>{ac();openM('#mHelp')};if($('#helpInst'))$('#helpInst').onclick=e=>{e.preventDefault();ac();closeM($('#mHelp'));openM('#mInstall')};

/* ================= MINI-JEUX ================= */
let MW=200,MH=125;const mc=$('#mgc'),mx=mc.getContext('2d');mc.width=MW*Q;mc.height=MH*Q;mx.imageSmoothingEnabled=false;
function sizeMg(){const box=$('#mMg .box'),cs=getComputedStyle(box),aw=box.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight),
 ah=box.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom)-$('#mMg .head').offsetHeight-$('#mgHud').offsetHeight-$('#mgEnd').offsetHeight-14;
 if(aw<50||ah<50)return;const portrait=ah/aw>1.05;MW=portrait?150:200;MH=Math.round(clamp(MW*ah/aw,126,360));
 if(mc.width!==MW*Q||mc.height!==MH*Q){mc.width=MW*Q;mc.height=MH*Q;mx.imageSmoothingEnabled=false}
 let w=aw,h=aw*MH/MW;if(h>ah){h=ah;w=ah*MW/MH}mc.style.width=Math.floor(w)+'px';mc.style.height=Math.floor(h)+'px'}
addEventListener('resize',()=>{if($('#mMg').classList.contains('show'))sizeMg()});
let mg=null,keys={};
const MGS={
 bulles:{n:'∘° Pop les bulles',d:'20 secondes pour éclater un max de bulles. Les dorées valent 5 !'},
 memo:{n:'♢ Mémo-poissons',d:'Retrouve les paires de poissons en un minimum de coups.'},
 flocons:{n:'⋆ Festin de flocons',d:'Déplace ton poisson (souris, doigt ou flèches) pour attraper la nourriture. Évite les cailloux !'},
 coucou:{n:'ʕ•ᴥ•ʔ Coucou Bernard',d:'Les bernard-l\'ermite sortent de leur trou : touche-les vite ! Le doré vaut 3. Attention aux poissons-ballons…'},
 chant:{n:'♪ Chant des coquillages',d:'Écoute la mélodie des coquillages et rejoue-la. Elle s\'allonge à chaque tour !'}
};
function mgBg(){mx.setTransform(Q,0,0,Q,0,0);mx.imageSmoothingEnabled=false;const g=mx.createLinearGradient(0,0,0,MH);g.addColorStop(0,'#d4f4ff');g.addColorStop(1,'#8ccbea');mx.fillStyle=g;mx.fillRect(0,0,MW,MH);mx.fillStyle='#fff1d4';mx.fillRect(0,MH-6,MW,6)}
function ring(x,y,r,col){mx.fillStyle=col;for(let a=0;a<6.283;a+=.25/r)mx.fillRect(q(x+Math.cos(a)*r),q(y+Math.sin(a)*r),.5,.5);mx.fillStyle='#fff';mx.fillRect(q(x-r/2),q(y-r/2),.5,.5)}
function renderMgMenu(){$('#mMg').classList.remove('playing');$('#mgTitle').textContent='✦ Mini-jeux';$('#mgPlay').hidden=true;const m=$('#mgMenu');m.hidden=false;
 m.innerHTML='<div class="sub">Gagne des pièces pour décorer ton aquarium !</div><div class="grid">'+Object.entries(MGS).map(([k,g])=>`<div class="card"><div class="nm">${g.n}</div><div class="desc">${g.d}</div><button class="btn sm" data-mg="${k}">Jouer</button></div>`).join('')+'</div>';
 m.querySelectorAll('[data-mg]').forEach(b=>b.onclick=()=>startMg(b.dataset.mg))}
function startMg(k){ac();SFX.click();$('#mgMenu').hidden=true;$('#mgPlay').hidden=false;$('#mgEnd').innerHTML='';$('#mgTitle').textContent=MGS[k].n;$('#mMg').classList.add('playing');sizeMg();mg=MAKE[k]();mg.key=k}
function stopMg(){mg=null}
function endMg(reward){mg.over=true;reward=Math.max(0,Math.round(reward));S.coins+=reward;questEv('mg',reward);save();hud();SFX.coin();const k=mg.key;
 $('#mgEnd').innerHTML=`<div class="row"><span>Terminé ! ${mg.endTxt()} → <b style="color:#c99a10">+${reward} ◎</b></span></div><div class="row"><button class="btn sm" id="mgA">↻ Rejouer</button><button class="btn sm p" id="mgB">↩ Menu</button></div>`;
 $('#mgA').onclick=()=>startMg(k);$('#mgB').onclick=()=>{stopMg();renderMgMenu()}}
const MAKE={
 bulles:()=>({time:20,score:0,b:[],sp:0,p:[],
  hud(){return '◔ '+Math.ceil(Math.max(0,this.time))+'s   ∘° '+this.score},endTxt(){return this.score+' points'},
  update(dt){if(this.over)return;this.time-=dt;if(this.time<=0){endMg(this.score);return}this.sp-=dt;
   if(this.sp<=0){this.sp=rand(.15,.38);const gold=Math.random()<.08;this.b.push({x:rand(12,MW-12),y:MH+8,r:gold?4:Math.round(rand(4,8)),vy:rand(22,48)*(gold?1.6:1),ph:Math.random()*6,gold})}
   for(const q of this.b){q.y-=q.vy*dt;q.ph+=dt*3}this.b=this.b.filter(q=>q.y>-12&&!q.dead);for(const p of this.p)p.l-=dt;this.p=this.p.filter(p=>p.l>0)},
  draw(){mgBg();for(const q of this.b)ring(q.x+Math.sin(q.ph)*3,q.y,q.r,q.gold?'#e0b830':'#5aa8d6');for(const p of this.p)txt(mx,p.t,p.x,p.y-(1-p.l)*10,p.c,'center',7)},
  click(x,y){if(this.over)return;for(let i=this.b.length-1;i>=0;i--){const q=this.b[i],bx=q.x+Math.sin(q.ph)*3;if((x-bx)**2+(y-q.y)**2<=(q.r+4)**2){q.dead=true;const v=q.gold?5:1;this.score+=v;this.p.push({x:bx,y:q.y,t:'+'+v,c:q.gold?P.ye:P.wh,l:1});SFX.pop();return}}}}),
 memo:()=>{const sps=shuffle(SPECIES.filter(s=>(s.r==='c'||s.r==='u')&&!s.visitOnly&&tankOpen(s.hab)&&lvOk(s)&&!s.sc)).slice(0,6);const cards=shuffle([...sps,...sps]).map(sp=>({sp,up:false,done:false}));
  return{cards,first:-1,second:-1,lock:0,moves:0,score:0,
  hud(){return '♢ Coups : '+this.moves+'   Paires : '+this.cards.filter(c=>c.done).length/2+'/6'},endTxt(){return this.moves+' coups'},
  box(i){const cols=MW<190?3:4,rows=12/cols,cx=i%cols,cy=Math.floor(i/cols),gw=cols*46-6,gh=rows*40-6,ox=Math.round((MW-gw)/2),oy=Math.max(4,Math.round((MH-6-gh)/2));return{x:ox+cx*46,y:oy+cy*40,w:40,h:34}},
  update(dt){if(this.lock>0){this.lock-=dt;if(this.lock<=0){this.cards[this.first].up=this.cards[this.second].up=false;this.first=this.second=-1}}},
  draw(){mgBg();this.cards.forEach((c,i)=>{const b=this.box(i);mx.fillStyle=OUT;mx.fillRect(b.x-1,b.y-1,b.w+2,b.h+2);
   if(c.up||c.done){mx.fillStyle=c.done?'#d4f5e0':'#fffaf0';mx.fillRect(b.x,b.y,b.w,b.h);const s=spr(c.sp),k=Math.max(1,Math.floor(Math.min((b.w*2-6)/s.width,(b.h*2-6)/s.height)))/2;mx.drawImage(s,q(b.x+b.w/2-s.width*k/2),q(b.y+b.h/2-s.height*k/2),s.width*k,s.height*k)}
   else{mx.fillStyle='#ffd6e8';mx.fillRect(b.x,b.y,b.w,b.h);mx.fillStyle='#ffb0d2';for(let yy=b.y+2;yy<b.y+b.h-2;yy+=4)for(let xx=b.x+2+(yy%8?2:0);xx<b.x+b.w-2;xx+=4)mx.fillRect(xx,yy,1,1);txt(mx,'?',b.x+b.w/2,b.y+b.h/2-4,'#fffaf0','center')}})},
  click(x,y){if(this.over||this.lock>0)return;const i=this.cards.findIndex((c,i)=>{const b=this.box(i);return x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h});if(i<0)return;const c=this.cards[i];if(c.up||c.done)return;
   c.up=true;SFX.click();if(this.first<0){this.first=i;return}this.second=i;this.moves++;
   if(this.cards[this.first].sp===c.sp){this.cards[this.first].done=c.done=true;this.first=this.second=-1;SFX.catch();if(this.cards.every(c=>c.done))setTimeout(()=>mg===this&&endMg(Math.max(10,Math.min(70,70-(this.moves-6)*5))),400)}
   else this.lock=.8}}},
 flocons:()=>{const res=Object.values(S.tanks).flatMap(t=>t.res);const pl=byId[res[0]]||byId.guppy;return{time:25,score:0,px:MW/2,tx:MW/2,dir:1,f:[],sp:0,pl,
  hud(){return '◔ '+Math.ceil(Math.max(0,this.time))+'s   ⋆ '+this.score},endTxt(){return this.score+' points'},
  update(dt){if(this.over)return;this.time-=dt;if(this.time<=0){endMg(this.score);return}
   if(keys.ArrowLeft)this.tx-=110*dt;if(keys.ArrowRight)this.tx+=110*dt;this.tx=clamp(this.tx,12,MW-12);const d=this.tx-this.px;if(Math.abs(d)>.5)this.dir=d>0?1:-1;this.px+=d*Math.min(1,dt*10);
   this.sp-=dt;if(this.sp<=0){this.sp=rand(.25,.55);const r=Math.random();this.f.push({x:rand(8,MW-8),y:-4,vy:rand(28,48),k:r<.12?'gold':r<.3?'rock':'food'})}
   for(const q of this.f){q.y+=q.vy*dt;if(!q.dead&&Math.abs(q.x-this.px)<14&&Math.abs(q.y-(MH-23))<10){q.dead=true;if(q.k==='rock'){this.score=Math.max(0,this.score-3);SFX.bad()}else{this.score+=q.k==='gold'?3:1;SFX.pop()}}}
   this.f=this.f.filter(q=>q.y<MH&&!q.dead)},
  draw(){mgBg();for(const q of this.f){const X=Math.round(q.x*2)/2,Y=Math.round(q.y*2)/2;if(q.k==='rock'){mx.fillStyle=OUT;mx.fillRect(X-2,Y-1.5,4,3.5);mx.fillStyle=P.dk;mx.fillRect(X-1.5,Y-1.5,3,3);mx.fillStyle=P.lg;mx.fillRect(X-1,Y-1.5,1,.5)}else{mx.fillStyle=OUT;mx.fillRect(X-1.5,Y-1,3,2);mx.fillStyle=q.k==='gold'?'#e0b830':P.or;mx.fillRect(X-1,Y-1,2,1.5);mx.fillStyle=P.wh;mx.fillRect(X-.5,Y-1,.5,.5)}}
   const s=spr(this.pl,Math.floor(T*6)%2?'a':''),sc=this.pl.sc===3?.55:.8;mx.save();mx.translate(Math.round(this.px*2)/2,MH-23);if(this.dir<0)mx.scale(-1,1);mx.drawImage(s,-Math.floor(s.width*sc/2),-Math.floor(s.height*sc/2),s.width*sc,s.height*sc);if(S.acc[this.pl.id])drawAcc(mx,this.pl,tpx(this.pl)*sc*2*.5*2,s.width*sc,s.height*sc,S.acc[this.pl.id]);mx.restore()},
  move(x){this.tx=x},click(x){this.tx=x}}},
 coucou:()=>{const KS={ber:byId.bernard,gold:byId.bernardor||byId.bernard,puf:byId.ballon||byId.bernard};return{time:25,score:0,sp:.5,p:[],h:Array.from({length:6},()=>({t:0,life:0,k:'ber',hit:false})),
  hud(){return '◔ '+Math.ceil(Math.max(0,this.time))+'s   ʕ•ᴥ•ʔ '+this.score},endTxt(){return this.score+' points'},
  cell(i){const cols=MW<190?2:3,rows=6/cols,cw=MW/cols,chh=(MH-8)/rows,cx=(i%cols)*cw+cw/2,top=Math.floor(i/cols)*chh;return{x:cx,y:top+chh*.78,w:Math.min(cw*.7,40),ch:chh}},
  update(dt){if(this.over)return;this.time-=dt;if(this.time<=0){endMg(Math.round(this.score*1.4));return}const sp=.55+.45*this.time/25;
   this.sp-=dt;if(this.sp<=0){this.sp=rand(.35,.75)*sp;const free=this.h.filter(o=>o.t<=0);if(free.length){const o=pick(free),r=Math.random();o.k=r<.1?'gold':r<.3?'puf':'ber';o.life=o.t=rand(.75,1.25)*sp+.25;o.hit=false}}
   for(const o of this.h)if(o.t>0)o.t-=dt;for(const p of this.p)p.l-=dt;this.p=this.p.filter(p=>p.l>0)},
  up(o){if(o.t<=0)return 0;const a=o.life-o.t;return Math.min(1,a/.14,o.t/.14)},
  draw(){mgBg();this.h.forEach((o,i)=>{const c=this.cell(i),u=this.up(o),hw=c.w/2;
    mx.fillStyle='#e8d2a8';mx.fillRect(c.x-hw-2,c.y-1,c.w+4,5);mx.fillStyle='#4a4266';mx.fillRect(c.x-hw+2,c.y-3,c.w-4,3);mx.fillStyle='#6d6190';mx.fillRect(c.x-hw+4,c.y-3,c.w-8,1);
    if(u>0){const s=spr(KS[o.k],o.hit?'h':''),sc=Math.min(1,(c.w*1.1)/s.width,(c.ch*.7)/s.height),w=s.width*sc,h=s.height*sc;mx.save();mx.beginPath();mx.rect(c.x-hw-4,c.y-c.ch,c.w+8,c.ch-1.5);mx.clip();
     mx.drawImage(s,q(c.x-w/2),q(c.y-1.5-h*u),w,h);if(o.k==='gold'){mx.fillStyle='#fff4b8';const tw=Math.floor(T*8)%2;mx.fillRect(q(c.x+w/2-2),q(c.y-h*u-2+tw),.5,2);mx.fillRect(q(c.x+w/2-2.75),q(c.y-h*u-1.25+tw),2,.5)}mx.restore()}
    mx.fillStyle='#f3e3c4';mx.fillRect(c.x-hw-2,c.y-1.5,c.w+4,4);mx.fillStyle='#fffaf0';mx.fillRect(c.x-hw,c.y-1.5,c.w,.5);mx.fillStyle='#e0c89a';for(let k=0;k<4;k++)mx.fillRect(c.x-hw+2+k*(c.w/4),c.y+1,1,.5)});
   for(const p of this.p)txt(mx,p.t,p.x,p.y-(1-p.l)*10,p.c,'center',7)},
  click(x,y){if(this.over)return;for(let i=0;i<6;i++){const o=this.h[i],c=this.cell(i);if(o.t<=0||o.hit||this.up(o)<.35)continue;if(Math.abs(x-c.x)<c.w/2+3&&y<c.y+3&&y>c.y-c.ch*.85){o.hit=true;o.t=Math.min(o.t,.2);
    if(o.k==='puf'){this.score=Math.max(0,this.score-2);SFX.bad();this.p.push({x:c.x,y:c.y-c.ch*.5,t:'-2',c:P.rd,l:1})}else{const v=o.k==='gold'?3:1;this.score+=v;SFX.pop();this.p.push({x:c.x,y:c.y-c.ch*.5,t:'+'+v,c:o.k==='gold'?P.ye:P.wh,l:1})}return}}}}},
 chant:()=>({seq:[Math.floor(Math.random()*4)],si:0,pi:0,ph:'wait',t:.9,lit:-1,press:-1,pt:0,round:0,
  cols:['#ff9ccc','#ffd34d','#7cc9ea','#8fdcb0'],dark:['#d9709f','#d9a51f','#4f9fc4','#5fb487'],notes:[523.25,659.25,783.99,1046.5],
  hud(){return '♪ Tour '+(this.round+1)+'   '+(this.ph==='play'?'à toi !':'écoute…')},endTxt(){return this.round+' tour'+(this.round>1?'s':'')+' réussi'+(this.round>1?'s':'')},
  box(i){const S0=Math.min((MW-18)/2,(MH-20)/2),ox=(MW-2*S0-6)/2,oy=(MH-6-2*S0-6)/2;return{x:ox+(i%2)*(S0+6),y:oy+Math.floor(i/2)*(S0+6),s:S0}},
  play(i){tone(this.notes[i],.32,'triangle',.07,0,0)},
  update(dt){if(this.over)return;if(this.pt>0)this.pt-=dt;
   if(this.ph==='wait'){this.t-=dt;if(this.t<=0){this.ph='show';this.si=0;this.t=.1;this.lit=-1}}
   else if(this.ph==='show'){this.t-=dt;if(this.t<=0){const sp=Math.max(.24,.5-this.round*.02);if(this.lit>=0){this.lit=-1;this.t=sp*.4}else if(this.si<this.seq.length){this.lit=this.seq[this.si++];this.play(this.lit);this.t=sp}else{this.ph='play';this.pi=0}}}},
  draw(){mgBg();for(let i=0;i<4;i++){const b=this.box(i),on=this.lit===i||(this.press===i&&this.pt>0);mx.fillStyle=OUT;mx.fillRect(b.x-1,b.y-1,b.s+2,b.s+2);
    mx.fillStyle=on?'#ffffff':this.cols[i];mx.fillRect(b.x,b.y,b.s,b.s);if(on){mx.fillStyle=this.cols[i];mx.fillRect(b.x+2,b.y+2,b.s-4,b.s-4)}
    const cx=b.x+b.s/2,cy=b.y+b.s*.55,r=b.s*.28;mx.fillStyle=on?'#fffaf0':this.dark[i];
    for(let k=-2;k<=2;k++){const a=-Math.PI/2+k*.42;for(let d=r*.25;d<r;d+=.5)mx.fillRect(q(cx+Math.cos(a)*d),q(cy+Math.sin(a)*d),.5,.5)}
    for(let a=-Math.PI*.95;a<=-Math.PI*.05;a+=.04)mx.fillRect(q(cx+Math.cos(a)*r),q(cy+Math.sin(a)*r),.5,.5);mx.fillRect(q(cx-r*.35),q(cy),r*.7,1)}
   if(this.ph!=='play'&&!this.over)txt(mx,'♪',MW/2,MH/2-6,P.wh,'center',8)},
  click(x,y){if(this.over||this.ph!=='play')return;const i=[0,1,2,3].find(k=>{const b=this.box(k);return x>=b.x&&x<=b.x+b.s&&y>=b.y&&y<=b.y+b.s});if(i===undefined)return;
   this.press=i;this.pt=.22;this.play(i);
   if(i!==this.seq[this.pi]){SFX.bad();this.ph='end';endMg(Math.min(90,this.round*8));return}
   this.pi++;if(this.pi>=this.seq.length){this.round++;SFX.catch();this.seq.push(Math.floor(Math.random()*4));this.ph='wait';this.t=.8}}})
};
mc.addEventListener('pointerdown',e=>{ac();if(!mg)return;const p=cpos(e,mc,MW,MH);mg.click&&mg.click(p.x,p.y)});
mc.addEventListener('pointermove',e=>{if(!mg||!mg.move)return;const p=cpos(e,mc,MW,MH);mg.move(p.x)});
document.addEventListener('keydown',e=>{if(mg&&mg.key==='flocons'&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){keys[e.key]=true;e.preventDefault()}});
document.addEventListener('keyup',e=>{keys[e.key]=false});
$('#bMg').onclick=()=>{ac();SFX.click();renderMgMenu();openM('#mMg')};

function setBackdrop(){const th=themeOf(S.cur);const top=window._bdTop||th.top,bot=window._bdBot||th.sand[0];$('#wrap').style.background=`linear-gradient(${top} 0 50%, transparent 50%), radial-gradient(${th.sand[1]} 1.2px, transparent 1.8px) 0 0/13px 11px, radial-gradient(${th.sand[2]||th.sand[1]} 1px, transparent 1.6px) 6px 5px/17px 15px, ${bot}`}
function sampleEdges(){try{const a=ctx.getImageData(cv.width>>1,0,1,1).data,b=ctx.getImageData(cv.width>>1,cv.height-1,1,1).data;
 window._bdTop=`rgb(${a[0]},${a[1]},${a[2]})`;window._bdBot=`rgb(${b[0]},${b[1]},${b[2]})`;setBackdrop()}catch(e){}}
function fitCanvas(){setBackdrop();requestAnimationFrame(()=>requestAnimationFrame(sampleEdges));const vw=innerWidth,vh=innerHeight;let w=vw,h=vw*VH/W;if(h>vh){h=vh;w=vh*W/VH}if(VH>H){w=vw;h=vh}cv.style.width=w+'px';cv.style.height=h+'px';const dpr=Math.min(3,devicePixelRatio||1);tc.width=Math.round(w*dpr);tc.height=Math.round(h*dpr);const r=cv.getBoundingClientRect(),rw=$('#wrap').getBoundingClientRect();Object.assign(tc.style,{width:w+'px',height:h+'px',left:(r.left-rw.left)+'px',top:(r.top-rw.top)+'px'})}
function relayout(){const nw=calcW(),ov=VH;W=nw;calcVH();if(cv.width!==W*Q||ov!==VH){cv.width=W*Q;cv.height=VH*Q}fitCanvas();CAM.t=clamp(CAM.t,0,maxCam());CAM.x=CAM.t}
addEventListener('resize',relayout);addEventListener('orientationchange',()=>setTimeout(relayout,200));
/* ================= BOUCLE ================= */
let last=performance.now();
function frame(ts){const dt=Math.min(.05,(ts-last)/1000);last=ts;update(dt);draw();if(mg){mg.update(dt);if(mg){mg.draw();$('#mgHud').textContent=mg.hud()}}requestAnimationFrame(frame)}
(function init(){orderInstall();const n=new Date();if(!tankOpen(S.cur))S.cur='ruisseau';
 if(S._pendingXP){const x=S._pendingXP;delete S._pendingXP;addXP(x);say('✧ Grosse mise à jour ! Ta collection t\'a rapporté '+x+' XP. Découvre les quêtes ☆ et les nouveaux bacs !')}
 const lastSeen=S.simT||Date.now();const out=simulate(Date.now());
 fitCanvas();CAM.x=CAM.t=clamp(zoff(S.cur),0,maxCam());for(const t of ZONES)RT[t].cam=RT[t].camT=CAM.x-zoff(t);EOX=zoff(S.cur);
 dailyCheck(n);syncResidents();syncVisits();
 for(let i=0;i<3;i++){trySpawn();const fs=fishOf(),f=fs[fs.length-1];if(f&&!f.resident&&!f.vid)f.x=RT[S.cur].cam+rand(30,W-30)}
 if(S.hintDone)$('#hint').classList.add('gone');
 hud();questDot();if(!S.intro){S.intro=true;save();openM('#mHelp')}
 else if(S._v3news){delete S._v3news;save();say('◒ Nouveau : la <b>mangeoire</b> ! J\'y ai mis des flocons pour toi, et une ʕ•ᴥ•ʔ boîte en carton t\'attend dans ❀ Déco. Les poissons viendront jouer même quand le jeu est fermé.');openM('#mHelp')}
 else showAway(out,Date.now()-lastSeen);
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){const ls=S.simT;const o=simulate(Date.now());syncVisits();if(o.length&&Date.now()-ls>6e5)showAway(o,Date.now()-ls)}});
 if(document.fonts&&document.fonts.load)Promise.all(['10px "VT323"','10px "DotGothic16"','10px "M PLUS Rounded 1c"'].map(f=>document.fonts.load(f,'ʕ•ᴥ•ʔ♡ヽノ'))).catch(()=>{});
 requestAnimationFrame(frame)})();
})();
