
import { readFileSession } from './writeReadFile';
// const secretKey = process.env.SECRET_KEY
const crypto = require('crypto');


export const iv = crypto.randomBytes(16)


const getC = (secretKey) => {
  return crypto.createCipheriv('aes-256-ctr', secretKey, iv)
}

export const encrypt = (shop , secretKey) => {

  const ci = getC(secretKey)

 return Buffer.concat([ci.update(shop), ci.final()]).toString('hex')
}




const getD = () => crypto.createDecipheriv('aes-256-ctr', secretKey, iv)

/* que key paso */
 export const decrypt = (str) => {
  const di = getD()

  return Buffer.concat([
    di.update(Buffer.from(str, 'hex')),
    di.final(),
  ]).toString()
}
