import axios from 'axios';
import { existsSync, mkdirSync, createWriteStream } from 'fs';
import arg from '../commands.js';
import { join, basename } from 'path';

export default  async (url) => {
  const storagePath = arg.storage;
  try {
    if (!existsSync(storagePath)) {
      mkdirSync(storagePath);
    }
    const response = await axios.get(url, { responseType: 'stream' });

    const urlObject = new URL(url);
    const filePath = join(storagePath, new Date().getTime() + basename(urlObject.pathname));
    const writer = createWriteStream(filePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading ${url}: ${error.message}`);
  }
}
