/* ===== física de plataforma (estilo Celeste, valores ×1.6 porque nossos tiles têm 16 px e os de Celeste 8 px) ===== */
const PH = {
  TILE: 16, DT: 1 / 60,
  GRAV: 1440, MAXFALL: 256, JUMP: -168, VARJUMP: 0.2, HALF_TH: 64,
  RUN: 144, ACCEL: 1600, REDUCE: 640, AIR: 0.65,
  COYOTE: 0.1, BUFFER: 0.1, CORNER: 6,
  W: 10, H: 14,
};
/* mapas: '#' bloco, '^' espinho no chão, 'v' espinho no teto, 'G' bandeira (chegada), 'P' início */
function ctxBot(p, m) {
  const inp = { right: true }, obs = [7, 13, 19];
  m.k = m.k || 0;
  if (m.k < obs.length && p.x + PH.W >= obs[m.k] * 16 - 14) { m.k++; m.hold = 0.18; inp.press = true; }
  if (m.hold > 0) { m.hold -= PH.DT; inp.held = true; }
  return inp;
}
const SCEN = {
  coyote: {
    map: [
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '.....................G..',
      '.P......................',
      '##########.....#########',
      '##########.....#########',
      '##########.....#########',
    ],
    // aperta o pulo 6 px DEPOIS de sair da borda (~67 ms atrasado)
    bot(p, m) { const edge = 10 * 16; const inp = { right: true }; if (!m.j && p.x >= edge + 6) { m.j = true; m.hold = 0.3; inp.press = true; } if (m.hold > 0) { m.hold -= PH.DT; inp.held = true; } return inp; },
  },
  buffer: {
    map: [
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '.P......................',
      '#####...................',
      '#####...................',
      '#####...................',
      '#####...............G...',
      '#####...................',
      '#####...##...###########',
      '#####...##...###########',
      '#####...##...###########',
    ],
    // aperta o pulo ainda no ar, alguns px antes de tocar no pilar
    bot(p, m) { const inp = { right: true }; if (!m.j && p.vy > 0 && p.x > 6 * 16 && p.y + PH.H >= 11 * 16 - 10) { m.j = true; m.hold = 0.35; inp.press = true; } if (m.hold > 0) { m.hold -= PH.DT; inp.held = true; } return inp; },
  },
  corner: {
    map: [
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '.......................',
      '..................G.....',
      '############.###########',
      '.P......................',
      '########################',
      '########################',
      '########################',
      '########################',
    ],
    // para embaixo do buraco, mas 4 px desalinhado, e pula reto
    bot(p, m) {
      const inp = {};
      if (!m.stop) { inp.right = true; if (p.x >= 182) m.stop = true; }
      if (m.stop && !m.j && p.vx === 0) { m.j = true; m.hold = 0.4; inp.press = true; }
      if (m.j && p.y + PH.H <= 8 * 16) inp.right = true;
      if (m.hold > 0) { m.hold -= PH.DT; inp.held = true; }
      return inp;
    },
  },
  varjump: {
    map: [
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........vvvvvv.....G....',
      '................#####...',
      '.P..........#...#####...',
      '########################',
      '########################',
      '########################',
    ],
    // toquinho rápido para o bloco baixo, pulo segurado para o degrau alto
    bot(p, m) {
      const inp = { right: true };
      if (!m.a && p.x >= 10 * 16 + 2) { m.a = true; m.hold = 0.05; inp.press = true; }
      if (!m.b && m.a && p.x >= 14 * 16 + 4 && p.vy === 0) { m.b = true; m.hold = 0.35; inp.press = true; }
      if (m.hold > 0) { m.hold -= PH.DT; inp.held = true; }
      return inp;
    },
  },
  halfgrav: {
    map: [
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '...................G....',
      '.P......................',
      '#######.....############',
      '#######.....############',
      '#######.....############',
    ],
    bot(p, m) { const inp = { right: true }; if (!m.j && p.x >= 7 * 16 - PH.W - 1) { m.j = true; m.hold = 0.6; inp.press = true; } if (m.hold > 0) { m.hold -= PH.DT; inp.held = true; } return inp; },
  },
  // contexto: mesma corrida, dois espaços
  ctxOpen: {
    map: [
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '........................',
      '.P.....#.....#.....#..G.',
      '########################',
      '########################',
      '########################',
    ],
    bot: ctxBot,
  },
  ctxTight: {
    tight: true,
    map: [
      '########################',
      '########################',
      '########################',
      '########################',
      '########################',
      '########################',
      '########################',
      '........................',
      '........................',
      '........................',
      '.P.....#.....#.....#..G.',
      '########################',
      '########################',
      '########################',
    ],
    bot: ctxBot,
  },
};

function parseMap(s) {
  const rows = s.map, out = { w: rows[0].length, h: rows.length, t: rows.map(r => r.split('')) };
  rows.forEach((r, y) => r.split('').forEach((c, x) => {
    if (c === 'P') { out.px = x * 16 + 3; out.py = y * 16 + 16 - PH.H; out.t[y][x] = '.'; }
    if (c === 'G') { out.gx = x * 16; out.gy = y * 16; out.t[y][x] = '.'; }
  }));
  return out;
}
function tileAt(M, tx, ty) { if (tx < 0 || tx >= M.w) return '#'; if (ty < 0 || ty >= M.h) return '.'; return M.t[ty][tx]; }
function solidAt(M, x, y) {
  const x0 = Math.floor(x / 16), x1 = Math.floor((x + PH.W - 1) / 16), y0 = Math.floor(y / 16), y1 = Math.floor((y + PH.H - 1) / 16);
  for (let ty = y0; ty <= y1; ty++) for (let tx = x0; tx <= x1; tx++) if (tileAt(M, tx, ty) === '#') return true;
  return false;
}
function spikeHit(M, x, y) {
  const x0 = Math.floor(x / 16), x1 = Math.floor((x + PH.W - 1) / 16), y0 = Math.floor(y / 16), y1 = Math.floor((y + PH.H - 1) / 16);
  for (let ty = y0; ty <= y1; ty++) for (let tx = x0; tx <= x1; tx++) {
    const c = tileAt(M, tx, ty);
    if (c !== '^' && c !== 'v') continue;
    const rx = tx * 16 + 2, rw = 12, ry = c === 'v' ? ty * 16 : ty * 16 + 8, rh = 8;
    if (x < rx + rw && x + PH.W > rx && y < ry + rh && y + PH.H > ry) return true;
  }
  return false;
}
const approach = (v, t, d) => v < t ? Math.min(v + d, t) : Math.max(v - d, t);

function newPlayer(M) { return { x: M.px, y: M.py, vx: 0, vy: 0, rx: 0, ry: 0, onGround: true, coyoteT: 0, bufT: 0, bufAge: 0, varT: 0, airT: 0, dead: false, won: false, jumped: false }; }

/* um passo fixo de 1/60 s. J = flags, ev = callback de eventos para a demo mostrar */
function stepPlayer(M, p, inp, J, ev) {
  const dt = PH.DT;
  p.onGround = p.vy >= 0 && solidAt(M, p.x, p.y + 1);
  if (p.onGround) { p.coyoteT = J.coyote ? PH.COYOTE : 0; p.airT = 0; p.jumped = false; }
  else { p.coyoteT -= dt; p.airT += dt; }

  if (inp.press) { p.bufT = J.buffer ? PH.BUFFER : dt * 0.5; p.bufAge = 0; }
  const canJump = p.onGround || (p.coyoteT > 0 && !p.jumped);
  if (p.bufT > 0 && canJump) {
    if (!p.onGround) ev('coyote', p, Math.round(p.airT * 1000));
    else if (p.bufAge > 0) ev('buffer', p, Math.round(p.bufAge * 1000));
    else ev('jump', p);
    p.vy = PH.JUMP; p.varT = PH.VARJUMP; p.bufT = 0; p.coyoteT = 0; p.jumped = true; p.onGround = false;
  } else if (p.bufT > 0) {
    p.bufT -= dt; p.bufAge += dt;
    if (p.bufT <= 0) ev('ignored', p);
  }

  // pulo variável (Celeste: VarJumpTimer)
  if (p.varT > 0) {
    if (inp.held || !J.varjump) p.vy = Math.min(p.vy, PH.JUMP); else p.varT = 0;
    p.varT -= dt;
  }
  // gravidade (com meia gravidade no ápice se segurar o pulo)
  if (!p.onGround) {
    const half = J.halfgrav && Math.abs(p.vy) < PH.HALF_TH && inp.held;
    p.vy = approach(p.vy, PH.MAXFALL, PH.GRAV * (half ? 0.5 : 1) * dt);
    p.half = half;
  } else p.half = false;
  // corrida
  const dir = (inp.right ? 1 : 0) - (inp.left ? 1 : 0);
  const mult = p.onGround ? 1 : PH.AIR;
  if (Math.abs(p.vx) > PH.RUN && Math.sign(p.vx) === dir) p.vx = approach(p.vx, PH.RUN * dir, PH.REDUCE * mult * dt);
  else p.vx = approach(p.vx, PH.RUN * dir, PH.ACCEL * mult * dt);

  // movimento pixel a pixel
  p.rx += p.vx * dt; let mx = Math.round(p.rx); p.rx -= mx;
  while (mx !== 0) { const s = Math.sign(mx); if (solidAt(M, p.x + s, p.y)) { p.vx = 0; p.rx = 0; break; } p.x += s; mx -= s; }
  p.ry += p.vy * dt; let my = Math.round(p.ry); p.ry -= my;
  while (my !== 0) {
    const s = Math.sign(my);
    if (solidAt(M, p.x, p.y + s)) {
      if (s < 0 && J.corner) {      // correção de quina (Celeste: UpwardCornerCorrection)
        let done = false;
        const order = p.vx < 0 ? [-1, 1] : p.vx > 0 ? [1, -1] : [-1, 1];
        for (const d of order) { for (let i = 1; i <= PH.CORNER && !done; i++) if (!solidAt(M, p.x + d * i, p.y - 1)) { p.x += d * i; p.y -= 1; my += 1; done = true; ev('corner', p, d * i); } if (done) break; }
        if (done) continue;
      }
      if (s < 0) { ev('bonk', p); p.varT = 0; }
      p.vy = 0; p.ry = 0; break;
    }
    p.y += s; my -= s;
  }
  if (spikeHit(M, p.x, p.y)) { p.dead = 'spike'; }
  if (p.y > M.h * 16 + 8) { p.dead = 'fall'; }
  if (M.gx !== undefined && Math.abs(p.x + PH.W / 2 - (M.gx + 8)) < 10 && Math.abs(p.y + PH.H - (M.gy + 16)) < 20) p.won = true;
}
SCEN.meta = SCEN.coyote;
if (typeof module !== 'undefined') module.exports = { PH, SCEN, parseMap, newPlayer, stepPlayer, solidAt };
