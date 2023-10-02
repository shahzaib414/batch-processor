import arg from './commands.js';
import download from './utils/download.js';

export async function process(batch) {
  const promises = batch.map(download);

  try {
    await Promise.all(promises);
    console.log('Batch downloaded successfully.');
  } catch (error) {
    throw new Error(`Error downloading batch: ${error.message}`);
  }
}

export function batchDownloader(urls) {
  const batchSize = arg.batch;
  let start = 0;
  let end = Math.min(batchSize, urls.length);

  while (start < urls.length) {
    const batch = urls.slice(start, end);
    console.log(`Downloading batch (${start + 1}-${end})...`);
    process(batch);

    start = end;
    end = Math.min(end + batchSize, urls.length);
  }
}
