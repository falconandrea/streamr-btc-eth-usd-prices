# Streamr Open Data Challenge

## Overview

This project is part of my participation in the [LearnWeb3DAO Streamr Open Data Challenge](https://learnweb3.io/bounties/open-data-challenge-bounty/).

The goal of the challenge is creating a data stream on the decentralized Streamr Network and publish it on [The Hub](https://streamr.network/hub/projects).

## About Streamr

[Streamr](https://streamr.network/) is a fully decentralised and scalable protocol for many to many data pipelines, network analytics and instant messaging.

## What I created

For this challenge, I will create a Streamr data stream that delivers real-time price updates for Ethereum and Bitcoin in USD. The data will be sourced from [CoinGecko API](https://www.coingecko.com/en/api).
The stream will be set up to broadcast data at regular intervals, providing an up-to-date feed of the cryptocurrency prices.

### Streamr Stream Specifications

- Stream Name: BTC-ETH-USD-Price
- Streamr URL: `0x163b33c875cd58acaeb557fdc00e30e17f826730/btc-eth-usd-price`
- Frequency: Updated every 5 minutes
- Data Format: JSON
- Data Structure: `{ "bitcoin": {"usd":26004}, "ethereum": {"usd":1656.13}, "timestamp": 1692719868 }`

### Getting Started

To use this project, follow these steps:

1. Clone this repository to your local machine.
2. Set up your development environment by creating a `.env` file.
3. Run `npm install` to install required packages and dependencies.

### Files

1. **create-new-streamr.js**

This script creates a new stream on the Streamr Network and print the corresponding URL. This action requires MATIC Tokens for processing.

To run the script, execute the following command:

```bash
node create-new-streamr.js
```

2. Update streamr - `update-streamr.js`

This script retrieves data from the specified API and sends it to the Streamr stream.

To run the script, execute the following command:

```bash
node update-streamr.js
```

Remember to adjust any placeholders or details in the instructions to match your actual project setup.

## Contribute

If you would like to contribute to this project, feel free to submit a pull request. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
