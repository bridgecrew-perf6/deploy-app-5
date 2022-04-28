import clientAxios from "../config/clientAxios";

export const saveQuestionServer = async (data, idQuiz) => {

  const URL = `/v1/question/${idQuiz}/create`;
  const  response  = await clientAxios.post(URL,data);

  return response;
}

export const getQuestionListServer = async (idQuiz) => {

  const URL = `/v1/question/${idQuiz}/list`;
  const response = await clientAxios.get(URL)
  
  /* const rs = await Promise.all( response.data.items.map(async ({id}) => {
    return await getQuestionOptionListServer( idQuiz, id);
  })); */
  return response;
}

export const getQuestionOptionListServer = async ( idQuiz, id) => {

  const URL = `/v1/question/${idQuiz}/detail/${id}`;
  const response = await clientAxios.get(URL)

  return response.data;
}

export const deleteQuestionServer = async (idQuiz, id) => {

  const URL = `/v1/question/${idQuiz}/delete/${id}`;
  const response = await clientAxios.delete(URL)

  return response;
}

export const deleteOptionQuestionServer = async (idQuiz, id) => {

  const URL = `/v1/choice/${idQuiz}/delete/${id}`;
  const response = await clientAxios.delete(URL)

  return response;
}


export const saveOrderQuestionServer = async (idQuiz , order) => {

  const URL = `/v1/question/${idQuiz}/order`;
  const data = {"order": order};
  const response = await clientAxios.put(URL, data)

  return response;
}
