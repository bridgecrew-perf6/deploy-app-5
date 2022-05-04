import clientAxios from "../config/clientAxios";


export const saveSectionServer = async (data, idQuiz, idSection) => {

  const section_data = {...data, content: JSON.stringify(data.content)} 

  const URL = `/v1/result/${idQuiz}/set/${idSection}`;
  const  response  = await clientAxios.put(URL, section_data);

  return response;
}

export const getSectionListServer = async (idQuiz) => {

  const URL = `/v1/result/${idQuiz}/list`
  const response = await clientAxios.get(URL);

  return response;

}