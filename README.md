# Backend API for BFHL Challenge

This project is a backend API for the BFHL challenge, built using Node.js and Express. It provides two main endpoints: a `POST` endpoint to process data and a `GET` endpoint to return a hardcoded response.

## Endpoints

### POST /bfhl

**Request**:
The `POST` method accepts a JSON body containing:
- `data`: An array of values (numbers and/or alphabets).
- `file_b64`: A Base64-encoded string representing a file (optional).

**Response**:
The response includes:
- `is_success`: A boolean indicating if the operation was successful.
- `user_id`: A string representing the user's ID in the format `fullname_ddmmyyyy`.
- `email`: The user's email address.
- `roll_number`: The user's roll number.
- `numbers`: An array containing all numbers found in the input.
- `alphabets`: An array containing all alphabets found in the input.
- `highest_lowercase_alphabet`: An array containing the highest lowercase alphabet found in the input (if any).
- `is_prime_found`: A boolean indicating if a prime number was found in the input.
- `file_valid`: A boolean indicating the validity of the file (if provided).
- `file_mime_type`: The MIME type of the file (if provided).
- `file_size_kb`: The size of the file in kilobytes (if provided).


