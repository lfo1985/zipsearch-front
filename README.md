# 🔍 ZipSearch

**Versão:** `beta-closed 0.0.1`  
**Status:** 🚧 Projeto em desenvolvimento inicial (acesso fechado)

## 📄 Descrição

**ZipSearch** é uma aplicação web que permite realizar consultas de **endereços a partir de CEPs brasileiros** de forma rápida e responsiva.

Desenvolvido com:
- ✅ **Vue 3 + Bootstrap** no frontend
- ✅ **Node.js + Express + MongoDB** no backend

O sistema também armazena o histórico de buscas de CEP por usuário, permitindo fácil reconsulta.

---

## ⚙️ Funcionalidades

- 🔎 Consulta de CEPs via [ViaCEP API](https://viacep.com.br/)
- 📋 Exibição formatada: logradouro, bairro, cidade, UF
- 🧠 Histórico de buscas salvo por usuário (via token anônimo)
- 📱 Interface moderna e responsiva
- 💾 Identificação anônima via `localStorage` (sem login)

---

## 🧪 Como realizar uma pesquisa de CEP

1. Acesse a tela inicial do ZipSearch
2. Digite um **CEP válido** no campo (ex: `01001000`)
3. Clique no botão **"Buscar"**
4. Os dados do endereço serão exibidos logo abaixo:
   - Logradouro
   - Bairro
   - Cidade
   - UF
5. O CEP será automaticamente salvo no histórico do usuário

---

## 🚧 Observações

- O projeto está em **versão beta fechada**. Por enquanto, disponível apenas para uso local ou por convite.
- Em versões futuras, serão adicionados:
  - Autenticação de usuários
  - Exportação do histórico
  - Deploy em nuvem com link público

---
