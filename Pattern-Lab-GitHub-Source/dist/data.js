import {airData} from './air-data.js';
import {realData} from './real-data.js';
import {rng} from './core.js';
export function sample(kind='songs'){
 if(kind==='air')return JSON.parse(JSON.stringify(airData));
 if(realData[kind])return JSON.parse(JSON.stringify(realData[kind]));
 const r=rng(614),noise=()=>r()+r()+r()-1.5;let headers,rows=[],description,units;
 if(kind==='songs'){headers=['Song','Tempo','Energy','Danceability','Acousticness'];units=['name','BPM','0–1','0–1','0–1'];description='Synthetic music features for 72 fictional songs. Energy, danceability, and acousticness are illustrative scores, not measurements of real audio.';for(let i=0;i<72;i++){let g=i%3;rows.push([`Track ${String(i+1).padStart(2,'0')}`,Math.round([78,118,156][g]+noise()*17),...[.22+g*.28,.3+g*.22,.85-g*.33].map(v=>+Math.max(.01,Math.min(.99,v+noise()*.2)).toFixed(3))]);}}
 else if(kind==='objects'){headers=['Object','Length','Width','Mass'];units=['name','cm','cm','g'];description='Synthetic measurements of 60 classroom objects. Shape and material are not included; consider what this leaves out.';for(let i=0;i<60;i++){let g=i%3;rows.push([`Object ${i+1}`,+(5+g*8+noise()*3).toFixed(2),+(3+g*4+noise()*2).toFixed(2),+(20+g*75+noise()*20).toFixed(2)]);}}
 else{headers=['Example','Horizontal','Vertical','Depth'];units=['name','arbitrary units','arbitrary units','arbitrary units'];description=`Synthetic ${kind} pattern, generated deterministically for investigating the limits of K-means. No group labels are supplied to the model.`;for(let i=0;i<90;i++){let g=i%3,x,y;if(kind==='curved'){let t=(i%45)/44*Math.PI;x=Math.cos(t)+(i>=45?1:0);y=(i<45?Math.sin(t):.5-Math.sin(t));x+=noise()*.08;y+=noise()*.08;}else if(kind==='continuous'){x=r()*10;y=r()*10;}else{x=g*4+noise()*(kind==='overlapping'?5:1.4);y=[0,5,0][g]+noise()*(kind==='overlapping'?5:1.4);}rows.push([`Example ${i+1}`,+x.toFixed(3),+y.toFixed(3),+(x*.3+y*.5+noise()).toFixed(3)]);}}
 return{name:{songs:'Song studio',objects:'Object collection',separated:'Separated groups',overlapping:'Overlapping groups',continuous:'Continuous variation',curved:'Curved groups'}[kind],headers,rows:rows.map(row=>row.map(String)),units,description,source:'Cluster Lab · synthetic data · seed 614'};
}
