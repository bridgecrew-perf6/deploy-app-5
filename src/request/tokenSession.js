import React from 'react'
import axios from 'axios'

const tokenSession = async () => {

  const res = await axios.get('https://565c-181-235-118-46.ngrok.io/tokenapi');

  localStorage.setItem('tokenAPI', res.data);
  console.log("sera",res.data);
 
}

export default tokenSession