import axios from "axios";
import { geturlAPI } from "../config/axiosFront";


export const saveIntroduction = async (data, idQuiz) => {

  const API = await  geturlAPI();

  const TOKEN = localStorage.getItem('tokenAPI');

    try {
      const  response  = await axios({
        method: "PUT",
        headers: {
          'X-Auth-Token': TOKEN,
          'Content-Type': 'application/json'
        },
        url: `${API}/v1/quiz/${idQuiz}/introduction`,
        data: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  
}

export const getIntroduction = async (idQuiz) => {
  const API = await  geturlAPI();
  const TOKEN = localStorage.getItem('tokenAPI');

    try {
      const  response  = await axios({
        method: "GET",
        headers: {
          'X-Auth-Token': TOKEN,
          'Content-Type': 'application/json'
        },
        url: `${API}/v1/quiz/${idQuiz}/introduction`,
      });
      return response;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } 
}