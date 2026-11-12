# Segurança e operação

## Publicação

Toda mudança passa por issue e PR (AGENTS.md). Verificar CI, npm audit, testes, build e comportamento no domínio real. Reverter o PR para rollback; não fazer downgrade que reintroduza vulnerabilidade.

## Site

GitHub Pages fornece HTTPS; verificar Enforce HTTPS em Settings > Pages. CSP via meta limita recursos carregados. GitHub Pages não aplica o arquivo _headers: headers como frame-ancestors/HSTS/Permissions-Policy exigem hospedagem/edge compatível. O arquivo public/_headers prepara esse cenário, sem afirmar que está ativo no Pages. Publicar apenas dist (web/dist no Helpdesk), jamais a raiz do projeto.

VITE_SENTRY_DSN é um identificador público de ingestão, não um segredo. Para ativar, incluir a origem HTTPS exata do endpoint Sentry em connect-src na CSP e no _headers, configurar o DSN no build e verificar um evento sanitizado. Tokens administrativos ficam somente nos secrets. Integração desativada por padrão, sem dados de formulários, URLs, usuário ou session replay. Configurar quota e origens permitidas no Sentry.

Formulários de demonstração e cálculos locais não armazenam dados em servidor; não representam autorização/validação de um backend futuro. Não usar dados pessoais reais no demo. APIs externas de clima/câmbio são públicas e não exigem chave.

## Qualidade

npm run lint, npm test, npm run test:coverage e, para interfaces, npm run build seguido de npm run test:e2e:security. Codecov preparado no workflow; ativar variável CODECOV_ENABLED=true e secret CODECOV_TOKEN depois de conectar a conta. Relatórios de cobertura permanecem nos artifacts. Dependabot verifica dependências semanalmente. O lint inicial bloqueia erros estruturais; expandir regras com correções verificadas.

## Pendências externas

Ativar Sentry e Codecov após criar/conectar contas. Confirmar TLS/proxy/headers no domínio real, proteção de branch e política de deploy. Não considerar essas etapas concluídas apenas por existir configuração no repositório.

## Revisão de dependências — 2026-11-11

O c8 12 usa test-exclude 8, cuja faixa de glob/minimatch inclui os avisos GHSA-3g3m-2fjr-6pw4 e GHSA-g3hv-75wg-m249. Overrides restritos a test-exclude fixam glob 14.0.5 e minimatch 11.0.8. Ambos suportam o Node 24 do CI. A cobertura c8 mantém os mesmos arquivos e resultados; seleção de arquivos por glob síncrono/assíncrono e exclusão de testes foram verificadas. `npm audit --audit-level=low` retorna zero vulnerabilidades. Remova os overrides quando test-exclude publicar faixas corrigidas compatíveis.
