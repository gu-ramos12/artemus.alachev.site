# Guia Prático: Desenvolvendo com Claude Code

Como usar o Claude Code para construir sites, automações, agentes de IA, CRMs e dashboards.

---

## 1. Sites e Landing Pages

Você já tem um projeto React + Vite + Tailwind funcionando. Veja como me pedir para evoluí-lo:

### Comandos práticos

```
# Criar nova seção
"Crie uma seção de FAQ com acordeão abaixo da seção de depoimentos"

# Melhorar responsividade
"O header está quebrando no mobile, corrija o layout"

# Integrar formulário
"Integre o formulário de contato com a API do FormSubmit (ou Resend, ou SendGrid)"

# SEO e Performance
"Adicione meta tags Open Graph, title e description para SEO"

# Novo site do zero
"Crie um projeto React com Vite, Tailwind e TypeScript para um site de portfólio"
```

### O que eu consigo fazer

- Criar componentes React completos com estilização
- Configurar rotas com React Router
- Implementar animações com Framer Motion
- Integrar com APIs de formulário e e-mail
- Otimizar para SEO e performance
- Configurar deploy (Vercel, Netlify, GitHub Pages)

---

## 2. Automações

### Com n8n (no-code/low-code)

```
"Crie um workflow n8n que:
1. Recebe um webhook quando alguém preenche o formulário do site
2. Salva o lead no Google Sheets
3. Envia um e-mail de boas-vindas
4. Notifica no Slack"
```

Eu gero o JSON do workflow que você importa direto no n8n.

### Com Node.js / Python

```
"Crie um script Node.js que:
- Monitora uma planilha Google Sheets a cada 5 minutos
- Quando detecta um novo lead, envia uma mensagem via API do WhatsApp (Z-API/Evolution API)
- Registra o envio num log"
```

### Exemplos de automações que posso construir

| Automação | Stack sugerida |
|-----------|---------------|
| Captura de leads → CRM | Webhook + API REST |
| E-mail automático pós-cadastro | Node.js + Resend/SendGrid |
| Relatório diário de métricas | Cron job + Google Sheets API |
| Notificação de novos pagamentos | Stripe webhook + Slack API |
| Scraping de dados públicos | Python + BeautifulSoup/Playwright |

---

## 3. Agentes de IA para Tráfego Pago

### Chatbot de qualificação de leads

```
"Crie um chatbot com a API da Anthropic (Claude) que:
- Recebe mensagens via webhook
- Qualifica o lead fazendo 3 perguntas sobre o negócio
- Classifica como quente/morno/frio
- Envia os dados qualificados para o CRM via API"
```

### Agente de análise de campanhas

```
"Crie um agente Python que:
- Conecta na API do Meta Ads (Facebook/Instagram)
- Puxa métricas das campanhas ativas (CPC, CTR, ROAS)
- Usa a API do Claude para analisar os dados e sugerir otimizações
- Gera um relatório em PDF"
```

### Agente de criação de copy

```
"Crie uma API Node.js com endpoint POST /gerar-copy que:
- Recebe: produto, público-alvo, tom de voz, plataforma (Meta/Google)
- Usa a API do Claude para gerar 5 variações de copy
- Retorna as variações em JSON"
```

### Stack recomendada para agentes

```
Backend:     Node.js (Express/Fastify) ou Python (FastAPI)
IA:          API da Anthropic (Claude) ou OpenAI
Banco:       PostgreSQL ou Supabase
Fila:        BullMQ (Node) ou Celery (Python)
Deploy:      Railway, Render ou VPS
```

---

## 4. CRMs

### CRM simples full-stack

```
"Crie um CRM com:
- Frontend: React + Tailwind + shadcn/ui
- Backend: Node.js + Express + Prisma
- Banco: PostgreSQL
- Funcionalidades:
  - CRUD de contatos (nome, e-mail, telefone, empresa)
  - Pipeline de vendas com drag-and-drop (Kanban)
  - Histórico de interações por contato
  - Filtros e busca
  - Dashboard com métricas"
```

### Módulos que posso construir

```
# Pipeline Kanban
"Adicione um board Kanban com as colunas: Novo Lead, Qualificado, Proposta, Negociação, Fechado"

# Integração WhatsApp
"Integre o CRM com a Evolution API para enviar mensagens direto do painel"

# Automação de follow-up
"Crie uma rotina que envia e-mail automático para leads sem interação há 7 dias"

# Importação de leads
"Adicione upload de CSV para importar contatos em lote"
```

---

## 5. Dashboards

### Dashboard de métricas de negócio

```
"Crie um dashboard React com:
- Biblioteca de gráficos: Recharts (já instalada no projeto)
- Cards de KPI: faturamento, leads, conversão, ticket médio
- Gráfico de linha: evolução mensal
- Gráfico de pizza: origem dos leads
- Tabela: últimos leads com status
- Filtro por período (7d, 30d, 90d)
- Dados vindos de uma API REST"
```

### Dashboard com dados reais

```
"Crie um backend Express que:
- Conecta no PostgreSQL com Prisma
- Expõe endpoints:
  GET /api/dashboard/kpis
  GET /api/dashboard/leads-por-origem
  GET /api/dashboard/faturamento-mensal
- Retorna dados agregados para o frontend"
```

### Dashboard para tráfego pago

```
"Crie um dashboard que:
- Puxa dados da API do Meta Ads e Google Ads
- Mostra: gasto total, CPC, CTR, conversões, ROAS
- Compara períodos (esta semana vs semana passada)
- Alerta quando CPC ultrapassa limite definido"
```

---

## Dicas para me usar melhor

### 1. Seja específico no pedido

```
# Ruim
"Faz um CRM"

# Bom
"Crie a tela de listagem de contatos do CRM com:
- Tabela com colunas: nome, e-mail, telefone, status, data de criação
- Busca por nome ou e-mail
- Filtro por status (ativo/inativo)
- Paginação de 20 itens
- Botão de adicionar contato que abre um modal com formulário"
```

### 2. Divida em etapas

Em vez de pedir tudo de uma vez, peça por módulos:

```
Etapa 1: "Configure o projeto: React + Vite + Tailwind + Prisma + PostgreSQL"
Etapa 2: "Crie o modelo de dados para contatos e interações"
Etapa 3: "Crie os endpoints CRUD de contatos"
Etapa 4: "Crie a tela de listagem"
Etapa 5: "Crie o formulário de cadastro"
Etapa 6: "Adicione o dashboard"
```

### 3. Me dê contexto

```
"Estou usando Supabase como banco de dados e já tenho autenticação configurada.
O projeto usa Next.js 14 com App Router.
Preciso de uma página /dashboard que mostra métricas do meu SaaS."
```

### 4. Peça revisão e testes

```
"Revise o código que você gerou e verifique se há vulnerabilidades de segurança"
"Rode o build e corrija qualquer erro de TypeScript"
"Crie testes unitários para os endpoints da API"
```

### 5. Use comandos do Claude Code

```
/help          → Ver comandos disponíveis
```

---

## Fluxo de trabalho recomendado

```
1. PLANEJE  → Me diga o que quer construir com detalhes
2. CONFIGURE → Eu crio o projeto e configuro as dependências
3. CONSTRUA → Peça feature por feature, uma de cada vez
4. TESTE    → Me peça para rodar build/testes e corrigir erros
5. DEPLOY   → Me peça para configurar o deploy (Vercel, Railway, etc.)
6. ITERE    → Me peça ajustes, melhorias e novas funcionalidades
```

---

## Exemplo completo: Do zero ao deploy

```
Você: "Crie um sistema de captura de leads com:
       - Landing page React com formulário
       - API Node.js que salva no banco
       - Dashboard simples com total de leads por dia
       - Deploy na Vercel (front) e Railway (back)"

Eu vou:
1. Criar o projeto frontend com React + Vite + Tailwind
2. Criar o backend com Express + Prisma + PostgreSQL
3. Implementar o formulário com validação
4. Criar os endpoints de API
5. Construir o dashboard com Recharts
6. Configurar os arquivos de deploy
7. Rodar o build e corrigir erros
```

---

## Limitações importantes

- **Não tenho acesso a contas externas**: Não consigo logar no seu Meta Ads, Google Ads, etc. Mas posso criar o código que integra com essas APIs usando suas credenciais.
- **Não persisto estado entre conversas**: Cada conversa começa do zero. Mantenha seu código em um repositório Git.
- **Não rodo servidores permanentemente**: Posso iniciar um server para testar, mas ele para quando a sessão encerra.
- **Chaves de API**: Nunca me envie senhas ou chaves reais. Use variáveis de ambiente (`.env`).
