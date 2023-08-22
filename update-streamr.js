// Import dotenv
const dotenv = require("dotenv");
dotenv.config();

// Import the Streamr client
const StreamrClient = require("streamr-client");

/**
 * Retrieves data from an API by making an HTTP request.
 *
 * @return {Promise<Object>} The data returned by the API.
 */
const getDataFromAPI = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd"
  );
  const data = await response.json();
  return data;
};

/**
 * Publishes a message to the Streamr platform.
 *
 * @param {Object} msg - The message to be published.
 * @return {Promise} A promise that resolves when the message is successfully published.
 */
const publishToStreamr = async (msg) => {
  // Initialize the client with an Ethereum account
  const streamr = new StreamrClient({
    auth: {
      privateKey: process.env.PRIVATE_KEY,
    },
  });

  // Get streamr
  const stream = await streamr.getStream(process.env.STREAMR_URL);

  // Publish message
  const result = await stream.publish(msg);
};

const main = async () => {
  // Get data from API
  const data = await getDataFromAPI();

  // Add timestamp
  data.timestamp = Date.now();

  // Send data to Streamr
  await publishToStreamr(data);
};

main();
