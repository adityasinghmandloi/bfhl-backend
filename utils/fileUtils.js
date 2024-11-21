import fileType from 'file-type';

export const validateFile = async (file_b64) => {
  const buffer = Buffer.from(file_b64, 'base64');
  const file = await fileType.fromBuffer(buffer);
  
  if (!file) {
    return { valid: false };
  }

  const fileSize = buffer.length / 1024;  // size in KB
  return { valid: true, mimeType: file.mime, sizeKB: Math.round(fileSize) };
};
