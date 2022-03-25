import axios from "axios";
import { geturlAPI } from "../config/axiosFront";

// const API = await  geturlAPI();

const API='https://mmm-diagnostic-api.herokuapp.com';

export const saveIntroduction = async (data, idQuiz) => {

  const TOKEN = localStorage.getItem('tokenAPI');

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
    
}

export const getIntroduction = async (idQuiz) => {

  const TOKEN = localStorage.getItem('tokenAPI');

      const  response  = await axios({
        method: "GET",
        headers: {
          'X-Auth-Token': TOKEN,
          'Content-Type': 'application/json'
        },
        url: `${API}/v1/quiz/${idQuiz}/introduction`,
      });
      return response;
   
}