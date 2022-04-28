
import serverAxios from '../config/serverAxios';
import {saveFileSession} from '../utils/writeReadFile';


export const installExecute = async (shop) => {
    console.log("install...", shop);
    const shopURL = `https://${shop}`;

    const response = await serverAxios.post('/v1/auth/create-account', {"shop": shopURL});

    console.log("test res:", response.data);
  
     await saveFileSession(response);

}





