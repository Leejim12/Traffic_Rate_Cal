import{useEffect,useState,useRef} from 'react';
import Data from "../Data/TrafficRate.json"

function ShowTrafficRate(){
const [RateList,setRateList] = useState([]);

const getData =()=> {
        setRateList(
            Data.map((item)=>
            <div key={item}>
            <span>{item.품목명}</span>
            <span>{item.기본세율+0.1}</span>
        </div>
        )
    )
}
useEffect(()=>{
    getData();
    console.log(RateList);
},[]);
return(
    <>
        {RateList}
    </>
);
}

export default ShowTrafficRate;
