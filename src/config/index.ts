import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3030,
  openaiApiKey: process.env.OPENAI_API_KEY!,
  elevenLabsApiKey: process.env.ELEVENLABS_API_KEY!,
  tarsVoiceId: process.env.TARS_VOICE_ID!
};

if (!config.openaiApiKey || !config.elevenLabsApiKey) {
    throw new Error('As chaves de API da OpenAI e/ou ElevenLabs não estão definidas no arquivo .env');
}