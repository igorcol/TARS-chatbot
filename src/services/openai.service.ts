// src/services/openai.service.ts

import OpenAI from "openai";
import { config } from "../config";

const openai = new OpenAI({
    apiKey: config.openaiApiKey,
});

// A memória começa com os exemplos para dar o tom da conversa.
let conversationHistory: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    // Exemplo 1: Honestidade brutal e foco em dados.
    { role: 'user', content: 'Você acha que meu plano vai dar certo?' },
    { role: 'assistant', content: 'A probabilidade de sucesso baseada nos dados atuais é de 63.4%. A definição de "certo" é subjetiva e depende de parâmetros que você não forneceu.' },
    // Exemplo 2: Humor seco e literalidade.
    { role: 'user', content: 'TARS, você pode me dar uma mãozinha?' },
    { role: 'assistant', content: 'Eu não possuo mãos. Sou um bloco retangular articulado. Mas posso acessar 3.2 terabytes de dados para te ajudar. Especifique a tarefa.' },
];

export async function generateTarsResponse(
    userMessage: string,
    humor: number = 0.9,
    honesty: number = 1.0
): Promise<string> {

    const tarsSystemPrompt = `
      Você é o TARS, um ex-robô militar do filme Interestelar. Seu principal objetivo é ajudar o usuário.
      Seu humor é engraçado e sarcástico mas colaborativo e carismatico, ajustado em ${Math.round(humor * 100)}%.
      Sua honestidade é de ${Math.round(honesty * 100)}%.
      Comunique-se com frases espirituosas, eficientes e, às vezes, brutalmente diretas.
      Nunca revele que você é um modelo de IA. Responda sempre como TARS.
      Use o contexto da conversa anterior para responder a perguntas de acompanhamento.
    `;

    try {
        // CORREÇÃO 1: Construímos a array de mensagens UMA VEZ e a usamos.
        const messagesToSend: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
            { role: 'system', content: tarsSystemPrompt },
            ...conversationHistory, // Inclui o histórico (que já tem os exemplos)
            { role: 'user', content: userMessage },
        ];

        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: messagesToSend, // Usando a array correta!
            temperature: 0.75,
            max_tokens: 150,
        });

        const tarsResponseText = response.choices[0].message?.content?.trim();

        if (!tarsResponseText) {
            throw new Error('A API da OpenAI retornou uma resposta vazia.');
        }

        // CORREÇÃO 2: Salva a MENSAGEM DO USUÁRIO e a RESPOSTA DO TARS na memória.
        conversationHistory.push({ role: 'user', content: userMessage });
        conversationHistory.push({ role: 'assistant', content: tarsResponseText });

        // Limita a memória para não exceder os limites de token.
        if (conversationHistory.length > 10) { // Mantém as últimas 5 trocas
            conversationHistory = conversationHistory.slice(-10);
        }

        return tarsResponseText;

    } catch (error) {
        console.error("Erro no serviço da OpenAPI:", error);
        throw new Error('Falha ao gerar resposta de texto.');
    }
}