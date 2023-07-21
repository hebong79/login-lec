
// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

//const PORT = 3000;

//앱셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));  // __dirname -> app.js가 있는 현재디렉토리

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home);   // use -> 미들웨어를 등록하는 함수


module.exports = app;





// const http = require("http")
// const app = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

//     if( req.url == "/" ) {
//         res.end("여기는 루트입니다.");
//     }else if(req.url == "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, ()=>{
//     console.log("http로 가동된 서버");
// })