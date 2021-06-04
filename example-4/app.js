const jwt = require("jsonwebtoken");

const header = {
    alg: "H256",
    typ: "JWT"
}

const SECRET_KEY = "ggsgfggdhh";

const payload = {
    _id: "43345123dfgs"
};

const token = jwt.sign(payload, SECRET_KEY);

// const decodeToken = jwt.decode(`${token}g`);
// console.log(decodeToken)

try {
    const result = jwt.verify(`${token}g`, SECRET_KEY);
    console.log(result);
    console.log("Добро пожаловать")
}
catch(error){
    console.log("Неверный JWT-токен")
}