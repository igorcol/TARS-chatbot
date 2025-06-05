import express from 'express';
import path from 'path';
import chatRoutes from './api/routes/chat.routes';
import { config } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Servir arquivos estáticos (nosso frontend)
app.use(express.static(path.join(process.cwd(), 'public')));

// Definir rotas da API sob o prefixo /api
app.use('/api', chatRoutes);

// Iniciar o servidor
app.listen(config.port, () => {
  console.log(`🤖 Servidor do TARS rodando em http://localhost:${config.port}`);
  console.log(`📂 Frontend servido em http://localhost:${config.port}/index.html`);
});