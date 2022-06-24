const hello = ()=> 'hello'

document.createElement


//자바스크립트로 되어있는 API 모듈 등을 갖어올때는 정의파일(타입정의해놓은)이 존재해야한다 .

//import {init,exit} from "myPack"; // 정의파일을 통해 myPack.js파일의 함수를 사용 
import {init,exit} from "./myPack";   // myPack.js 파일을 갖어와 타입스크립트가 추론해서 사용
init({url:'df'})
exit(2)