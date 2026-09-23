# Jetsoft

Implementação independente do site institucional da Jetsoft, refeita a partir da referência pública [jetsoft.com.br](https://jetsoft.com.br/). O projeto é uma página estática em React: não há API nem banco de dados neste repositório. Ele não é mantido pela Jetsoft nem é o repositório oficial da empresa.

## Rodar no computador

Use Node.js 22, a mesma versão configurada no deploy.

```bash
npm ci
npm run dev
```

O Vite informa no terminal o endereço local. Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde ficam as coisas

```text
src/
  main.jsx                  entrada React e mensagem no console
  design/tokens.css         cores, tipografia, medidas e estados globais
  pages/
    JetsoftPage.jsx         estrutura da página e interações
    JetsoftPage.css         estilos da página e regras responsivas
    jetsoftCopy.js          textos em português e inglês
public/jetsoft/             imagens, logos e vídeos usados pela página
.github/workflows/deploy.yml build e publicação no GitHub Pages
DESIGN.md                   decisões visuais e referência dos tokens
PRODUCT.md                  objetivo, público e limites do conteúdo
```

## Alterar conteúdo e comportamento

- **Textos:** edite `src/pages/jetsoftCopy.js`. Os objetos `pt-BR` e `en-US` têm a mesma estrutura; ao adicionar um campo, preencha os dois idiomas.
- **Idioma:** os botões de bandeira no cabeçalho alternam entre português e inglês. A escolha fica salva no navegador com a chave `jetsoft-language`.
- **Seções e interações:** `src/pages/JetsoftPage.jsx` reúne os dados dos slides, cases, etapas, soluções e logos, além da estrutura da página. O CSS correspondente está em `JetsoftPage.css`.
- **Imagens e vídeos:** mantenha os arquivos em `public/jetsoft/` e use a função `asset()` no componente para montar os endereços. Ela inclui o caminho-base correto tanto no servidor local quanto no GitHub Pages. Os vídeos dos dois primeiros slides têm imagens de apoio; respeite `prefers-reduced-motion` ao alterar animações.
- **Cores e estilo:** antes de criar um novo valor, confira os tokens em `src/design/tokens.css` e as orientações em `DESIGN.md`. Isso mantém a paleta consistente entre as seções claras e escuras.

## Publicação

O workflow `.github/workflows/deploy.yml` publica automaticamente a cada push para `master` e também pode ser iniciado manualmente pela aba **Actions**. Ele instala as dependências, gera `dist/` com a base `/jetsoft/` e entrega esse diretório ao GitHub Pages.

No repositório, deixe **Settings → Pages → Build and deployment → Source** como **GitHub Actions**. Depois de um deploy bem-sucedido, o endereço do site é:

<https://oapache.github.io/jetsoft/>

Para testar localmente o mesmo caminho usado na publicação:

```powershell
$env:GITHUB_PAGES = 'true'
npm run build
Remove-Item Env:GITHUB_PAGES
npm run preview
```

Sem `GITHUB_PAGES=true`, o Vite usa `/` como caminho-base, apropriado para desenvolvimento local.

## Verificação

`npm run build` é a verificação automatizada disponível no projeto. Ainda não há comandos de lint ou testes automatizados configurados.

## Antes de enviar uma alteração

Mantenha os textos de `pt-BR` e `en-US` em sincronia, reutilize os tokens visuais existentes e coloque mídia nova em `public/jetsoft/`. Rode `npm run build` antes de abrir ou integrar a alteração; a publicação é feita pelo workflow, não por upload manual de `dist/`.
