import arg from './commands.js';
import download from './utils/download.js';

export async function batchDownloader(urls) {
  const batchSize = arg.batch;
  let batchQueue = [];

  for (const url of urls) {
    if(batchQueue.length >= batchSize) {
      await Promise.race(batchQueue);
    }
    console.info(`Downloading from ${url}`);

    const downloadAsync = download(url).then(() => {
      batchQueue.splice(batchQueue.indexOf(downloadAsync), 1);
      console.log(`Downloaded  ${url} Successfully`);
    })
    .catch(() => {
      activeTasks.splice(activeTasks.indexOf(downloadAsync), 1);
      console.log(`Error downloading ${url}`);
    });
    batchQueue.push(downloadAsync);
  }
}
