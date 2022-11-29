import { Link } from "react-router-dom";
import "./MyHeader.css";
function MyHeader() {
  return (
    <header>
      <Link to={'/'} style={{ textDecoration: 'none' }}><h1>해외직구 물품 예상세액 조회 사이트</h1></Link>
    </header>
  );
}

export default MyHeader;
