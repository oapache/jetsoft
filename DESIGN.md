# Jetsoft Clone — Design System

> Fonte visual: reprodução orientada pela referência fornecida em `https://jetsoft.com.br/`. Este documento descreve o mundo visual do clone e os tokens que o implementam.

## 1. Direção visual

**Tese:** uma empresa brasileira de tecnologia vista como uma infraestrutura viva: azul-marinho profundo como ambiente de confiança, ciano como sinal de evolução e imagens de dados como matéria de transformação.

**Modo da superfície:** Persuadir. O visitante deve entender em poucos segundos o que a Jetsoft faz, reconhecer o território de tecnologia aplicada e encontrar um próximo passo de contato.

**Sensação:** precisa, humana e progressiva. A página não é uma dashboard; é uma narrativa institucional com ritmo de apresentação, prova concreta e fechamento comercial.

**Regra de composição:** grandes campos de cor, tipografia editorial, linhas finas, poucos controles e imagens com função narrativa. O sistema não usa grade de cards como estrutura dominante.

## 2. Hierarquia da página

1. **Hero** — uma promessa e uma ação, com imagem de tecnologia em tela cheia.
2. **Pilares** — JetERP, JetBPM e JetECM como vocabulário de entrada.
3. **Quem somos** — sub-hero editorial com título, imagem humana e três diferenciais em acordeão.
4. **Resultados** — fidelização e três consequências práticas.
5. **Casos de sucesso** — prova narrativa com navegação entre parceiros.
6. **Confiança construída** — quantidade de empresas e faixa contínua de logos.
7. **Método** — processo em cinco etapas com seleção interativa.
8. **Soluções** — portfólio de seis frentes, com imagem e ação.
9. **Conteúdos** — três portas para aprofundamento.
10. **Contato** — endereço, canais e CTA final.

Cada seção tem uma responsabilidade única. O texto é curto, escaneável e nunca compete com o nome da marca.

## 3. Tokens de cor

Os tokens executáveis ficam em `src/design/tokens.css`. O nome do token é a API; não usar hex solto em componentes novos.

| Token | Valor | Função |
| --- | --- | --- |
| `--jet-color-navy-950` | `#04101f` | Fundo mais profundo, rodapé e contraste máximo |
| `--jet-color-navy-900` | `#07182b` | Fundo principal, hero e áreas de confiança |
| `--jet-color-navy-800` | `#09253a` | Seções alternadas e painéis de conteúdo |
| `--jet-color-blue-700` | `#0b7ca9` | Ação primária, links de contato e navegação |
| `--jet-color-cyan-400` | `#20c9dd` | Accent, foco, estados ativos e sinal de inovação |
| `--jet-color-whatsapp` | `#25d366` | Verde oficial reservado à ação de contato do WhatsApp |
| `--jet-color-white` | `#ffffff` | Texto primário sobre fundo escuro |
| `--jet-color-ink-100` | `#eff7f7` | Texto principal suavizado |
| `--jet-color-muted-300` | `#9bb1bb` | Texto secundário sobre fundo escuro |
| `--jet-color-dark-text` | `#113044` | Texto principal sobre papel claro |
| `--jet-color-dark-muted` | `#55717b` | Texto secundário sobre papel claro |
| `--jet-color-paper` | `#f4f7f6` | Seções claras e respiro visual |
| `--jet-color-line-dark` | `rgba(155,205,216,.20)` | Divisórias em superfícies escuras |
| `--jet-color-line-light` | `rgba(17,48,68,.15)` | Divisórias em superfícies claras |
| `--jet-color-overlay` | `rgba(4,16,31,.88)` | Overlay de legibilidade sobre mídia |
| `--jet-color-focus` | `#20c9dd` | Anel de foco acessível |

### Relações de uso

- `navy-950` e `navy-900` formam a base; nunca usar preto puro.
- `blue-700` é ação preenchida, não decoração.
- `cyan-400` é reservado para estado, destaque e direção; não transformar todo texto em ciano.
- Texto secundário sempre usa `muted-300` ou `dark-muted`, nunca cinza neutro fora da paleta.
- Superfície clara (`paper`) entra depois de uma massa escura para marcar mudança de capítulo.

## 4. Tipografia

- **Display:** Space Grotesk, pesos 400–700. Usada em hero, títulos de seção, números, nomes de solução e cases.
- **Texto:** DM Sans, pesos 400–700. Usada em navegação, corpo, labels e metadados.
- **Fallback:** `sans-serif`, garantindo carregamento funcional mesmo sem Google Fonts.

| Token | Valor | Uso |
| --- | --- | --- |
| `--jet-text-xs` | `0.72rem` | Datas, índices, micro-labels |
| `--jet-text-sm` | `0.84rem` | Navegação, links, metadados |
| `--jet-text-md` | `0.95rem` | Corpo compacto |
| `--jet-text-lg` | `1.05rem` | Lead, descrição curta |
| `--jet-text-xl` | `1.45rem` | Títulos de cards e artigos |
| `--jet-text-2xl` | `2.2rem` | Títulos de detalhe |
| `--jet-text-hero` | `clamp(3rem, 7vw, 6.55rem)` | Headline do hero |

Display headings use `letter-spacing: -0.055em` to `-0.07em`, line-height between `.92` and `1.1`. Body copy uses line-height `1.65`–`1.8` and a measure near 65–75ch.

## 5. Espaçamento e layout

| Token | Valor | Uso |
| --- | --- | --- |
| `--jet-space-1` | `0.25rem` | Ajustes mínimos |
| `--jet-space-2` | `0.5rem` | Gaps de ícone |
| `--jet-space-3` | `0.75rem` | Gaps curtos |
| `--jet-space-4` | `1rem` | Unidade base |
| `--jet-space-5` | `1.5rem` | Padding de controle |
| `--jet-space-6` | `2rem` | Padding de bloco |
| `--jet-space-7` | `3rem` | Separação média |
| `--jet-space-8` | `4rem` | Separação de grupos |
| `--jet-space-9` | `5rem` | Respiro de seção menor |
| `--jet-space-10` | `6.25rem` | Respiro de seção maior |
| `--jet-shell-width` | `1180px` | Largura de conteúdo |
| `--jet-shell-gutter` | `32px` | Gutter desktop |
| `--jet-section-y` | `132px` | Padding vertical principal |

- Hero é edge-to-edge; apenas o conteúdo interno respeita o shell.
- Shell desktop: `min(1180px, calc(100% - 64px))`.
- Mobile: shell de `calc(100% - 40px)` e seções de aproximadamente 82px.
- A distância antes de heading deve ser maior que a distância depois dele.
- Linhas horizontais guiam a página; bordas não encapsulam cada informação.

## 6. Forma, bordas e profundidade

- Controles circulares e CTA principal usam `border-radius: 999px`.
- Cards de solução permanecem retangulares para preservar o caráter editorial e de catálogo.
- Bordas são sempre finas (`1px`) e de baixa opacidade.
- Profundidade vem de contraste de superfícies e overlays, não de sombras em todos os blocos.
- Única sombra persistente: botão flutuante de WhatsApp (`--jet-shadow-float`).

## 7. Imagem e tratamento

- Hero: arte de dados em `cover`, com overlay navy para legibilidade. JetERP usa `hero-loop-seamless.mp4`; JetBPM usa `hero-2-loop.mp4`, com brilho e saturação suavizados para preservar o clima marinho. Cada vídeo usa sua imagem como poster/fallback; o terceiro slide permanece estático.
- Imagens de solução: recorte `cover` em moldura de 210px; hover faz escala sutil `1.04`.
- Logos de cases ficam centralizados em uma base branca para manter as cores oficiais legíveis sobre navy. A faixa de parceiros preserva as cores e a opacidade originais dos assets; ambos usam `object-fit: contain`.
- Foto institucional: contraste controlado e saturação reduzida para não competir com o conteúdo.
- Assets são locais em `public/jetsoft/`; a interface não depende de hotlinking.

## 8. Movimento e interação

### Hero

- Carrossel avança a cada 6.5s.
- Troca manual pelos três indicadores.
- Entrada da imagem usa zoom suave de `1.04` para `1`.
- Os vídeos decorativos dos slides JetERP e JetBPM ficam mudos e em loop, pausando fora da viewport, com a aba oculta ou quando a pessoa prefere movimento reduzido.

### Scroll

- Cabeçalho passa de absoluto para fixo com fundo translúcido após 24px.
- Links têm micro-movimento de seta de 4px para reforçar direção.

### Conteúdo

- Cases alternam via anterior/próximo ou tabs.
- Método alterna por tabs verticais e atualiza imagem, índice e copy.
- Acordeões usam o elemento nativo `details`.

### Acessibilidade de movimento

`prefers-reduced-motion: reduce` remove animação do hero e do marquee e reduz transições a quase zero.

## 9. Responsividade

- Desktop: header completo, hero com conteúdo lateral e seções em duas ou três colunas.
- Até 960px: gaps e tipografia reduzem sem trocar a hierarquia.
- Até 720px: menu vira disclosure, pilares empilham, cases e processo colapsam para uma coluna, soluções e artigos viram fluxo vertical.
- Nenhuma seção deve criar rolagem horizontal involuntária.

## 10. Estados e acessibilidade

- Foco visível em ciano com offset de 4px.
- Botões de carrossel expõem `aria-label` e estado pressionado quando aplicável.
- Menu expõe `aria-expanded` e fecha com Escape.
- Imagens informativas têm `alt`; imagens decorativas usam `alt=""`.
- Contraste deve permanecer no mínimo 4.5:1 para texto normal.

## 11. Não fazer

- Não substituir esta composição por grid de cards SaaS.
- Não introduzir gradiente roxo/azul genérico.
- Não usar texto em gradiente.
- Não adicionar badges, pills ou sombras decorativas sem função.
- Não ampliar o escopo para dashboard, login, pricing ou CRUD.
- Não trocar a paleta por branco puro e azul corporativo genérico.
