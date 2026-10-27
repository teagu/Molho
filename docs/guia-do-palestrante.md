# Game Feel: Adicionando o molho nos seus jogos

**Guia de apoio para o palestrante: Thiago Cortez · SECOMP · UFAL**

Este guia acompanha a apresentação web, slide por slide. Para cada trecho você encontra o conceito explicado com mais calma do que cabe no slide, o que mostrar na demo, os números exatos que o jogo usa e perguntas que a plateia costuma fazer. Não precisa ler tudo no palco. A ideia é estudar antes e consultar na hora se der branco.

**Estrutura da palestra (41 slides):**

| Bloco | Slides | Conteúdo |
|---|---|---|
| Abertura e teoria | 1 a 9 | Game feel segundo Swink, ciclo de correção, seis peças, princípios, método |
| Parte 1: Controles | 10 a 17 | 5 truques de Celeste num jogo de plataforma |
| Parte 2: Juice | 18 a 37 | 17 técnicas num shooter top-down, mais o antes × depois |
| Fechamento | 38 a 41 | Cuidados, receita de bolso, referências |

---

## Antes de subir no palco

**Checklist técnico**

- Abra a apresentação no navegador do computador que vai para o projetor e aperte **F** para tela cheia.
- Clique uma vez na tela. O navegador só libera o som depois de uma interação.
- Teste o som no sistema de áudio da sala. Os "sons mais graves" (slide 34) só funcionam com caixas que reproduzem graves; em caixinhas de notebook a diferença some.
- Passador de slides funciona: ele manda PageUp/PageDown ou as setas, e as duas opções avançam e voltam.
- A apresentação precisa baixar o Phaser na primeira vez. Abra a página antes, com internet, e deixe a aba aberta.

**Teclas que você vai usar**

| Tecla | O que faz |
|---|---|
| ← → / PageUp PageDown / espaço | Navega entre slides |
| **T** | Liga e desliga a técnica ou truque do slide atual (antes × depois) |
| **0** | Desliga todos os truques (Parte 1) ou todo o molho (Parte 2) |
| **M** | Liga e desliga o som |
| **H** | Mostra ou esconde a hitbox no jogo de plataforma |
| **R** | Limpa o chão do shooter (manchas, corpos, cápsulas) |
| **F** | Tela cheia |
| A D + W ou K | Joga o plataforma |
| WASD + mouse | Joga o shooter |

**Piloto automático:** se ninguém mexer por 3 segundos, um bot assume. No plataforma, ele repete o cenário com erros humanos calculados. No shooter, ele mira no zumbi mais próximo e anda em círculos. Você pode falar sem precisar jogar e assumir o controle quando quiser.

**Aviso de acessibilidade:** a demo tem flashes brancos e tremor de tela, principalmente na Parte 2. Vale avisar a plateia no slide 9 e lembrar que a tecla 0 desliga tudo.

---

## Abertura (slides 1 e 2)

### Slide 1: Capa

O shooter roda ao fundo com **todas** as técnicas de juice ligadas. É proposital: a plateia vê o resultado final antes de entender qualquer coisa. Uma boa abertura é perguntar:

> "Esse jogo parece gostoso de jogar? Daqui a 40 minutos vocês vão ver que ele é o mesmo jogo de um retângulo atirando em outros retângulos."

### Slide 2: Roteiro

Cinco blocos: o que é game feel, por que sentimos, controles (Celeste), juice e mão na massa (shooter). Diga que a palestra tem duas metades práticas, nesta ordem:

1. **Como o jogo interpreta o que você faz** (controles). Primeiro o jogo precisa ser justo de controlar.
2. **O que o jogo mostra** (juice). Depois ele fica gostoso de ver.

---

## Teoria (slides 3 a 9)

### Slide 3: O que é game feel?

**A definição de Steve Swink** (livro *Game Feel*, 2009, cap. 1):

> Controle em tempo real de objetos virtuais em um espaço simulado, com interações enfatizadas por *polish*.

Na apresentação, *polish* aparece como **juice**, que é o termo mais usado hoje. Os três blocos:

1. **Controle em tempo real.** O jogador age, o jogo responde, o jogador corrige, sem pausa. Xadrez online não tem game feel nesse sentido; Celeste tem.
2. **Espaço simulado.** Existe colisão, distância, obstáculo. O movimento acontece num "lugar".
3. **Juice (polish).** Animação, som, partículas e câmera que "vendem" a interação.

**Como explicar para iniciantes:** game feel é a sensação física de controlar algo. É o que faz você dizer "esse controle é bom" ou "esse personagem parece pesado", mesmo sem saber explicar por quê.

**Exemplo útil:** Swink classifica jogos pelo que eles têm. *Sonic* tem os três blocos. *Civilization* é por turnos e não tem controle em tempo real, mas ainda tem um pouco de "sensação" no juice dos cliques e das batalhas.

### Slide 4: O ciclo de correção

**Conceito:** quando você controla algo em tempo real, seu cérebro faz um ciclo contínuo: **percebe** o estado, **pensa** no que fazer e **age**. Depois percebe o resultado e corrige.

Swink usa o *Modelo do Processador Humano* (Card, Moran e Newell):

| Etapa | Tempo típico | Faixa |
|---|---|---|
| Perceber | ~100 ms | 50 a 200 ms |
| Pensar | ~70 ms | 30 a 100 ms |
| Agir | ~70 ms | 25 a 170 ms |
| **Ciclo completo** | **~240 ms** | |

**A consequência prática:** o jogo precisa responder em até **~100 ms**, de forma contínua, para a sensação de controle não quebrar. Se a resposta atrasa ou falha de vez em quando, o jogador sente que "perdeu" o personagem.

**Por que isso importa para o resto da palestra:**

- Na **Parte 1**, os truques de Celeste existem porque o jogador aperta os botões dentro desse ciclo humano, e não com precisão de quadro.
- Na **Parte 2**, toda técnica de juice é uma resposta extra que cabe dentro desse ciclo. Cuidado com técnicas que *atrasam* a resposta, como o hitstop (slide 28): elas precisam ficar abaixo desse limite.

**Analogia:** pegar uma xícara na mesa. Você não calcula a trajetória; vai movendo a mão e corrigindo várias vezes por segundo. Jogar é a mesma coisa, só que o "mundo" é o jogo.

### Slide 5: As seis peças do game feel

Swink divide o game feel em seis partes que o designer pode ajustar (cap. 5):

| Peça | O que é | Exemplo |
|---|---|---|
| **Input** | O dispositivo físico | Analógico × digital, gatilho com curso |
| **Resposta** | Como o jogo transforma o input em movimento | Aceleração, altura do pulo, mira |
| **Contexto** | O espaço e o level design | Corredores apertados deixam a velocidade mais intensa |
| **Juice (polish)** | Efeitos que reforçam a impressão física | Poeira, som, tremor |
| **Metáfora** | O que o objeto representa | Um tanque não pode virar como uma bola de papel |
| **Regras** | Variáveis abstratas | Vida, dano, pontos |

Os cards destacados mostram onde a palestra se concentra: **Parte 1 = input e resposta** (Celeste) e **Parte 2 = juice** (shooter). Vale dizer isso em voz alta: é o mapa da palestra.

### Slide 6: Mesma física, outra sensação

**Conceito central:** juice é qualquer efeito que realça a interação **sem mudar a simulação**. Se você remover todo o juice, o jogo continua funcionando igualzinho; só fica menos convincente.

**A animação:** as duas bolas seguem **exatamente a mesma trajetória**, com a mesma gravidade, as mesmas colisões e a mesma velocidade.

- A **bola de pedra** só gira. É só a física.
- A **bola de tinta** estica quando está rápida, achata e balança quando bate, e deixa respingos no chão e nas paredes.

**O caso De Blob** (citado por Swink no cap. 1): os desenvolvedores do jogo estudantil que deu origem a *De Blob* contaram que, sem o shader de squash, a bola parecia de pedra. Com o shader, e sem mexer em nada da física, ela passou a parecer tinta. Isso mostra que, **para o jogador, física e efeito são indistinguíveis**. Ele não sabe o que é simulação; ele só sente.

**Pergunta para a plateia:** "Qual das duas bolas é mais pesada?" A maioria vai dizer a pedra. As duas têm exatamente o mesmo peso no código.

### Slide 7: Os 7 princípios do game feel

Swink fecha o livro (cap. 17) com sete princípios. Os três destacados no slide são os que a palestra mais toca:

1. **Resultados previsíveis.** Apertou, aconteceu o que você esperava.
2. **Resposta instantânea** *(destaque)*. A resposta parece imediata. Liga com o slide 4.
3. **Fácil, mas profundo.** Minutos para aprender, uma vida para dominar. Volta no pulo variável (slide 15).
4. **Novidade.** Sutileza suficiente para continuar interessante depois de horas.
5. **Resposta atraente** *(destaque)*. Controlar é gostoso por si só, mesmo numa sala vazia. Teste clássico: se o personagem é divertido de mover sem nenhum objetivo, o controle está bom.
6. **Movimento orgânico.** O personagem desenha arcos agradáveis, não linhas retas e cortes secos.
7. **Harmonia** *(destaque)*. Todos os efeitos contam a mesma história física.

**O exemplo da harmonia:** em *Shadow of the Colossus*, cada passo do colosso tem som grave, nuvens enormes de poeira e tremor de tela; tudo diz "isso é gigante". Em *Painkiller*, os chefões são tecnicamente enormes e têm o som certo, mas a animação é rápida demais e há poucas partículas, então o cérebro lê "pequeno". **Efeitos que brigam passam a sensação errada.**

### Slide 8: Pequenos ajustes, outro jogo

**O método:** nenhuma técnica sozinha resolve. O que muda a sensação é **empilhar** dezenas de ajustes pequenos e baratos. As duas demos seguem o mesmo roteiro: começar de um jogo que funciona sem nenhum efeito, adicionar uma coisa por vez, comparar com e sem (tecla T) e ajustar a intensidade pela importância do evento.

O formato vem da palestra *The Art of Screenshake* (Jan Willem Nijman, Vlambeer, INDIGO 2013), em que ele começa com um shooter sem graça e aplica uns 30 ajustes ao vivo.

**Ponto honesto que vale dizer em voz alta:** nem toda técnica do shooter é juice puro. Algumas mudam regras (cadência, número de inimigos) ou a física (knockback, recuo). O Nijman mistura as duas coisas de propósito. A apresentação avisa quando isso acontece.

**O glossário do slide**, se alguém perguntar:

- **Quadro (frame):** uma atualização da tela, cerca de 16 ms a 60 FPS.
- **dt / `Time.deltaTime`:** tempo que passou desde o último quadro. Multiplicar velocidades por dt deixa o jogo igual em qualquer taxa de quadros.
- **Lerp:** andar uma fração do caminho até um alvo a cada quadro.
- **Easing:** curva de aceleração. Em vez de velocidade constante, acelera e freia.
- **Tween:** animação de um valor ao longo do tempo. Na Unity, DOTween ou corrotina.
- **Hitbox:** o retângulo invisível que colide.

**Sobre o código:** a demo roda no navegador com **Phaser 3**, mas os trechos nos slides estão em **C# no estilo Unity**, porque é a engine que a maioria da plateia vai usar.

### Slide 9: Como usar a demo

Mostre as teclas, explique o piloto automático e **avise sobre os flashes**. É um bom momento para dizer: "a qualquer momento, se incomodar, aperto 0 e desligo tudo".

---

## Parte 1: Controles com Celeste (slides 10 a 17)

### Slide 10: O molho que ninguém vê

**O foco desta parte:** antes de deixar o jogo gostoso de ver, ele precisa ser justo de controlar. Aqui o assunto é como o jogo *interpreta* o que você faz.

A frase central de Maddy Thorson, criadora de *Celeste*, no artigo **"Celeste & Forgiveness"**: todos os truques giram em torno de **alargar janelas de tempo ou de posição, para que tudo seja ajustado um pouquinho a favor do jogador**. Por isso Celeste parece gentil mesmo sendo muito difícil: ele quer que você vença.

**A ideia por trás:** o jogador não aperta botões com precisão de quadro. Ele aperta quando *acha* que está na hora (lembre o ciclo de 240 ms do slide 4). Um bom controle concorda com a percepção do jogador, não com o pixel.

**Sobre a demo:** um bot com "timing humano" aperta o pulo um pouco atrasado, um pouco adiantado ou um pouco desalinhado. Sem o truque, ele falha; com o truque, passa. Os valores vêm do `Player.cs` de Celeste (código publicado por Noel Berry no GitHub), multiplicados por 1,6.

| Constante | Celeste | Demo (×1,6) |
|---|---|---|
| Gravidade | 900 | 1440 |
| Velocidade do pulo | 105 | 168 |
| Queda máxima | 160 | 256 |
| Corrida máxima | 90 | 144 |
| Coyote time (`JumpGraceTime`) | 0,1 s | 0,1 s |
| Pulo variável (`VarJumpTime`) | 0,2 s | 0,2 s |
| Limite da meia gravidade (`HalfGravThreshold`) | 40 | 64 |
| Correção de quina (`UpwardCornerCorrection`) | 4 px | 6 px |

**Por que 1,6 e não 2:** os tiles da demo têm 16 px contra 8 de Celeste, mas o personagem é só uns 1,3× maior. O 1,6 deixou o pulo proporcional ao boneco.

### Slide 11: Um jogo de plataforma sem perdão

O pulo só sai se o botão for apertado **no quadro exato** em que o personagem está no chão. O bot aperta ~67 ms depois de sair da borda e cai. Pergunte: **"foi culpa do jogador?"** Para o código, ele já estava no ar. Para quem joga, apertou na hora certa.

Etiquetas que aparecem no jogo: "pulo ignorado" (vermelho) quando o input foi descartado; "caiu!" ou "espinho!" quando o bot morre.

**Como conduzir os slides 12 a 16:** deixe o bot falhar e acertar algumas vezes, aperte **T** para comparar e, se quiser, assuma o controle com A, D e W. Os chips abaixo do jogo mostram os truques ligados, e o do slide atual fica em amarelo. Os truques vão se acumulando de um slide para o outro.

### Slide 12: Coyote time

Ainda dá para pular por **0,1 s** depois de sair da borda. O nome vem do Coiote do Papa-Léguas, que só cai quando olha para baixo.

**Na demo:** o bot aperta 67 ms depois de sair da borda. A etiqueta mostra "coyote +67 ms" e ele chega na bandeira.

**Erro comum de implementação:** esquecer de zerar o coyote depois de pular. Aí o jogador pula no chão e, se apertar de novo rápido, pula outra vez no ar (pulo duplo acidental). O código do slide mostra o `coyote = 0f` depois do pulo.

### Slide 13: Jump buffer

Apertar o pulo **um pouco antes** de tocar o chão também vale. O input fica guardado e o pulo sai no quadro exato do pouso. Janela da demo: **0,1 s**.

**Na demo:** o bot cai de uma plataforma alta num pilar estreito e aperta o pulo ~33 ms antes de pousar. Sem buffer, o input some e ele escorrega para o buraco. Com buffer, a etiqueta mostra "buffer 33 ms".

**Por que:** sem buffer, o jogador sente que o controle "comeu" o botão. É uma das reclamações mais comuns em jogos de plataforma amadores.

### Slide 14: Correção de quina

Se a cabeça bate na quina de um teto, o jogo empurra o personagem para o lado até ele passar: **4 px em Celeste, 6 px na demo**.

**Na demo:** o bot para embaixo de um buraco no teto, mas 3 px desalinhado, e pula reto. Sem correção, bate a cabeça ("bonk!"). Com correção, aparece "quina +3 px" e ele passa. **Aperte H** para mostrar a hitbox verde e deixar o deslocamento visível.

**Por que:** ninguém percebe 3 px, mas todo mundo percebe a cabeçada.

### Slide 15: Pulo de altura variável

Segurar o botão mantém a velocidade de subida por até **0,2 s**. Soltar antes encerra o impulso. Toquinho é pulinho; segurar é pulão.

**Na demo:** o bot dá um toquinho de 50 ms para passar um bloco baixo embaixo de espinhos e depois segura o pulo para subir um degrau alto. Sem pulo variável, todo pulo é máximo e o toquinho leva direto aos espinhos.

**Distinção importante:** este **não é um perdão**. É *expressividade*, da peça **resposta**: um único botão vira um controle analógico. É o "fácil, mas profundo" de Swink e existe desde *Super Mario Bros.* Não está na lista do artigo da Maddy; está no código de Celeste.

### Slide 16: Meia gravidade no ápice

Se o jogador segura o pulo, o **topo do pulo** (quando a velocidade vertical está perto de zero) tem **metade da gravidade**. Os pontos amarelos no rastro mostram onde isso acontece.

**Na demo:** um vão longo. Sem meia gravidade, o bot cai por 1 px. Com ela, alcança uns 12 px a mais e chega.

**Por que:** mais tempo no ar para corrigir a trajetória (o ciclo de correção do slide 4 de novo), e o pulo ganha uma "flutuada" que parece intencional.

### Slide 17: Outros perdões de Celeste

Do artigo "Celeste & Forgiveness":

- **Correção de quina no dash:** se um dash lateral raspa numa quina, o jogo coloca você em cima da plataforma.
- **Plataformas semi-sólidas:** dash lateral através delas também te empurra para cima.
- **Momento guardado:** pular de uma plataforma móvel que acabou de parar ainda dá o impulso dela por alguns quadros.
- **Wall jump de longe:** dá para fazer wall jump a 2 px da parede (um quarto de tile em 320×180). O super wall jump aceita uns 5 px.
- **Stamina devolvida:** se você pula reto na parede e logo aperta para longe, o jogo converte o pulo e devolve a stamina gasta.

**A regra geral:** descubra o que o jogador *quis* fazer e alargue a janela de tempo ou de posição até isso dar certo.

**Transição para a Parte 2:** "Agora o jogo é justo de controlar. Falta ele ser gostoso de ver."

---

## Parte 2: Juice no shooter (slides 18 a 37)

### Slide 18: Um jogo suculento responde a tudo

**Juice**, em uma frase: cada ação do jogador gera uma reação exagerada e gostosa de ver e ouvir. Muita resposta para pouco input.

**Origem do termo:** Kyle Gabler e a equipe do *Experimental Gameplay Project* (2005) descreviam um elemento "suculento" como algo que quica, balança, esguicha e faz barulhinho quando você toca. O termo ficou famoso com a palestra *Juice it or lose it* (Martin Jonasson e Petri Purho, GDC Europe 2012), em que eles pegam um Breakout sem graça e o transformam sem mudar as regras.

**Exemplo para falar:** um bloco de Breakout que só some quando a bola acerta *funciona*. Um bloco que pisca, treme, solta faíscas, faz barulho e cai girando *convence*.

**Ingredientes comuns:** easing (nada aparece ou some de forma linear), squash & stretch, partículas, um som para cada interação, tremor de tela e pausas no impacto, e personalidade (olhos, rostos, reações; no Breakout deles, os blocos ganham sorriso).

### Slide 19: O jogo sem molho

Um top-down shooter que funciona: anda, mira, atira, zumbi morre com 3 tiros. **Peça para a plateia listar o que está faltando.** Normalmente aparece: personagem parado, tiro lento e minúsculo, inimigo que some sem rastro, silêncio, câmera colada.

| Parâmetro base | Valor |
|---|---|
| Intervalo entre tiros | 280 ms |
| Velocidade da bala | 160 px/s |
| Tamanho da bala | 2×2 px |
| Vida do zumbi | 3 tiros |
| Zumbis simultâneos | até 7 |

**Como conduzir os slides 20 a 36:**

1. Leia o título e explique o conceito em uma frase.
2. Deixe o jogo rodar uns segundos com a técnica ligada.
3. Aperte **T** para desligar e **T** de novo para religar. A comparação é o que convence.
4. Se der tempo, comente o trecho de código.

As técnicas vão se acumulando. Os chips abaixo do jogo mostram quais estão ligadas, e a do slide atual fica em amarelo.

### Slide 20: Animação básica

Ciclo de 4 quadros (parado, passo A, parado, passo B) trocando a cada 110 ms, e o sprite vira para o lado da mira. **Por que funciona:** sem animação, o personagem desliza como peça de tabuleiro e o olho não acredita que existe um corpo ali. É a técnica nº 1 do Nijman.

### Slide 21: Som

Tiro, acerto, morte e dano ganham sons (efeitos CC0 da Kenney). Ainda sem tratamento: mesmo pitch, mesmo volume. **Experimento para a plateia:** desligue o som de qualquer jogo de ação e veja quanto do impacto vai embora. O som chega junto com a imagem e o cérebro funde os dois num evento só.

### Slide 22: Mais tiros, menos precisão

- Intervalo cai de **280 ms para 90 ms**.
- Cada bala sai com desvio aleatório de **±7°** (0,12 rad).
- Zumbis simultâneos: **7 → 10**.

**Ponto importante:** isto **não é juice puro**. Cadência e número de inimigos são regras; mudam ritmo e dificuldade. Na taxonomia de Swink, isso é *resposta* e *regras*. Mesmo assim, mais tiros significam mais eventos de feedback por segundo, e a imprecisão deixa a rajada orgânica.

### Slide 23: Balas maiores e mais rápidas

Bala de 2×2 vira 8×4 e acelera de 160 para 340 px/s. Bala grande é legível; bala rápida chega antes de o jogador ter tempo de duvidar do acerto.

### Slide 24: Muzzle flash

Um círculo branco na ponta da arma por **45 ms** (2 a 3 quadros), com tamanho aleatório entre 0,7× e 1,2×. É provavelmente o efeito com melhor custo-benefício da lista.

### Slide 25: Partículas de impacto

Faíscas no ponto de acerto, espirradas num cone de ±35° na direção da bala. Quando a bala bate na borda, levanta poeira. **Por que:** o tiro precisa terminar em algum lugar. Se a bala simplesmente some, o cérebro não "fecha" o evento.

### Slide 26: Flash branco no dano

O zumbi fica **100% branco por 60 ms** quando é atingido. O jogador também pisca ao apanhar. É a confirmação mais clara de acerto que existe e funciona até com o canto do olho.

**Na Unity:** o `SpriteRenderer` não tem "pintar de branco" nativo. O padrão é um shader com uma propriedade (no slide, `_Flash`) que mistura a cor do sprite com branco.

### Slide 27: Knockback no inimigo

Cada bala empurra o zumbi a 110 px/s na direção do tiro, com atrito exponencial (`exp(-10·dt)`). **Muda a jogabilidade:** o zumbi realmente muda de lugar, e segurar a horda vira tática. A bala passa a "ter massa".

### Slide 28: Hitstop (sleep)

O jogo **congela** por um instante:

| Evento | Pausa |
|---|---|
| Acerto | 16 ms (1 quadro) |
| Morte do zumbi | 50 ms |
| Jogador apanha | 90 ms |

A câmera continua tremendo durante a pausa. **Por que funciona:** dá tempo ao cérebro de registrar o golpe. Jogos de luta fazem isso há décadas. O Nijman chama de *sleep*.

**Cuidado:** congelar é atrasar a resposta. Fique abaixo dos ~100 ms do slide 4, senão o controle parece travar.

**Na Unity:** `Time.timeScale = 0` e espera com `WaitForSecondsRealtime`. Efeitos que precisam continuar durante a pausa, como o shake, usam `Time.unscaledDeltaTime`.

### Slide 29: Screen shake

**O modelo de trauma** (popularizado por Squirrel Eiserloh, GDC 2016):

- Cada evento soma "trauma", um valor de 0 a 1.
- O deslocamento da câmera é **trauma²**, multiplicado por um máximo (9 px na demo).
- O trauma decai sozinho (1,6 por segundo).

| Evento | Trauma |
|---|---|
| Tiro | 0,05 |
| Acerto | 0,06 |
| Morte | 0,3 (0,45 com explosão) |
| Jogador apanha | 0,6 |

**Por que ao quadrado:** eventos pequenos ficam praticamente invisíveis e os grandes ficam fortes. Na prática, tiro e acerto quase não tremem; quem dá peso ao tiro é o *camera kick* do slide 30.

**Ruído suave:** sortear um número aleatório a cada quadro deixa o tremor "chuviscado". O ideal é ruído suave como Perlin (`Mathf.PerlinNoise` na Unity). A demo usa uma soma de senos com fases diferentes, que dá um efeito parecido.

### Slide 30: Recuo (kickback)

São **três truques** do Nijman num slide:

1. A arma recua 3 px e volta.
2. O jogador é empurrado para trás (40 px/s). **Isso muda a jogabilidade:** atirar enquanto foge te ajuda a fugir.
3. A câmera dá um tranco de 4 px **contra** a direção do tiro.

### Slide 31: Câmera suave e look-ahead

- **Lerp:** a câmera persegue o jogador em vez de ficar grudada. A fórmula `k = 1 − exp(−6·dt)` faz a suavização ser igual em 30 ou 144 FPS. Um `Lerp` com fator fixo ficaria diferente dependendo da máquina.
- **Look-ahead:** a câmera se adianta 40 px na horizontal e 26 px na vertical para o lado da mira, mostrando mais do que importa.

**Por que:** câmera grudada transmite cada tremida do input para a tela inteira. Na Unity, a câmera deve se mover no `LateUpdate`, depois que o jogador já andou.

### Slide 32: Permanência

Cápsulas, corpos e manchas ficam no chão para sempre. **O truque técnico:** em vez de manter milhares de objetos, tudo é "carimbado" numa RenderTexture, uma imagem única onde se desenha por cima. Mil corpos custam o mesmo que um. Na Unity: uma câmera com `clearFlags = Nothing` desenhando numa RenderTexture.

**Dica de palco:** deixe o jogo rodar um minuto nesse slide. O chão vira a história da partida. A tecla **R** limpa.

### Slide 33: Squash & stretch

- O zumbi achata quando leva tiro (escala x vai a 1,45) e volta com uma **mola de verdade**, que passa do ponto e balança (rigidez 300, amortecimento 12).
- A escala y é sempre `1 / x`, para **manter a área** e o objeto não "crescer".
- Ao nascer, o zumbi surge crescendo com exagero (easing *Back.Out*).
- Balas esticam no sentido do movimento.

É o primeiro dos 12 princípios da animação da Disney. Conecte com a bola de tinta do slide 6.

### Slide 34: Sons mais graves

- **Pitch abaixo de 1** (0,72): grave transmite peso.
- **Variação aleatória de ±10%** em cada disparo. Sem isso, o mesmo som repetido vira "metralhadora de brinquedo".
- **Sub-grave sintetizado:** uma senoide que cai de 140 para 45 Hz em 0,12 s, embaixo de cada tiro. Na morte, um "boom" mais longo.

**Lembrete:** depende das caixas da sala. Teste antes.

### Slide 35: Explosão na morte

Clarão branco que expande de 0,3× a 1,8× em 220 ms, fumaça, estilhaços, mais trauma e um estrondo grave. **Princípio:** o momento mais importante da interação merece o maior efeito. Matar o inimigo é a recompensa pelo trabalho do jogador.

### Slide 36: UI que reage

- O placar pulsa a cada abate (escala 1,6 → 1 em 250 ms, *Back.Out*).
- Um "+1" sobe e some.
- A borda da tela fica vermelha quando o jogador apanha.

Vem direto do *Juice it or lose it*: tweening com easing faz qualquer elemento parecer vivo. A interface também é parte do mundo.

### Slide 37: Antes × depois

O jogo grande no centro com o botão **MOLHO: LIGADO / DESLIGADO** (também T ou 0). **Momento-chave da palestra.** Deixe rodar com tudo ligado, desligue, espere uns segundos em silêncio e religue. A reação da plateia faz o trabalho.

---

## Fechamento (slides 38 a 41)

### Slide 38: Molho demais estraga o prato

- **Primeiro o prato:** juice não conserta controle ruim. Se o pulo é travado, partícula nenhuma salva. É por isso que a palestra começou pelos controles.
- **Proporção:** intensidade proporcional à importância do evento: tiro < acerto < morte < dano no jogador. Se tudo treme, nada importa.
- **Harmonia:** som, partícula, câmera e animação precisam concordar sobre peso e tamanho (volta ao slide 7).
- **Acessibilidade:** ofereça controles para a intensidade do shake e dos flashes. Tremor de tela causa enjoo em algumas pessoas, e flashes fortes podem ser perigosos para pessoas fotossensíveis.

### Slide 39: Receita de bolso

Um resumo para a plateia fotografar. Sugira que tirem foto deste slide.

### Slide 40: Referências e créditos

Livro de Swink, as palestras de Jonasson/Purho, Nijman e Eiserloh, o texto de Gabler, o artigo da Maddy e o repositório de Celeste. Créditos: Phaser 3 (MIT); sprites, sons e fontes da Kenney (CC0); fontes Atkinson Hyperlegible e JetBrains Mono (OFL).

### Slide 41: Obrigado

O shooter volta ao fundo com tudo ligado. Abra para perguntas.

---

## Perguntas frequentes

**"Por que começar pelos controles e não pelo juice?"**
Porque juice não conserta controle ruim. Se o jogador sente que o jogo "comeu" o botão, nenhum efeito vai fazer o jogo parecer bom. Primeiro o jogo precisa ser justo; depois, gostoso de ver.

**"Coyote time não deixa o jogo fácil demais?"**
Celeste é um dos plataformas mais difíceis que existem e tem todos esses perdões. Eles não tornam o jogo fácil; tornam o jogo **justo**. O jogador morre pelos erros que realmente cometeu, não por um quadro de diferença.

**"Juice e polish são a mesma coisa?"**
Quase. Swink usa *polish* para qualquer efeito que realça a interação sem mudar a simulação. *Juice* é o termo popular, com ênfase em exagero e resposta abundante. Na prática, as pessoas usam os dois como sinônimos.

**"Juice deixa o jogo mais pesado?"**
A maioria das técnicas é barata: um sprite por 45 ms, alguns pixels de offset na câmera, uma pausa de 50 ms. O que custa caro é partícula em excesso e objetos acumulados. Por isso a permanência usa RenderTexture.

**"Quando eu coloco juice no meu jogo? No começo ou no fim?"**
Um pouco desde o protótipo. O juice muda como você percebe o próprio jogo, e decisões de design tomadas com um protótipo "seco" podem ser erradas. Mas não tente consertar uma mecânica ruim com efeitos.

**"Como eu sei se exagerei?"**
Teste com e sem (como a tecla T da demo) e observe outras pessoas jogando. Sinais de exagero: a tela fica ilegível, o jogador não consegue ver o que está acontecendo, ou alguém reclama de enjoo.

**"Isso funciona fora de jogos de ação?"**
Sim. Todo jogo com interação em tempo real se beneficia: puzzle (peças que encaixam com squash e som), cartas (cartas que se inclinam ao arrastar), menus (botões que reagem ao hover). O próprio *Juice it or lose it* usa um Breakout.

**"Por que a demo é em Phaser e o código em Unity?"**
Phaser roda direto no navegador, sem instalação, o que facilita a apresentação. Os trechos estão em C# porque é o que a maioria vai usar no dia a dia. Os conceitos são idênticos em qualquer engine.

---

## Referências

- Steve Swink. *Game Feel: A Game Designer's Guide to Virtual Sensation*. Morgan Kaufmann, 2009.
- Maddy Thorson. *Celeste & Forgiveness*. https://maddymakesgames.com/articles/celeste_and_forgiveness/
- Noel Berry. Código do Player de Celeste. https://github.com/NoelFB/Celeste
- Martin Jonasson e Petri Purho. *Juice it or lose it*. GDC Europe, 2012.
- Jan Willem Nijman (Vlambeer). *The Art of Screenshake*. INDIGO, 2013.
- Squirrel Eiserloh. *Math for Game Programmers: Juicing Your Cameras With Math*. GDC, 2016.
- Kyle Gabler et al. *How to Prototype a Game in Under 7 Days*. Gamasutra, 2005.
