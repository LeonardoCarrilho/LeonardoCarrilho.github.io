# Direção visual

O portfólio usa Hanken Grotesk, cinza claro e azul para destacar os projetos e os links. O hero apresenta desenvolvimento full stack ao lado de uma captura real do Helpdesk. As demais seções mantêm experiência, formação, tecnologias e contatos do proprietário em português e inglês.

`src/styles/portfolio.css` contém o sistema visual ativo. As folhas antigas permanecem no histórico do projeto, mas não são importadas junto ao novo sistema. Preserve a mesma largura de conteúdo, controles com pelo menos 44 px, foco visível e fotografias/capturas sem distorção. O conteúdo deve crescer no celular.

O movimento de entrada e o momento de texto usam cópias sem alteração do kit design-taste-frontend em `public/taste`. O carregamento usa arquivos locais, mantendo a CSP sem scripts inline. Preferência de movimento reduzido deve deixar todo o conteúdo visível.

Antes de publicar, execute lint, cobertura, build e os testes Playwright, incluindo PT/EN e larguras 320, 390, 768, 820, 1024 e 1440. Capturas e limitações do gate ficam em `.taste-skill`. O trabalho continua no PR #6 e na issue #8; não foi publicado.
