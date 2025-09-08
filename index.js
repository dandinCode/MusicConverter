const fs = require("fs");
const path = require("path");
const util = require("util");
const { exec } = require("child_process");
require("dotenv").config();

const execPromise = util.promisify(exec);

const playlistsDir = process.env.PLAYLISTS_DIR;
if (!playlistsDir) {
  throw new Error("A variável de ambiente PLAYLISTS_DIR não está definida.");
}

async function convertWmaToMp3(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await convertWmaToMp3(filePath); 
    } else if (path.extname(file).toLowerCase() === ".wma") {
      const mp3Path = filePath.replace(/\.wma$/i, ".mp3");

      console.log(`Convertendo: ${filePath} -> ${mp3Path}`);

      try {
        await execPromise(`ffmpeg -y -i "${filePath}" "${mp3Path}"`);
        fs.unlinkSync(filePath); 
        console.log(`- Sucesso: ${mp3Path}`);
      } catch (err) {
        console.error(`- Erro ao converter ${filePath}:`, err);
      }
    }
  }
}

(async () => {
  await convertWmaToMp3(playlistsDir);
  console.log("\n\nConversão finalizada!");
})();
