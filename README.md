# Health IA - Assistente Virtual de Saúde e Bem-Estar

Atividade proposta pelo professor de Mobile. Este projeto é uma API Node.js que utiliza o modelo GPT da OpenAI para criar um assistente virtual chamado *Health IA*, especializado em responder dúvidas sobre saúde e bem-estar de forma simples e prática.

## Funcionalidades

- Responde perguntas sobre saúde, bem-estar, hábitos saudáveis e autocuidado.
- Não responde perguntas fora do tema saúde.
- Respostas sempre em texto simples.

## Como usar

### Pré-requisitos

- Node.js 
- Conta na OpenAI e chave de API válida

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto_LLM.git
   cd projeto_LLM
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com sua chave da OpenAI:
   ```
   OPEN_API_KEY=sua-chave-aqui
   PORT=3001
   ```

### Executando o servidor

```sh
node index.js
```

O servidor estará disponível em `http://localhost:3001`.

### Endpoint

- **POST** `/chat`
  - Corpo da requisição (JSON):
    ```json
    {
      "message": "Sua dúvida sobre saúde"
    }
    ```
  - Resposta:
    ```json
    {
      "response": "Resposta do assistente"
    }
    ```

## Exemplo de uso com curl

```sh
curl -X POST http://localhost:3001/chat 
-H "Content-Type: application/json" 
-d "{\"message\": \"Como melhorar meu sono?\"}"
```

## Sobre

Este projeto foi desenvolvido para servir como um assistente virtual focado em saúde e bem-estar, utilizando a API da OpenAI para gerar respostas inteligentes e acessíveis.
