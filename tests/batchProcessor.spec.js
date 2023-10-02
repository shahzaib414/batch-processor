import download from '../lib/utils/download';
import *  as batchProcessor from '../lib/batchProcessor';

jest.mock('../lib/utils/download');

describe('Batch Processor', () => {
  it('should download batch', async () => {
    const spyFunc =  jest.spyOn(batchProcessor, 'process')
    const urls = ['https://www.google.com', 'https://www.facebook.com'];
    batchProcessor.batchDownloader(urls);
    expect(download).toHaveBeenCalledTimes(2);
  })
})
