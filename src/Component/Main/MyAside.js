import { Link } from "react-router-dom";
import "./MyAside.css"

function MyAside() {
  return (
    <div className="aside-Wrapper">
      <aside className="aside">
        <div>
          {/* 이거 */}
        <Link to={'/sm'} style={{ textDecoration: 'none' }}><h3>환율</h3></Link>
        </div>
        <div>
        <Link to={'/'} style={{ textDecoration: 'none' }}><h3>세액조회</h3></Link>
        </div>
        <div>
          <h3>커뮤니티 게시판</h3>
        </div>
        <div>
          <h3>버그/오류신고</h3>
        </div>
        <div>
        <Link to={'/cu'} style={{ textDecoration: 'none' }}><h3>Contact us</h3></Link>
        </div>
      </aside>
    </div>
  );
}

export default MyAside;
