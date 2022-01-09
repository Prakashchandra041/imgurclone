const Admin = require("../model/admin.model");
//-------------------------
var jwt = require("jsonwebtoken");

let newtoken = (user) => {
    return jwt.sign({user}, "Prakash");
} 
//--------------------------------


async function register(req, res) { 
    let user;
    try {
        user = await Admin.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: "User already exist" });
    }
    //-----------------------------------------
    user = await Admin.create(req.body);
    let token = newtoken(user);
        return res.status(201).send({ user, token });
    }
    //--------------------------------------
    catch (error) {
        return res.status(500).send({ message: "Something went wrong" });
    }
    
    //-----------------------------------------------
}

async function login(req, res) {
    try {
     let user = await Admin.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ message: "Kindly check email or password" });

    let match = user.checkPassword(req.body.password);
    if (!match) {
        return res.status(400).send({ message: "Kindly check email or password" });
    }

    let token = newtoken(user);
    return res.status(201).send({ user, token });   
    }
    
    catch (error) {
        return res.status(500).send({ message: "Something went wrong" });
    }
     
}


module.exports = {
    register,
    login
}