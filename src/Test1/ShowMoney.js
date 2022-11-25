import{useEffect,useState,useRef} from 'react';
import{Link} from 'react-router-dom';


function ShowMoney(){
/////// ▼ 기본 설정으로 만들어둔 코드들
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

  const getMoneyData = async (d) => {
    let url = `https://apis.data.go.kr/1220000/retrieveTrifFxrtInfo/getRetrieveTrifFxrtInfo?aplyBgnDt=${d}&weekFxrtTpcd=2&serviceKey=fRjAj4dMQ8Rb3Uu5c3MFAz2i8tLzKvPTSPC%2Bb71g%2F7eEpLL9H2IgE%2FbuaO9AU1%2BXyTKrE%2FKlRYn0qeiZB%2B5cmw%3D%3D`;
    console.log('d',d);
    console.log(url);
    try{
      const response = await fetch(url);
      const xmlString = await response.text();
      var XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
      let dailyMoneyList = xmlToJson(XmlNode).response.body.items.item;
      setMoneyList(
        dailyMoneyList.map((item)=>
        <div key = {item}>
          <span>[{item.currSgn}]</span>
          <span> {item.fxrt}원</span>
          <span> {item.mtryUtNm}</span>
        </div>
        )
      )
    }catch(err){
      console.log(err);
    }
  
  }

useEffect(()=>{
  const today = new Date();
  today.setDate(new Date().getDate()-1);
  let d = today.toISOString().substring(0,10).replaceAll('-',''); //현재날짜(20221125)
  setViewDay(d);getMoneyData(d);
},[]);

useEffect(() => {
  (viewDay && setViewDayF(viewDay.substring(0,4)+'.'+viewDay.substring(4,6)+'.'+viewDay.substring(6,8)))
  getMoneyData(viewDay);
}, [viewDay]) ;

const handleChange = (e) => {
  e.preventDefault();
  setViewDay(refDateIn.current.value.replaceAll('-',''));
}



return (
  <>
    <h1>환율 데이터 ({viewDayF}일자)</h1> 
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