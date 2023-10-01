import { readFile } from 'fs';
import arg from '../lib/commands';
import batchProcessor from '../lib/batchProcessor';

export default (() => {
  const filePath = arg.file;

readFile(filePath, 'utf8', (err, fileContent) => {
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
})()
