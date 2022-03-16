
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


  const response = await clientAxios.post('/v1/auth/login', data ,{
    headers: {
      'X-Access-Token': `${publicKey}`,
      "User-Agent": "axios 0.21.1"
    }
    
  });

  const token = response.data.token; 
  console.log("antes", token);

  return token;
}


