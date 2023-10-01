const download = require('./download');
const arg = require('./arguments')

module.exports = (urls) => {
  const batchSize = arg['batch-size'] || 10;
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