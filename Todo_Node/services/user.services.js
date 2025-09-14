const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserServices {
    static async registerUser(email, password ) {
        try {
            const newUser = new userModel({ email, password });
            return await newUser.save();
        }catch(err){
            throw err;
        }
    }



    static async checkUser(email) {
        try {
            return await userModel.findOne({email});
        }catch(err){
            throw err;
        }
    }


    static async generateToken(tokenData, secretkey, jwt_expire) {
        return jwt.sign(tokenData, secretkey, { expiresIn: jwt_expire });
    }

}
module.exports = UserServices;