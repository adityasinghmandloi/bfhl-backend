const mime = require('mime-validator');

const validateFile = (fileB64) => {
    if (!fileB64) return { file_valid: false };

    const buffer = Buffer.from(fileB64, 'base64');
    const fileType = mime.lookup(buffer);

    if (!fileType) return { file_valid: false };

    return {
        file_valid: true,
        file_mime_type: fileType,
        file_size_kb: (buffer.length / 1024).toFixed(2),
    };
};

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

module.exports = { validateFile, isPrime };
