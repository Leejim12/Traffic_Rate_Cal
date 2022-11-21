import {useState,useEffect,useRef} from 'react';

function MoneyInfo(probs){
  
  // 01. url 데이터 가져와서 myinfo에 저장하기.
  //   -1. moneyinfo : json 데이터
  //   -2. myinfo : key,value로 가져 온 배열
  //   -3. key : 원본 데이터의 키
  //   -4. keys : 내가 지정할 키 명.
    const moneyinfo =probs;
    let myinfo = {};
    const key = ['aplyBgnDt','cntySgn','currSgn','fxrt','mtryUtNm'];
    const keys = {
      'aplyBgnDt':'일자',
      'cntySgn':'사용국가',
      'currSgn':'화폐',
      'fxrt':'환율',
      'mtryUtNm':'상세'
    }

    for(let k of key){
      myinfo[keys[k]] = moneyinfo[k];
    }
    console.log(myinfo);

  // 02. 화면에 출력. (to JSX)
  let lis = [];
  for(let[k,v] of Object.entries(myinfo)){
    lis.push(
      <li key = {myinfo} className = 'infoLi'>
        <span className = 'infoSpan1'>{k}</span>  
        <span className = 'infoSpan2'>{v}</span>
      </li>
    )
  }

   useEffect(()=>{

   },[]);
  
  ///////////////////////////////////////////////////////



    return(
      <>
        <h1> 데이터 연동 Test </h1>
        <div>{lis}</div>
      </>
      
        
    );
}

export default MoneyInfo;
