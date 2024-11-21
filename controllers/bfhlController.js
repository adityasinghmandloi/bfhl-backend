// In your backend controller
import { validateJSON } from './middlewares/validateJSON.js';

export const processRequest = (req, res) => {
  // Extract data and category from the request body
  const { data, category } = req.body;

  // Log the received data for debugging
  console.log('Received data:', data);
  console.log('Received category:', category);

  // Validate the structure of data
  const validationResult = validateJSON(data);

  if (!validationResult.validJSON) {
    // If validation fails, return an error
    return res.status(400).json({ error: validationResult.jsonError });
  }

  // Assuming you want to filter based on category, check for matching logic
  const filteredData = data.filter(item => item === category); // Example: filter based on category

  // If no matching data found, return a message
  if (filteredData.length === 0) {
    return res.status(200).json({ message: 'No matching data found for the selected category.' });
  }

  // Send the filtered data as the response
  res.json({ data: filteredData });
};
