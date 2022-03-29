import axios from "axios";

const API='https://mmm-diagnostic-api.herokuapp.com';


export const saveQuestion = async (data, idQuiz) => {

  const TOKEN = localStorage.getItem('tokenAPI');

  const  response  = await axios({
    method: "POST",
    headers: {
      'X-Auth-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    url: `${API}/v1/question/${idQuiz}/create`,
    data: JSON.stringify(data),

  });
  
  return response;
}