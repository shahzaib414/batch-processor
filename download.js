const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports =  async (url, storagePath) => {

  try {
    if (!fs.existsSync(storagePath)) {
      fs.mkdirSync(storagePath);
    }
    const response = await axios.get(url, { responseType: 'stream' });

    const urlObject = new URL(url);
    const filePath = path.join(storagePath, path.basename(urlObject.pathname));
    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading ${url}: ${error.message}`);
  }
}
