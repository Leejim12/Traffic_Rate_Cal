import './ContactUs.css';


const qOptions = [
    {value: "1", name: "카테고리1"},
    {value: "2", name: "카테고리2"},
    {value: "3", name: "카테고리3"},
    {value: "4", name: "카테고리4"},
    {value: "5", name: "카테고리5"},
]

const SelectBox = (props) => {
    return(
        <select>
                {props.options.map((option) =>
                    (<option value = {option.value}>
                                    {option.name}
                    </option>))}
        </select>
    )
}

function ContactUs() {

  return (
      <div className = "root1">
        <h3>contact us 페이지</h3>
        
        <form>
            <div className = "namebox">     
                <label>이름:</label><br/>
                <input type="name" placeholder= "홍길동"/>        
                <br/>
                <br/>
            </div>

            <div className = "email">
                <label>이메일:</label><br/>
                <input type="email" className = "form-email" placeholder="email@example.com"/>
                <br/>
                <br/>
            </div>

            <div className = "Qestion-options"> 
                <label className = "help" > 어떤 도움이 필요하신가요?</label> <br/>
                <SelectBox options={qOptions} className = "selectBox"></SelectBox>
                <br/>
                <br/>
            </div>

            <div className = "detail-text">
                <label className = "form-label"> 상세 내용: </label> <br/>
                <textarea className = "form-detail" placeholder="궁금한 점이나 문제점에 대해 상세히 적어주세요."></textarea>
                <br/>
                <br/>
            </div>
            
        </form>
            <div className = "mybtn">
                <button type="button" className = "btn btn-warning" id = "submitbtn">제출하기</button>
            </div>
    </div>

  );
}
export default ContactUs;




