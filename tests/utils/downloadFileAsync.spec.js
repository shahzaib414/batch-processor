import { existsSync } from 'fs';
import downloadFileAsync from '../../lib/utils/downloadFileAsync.js';
const fs = require('fs');

describe('downloadFileAsync', () => {
  const url = 'https://i.pinimg.com/564x/e5/b3/55/e5b3556a0dc3b5d107c4bb8e077d6b89.jpg';
  const storagePath = `${process.cwd()}/testStorage`;

  beforeAll(async () => {
    await downloadFileAsync(url, storagePath);
  });

  it('should download a file', async () => {
    fs.readdir(storagePath, (_err, files) => {
      expect(files.length).toBe(1);
    });
  });

  afterAll(() => {
    if (existsSync(storagePath)) {
      fs.rmSync(storagePath, { recursive: true, force: true });
    }
  });
});
