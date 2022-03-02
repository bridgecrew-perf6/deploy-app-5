import React from 'react'
import axios from 'axios'

const tokenSession = async () => {

  const res = await axios.get('https://e570-190-146-238-178.ngrok.io/tokenapi');

  console.log("sera",res.data);
  localStorage.setItem('tokenAPI', res.data);
 
}

export default tokenSession