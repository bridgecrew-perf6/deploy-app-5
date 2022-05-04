import { iv , encrypt} from '../utils/encrypt';
import { readFileSession} from '../utils/writeReadFile';
import serverAxios from '../config/serverAxios';


export const getTokenAccesAPI = async () => {
  const { shop , publicKey, privateKey} = readFileSession();

  const shopEncrypt = encrypt(shop, privateKey);
  const ivString = iv.toString('hex');
  const data = { 
      "iv" : ivString,
      "content" : shopEncrypt 
    };

    try {
      const response = await serverAxios({
        method: "POST",
        headers: {
          'X-Access-Token': `${publicKey}`,
          'Content-Type': 'application/json'
        },
        url: '/v1/auth/login',
        data: JSON.stringify(data),
      });
  
      const token = response.data.token; 

      return token;
    } catch (error) {
      console.error(`Error aqui: ${error.message}`);
    }
}