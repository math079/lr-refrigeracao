# LR Refrigeracao — Landing Page

Site profissional de alta conversao para a **LR Refrigeracao**, empresa especializada em assistencia tecnica de refrigeracao comercial e residencial em Sao Paulo.

## Tecnologias

- HTML5 semantico
- CSS3 (mobile-first, sem frameworks)
- JavaScript vanilla (ES5 compativel)
- Deploy: [Vercel](https://vercel.com)

## Estrutura

```
lr-refrigeracao/
├── index.html      — Landing page principal
├── styles.css      — Estilos completos (mobile-first)
├── script.js       — Interacoes e animacoes
├── vercel.json     — Configuracao de deploy
├── robots.txt      — SEO
└── README.md
```

## Secoes da Landing Page

1. **Navbar** — Fixa com scroll effect e menu mobile
2. **Hero** — Full screen com CTAs para WhatsApp e telefone
3. **Marcas** — Carrossel infinito com animacao CSS
4. **Servicos** — 6 cards com hover effect e mensagens WhatsApp personalizadas
5. **Diferenciais** — 3 colunas destacando diferenciais competitivos
6. **Parceiros** — Destaque Coca-Cola + categorias de clientes
7. **Avaliacoes** — 4 depoimentos de clientes
8. **CTA Final** — Formulario de selecao de servico com redirect dinamico para WhatsApp
9. **Footer** — Links, contato e redes sociais
10. **WhatsApp Flutuante** — Botao sempre visivel

## Mensagens WhatsApp por Servico

Cada servico gera uma mensagem especifica pre-preenchida:

| Servico | Mensagem |
|---------|----------|
| Geladeira | "Ola, tenho interesse em seu servico. Pode me ajudar a consertar minha geladeira?..." |
| Freezer Comercial | "...Preciso de assistencia para meu freezer comercial..." |
| Expositora | "...Preciso de manutencao em minha expositora de bebidas..." |
| Ar Condicionado | "...Meu ar condicionado esta com problema..." |
| Camara Fria | "...Preciso de assistencia tecnica em minha camara fria. E urgente..." |
| Manutencao Preventiva | "...Gostaria de contratar um plano de manutencao preventiva..." |

## Como fazer o deploy

### 1. GitHub

```bash
git init
git add .
git commit -m "feat: landing page LR Refrigeracao"
git remote add origin https://github.com/SEU_USUARIO/lr-refrigeracao.git
git push -u origin main
```

### 2. Vercel

1. Acesse [vercel.com](https://vercel.com) e faca login com GitHub
2. Clique em **Add New Project**
3. Selecione o repositorio `lr-refrigeracao`
4. Clique em **Deploy** (sem nenhuma configuracao adicional necessaria)
5. O site estara disponivel em `lr-refrigeracao.vercel.app`

### 3. Dominio personalizado (opcional)

No painel do Vercel, va em **Settings > Domains** e adicione o dominio do cliente.

## Contato do cliente

- WhatsApp: +55 11 94952-1977
- Cidade: Sao Paulo, SP

## Personalizacoes pendentes

- [ ] Substituir logo placeholder por logo oficial da LR Refrigeracao
- [ ] Adicionar fotos reais do cliente (equipe, servicos executados)
- [ ] Configurar dominio personalizado no Vercel
- [ ] Integrar Google Business Reviews (futura feature)
- [ ] Adicionar numero de telefone fixo se houver
