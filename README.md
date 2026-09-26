# 📺 TV Player 

Player de TV ao vivo transformado em app mobile-first instalável (PWA).

## 🚀 Como usar

### 1. Subir no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos 4 arquivos:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
3. Vá em **Settings → Pages**
4. Em "Source", selecione a branch `main` e pasta `/ (root)`
5. Aguarde ~1 minuto e acesse: `https://SEU_USUARIO.github.io/NOME_DO_REPO`

### 2. Instalar no celular

**Android (Chrome):**
- Abra o link no Chrome
- Toque no banner "📲 Instalar no celular" OU nos 3 pontinhos → "Adicionar à tela inicial"

**iPhone (Safari):**
- Abra o link no Safari
- Toque no botão compartilhar (quadrado com seta)
- Role até "Adicionar à Tela de Início"

## ✨ Funcionalidades

- 📺 Player de TV com iframe
- ❤️ Favoritos salvos no celular
- 🕐 Histórico dos últimos 20 canais assistidos
- 🔍 Busca por nome de canal
- 📲 Instalável como app nativo (PWA)
- 📱 Layout mobile-first otimizado
- 🔄 Funciona offline (shell da página)
- 🎯 Tela cheia com rotação automática
- 💾 Lembra o último canal assistido

## 🛠️ Tecnologias

- HTML5 / CSS3 / JavaScript puro
- PWA (Progressive Web App)
- Service Worker para cache offline
- localStorage para dados locais
- GitHub Pages para hospedagem

## 📝 Adicionando novos canais

Edite o array `channelData` no `index.html` e adicione a logo no objeto `logoMap`.
