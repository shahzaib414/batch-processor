import arg from './commands.js';
import downloadFileAsync from './utils/downloadFileAsync.js';

export async function batchDownloader(urls) {
  const batchSize = arg.batch;
  const storagePath = arg.storage;
  let batchQueue = [];

  for (const url of urls) {
    if(batchQueue.length >= batchSize) {
      await Promise.race(batchQueue);
    }
    console.info(`Downloading from ${url}`);

    const downloadAsync = downloadFileAsync(url, storagePath).then(() => {
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
