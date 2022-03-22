import axios from 'axios';

export const geturlAPI = async () => {
  const URL = await axios.get(`/geturl`); 
  return URL.data;
}

