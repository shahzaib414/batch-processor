import path from 'path';

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export const validateFileExtension = (filePath, allowedExtensions) => {
  const fileExtension = path.extname(filePath).toLowerCase();
  if (!allowedExtensions.includes(fileExtension)) {
    throw new Error(`File extension ${fileExtension} is not supported.`);
  }
  return true;
}

export const parseUrls = (fileContent) => {
  return fileContent.split(' ').filter((url) => isValidUrl(url));
}
