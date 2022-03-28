
import clientAxios from '../config/axios';
import {saveSesionStore , readFileSession} from '../utils/writeReadFile';
import { iv , encrypt} from '../utils/encrypt';


export const installExecute = async (shop) => {
    console.log("install...");
    const shopURL = `https://${shop}`;

    const response = await clientAxios.post('/v1/auth/create-account', {"shop": shopURL});
  
    const res =  saveSesionStore(response);

  
}


export const getTokenAccesAPI = async () => {
  const { shop , publicKey, privateKey} = readFileSession();

  const shopEncrypt = encrypt(shop, privateKey);
  const ivString = iv.toString('hex');
  const data = { 
      "iv" : ivString,
      "content" : shopEncrypt 
    };


    try {
      const response = await clientAxios({
        method: "POST",
        headers: {
          'X-Access-Token': `${publicKey}`,
          'Content-Type': 'application/json'
        },
        url: '/v1/auth/login',
        data: JSON.stringify(data),
      });
  
      const token = response.data.token; 

      console.log("antes", token);

      return token;
    } catch (error) {
      console.error(`Error aqui: ${error.message}`);
    }
}


