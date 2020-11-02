/*
ejs를 이용해보자

ejs란?
-오직 node.js 서버측에서만 해석,및 실행될 수 있는 파일
-js 의 문법 사용이 가능 (if,for...변수선언)
--다른 서버측 스크립트 언어인(php,jsp,asp와 같은 목적..)
*/
var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

var server=http.createServer(function(request,response){
    fs.readFile("./list.ejs","utf-8",function(error,data){
        if(error){
            console.log("읽기실패",error);
        }else{
            response.writeHead(200,{"Cnotent-Type":"text/html;charset=utf-8"});
            response.end(ejs.render(data));//ejs 파일의 <%%>코드 영역을 서버에서
                                                        //수행시킨후 응답정보를 구성하여 클라에게 보낸다
        }
    });
});

server.listen(7979,function(){
    console.log("7979포트로 서버 정상가동중 ..");
});


