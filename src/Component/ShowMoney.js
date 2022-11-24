import{useEffect,useState,useRef} from 'react';
import{Link} from 'react-router-dom';


function ShowMoney(){
//   // ▼ 기본 설정으로 만들어둔 코드들

// 01. xml을 json으로 변환해주는 xmlToJson함수 선언
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
///////////////////////////////////////////
const [viewDay, setViewDay] = useState();
const [viewDayF, setViewDayF] = useState() ;
const [moneyList,setMoneyList] = useState([]);
const refDateIn = useRef() ;

  const getMoneyDate = async (d) => {
    let url = `https://apis.data.go.kr/1220000/retrieveTrifFxrtInfo/getRetrieveTrifFxrtInfo?aplyBgnDt=${d}&weekFxrtTpcd=2&serviceKey=fRjAj4dMQ8Rb3Uu5c3MFAz2i8tLzKvPTSPC%2Bb71g%2F7eEpLL9H2IgE%2FbuaO9AU1%2BXyTKrE%2FKlRYn0qeiZB%2B5cmw%3D%3D`;
    try{
      const response = await fetch(url);
      const xmlString = await response.text();
      var XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
      const tempdata = xmlToJson(XmlNode).response.body.items.item;
    }catch(err){
      console.log(err);
    }
  
  }

useEffect(()=>{
  const yesterday = new Date();
  yesterday.setDate(new Date().getDate - 1);
  let d = yesterday.toISOString().substring(0, 10).replaceAll('-','');

  setViewDay(d);

  getMoneyDate(d);
},[]);

useEffect(() => {
  (viewDay && setViewDayF(viewDay.substring(0,4)+'.'+viewDay.substring(4,6)+'.'+viewDay.substring(6,8)))
  
  getMoneyDate(viewDay);
}, [viewDay]) ;

const handleChange = (e) => {
  e.preventDefault();

  setViewDay(refDateIn.current.value.replaceAll('-',''));
}

    // 	// async와 await을 통해 바로 XML을 JSON으로 변환
//     const response = await fetch(reqURL);
//     const xmlString = await response.text();
//     var XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');

//     // 얘가 찐 데이터 ( tempdata )
//     console.log(xmlToJson(XmlNode))
//     const tempdata = xmlToJson(XmlNode).response.body.items.item;
//     console.log(tempdata);
 
    
//     for(let i = 0;i<=57;i++){
//         data.push(tempdata[i]);
//       }
//       console.log('data',data);
//   };

return (
  <>
    <h1>박스오피스 ({viewDayF}일자)</h1> 
    <form>
    <input type="date" name="dateIn" ref={refDateIn} onChange={handleChange}/>
    </form>
    <ul>
    {moneyList}
    </ul>
  </>
);

}

export default ShowMoney;