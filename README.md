# ZipSearch

**Versão:** 1.0.0

ZipSearch é um sistema para pesquisa de dados postais de forma simples e eficiente.

## Funcionalidades

- **Pesquisa por CEP:**  
  Informe o CEP para localizar endereço, cidade, estado e demais informações relacionadas.

- **Pesquisa por Endereço:**  
  Informe endereço, cidade e estado para localizar o CEP correspondente.

- **Histórico de Consultas:**  
  O usuário pode adicionar itens das consultas ao histórico para visualização posterior.

## Como usar

1. Escolha o tipo de pesquisa: por CEP ou por endereço.
2. Preencha os campos necessários.
3. Visualize os resultados.
4. Opcionalmente, adicione a consulta ao histórico.

---

Desenvolvido para facilitar o acesso a informações postais.

## Instalação

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:
  ```bash
  npm install
  ```
3. Renomeie o arquivo `.env.example` para `.env`.
4. Gere um token de acesso à API (o mesmo token deve ser configurado também na API da aplicação).
5. Adicione o token gerado ao arquivo `.env`.
6. Inicie a aplicação:
  ```bash
  npm run dev
  ```

## Full Changelog

[Veja todas as alterações nesta versão](https://github.com/lfo1985/zipsearch-front/commits/v.1.0.0)