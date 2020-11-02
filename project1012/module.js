/*
Node.js가 전셰계적으로 열풍을 일으킨 이유는
모듈때문이다

모듈이란? 우리가 지금까지 자바스크립트 라이브러리를 ,파일로 저장해 놓은단위

node.js모듈의 특징: 전세계 많은 개발자들이 각자 자신이 개발한
                            모듈을 공유하고 있다..따라서 지금 이 순간에도 
                            새로운 모듈이 계속 추가되고있다.
모듈의 유형
1.내장모듈
    os모듈
    url 모듈: 
    file system 모듈(중요)
2.사용자 정의 모듈
*/

//자바 스크립트와는 달리, 모듈을 가져올 때는 require()함ㅅ수를 이용해야 한다/
// var os = require("os");//이미 내장된 모듈중 os 모듈을 가져오기!!
// //console.log(os,hostname());
// console.log(os,cpus());

//url 모듈: url의 정보를 분석해주는 모듈
// var url = require("url");
// //url을 분석하여 그 결과를 result변수에 담아보자
// var result = url.parse("https://terms.naver.com/search.nhn?query=car");
// console.log("검색어는",result.query);


//로컬상의 파일을 읽어 오거나 쓸수 있는 모듈
var fs =require("fs");
fs.readFile("./data/memo.txt", "utf-8",function(error,data){
    console.log("파일을 모두 읽기 완료했어요!");
    console.log(data);
});