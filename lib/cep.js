const axios = require('axios');

class CepApi {
  constructor() {
    const api = axios.create({
      baseURL: 'https://brasilapi.com.br/api/cep',
      responseType: 'json',
      timeout: 1000,
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
