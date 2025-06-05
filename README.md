<div align="center">

<pre>
████████╗ █████╗ ██████╗ ███████╗
╚══██╔══╝██╔══██╗██╔══██╗██╔════╝
   ██║   ███████║██████╔╝███████╗
   ██║   ██╔══██║██╔══██╗╚════██║
   ██║   ██║  ██║██║  ██║███████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
</pre>

**T.A.R.S. - Tactical Assistance & Reconnaissance Sentry | Interface v3.0**

*Transmission Log: 20250605*

> "Eu tenho uma configuração de discrição, Cooper. E também uma de sinceridade."

</div>

---

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_GPT--4o-412991?style=for-the-badge&logo=openai&logoColor=white)
![ElevenLabs](https://img.shields.io/badge/ElevenLabs_TTS-111111?style=for-the-badge&logo=elevenlabs&logoColor=white)

</div>

## 🛰️ Visualização da Interface Operacional

*Uma demonstração da interface Glassmorphism com o fundo de partículas ativo.*

<img src="https://i.imgur.com/u0iTqF2.png" alt="Demonstração da UI do TARS" width="100%">

## 🚀 Diretivas Principais do Sistema

Este projeto é uma simulação funcional da interface de conversação do robô TARS. As seguintes diretivas foram implementadas e estão 100% operacionais:

* **🧠 IA com Personalidade Avançada:** Utiliza `GPT-4o` com um prompt de sistema dinâmico e *few-shot prompting* para emular com precisão a personalidade, o humor e a honestidade do TARS.
* **🗣️ Síntese de Voz Robótica:** Conecta-se à API da `ElevenLabs` para gerar áudio a partir das respostas de texto, com tratamento de erro resiliente (*Graceful Degradation*) caso o serviço de TTS falhe.
* **👁️ Interface Imersiva (Glassmorphism):** Um frontend visualmente rico com efeito de "vidro", transparência e um fundo de partículas animado (`ts-particles`) para uma experiência de terminal de nave.
* **⚙️ Parâmetros de Comportamento Ajustáveis:** A UI possui sliders para controlar em tempo real os níveis de **Humor** e **Honestidade** do TARS, alterando dinamicamente o comportamento da IA.
* **💾 Memória de Curto Prazo (Contextual):** O sistema retém o contexto das últimas 5 trocas de mensagens, permitindo conversas fluidas e perguntas de acompanhamento.

## 🌌 Arquitetura do Sistema

O sistema é dividido em um monorepositório contendo um backend Node.js e um frontend de página única.

* **`Frontend`**: Uma única página `index.html` construída com **HTML5, CSS3 e JavaScript puro (ES6+)**. Responsável por toda a renderização, manipulação de eventos e comunicação com o backend via `fetch` API.
* **`Backend`**: Um servidor **Node.js + Express** escrito em **TypeScript**. Ele atua como um orquestrador, servindo o frontend e gerenciando a lógica de negócios e as chamadas para as APIs externas.
* **`Serviços de IA`**:
    * **OpenAI Service**: Gerencia a construção dos prompts, o histórico da conversa e a comunicação com o modelo GPT.
    * **TTS Service**: Encapsula a lógica para converter texto em áudio via API da ElevenLabs.

## ⚡ Ativação do Sistema (Setup)

Para inicializar a unidade TARS em seu ambiente local, siga este protocolo:

1.  **Clonagem do Repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd tars-chatbot
    ```
2.  **Instalação de Dependências:**
    ```bash
    npm install
    ```
3.  **Configuração dos Parâmetros de Conexão:**
    Crie um arquivo `.env` na raiz do projeto e insira as chaves de API necessárias.

    ```ini
    # Arquivo .env
    OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
    ELEVENLABS_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    TARS_VOICE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

4.  **Inicialização do Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  **Acesso à Interface:**
    Abra seu navegador e acesse `http://localhost:3000`.

## 🛠️ Parâmetros de Configuração (.env)

| Variável            | Descrição                                          | Exemplo                                |
| ------------------- | -------------------------------------------------- | -------------------------------------- |
| `OPENAI_API_KEY`    | Sua chave secreta da API da OpenAI.                | `sk-xxxxxxxxxxxxxxxxxxx`                 |
| `ELEVENLABS_API_KEY`| Sua chave da API do ElevenLabs.                    | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`       |
| `TARS_VOICE_ID`     | O ID da voz customizada ou escolhida no ElevenLabs. | `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`       |

## 🗺️ Trajetórias Futuras (Próximos Passos)

A unidade TARS está pronta para expansões. As próximas diretivas de desenvolvimento incluem:

* [ ] **Comunicação por Voz (Speech-to-Text):** Implementar a `Web Speech API` para uma interação 100% por voz.
* [ ] **Conexão de Dados Externos:** Utilizar `OpenAI Tools (Function Calling)` para acessar APIs de clima, notícias ou imagens.
* [ ] **Protocolo de Implantação (Deployment):** Publicar a aplicação em um serviço de nuvem como `Vercel` ou `Netlify`.

---
<div align="center">

*Fim da transmissão. Desligando interface de diagnóstico.*

</div>