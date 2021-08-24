const {genSalt,hash} = require('bcrypt')
const hashPassword = (password,callback) => {
    genSalt(10,(err,salt)=>{
        hash(password,salt,callback);
    }
    );
};
module.exports = hashPassword;