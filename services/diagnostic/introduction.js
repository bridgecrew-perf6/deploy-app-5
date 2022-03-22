import axios from "axios";
import { geturlAPI } from "../config/axiosFront";


export const saveIntroduction = async (datas, idQuiz) => {

  const API = await  geturlAPI();

  const TOKEN = localStorage.getItem('tokenAPI');

    console.log(JSON.stringify(datas));

    try {
      const  data  = await axios({
        method: "PUT",
        headers: {
          'X-Auth-Token': TOKEN,
          'Content-Type': 'application/json'
        },
        url: `https://mmm-diagnostic-api.herokuapp.com/v1/quiz/3/introduction`,
        data: JSON.stringify(datas),
      });
      return data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  
}