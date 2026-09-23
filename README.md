# Jetsoft

Este repositório reúne uma versão independente do site institucional da Jetsoft, baseada na referência pública [jetsoft.com.br](https://jetsoft.com.br/). Não é o site oficial nem é mantido pela empresa.

## Ver o site

[oapache.github.io/jetsoft](https://oapache.github.io/jetsoft/)

## Rodar no computador

Com o Node.js 22 instalado, abra a pasta do projeto no terminal e rode:

```bash
npm ci
npm run dev
```

Abra o endereço que aparecer no terminal. Para conferir a versão final antes de publicar:

```bash
npm run build
npm run preview
```

## Onde editar

- **Textos e idiomas:** `src/pages/jetsoftCopy.js`. Os conteúdos em português e inglês ficam lado a lado; quando mudar um texto, atualize os dois.
- **Seções e funcionamento:** `src/pages/JetsoftPage.jsx`. É onde estão o menu, os destaques, os cases, as soluções e o restante da página.
- **Aparência:** `src/pages/JetsoftPage.css` cuida do layout. As cores e medidas compartilhadas ficam em `src/design/tokens.css`; a explicação da identidade visual está em [`DESIGN.md`](DESIGN.md).
- **Fotos, logos e vídeos:** `public/jetsoft/`. Os dois primeiros destaques usam vídeo, com imagem para quem prefere reduzir movimento.

O botão de bandeira no cabeçalho troca o idioma e lembra a escolha no navegador.

## Publicação

Quando uma alteração é enviada ao GitHub, o site é atualizado automaticamente. A configuração está em `.github/workflows/deploy.yml`.

## Antes de enviar uma mudança

Confira a página no computador e no celular. Se mexer nos textos, mantenha português e inglês atualizados; se adicionar mídia, coloque os arquivos em `public/jetsoft/`. Ainda não há testes automatizados, então rode `npm run build` para confirmar que o projeto continua compilando.
