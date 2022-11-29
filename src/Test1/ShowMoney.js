import{useEffect,useState,useRef} from 'react';
import{Link} from 'react-router-dom';
import ExcRate from '../Component/Frame/ExcRate';

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
        <tr key = {item} style={{border:'1px solid rgba(0,0,0,0.5)'}}>
          <td >{item.currSgn}</td>
          <td> {item.fxrt}원</td>
          <td> {item.mtryUtNm}</td>
        </tr>
        
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
    <div className='l&R'
      style={{
        float:'left',
        width:'1680px',
        border:'1px solid rgba(0,0,0,0.5)',
        height:'1600px'
      }}>
    <div className='left' 
      style={{
        alignItems: 'center',
        width:'550px',
        position:'static'}}>
    <form>
    <input className='calender' type="date" name="dateIn" ref={refDateIn} onChange={handleChange}
      style={{alignItems: 'center',
        marginLeft:'40px',
        width:'300px',
        position:'static',
        textAlign: 'center',
        fontWeight:'bold'}}/>
    </form>
    <div className='Table' style={{float:'left'}}>
    <h2 style={{textAlign:'center',margin:'0px'}}>상세 데이터</h2>
    <table className='MoneyTable' style={{
      backgroundColor:"#F4F4F4",
      border:'1px solid rgba(0,0,0,0.05)',
      marginLeft:'40px',
      width:'300px',
      position:'static',
      }}>
      
      <tr style={{fontWeight:'bold'}}><td>약자</td><td>돈</td><td>화폐</td></tr>
      {moneyList}
    </table>
    </div>
    </div>
    <div className='right' style={{width:'1000px',position:'absolute ',left:'350px',top:'43px'}}>
      <ExcRate/>
    </div>
    </div>
  </>
);

}

export default ShowMoney;