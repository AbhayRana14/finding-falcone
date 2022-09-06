const FALCONE_APP_URL = process.env.REACT_APP_FALCONE;
const URLS = {
  // React API's
  APP: {
    FALCONE: {
      GET_TOKEN: `${FALCONE_APP_URL}/token`,
      GET_PLANETS: `${FALCONE_APP_URL}/planets`,
      FIND_QUEEN: `${FALCONE_APP_URL}/find`,
      GET_VEHICLES: `${FALCONE_APP_URL}/vehicles`,
    },
  },
};

export default URLS;
