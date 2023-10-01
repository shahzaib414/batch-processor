const arg = require('./arguments')
const fs = require('fs');
const batchProcessor = require('./batchProcessor');

const filePath = arg.file;

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

fs.readFile(filePath, 'utf8', (err, fileContent) => {
  if (err) {
    console.error(err);
    return;
  }
  const urls = fileContent.split(' ').filter((url) => isValidUrl(url));
  if (urls.length === 0) {
    console.log('No URLs found in the file.');
    return;
  }
  batchProcessor(urls)
})
