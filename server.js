const express = require("express");
const app = express();

// Import dotenv
const dotenv = require("dotenv");
dotenv.config();

// Import the Streamr client
const StreamrClient = require("streamr-client");

const getDataFromAPI = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd"
  );
  const data = await response.json();
  return data;
};

const publishToStreamr = async (msg) => {
  // Initialize the client with an Ethereum account
  const streamr = new StreamrClient({
    auth: {
      privateKey: process.env.PRIVATE_KEY,
    },
  });

  try {
    // Get streamr
    const stream = await streamr.getStream(process.env.STREAMR_URL);

    // Publish message
    const result = await stream.publish(msg);

    console.log("Message published successfully:", result);
  } catch (error) {
    console.error("Error publishing message:", error);
  }
};

const main = async () => {
  try {
    // Get data from API
    const data = await getDataFromAPI();

    // Add timestamp
    data.timestamp = Date.now();

    // Send data to Streamr
    await publishToStreamr(data);

    console.log("Script completed successfully");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// Whitelist ips
const allowedIPs = ["127.0.0.1", "192.168.1.1"];

app.get("/api/update-streamr", async (req, res) => {
  const clientIP = req.ip;

  console.log("Check ip: ", clientIP);

  // Check ip is allowed
  if (allowedIPs.includes(clientIP)) {
    await main();

    // Confirm reply message
    res.send("Script update-streamr executed.");
  } else {
    // Block if you have no access
    res.status(403).send("Access denied.");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
