const axios = require('axios');

class CepApi {
  constructor() {
    const apiTimeout = parseInt(`${process.env.CEP_API_TIMEOUT}`, 10) || 2000;

    const api = axios.create({
      baseURL: 'https://brasilapi.com.br/api/cep',
      responseType: 'json',
      timeout: apiTimeout,
    });

    this.api = api;
  }

  async getAddressByCep(cep) {
    const requestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    let response;

    try {
      response = await this.api.post(`/v1/${cep}`, requestConfig);
    } catch (error) {
      const errorMessage = `Error sending request to Cep API: ${error.toString()}`;
      console.log(errorMessage);

      return false;
    }

    return response.data;
  }
}

module.exports = CepApi;
