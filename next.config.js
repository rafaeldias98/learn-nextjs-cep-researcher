const withPlugins = require('next-compose-plugins');
const dotenv = require('dotenv');
const { version } = require('./package.json');

dotenv.config();

const nextConfig = {
  generateBuildId: async () => {
    return version;
  },
  poweredByHeader: false,
  publicRuntimeConfig: {
    TESTS_URL: `${process.env.TESTS_URL}`,
    CEP_API_TIMEOUT: `${process.env.CEP_API_TIMEOUT}`,
  },
};

module.exports = withPlugins([], nextConfig);
