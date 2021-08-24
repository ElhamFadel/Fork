const { sign } = require('jsonwebtoken');
const createToken = (id) =>{
  const token = jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: '1h'});
  return token;
}
module.exports = createToken;