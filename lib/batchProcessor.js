import download from './utils/download.js';
import arg from './commands.js';

export default (urls) => {
  const batchSize = arg.batch ;
  let start = 0;
  let end = Math.min(batchSize, urls.length);
  const process = async (batch) => {
    const promises = batch.map(download);

    try {
      await Promise.all(promises);
      console.log('Batch downloaded successfully.');
    } catch (error) {
      console.error(`Error downloading batch: ${error.message}`);
    }
  }

  while (start < urls.length) {
    const batch = urls.slice(start, end);
    console.log(`Downloading batch (${start + 1}-${end})...`);
    process(batch);

    start = end;
    end = Math.min(end + batchSize, urls.length);
  }
}
