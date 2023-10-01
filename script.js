const yargs = require('yargs');
const fs = require('fs');
const download = require('./download');

const argv = yargs
.option('file', {
  alias: 'f',
  describe: 'Specify a file path',
  type: 'string',
})
.option('storage', {
  alias: 's',
  describe: 'Specify a local storage path',
  type: 'string',
})
.help()
.argv;

const filePath = argv.file;
const storagePath = argv.storage;

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
  const downloadImagesAsync = urls.map((url) => download(url, storagePath));
  Promise.all(downloadImagesAsync).then(() => {
    console.log('Job is finished');
  });
})
