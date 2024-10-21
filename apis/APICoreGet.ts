export const apiCore = async (
  endpoint: string,
  method: string = "GET"
) => {
  const data = JSON.stringify({
    jsonrpc: "2.0",
   
  });
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response?.ok) {
        throw new Error("Network response was not ok");
      }
      return response?.json(); // Convert response to JSON
    })
    .then((responseData) => {
      return responseData; // Return the JSON data
    })
    .catch((error) => {
      console.log(error.message);
      // return error;
    });
};