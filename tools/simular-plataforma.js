const { SCEN, parseMap, newPlayer, stepPlayer } = require('../src/plat.js');
const ORDER = ['coyote','buffer','corner','varjump','halfgrav'];
for (const [i,id] of ORDER.entries()) for (const on of [false,true]) {
  const J = {}; ORDER.forEach((k,j)=> J[k] = j < i || (j===i && on));
  const M = parseMap(SCEN[id]); const p = newPlayer(M); const m = {}; const evs=[];
  let t=0, maxH=0, y0=p.y;
  for (; t<600 && !p.dead && !p.won; t++) { stepPlayer(M,p,SCEN[id].bot(p,m),J,(e,pp,v)=>evs.push(e+(v!==undefined?':'+v:'')+'@'+pp.x)); maxH=Math.max(maxH,y0-p.y); }
  console.log(id, on?'ON ':'OFF', p.dead?('DEAD '+p.dead):p.won?'WIN':'timeout', 'x',p.x,'y',p.y,'t',t, evs.join(' '), 'maxH',maxH);
}
