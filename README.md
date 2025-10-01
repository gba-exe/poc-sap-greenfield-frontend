# POC SAP Greenfield Frontend - README

> **Descrição curta**
>
> Interface em Next.js.

---

## Sumário

* [Sobre](#sobre)
* [Tecnologias](#tecnologias)
* [Pré-requisitos](#pré-requisitos)
* [Passo a passo de startup](#passo-a-passo-de-startup)
* [Monitoramento e Logs](#monitoramento-e-logs)
* [Contribuição](#contribuição)
* [Roadmap / Próximos passos (TODO)](#roadmap--próximos-passos-todo)
* [Resolução de problemas comuns](#resolução-de-problemas-comuns)

---

## Sobre

Frontend minimalista para uma PoC.

---

## Tecnologias
 * 
  * Next.js 14 (ou versão utilizada no projeto)
  * React 18

* **Linguagem:** Node.js 18+
* **Framework:** Next.js 14 - React 18

---

## Passo a passo de startup

1. Clone o repositório

```bash
git clone https://github.com/gba-exe/poc-sap-greenfield-frontend
cd poc-sap-greenfield-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
# editar conforme necessário (ex: API_URL=http://localhost:5000)
```

4. Rode em modo de desenvolvimento:

```bash
npm run dev
```

5. Acesse a aplicação web em `http://localhost:3000`

---

## Monitoramento e Logs

* Logs são exibidos no console por padrão.
* Recomenda-se configurar ferramentas como Prometheus/Grafana (TODO).
* Endpoint de healthcheck pode ser adicionado em `/health`.

---

## Contribuição

1. Fork este repositório
2. Crie uma branch (`feature/xxx` ou `fix/xxx`)
3. Faça commit das alterações
4. Abra um Pull Request

---

## Roadmap / Próximos passos (TODO)

* [ ] Criar docker-compose

---

## Resolução de problemas comuns

* **Erro de módulo não encontrado**: verifique se o ambiente virtual está ativado e se as dependências foram instaladas.
