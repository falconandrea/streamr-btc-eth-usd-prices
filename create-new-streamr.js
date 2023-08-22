// Import dotenv
const dotenv = require("dotenv");
dotenv.config();

// Import the Streamr client
const StreamrClient = require("streamr-client");

// Create async function to create a new stream
const createStream = async () => {
  // Initialize the client with an Ethereum account
  const streamr = new StreamrClient({
    auth: {
      privateKey: process.env.PRIVATE_KEY,
    },
  });

  // Requires MATIC tokens (Polygon blockchain gas token)
  const stream = await streamr.createStream({
    id: "/btc-eth-usd-price",
  });

  console.log(stream.id); // e.g. `0x123.../foo/bar`
};

createStream();
