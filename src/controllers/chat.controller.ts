// src/controllers/chat.controller.ts

import { Request, Response } from 'express';
import { generateTarsResponse } from '../services/openai.service';
import { convertTextToSpeech } from '../services/tts.service';

export async function handleChatRequest(req: Request, res: Response): Promise<void> {
  const { message, humor, honesty } = req.body;

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'A propriedade "message" é obrigatória e deve ser uma string.' });
    return;
  }

  try {
    // Passo 1: Gerar o texto. Esta parte continua sendo crítica.
    const tarsText = await generateTarsResponse(message, humor, honesty);

    let audioBase64: string | null = null; // Inicia o áudio como nulo

    // Passo 2: Tenta gerar o áudio, mas não trava se falhar.
    try {
      const audioBuffer = await convertTextToSpeech(tarsText);
      audioBase64 = `data:audio/mpeg;base64,${audioBuffer.toString('base64')}`;
    } catch (ttsError: any) {
      // Se a conversão para áudio falhar, apenas logamos o erro no console do servidor.
      console.error("AVISO: Falha não-crítica no serviço de TTS. Enviando resposta sem áudio.", ttsError.message);
      // A variável audioBase64 continuará como 'null'.
    }

    // Passo 3: Envia a resposta. Ela sempre terá o texto, mas o áudio é opcional.
    res.json({
      text: tarsText,
      audio: audioBase64, // Será o áudio em base64 ou null
    });

  } catch (error) {
    // Este catch agora só pega erros críticos (falha na OpenAI, por exemplo).
    console.error('Erro crítico no endpoint /chat:', error);
    res.status(500).json({ error: 'Ocorreu um erro interno ao processar a solicitação.' });
  }
}