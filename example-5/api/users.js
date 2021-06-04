const express = require("express");
const passport = require("passport")
const {users: ctrl} = require("../controllers");

const router = express.Router();

const auth = (req, res, next)=> {
    passport.authenticate("jwt", {session: false}, (err, user)=> {
        if(!user || err){
            return res.status(401).json({
                status: "error",
                code: 401,
                message: "You need authorization"
            })
        }
        req.user = user;
        next();
    })
    // const {Authorization} = req.headers;
    // if(Authorization && Authorization.includes("Bearer ")){
    //     const [, token] = Authorization.split(" ");
    //     jwt.verify()
    // }
}

router.get("/orders", auth, ()=> {
    const orders = await Order.find({userId: req.user._id});
});

router.post("/orders", auth, async (req, res, next)=>{
    

})

router.get("/profile", auth, (req, res, next)=> {
    const {email, name} = req.user;
})
