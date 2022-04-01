import axios from "axios";

const API='https://mmm-diagnostic-api.herokuapp.com';


export const saveQuestionServer = async (data, idQuiz) => {

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

  const rs = await getQuestionOptionListServer( idQuiz, response.data.id);
  
  return rs;
}

export const getQuestionListServer = async (idQuiz) => {

  const TOKEN = localStorage.getItem('tokenAPI');

  const response = await axios({
    method: "GET",
    headers: {
      'X-Auth-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    url: `${API}/v1/question/${idQuiz}/list`,
  })
  
  /* const rs = await Promise.all( response.data.items.map(async ({id}) => {
    return await getQuestionOptionListServer( idQuiz, id);
  })); */
  
  return response;
}

export const getQuestionOptionListServer = async ( idQuiz, id) => {

  const TOKEN = localStorage.getItem('tokenAPI');

    const response = await axios({
      method: "GET",
      headers: {
        'X-Auth-Token': TOKEN,
        'Content-Type': 'application/json'
      },
      url: `${API}/v1/question/${idQuiz}/detail/${id}`,
    })
  
    return response.data;

}

export const deleteQuestionServer = async (idQuiz, id) => {

  const TOKEN = localStorage.getItem('tokenAPI');

  const response = await axios({
    method: "DELETE",
    headers: {
      'X-Auth-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    url: `${API}/v1/question/${idQuiz}/delete/${id}`,
  })

  return response;
}

export const deleteOptionQuestionServer = async (idQuiz, id) => {

  const TOKEN = localStorage.getItem('tokenAPI');

  const response = await axios({
    method: 'DELETE',
    headers:{
      'X-Auth-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    url: `${API}/v1/choice/${idQuiz}/delete/${id}`
  })

  return response;

}


export const saveOrderQuestionServer = async (idQuiz , order) => {
  const TOKEN = localStorage.getItem('tokenAPI');

  const response = await axios({
    method: 'PUT',
    headers:{
      'X-Auth-Token': TOKEN,
      'Content-Type': 'application/json'
    },
    url: `${API}/v1/question/${idQuiz}/order`,
    data: {"order": order}
  })

  return response;
}
