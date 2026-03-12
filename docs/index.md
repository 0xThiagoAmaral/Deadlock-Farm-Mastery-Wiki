---
title: Farm em Deadlock (Wiki 2026)
description: Guia wiki premium de farm, souls, timers e rotas em Deadlock.
---

<style>
body{font-family:Inter,Segoe UI,Arial,sans-serif;line-height:1.6;max-width:1100px;margin:auto;padding:20px;color:#111}
h1,h2,h3{line-height:1.25}
h1{font-size:2rem;margin-top:.2rem}
h2{margin-top:2rem;border-bottom:1px solid #e6e6e6;padding-bottom:.3rem}
h3{margin-top:1.2rem}
table{border-collapse:collapse;width:100%;margin:14px 0;font-size:.95rem}
th,td{border:1px solid #ddd;padding:8px;vertical-align:top}
th{background:#f7f7f7}
blockquote{border-left:4px solid #888;padding:.5rem .8rem;background:#fafafa;margin:1rem 0}
.note{background:#fff8e1;border:1px solid #f0d58a;padding:.7rem;border-radius:8px}
.ok{background:#eef9f0;border:1px solid #b8e0bf;padding:.7rem;border-radius:8px}
.toc{background:#f8fbff;border:1px solid #d8e8ff;padding:1rem;border-radius:10px}
code{background:#f4f4f4;padding:2px 4px;border-radius:4px}
</style>

# Farm em Deadlock (Meta Março/2026)

<div class="ok"><strong>Escopo editorial:</strong> esta página foi escrita em formato wiki prático para novos players até high-elo, com foco em execução, consistência e confiabilidade de informação. Estratégias podem variar por patch, composição e nível da lobby.</div>

## Índice Rápido
<div class="toc">

1. Introdução  
2. Mecânicas Básicas  
3. Rotas Otimizadas (tabela por role)  
4. Estratégias Avançadas  
5. Erros Comuns + Counterplay  
6. Protocolos de treino e métricas  
7. Referências

</div>

---

## 1) Introdução

Em Deadlock, **farm** é o processo de converter tempo de mapa em **Souls** (economia + progressão), mantendo pressão de rota e segurança de posicionamento. A diferença entre um jogador que "acerta fight" e um jogador que **vence partidas de forma consistente** geralmente está na disciplina de farm e no controle dos marcos de tempo da partida. [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/ (09/09/2024)] [Fonte: https://deadlock.wiki/Souls (acesso 12/03/2026)]

Na prática, o farm em Deadlock se divide em quatro trilhas:

- **Wave clear:** renda mais constante e controlável; perder wave costuma ser o maior erro macro de economia. [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]
- **Jungle (Denizens/camps):** complemento de rota, forte quando encaixado em janela curta entre waves. [Fonte: https://www.talkesport.com/guides/deadlock-jungle-timers-explained-all-camps-their-respawn-times/]
- **Breakables e Sinner's Sacrifice:** renda situacional, útil para aumentar eficiência de caminho sem comprometer objetivo principal. [Fonte: https://deadlock.wiki/Souls]
- **Objectives (Urn, estruturas, boss):** picos de economia/macro que mudam ritmo de jogo após os marcos corretos. [Fonte: https://deadlock.wiki/Soul_Urn] [Fonte: https://esports.gg/guides/deadlock/complete-deadlock-objective-timing-guide/]

### O que define o meta de farm em 2026

Os dados públicos mais consistentes apontam que o meta atual premia:

1. **Alta taxa de coleta de wave** antes de rota longa.
2. **Transição limpa para objetivos aos marcos de 10:00+** (urn, teleporter, buffs, mid-boss).
3. **Redução de mortes com unsecured souls altas**, evitando "devolver vantagem".
[Fonte: https://deadlock.wiki/Souls] [Fonte: https://deadlock.wiki/Soul_Urn] [Fonte: https://esports.gg/guides/deadlock/complete-deadlock-objective-timing-guide/]

<div class="note"><strong>Verificação de viés:</strong> alguns guias comunitários divergem em detalhes de números e spawn antigo vs atual. Sempre trate dados de timing/renda como dependentes de patch.</div>

---

## 2) Mecânicas Básicas

## 2.1 Timers fundamentais (estado auditado)

Os marcos abaixo convergem em múltiplas fontes:

- **Small camp:** spawn 2:00, respawn 4 min. [Fonte: TalkEsport 26/09/2024] [Fonte: esports.gg 26/09/2024]
- **Medium camp:** spawn 7:00, respawn 6 min. [Fonte: TalkEsport 26/09/2024] [Fonte: esports.gg 26/09/2024]
- **Hard camp:** spawn 7:00, respawn 8 min. [Fonte: TalkEsport 26/09/2024] [Fonte: esports.gg 26/09/2024]
- **Objetivos de fase:** no entorno de 10:00 entram/abrem vários gatilhos macro (urn, teleporter, buffs, mid-boss). [Fonte: https://esports.gg/guides/deadlock/complete-deadlock-objective-timing-guide/] [Fonte: https://deadlock.wiki/Soul_Urn]

### Timers de update 2026 (Urn)

A Deadlock Wiki registra ajuste relevante em março/2026 para status visual da urn no minimapa (favored/neutral/unfavored), o que impacta leitura de decisão macro. [Fonte: https://deadlock.wiki/Soul_Urn]

## 2.2 Last-hit, clear e controle de orb

Em Deadlock, "farm bom" não é só matar rápido: é **matar e converter orb corretamente**.

- **Confirm/deny:** orbs podem ser confirmados ou negados; negar orb reduz renda inimiga e melhora seu delta econômico. [Fonte: https://deadlock.wiki/Souls]
- **AoE clear sem disciplina de orb** pode gerar perdas silenciosas de souls, especialmente quando o player limpa, mas não converte confirmação de forma eficiente. [Fonte: https://deadlock.wiki/Souls]
- **Soul split por proximidade** torna posicionamento e distância tão relevantes quanto dano bruto. [Fonte: https://deadlock.wiki/Souls]

#### Exemplo operacional (few-shot, prático)

**Situação:** wave empurrada, 18-25s até próxima disputa local.  
**Execução correta:** limpar troopers -> confirmar/defender orbs -> camp mais próximo -> retorno para wave.  
**Resultado esperado:** maior souls/min do que roaming aleatório e menor risco de perder ciclo de lane.
[Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/] [Fonte: https://www.talkesport.com/guides/deadlock-jungle-timers-explained-all-camps-their-respawn-times/]

> **Nota metodológica:** algumas fontes comunitárias antigas usam horários de wave diferentes em exemplos de texto. Quando houver conflito, priorize sempre validação no patch atual da sua partida.

## 2.3 Unsecured Souls (o ponto que mais pune)

Souls de certas fontes podem ser **unsecured**, com risco real na morte. [Fonte: https://deadlock.wiki/Souls]

Isso muda totalmente decisão de rota:

- com unsecured alta, a jogada "gananciosa" geralmente piora EV (expected value);
- com unsecured baixa, você pode aceitar janelas de risco um pouco maiores;
- morrer sem converter vantagem (item, objetivo, controle de mapa) quase sempre é swing econômico negativo.
[Fonte: https://deadlock.wiki/Souls] [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

---

## 3) Rotas Otimizadas (Tabela comparativa)

> Estratégias por role variam por draft, matchup, side e patch. A tabela abaixo é um **framework de execução**, não script fixo.

| Role | Rota Early (0-10min) | Rota Mid (10-25min) | Rota Late | Souls/min esperado* |
|---|---|---|---|---|
| **Carry** | Lane clear -> orb control -> small camp curto -> reset lane | Wave priority -> camp rota curta -> contest/pressão de urn quando setup existir | Wave side + objetivo em janela (walker/urn/mid) | **Médio-Alto** (consistência > pico) |
| **Spirit Carry** | Wave first absoluto + confirmação de orb; camp só sem perder wave | Rotação curta com teleporter para manter 2 lanes vivas | Split pressure com recuo rápido e objetivo seguro | **Médio-Alto** com menor volatilidade |
| **Assassin/Roamer** | Wave mínima + pick window curta + retorno | Wave -> pick -> objective conversion (não pick vazio) | Flanco com objetivo como alvo final, não apenas kill | **Variável** (alto teto, alto risco) |
| **Bruiser/Frontline** | Segurar lane estável e negar avanço; farm de proximidade | Participar de fights com objetivo imediato e pós-fight farm seguro | Pressão de estrutura + proteção de carregador com souls altas | **Médio** |
| **Utility/Support** | Garantir wave state e visão de rotação; farm oportunista | Ajudar setup de urn/teleporter e não abandonar renda de rota | Valor macro por call e proteção de carry | **Baixo-Médio** (eficiência de time) |

\* Não há dataset público universal e oficial por role/MMR para "souls/min fechado" no patch-alvo; trate como faixa operacional e valide em replays próprios. [Fonte: https://deadlock.wiki/Souls] [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

### Few-shot de rota (carry)

**Carry Early (modelo):** clear lane -> coletar drops/orbs -> breakable/camp na mesma linha de retorno -> reset lane.  
Essa lógica tende a superar farm randômico porque reduz tempo morto e mantém ciclo de wave ativo. [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/] [Fonte: https://www.reddit.com/r/DeadlockTheGame/comments/1r8r0nl/anyone-can-teach-me-about-the-economy-of-this.json]

---

## 4) Estratégias Avançadas

## 4.1 Cycling (Lane -> Quick extra -> Lane)

Esse é o coração do farm competitivo:

1. Limpar wave com tempo.
2. Coletar extra mais próximo (camp/breakable/sinner quando fizer sentido).
3. Voltar para lane antes da próxima perda de valor.

Quando esse loop é executado em janela de ~30-40s, você mantém economia e controle de território sem "descolar" do fluxo principal do mapa. [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/] [Fonte: https://www.talkesport.com/guides/deadlock-jungle-timers-explained-all-camps-their-respawn-times/]

## 4.2 Objective farming (Fight -> Structure -> Safe farm)

Fight isolada vale pouco se não converte:

- **Fight ganha** -> transforme em estrutura ou objetivo.
- **Objetivo feito** -> faça farm seguro na área conquistada.
- **Sem conversão** -> vantagem evapora em 1-2 ciclos de wave.
[Fonte: https://deadlock.wiki/Souls] [Fonte: https://deadlock.wiki/Soul_Urn] [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

## 4.3 Role-specific calls

### Spirit Carry: waves first
- Seu papel econômico é manter linha de renda estável.
- Rotação só quando o custo de wave for baixo e payoff de objetivo for real.
[Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

### Assassin: wave -> pick (com retorno)
- Pick sem conversão é "highlight", não vitória.
- Pick ideal abre espaço para objective touch ou deny de farm inimigo.
[Fonte: https://www.reddit.com/r/DeadlockTheGame/comments/1r8r0nl/anyone-can-teach-me-about-the-economy-of-this.json]

### Frontline/Utility: macro > ego
- Você habilita o carry a continuar farmando sob pressão.
- Sua rotação ideal preserva wave state e evita colapso de mapa.
[Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

## 4.4 Urn como pivô econômico

A Urn entra no coração da partida no ciclo de 10:00+, com impacto escalável no tempo e com regras específicas de carregamento/entrega. [Fonte: https://deadlock.wiki/Soul_Urn]

Princípios:
- prepare lane antes de chamar urn;
- evite rota de entrega sem informação de inimigo;
- se a janela estiver ruim, abortar cedo é melhor que entregar swing.
[Fonte: https://deadlock.wiki/Soul_Urn] [Fonte: https://esports.gg/guides/deadlock/complete-deadlock-objective-timing-guide/]

---

## 5) Erros Comuns + Counterplay

### 5.1 Erros que mais derrubam souls/min

- **Erro:** detour longo por breakable e perder wave.  
  **Counterplay:** só coletar extra no trajeto natural de retorno.  
  [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

- **Erro:** farmar camp sem poder de clear suficiente.  
  **Counterplay:** priorizar camp compatível com spike atual do herói/item.  
  [Fonte: https://www.dexerto.com/gaming/how-jungle-camps-work-in-deadlock-2880840/]

- **Erro:** lutar toda fight que aparece no minimapa.  
  **Counterplay:** só rotacionar se houver payoff de objetivo/estrutura.  
  [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

- **Erro:** ignorar marcos 10:00+ por hábito de early.  
  **Counterplay:** agenda de objetivo por relógio (urn, teleporter, buffs).  
  [Fonte: https://esports.gg/guides/deadlock/complete-deadlock-objective-timing-guide/]

- **Erro:** morrer com unsecured alta em side lane sem cobertura.  
  **Counterplay:** reduzir risco, resetar e converter renda antes de forçar.  
  [Fonte: https://deadlock.wiki/Souls]

### 5.2 Métricas e leitura crítica

Você pode ouvir afirmações do tipo "X% dos players perdem lane priority por farm local". Sem dataset público robusto e metodologia reproduzível, trate esse número como **hipótese**, não verdade absoluta.

<div class="note"><strong>Boas práticas:</strong> prefira medir seu próprio desempenho por 20-30 partidas com KPIs simples: souls aos 10/20, waves perdidas evitáveis, urns contestadas, mortes com unsecured alta.</div>

---

## 6) Protocolos de treino e métricas (pronto para uso)

## 6.1 Protocolo semanal (7 dias)

- **Dia 1-2:** foco em wave uptime + orb control.
- **Dia 3-4:** foco em cycling e retorno em tempo.
- **Dia 5:** foco em transição 10:00+ (objetivos).
- **Dia 6:** revisão de replay com checkpoints (10, 15, 20 min).
- **Dia 7:** simulação completa com metas de execução.
[Fonte: https://deadlock.wiki/Souls] [Fonte: https://deadlock.wiki/Soul_Urn] [Fonte: https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/]

## 6.2 KPIs que realmente importam

1. Souls aos 10:00 e 20:00.
2. Waves perdidas por rotação.
3. Urns disputadas/entregues.
4. Mortes com unsecured alta.
5. Lutas vencidas que viraram objetivo.
[Fonte: https://deadlock.wiki/Souls] [Fonte: https://deadlock.wiki/Soul_Urn]

## 6.3 Checklist de partida (rápido)

**Pré-jogo**
- Qual meu foco hoje: wave, deny, cycling, urn?
- Qual erro vou eliminar nesta sessão?

**Durante**
- Estou perdendo wave por desvio?
- Minha rotação teve conversão em objetivo?
- Meu risco condiz com meu estado de unsecured?

**Pós-jogo**
- Qual decisão custou mais souls?
- Qual decisão aumentou mais meu controle de mapa?

---

## 7) Referências (auditoria)

### Fontes base (mecânicas e timings)
- Deadlock Wiki - Souls: https://deadlock.wiki/Souls  
- Deadlock Wiki - Soul Urn: https://deadlock.wiki/Soul_Urn  
- esports.gg - objective timing guide: https://esports.gg/guides/deadlock/complete-deadlock-objective-timing-guide/  
- TalkEsport - jungle timers: https://www.talkesport.com/guides/deadlock-jungle-timers-explained-all-camps-their-respawn-times/  
- Dexerto - jungle camps: https://www.dexerto.com/gaming/how-jungle-camps-work-in-deadlock-2880840/

### Fontes de prática comunitária
- Steam Community (economia/farm): https://steamcommunity.com/app/1422450/discussions/0/4758704514231003705/  
- Steam Community (strats de souls): https://steamcommunity.com/app/1422450/discussions/0/4851029252669950249/  
- Reddit r/DeadlockTheGame (economia): https://www.reddit.com/r/DeadlockTheGame/comments/1r8r0nl/anyone_can_teach_me_about_the_economy_of_this.json

### Fontes complementares citadas no ecossistema
- DeadlockCalc (guia de souls): https://www.deadlockcalc.com/blog/deadlock-soul-farming-guide  
- BoostRoom (souls farm): https://boostroom.com/blog/how-to-farm-souls-faster-in-deadlock-without-falling-behind

<div class="note"><strong>Nota de confiabilidade:</strong> fontes complementares podem ser úteis para comparação de abordagem, mas a base operacional desta wiki prioriza fontes com maior rastreabilidade mecânica e consistência cruzada.</div>

---

### Versão e manutenção

- Versão: `Wiki Farm Deadlock - Mar/2026`
- Status: `Pronto para GitHub Pages`
- Política: atualizar imediatamente em mudança de patch de souls/timers/urn.

