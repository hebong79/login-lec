"use strict";

const users = {
    id : ["hdw", "김팀장", "공대장"],
    password : ["1234", "1234", "12345"], 
};


const output = {
    home : (req, res)=>{
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) =>{
        const id = req.body.id,
           pass = req.body.password;

        if( users.id.includes(id) ){
            const idx = users.id.indexOf(id);
            if( users.password[idx] === pass) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success : false,
            msg : "로그인에 실패했습니다.",
        });
    },
};


module.exports = {
    output,
    process,
}