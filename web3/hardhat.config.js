/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "sepolia",
    networks: {
      hardhart: {
        chainId: 1337,
      },
      ganache: {
        url: "http://127.0.0.1:7545",
        accounts: [
          `7bc522e9ba27f118ad4157771bec290f59ffffe45ee66bb81f137043150bd2`,
        ],
      },
      sepolia: {
        url: "https://rpc.sepolia.dev",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    paths: {
      artifacts: "./src/artifacts",
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
