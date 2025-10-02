# ConsoleChat (console-style anonymous chat)

[![Deploy to GitHub Pages](https://github.com/w1llsystems/consolechat/actions/workflows/deploy.yml/badge.svg)](https://github.com/w1llsystems/consolechat/actions/workflows/deploy.yml)

Pequeno app estático (HTML + Tailwind + JS) com comportamento de chat anônimo local. Não armazena histórico de mensagens no servidor — apenas usa localStorage para bloquear alteração de nickname enquanto o IP público for o mesmo.

Este repositório pode ser publicado via GitHub Pages para servir a `index.html` diretamente.

## Como publicar (PowerShell)

Substitua `<your-remote-url>` pela URL do repositório (por exemplo `https://github.com/w1llsystems/consolechat.git`).

1. Inicializar repositório (se ainda não existir) e enviar para o GitHub

```powershell
cd 'C:\Users\nunes\Documents\IA\batepapo'
git init
git add index.html README.md
git commit -m "Initial commit: ConsoleChat index"
git branch -M main
git remote add origin https://github.com/w1llsystems/consolechat.git
git push -u origin main
```

2. Ativar GitHub Pages

- No GitHub, vá até o repositório `w1llsystems/consolechat` > Settings > Pages.
- Em "Source", escolha a branch `main` e a pasta `/ (root)`.
- Salve. O site será publicado em alguns minutos em `https://w1llsystems.github.io/consolechat/`.

Alternativamente, você pode usar a branch `gh-pages` e publicar com ferramentas automáticas (ex.: GitHub Actions ou `gh-pages` npm), mas publicar direto na `main` é o mais simples para este conteúdo estático.

## Observações
- O app usa `https://api.ipify.org?format=json` para obter o IP público do cliente. GitHub Pages serve via HTTPS, então a requisição deve funcionar.
- O comportamento de bloqueio de nickname usa `localStorage` do navegador — se o usuário limpar o storage ou usar modo incógnito, o bloqueio não persistirá.
- Se quiser CI/CD para deploy automático (GitHub Actions), posso adicionar uma workflow que publique na branch `gh-pages` sempre que fizer push na `main`.

## Próximos passos (opcionais)
- Adicionar `README.md` com screenshots e demonstração.
- Adicionar um pequeno workflow `.github/workflows/deploy.yml` para deploy automático no GitHub Pages.
- Adicionar um `LICENSE` se quiser tornar o projeto aberto.

Se quiser que eu já crie o workflow de deploy automático (GitHub Actions) ou adicione um `LICENSE` e `CNAME`, diga qual opção prefere e eu faço as alterações.
