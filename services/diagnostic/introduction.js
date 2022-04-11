
import clientAxios from "../config/clientAxios";

export const saveIntroductionServer = async (data, idQuiz) => {

      const  response  = await clientAxios.put(`/v1/quiz/${idQuiz}/introduction`, data);
      return response;   
}

export const getIntroductionServer = async (idQuiz) => {

      const  response  = await clientAxios.get(`/v1/quiz/${idQuiz}/introduction`);
      return response;
   
}