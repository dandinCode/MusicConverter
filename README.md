# Music Converter

Este projeto foi feito para **converter músicas WMA em MP3**.  
A ideia surgiu a partir de um pendrive cheio de músicas organizadas em **pastas (playlists)**, onde cada pasta contém várias músicas no formato `.wma`.  

Com este script é possível percorrer todas as pastas e converter automaticamente todos os arquivos `.wma` para `.mp3`, mantendo a estrutura de pastas original.  

---

## ⚙️ Tecnologias utilizadas
- **Node.js** (JavaScript)
- **FFmpeg** (para conversão dos áudios)
- **dotenv** (para usar variáveis de ambiente)

---

## 📂 Estrutura esperada

public/
playlists/
Rock/
music1.wma
music2.wma
Pop/
track1.wma
track2.wma

## ▶️ Como rodar o projeto

1. **Clone o repositório**
```bash
   git clone https://github.com/dandinCode/MusicConverter.git
  ```

2. **Instale as dependências**
```bash
  npm install
  ```

3. **Configure o caminho das playlists**
```bash
   PLAYLISTS_DIR=C:/Pendrive/playlists
  ```

4. **Verifique se o FFmpeg está instalado**
```bash
   ffmpeg -version
  ```
Se não estiver instalado, baixe em: https://ffmpeg.org/download.html

5. **Execute o script**
```bash
   node index.js
  ```
## 📝 Observação

O script substitui os arquivos .wma por .mp3 na mesma pasta.
