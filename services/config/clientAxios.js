import axios from 'axios';

let TOKEN = typeof window !== 'undefined'
? window.localStorage.getItem('tokenAPI')
: null; 

const clientAxios = axios.create({
    baseURL: 'https://mmm-diagnostic-api.herokuapp.com',
    headers: {
        'X-Auth-Token': TOKEN
    }
})

clientAxios.interceptors.request.use(async (req) => {
    
    TOKEN = localStorage.getItem('tokenAPI');
    req.headers =  {'X-Auth-Token': TOKEN};
    return req;

}, async (error) =>{
    // Do something with request error
    return Promise.reject(error);
  });


clientAxios.interceptors.response.use(async (response) => {
      /* response success */
      return response;
    },
    async (error) => {
        
      /* validate error token expired */  
      if (error.response.status === 401) {

            /* get copy req failed */
            const { config } = error.response;
           
            localStorage.removeItem("tokenAPI");

            /* request at server api key */
            const res = await axios.get(`/tokenapi`);

            localStorage.setItem('tokenAPI', res.data);

            TOKEN = localStorage.getItem('tokenAPI');

            /* update header token update */
            let reqTokenUpdate =  {...config, headers: {...config.headers,'X-Auth-Token':TOKEN} };

            const response = await axios(reqTokenUpdate);
            return Promise.resolve(response);
      }
      return Promise.reject(error);
    }
  );

export default clientAxios;

