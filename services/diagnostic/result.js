import axios from "axios";

const API='https://mmm-diagnostic-api.herokuapp.com';


export const saveSectionServer = async (data, idQuiz, idSection) => {

  const TOKEN = localStorage.getItem('tokenAPI');

  const section_data = {...data, content: JSON.stringify(data.content)} 

  console.log("despues",data);

  const  response  = await axios({
    method: "PUT",
    headers: {
      'X-Auth-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    url: `${API}/v1/result/${idQuiz}/set/${idSection}`,
    data: JSON.stringify(section_data),

  });

  return response;
}

export const getSectionListServer = async (idQuiz) => {

  const TOKEN = localStorage.getItem('tokenAPI');

  const response = await axios({
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    url: `${API}/v1/result/${idQuiz}/list`
  });

  return response;

}