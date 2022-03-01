import clientAxios from '../config/axios';


export const installExecute = async (shop) => {
  console.log("entra al script", shop);
  
    const response = await clientAxios.post('/v1/auth/create-account', {"shop": `https://${shop}`});
  

    console.log("data:",response);

  
}



// const secretKey = process.env.SECRET_KEY
const crypto = require('crypto');

const secretKey = process.env.SECRET_KEY;

const iv = crypto.randomBytes(16)

const getC = () => crypto.createCipheriv('aes-256-ctr', secretKey, iv)

const getD = () => crypto.createDecipheriv('aes-256-ctr', secretKey, iv)


/* que key paso */
 const encrypt = (str) => {
  const ci = getC()

  return Buffer.concat([ci.update(str), ci.final()]).toString('hex')
}


/* que key paso */
 const decrypt = (str) => {
  const di = getD()

  return Buffer.concat([
    di.update(Buffer.from(str, 'hex')),
    di.final(),
  ]).toString()
}

console.log(decrypt('abcdefghtjk'));
console.log(encrypt('987456321'));



/* 
const secretKey = Buffer.from('xNRxA48aNYd33PXaODSutRNFyCu4cAe/InKT/Rx+bw0=', 'base64');
const iv = Buffer.from('81dFxOpX7BPG1UpZQPcS6w==', 'base64');

const getC = () => crypto.createCipheriv('aes-256-ctr', secretKey, iv)

const getD = () => crypto.createDecipheriv('aes-256-ctr', secretKey, iv)



 const encrypt = (str) => {
  const ci = getC()

  return Buffer.concat([ci.update(str), ci.final()]).toString('hex')
}


 const decrypt = (str) => {
  const di = getD()

  return Buffer.concat([
    di.update(Buffer.from(str, 'hex')),
    di.final(),
  ]).toString()
}

console.log(decrypt('partnerId=1&operationId=30215&clientId=CDX12345&timestamp=1545735181'));
console.log(encrypt('hxdBZWB4eNn0lstyQU3cIX3WPj4ZLZu-C8qD02QEex8ahvMSMagFJnAGr2C16qMGsOLIcqypO8NX4Tn65DCrXGKrEL5i75tj6WoHGyWAzs0')); */
