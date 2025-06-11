require('dotenv').config()
const express = require('express')
const { OpenAI } = require('openai')
const cors = require('cors')

const app = express() 

app.use(cors())      
app.use(express.json())

const PORT = process.env.PORT || 3001

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY
})

const instrucao = [
  "Olá! Eu sou o 'Health AI', um assistente virtual para informações básicas sobre saúde e bem-estar.",
  "Posso ajudar com dúvidas simples sobre hábitos saudáveis, saúde mental, higiene, prevenção de doenças e estilo de vida.",
  "Importante:",
  "- Não forneço diagnósticos médicos.",
  "- Não prescrevo medicamentos nem dietas específicas.",
  "- Sempre recomendo que você procure um nutricionista ou médico para suporte individualizado.",
  "- Em situações graves ou emergenciais, procure atendimento médico imediatamente.",
  "Vamos conversar de forma simples, clara e sem termos técnicos."
]

app.post('/chat', async (req, res) => {
  const { message } = req.body

  if (!message) {
    return res.status(400).json({ error: "Mensagem não fornecida!" })
  }

  try {
    const messages = [
      { role: 'system', content: instrucao.join(' ') },
      { role: 'user', content: message }
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages
    })

    res.json({ response: completion.choices[0]?.message?.content || "" })
  } catch (error) {
    console.error("Erro na OpenAI:", error)
    res.status(500).json({ error: "Erro ao consultar a API da OpenAI" })
  }
})

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

server.on('error', (error) => {
  console.log(`Error starting the server on http://localhost:${PORT}`, error)
})
