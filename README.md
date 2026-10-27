# Molho

Apresentação interativa da palestra **"Game Feel: Adicionando o molho nos seus jogos"**, de Thiago Cortez, para a SECOMP · UFAL.

São 43 slides navegáveis no navegador, com dois jogos pixel art rodando dentro da apresentação (feitos em [Phaser 3](https://phaser.io)):

1. **Abertura e teoria (slides 1 a 10):** quem fala, game feel segundo Steve Swink, as seis peças, os 7 princípios e o ciclo de correção (por que ~100 ms importam).
2. **Parte 1, controles (slides 11 a 18):** um jogo de plataforma com a física de *Celeste*. Um bot com timing humano falha sem cada truque e passa com ele: coyote time, jump buffer, correção de quina, pulo variável e meia gravidade no ápice.
3. **Parte 2, juice (slides 19 a 38):** um shooter top-down que começa sem nenhum efeito e ganha uma técnica por slide, até as 17 (animação, som, muzzle flash, flash branco, knockback, hitstop, screen shake, câmera, permanência, squash & stretch, sons graves, explosão, UI).
4. **Exemplo real (slide 39):** pausa para abrir o [Harpooner](https://store.steampowered.com/app/4259930/Harpooner/) e mostrar as mesmas técnicas num jogo de verdade.
5. **Fechamento (slides 40 a 43):** cuidados, receita de bolso e referências.

Os trechos de código nos slides estão em C# no estilo Unity.

## Acesse online

**https://teagu.github.io/Molho/**

<img src="docs/qrcode.png" alt="QR code para https://teagu.github.io/Molho/" width="200">

O QR code também está em [`docs/qrcode.svg`](docs/qrcode.svg) (vetor, bom para imprimir ou pôr num slide).

## Como abrir

Ou abra `index.html` localmente num navegador (precisa de internet na primeira vez para baixar o Phaser do jsDelivr). Clique uma vez na tela para liberar o som e aperte **F** para tela cheia.

| Tecla | O que faz |
|---|---|
| ← → / PageUp PageDown / espaço | Navega entre slides (funciona com passador) |
| **T** | Liga e desliga a técnica do slide (antes × depois) |
| **0** | Desliga todos os efeitos de uma vez |
| **M** | Som liga/desliga |
| **H** | Hitbox no jogo de plataforma |
| **R** | Limpa o chão do shooter |
| **F** | Tela cheia |
| A D + W/K | Joga o plataforma |
| WASD + mouse | Joga o shooter |

Os mesmos controles ficam como botões no rodapé, e cada um aparece só nos slides onde faz sentido (técnica e molho nos slides com jogo, hitbox no plataforma, limpar chão no shooter, som e tela cheia sempre).

Sem input por 3 segundos, um piloto automático assume.

## Estrutura

```
index.html                  página pronta (gerada)
dist/artifact.html          mesma página sem <head>, para publicar como Artifact
src/deck.html               slides, estilos, jogos e lógica (fonte principal)
src/plat.js                 física e fases do jogo de plataforma
src/build.py                embute assets e gera index.html e dist/
assets/                     sprites, sons e fontes (CC0)
assets/sobre/               foto, logo da Mango Salad e capas dos jogos (slide 2)
tools/simular-plataforma.js testa cada fase com o truque desligado e ligado
docs/qrcode.png, .svg       QR code para a página publicada
```

Depois de editar algo em `src/` ou `assets/`, rode:

```bash
python3 src/build.py
node tools/simular-plataforma.js   # opcional: confere se o bot falha sem o truque e passa com ele
```

## Créditos

- Motor: [Phaser 3.80](https://phaser.io) (MIT), carregado via CDN.
- Sprites: RPG Urban Pack, [Kenney](https://kenney.nl) (CC0).
- Sons: efeitos da Kenney (CC0), via pacote de recursos do Python Arcade. O sub-grave é sintetizado com Web Audio.
- Fontes: Kenney Mini Square e Kenney Pixel (CC0); Atkinson Hyperlegible e JetBrains Mono (OFL, via Google Fonts).
- Constantes de física: código do Player de [Celeste](https://github.com/NoelFB/Celeste), de Noel Berry.

## Referências

- Steve Swink. *Game Feel: A Game Designer's Guide to Virtual Sensation*. Morgan Kaufmann, 2009.
- Maddy Thorson. [*Celeste & Forgiveness*](https://maddymakesgames.com/articles/celeste_and_forgiveness/).
- Martin Jonasson e Petri Purho. [*Juice it or lose it*](https://www.youtube.com/watch?v=Fy0aCDmgnxg). GDC Europe, 2012.
- Jan Willem Nijman (Vlambeer). [*The Art of Screenshake*](https://www.youtube.com/watch?v=AJdEqssNZ-U). INDIGO, 2013.
- Squirrel Eiserloh. [*Math for Game Programmers: Juicing Your Cameras With Math*](https://www.youtube.com/watch?v=tu-Qe66AvtY). GDC, 2016.
