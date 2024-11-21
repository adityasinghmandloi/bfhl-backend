const { validateFile, extractData, isPrime } = require('../utils/helpers');

const handleGetRequest = (req, res) => {
    return res.status(200).json({ operation_code: 1 });
};

const handlePostRequest = (req, res) => {
    try {
        const { data, file_b64 } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: 'Invalid data format' });
        }

        const numbers = [];
        const alphabets = [];
        let highestLowercase = '';
        let primeFound = false;

        data.forEach((item) => {
            if (!isNaN(item)) numbers.push(item);
            else if (/^[a-zA-Z]$/.test(item)) {
                alphabets.push(item);
                if (/[a-z]/.test(item) && item > highestLowercase) highestLowercase = item;
            }
        });

        primeFound = numbers.some((num) => isPrime(parseInt(num, 10)));

        const fileInfo = validateFile(file_b64);

        return res.status(200).json({
            is_success: true,
            user_id: 'john_doe_17091999',
            email: 'john@xyz.com',
            roll_number: 'ABCD123',
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
            is_prime_found: primeFound,
            ...fileInfo,
        });
    } catch (err) {
        return res.status(500).json({ is_success: false, error: err.message });
    }
};

module.exports = { handleGetRequest, handlePostRequest };
