
import axios from 'axios'

export const tokenSession = async () => {
  const token = localStorage.getItem('tokenAPI');
  if(token) {
    console.log("el token existe");
  }else{
    console.log("el token no existe");
    const res = await axios.get(`/tokenapi`);

    console.log("sera",res.data);
    localStorage.setItem('tokenAPI', res.data);
  }
}

