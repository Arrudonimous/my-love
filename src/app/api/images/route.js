// src/app/api/images/route.js
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDir = path.join(process.cwd(), 'public/images'); // Acesso ao diretório de imagens

  try {
    // Lê o conteúdo do diretório
    const files = await fs.promises.readdir(imagesDir);
    // Filtra e formata os caminhos das imagens
    const imagePaths = files
      .filter(file => /\.(jpg|jpeg|png|gif|svg)$/i.test(file)) // Filtrando extensões de imagem
      .map(file => `/images/${file}`); // Formatando os caminhos

    return new Response(JSON.stringify(imagePaths), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Error reading images directory:', err); // Log do erro
    return new Response(JSON.stringify({ error: 'Failed to read images directory' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
