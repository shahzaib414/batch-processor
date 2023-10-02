 import { validateFileExtension, isValidUrl, parseUrls } from '../../lib/utils/helper'

describe('Utils', () => {
  it('should validate file extension', () => {
    const filePath = 'test.txt';
    const validExtensions = ['.txt'];
    expect(validateFileExtension(filePath, validExtensions)).toBe(true);
  })

  it('should throw error if file extension is not supported', () => {
    const filePath = 'test.txt';
    const validExtensions = ['.pdf'];
    expect(() => validateFileExtension(filePath, validExtensions)).toThrowError('File extension .txt is not supported.');
  })

  it('should validate url', () => {
    const validUrl = 'https://www.google.com';
    expect(isValidUrl(validUrl)).toBe(true);
    const invalidUrl = 'www.google.com';
    expect(isValidUrl(invalidUrl)).toBe(false);
  })

  it('should parse urls', () => {
    const fileContent = 'https://www.google.com https://www.facebook.com';
    expect(parseUrls(fileContent)).toEqual(['https://www.google.com', 'https://www.facebook.com']);
  })
})
