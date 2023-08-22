// Import dotenv
const dotenv = require("dotenv");
dotenv.config();

// Import the Streamr client
const StreamrClient = require("streamr-client");

const listen = async () => {
  const streamr = new StreamrClient({
    auth: {
      privateKey: process.env.PRIVATE_KEY,
    },
  });

  // Subscribe to a stream of messages
  streamr.subscribe(process.env.STREAMR_URL, (msg) => {
    console.log(msg);
  });
};

listen();
