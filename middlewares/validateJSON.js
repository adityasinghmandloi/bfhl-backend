export const validateJSON = (data) => {
  if (!Array.isArray(data)) {
    return { validJSON: false, jsonError: "Input data must be an array" };
  }
  
  return { validJSON: true };
};
