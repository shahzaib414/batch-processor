import { readFile } from 'fs';
import arg from '../lib/commands.js';
import batchProcessor from '../lib/batchProcessor.js';
import { parseUrls, validateFileExtension } from '../lib/utils/helper.js';

export default (() => {
  if (!arg.file || !arg.storage) {
    throw new Error('Please specify a file path and a local storage path. see Help --help');
  }
  const filePath = arg.file;

  if(validateFileExtension(filePath, ['.txt'])) {
    readFile(filePath, 'utf8', (err, fileContent) => {
      if (err) {
        throw new Error(`Error reading file: ${err.message}`);
      }
      const urls = parseUrls(fileContent);
      if (urls.length === 0) {
        console.log('No URLs found in the file.');
        return;
      }
      batchProcessor(urls)
    })
  }
})()
