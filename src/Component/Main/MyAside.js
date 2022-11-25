import "../styles/MyAside.css";
function MyAside() {
  return (
    <div className="aside-Wrapper">
      <aside className="aside">
        <div>
          <h3>환율</h3>
        </div>
        <div>
          <h3>
            <a href="index.html">세액조회</a>
          </h3>
        </div>
        <div>
          <h3>커뮤니티 게시판</h3>
        </div>
        <div>
          <h3>버그/오류신고</h3>
        </div>
        <div>
          <h3>Contact us</h3>
        </div>
      </aside>
    </div>
  );
}

export default MyAside;
