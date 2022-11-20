import {useState,useEffect,useRef} from 'react';

function MoneyInfo(probs){
  
  // 01. url 데이터 가져와서 myinfo에 저장하기.
  //   -1. moneyinfo : json 데이터
  //   -2. myinfo : key,value로 가져 온 배열
  //   -3. key : 원본 데이터의 키
  //   -4. keys : 내가 지정할 키 명.
    // const moneyinfo =;
    let myinfo = {};
    const key = [];
    const keys = {}

    for(let k of key){
      myinfo[keys[k]] = moneyinfo[k];
    }

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
  
  ///////////////////////////////////////////////////////
  // 下 기본 설정으로 만들어둔 코드들
  const getXMLfromAPI = async () => {
    
    // 테스트를 위해, 일단은 날짜 데이터 고정으로 사용
    const reqURL = 'https://apis.data.go.kr/1220000/retrieveTrifFxrtInfo/getRetrieveTrifFxrtInfo?aplyBgnDt=20221113&weekFxrtTpcd=2&serviceKey=fRjAj4dMQ8Rb3Uu5c3MFAz2i8tLzKvPTSPC%2Bb71g%2F7eEpLL9H2IgE%2FbuaO9AU1%2BXyTKrE%2FKlRYn0qeiZB%2B5cmw%3D%3D';

	// async와 await을 통해 바로 XML을 JSON으로 변환
    const response = await fetch(reqURL);
    const xmlString = await response.text();
    var XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
    console.log(xmlToJson(XmlNode));
  };

  //함수호출
  getXMLfromAPI();

  // xml을 json으로 변환해주는 xmlToJson함수 선언
  function xmlToJson(xml) {
    // Create the return object
    var obj = {};
  
    if (xml.nodeType == 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      // text
      obj = xml.nodeValue;
    }
    // do children
    // If all text nodes inside, get concatenated text from them.
    var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
      return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
        return text + node.nodeValue;
      }, "");
    } else if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }


    return(
        <H1> 데이터 연동 Test </H1>
    );
}


// Xml을  Json으로 변환