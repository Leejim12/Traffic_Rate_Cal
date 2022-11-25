import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import qs from 'query-string';
import MoneyInfo from './MoneyInfo';


export default function MoneyView() {
  const loc = useLocation().search;
  const wtmoney = qs.parse(loc).currSgn;
  //state변수
  const [money, setMoney] = useState(); 

  //함수 
  const getMoney = async (mvcd) => {
    let date = '20221113'
    let url = 'https://apis.data.go.kr/1220000/retrieveTrifFxrtInfo/getRetrieveTrifFxrtInfo?aplyBgnDt=' + date + '&weekFxrtTpcd=2&serviceKey=fRjAj4dMQ8Rb3Uu5c3MFAz2i8tLzKvPTSPC%2Bb71g%2F7eEpLL9H2IgE%2FbuaO9AU1%2BXyTKrE%2FKlRYn0qeiZB%2B5cmw%3D%3D'

    const resp = await fetch(url);
    const data = await resp.json();
    setMoney(data) ;
  }

  //useEffect
  useEffect(() => {
    getMoney(wtmoney);
  }, []);
 

  return (
    <>
      <ul>
        {money && <MoneyInfo m={money} />}
      </ul>
    </>
  );
}