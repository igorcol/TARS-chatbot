import { config } from "../config";

const ELEVENLABS_API_URL = `https://api.elevenlabs.io/v1/text-to-speech/${config.tarsVoiceId}`;

export async function convertTextToSpeech(text: string) {
    try {
        const response = await fetch(ELEVENLABS_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': config.elevenLabsApiKey || '',
            },
            body: JSON.stringify({
                text: text,
                model_id: 'eleven_multilingual_v2',
                voice_settings: {
                    stability: 0.6,
                    similarity_boost: 0.85,
                },
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Erro na API do ElevenLabs: ${response.statusText} - ${errorBody}`);
        }

        const audioArrayBuffer = await response.arrayBuffer();
        return Buffer.from(audioArrayBuffer);

    }
    catch (error) {
        console.error("Erro no serviço de TTS:", error);
        throw new Error('Falha ao converter texto para áudio.');
    }
}