import "../styles/MyMain.css";
function MyMain() {
  return (
    <main>
      <h2>세액조회</h2>

      <div class="main-text">
        <p>
          선택란 (물품종류(대분류 - 소분류),구입국가,물품가격,배송비,물품무게)
        </p>
        <p>선택 후 submit 버튼 클릭 시, 정보도 이 창에서 제공</p>
        <ul>
          <li>뒤로가기 키로 원래 데이터 구현</li>
          <li>카톡으로 공유기능 추가 희망.</li>
        </ul>
        <label for="list-select">물건종류:</label>
        <form action="" class="list-form">
          <select name="list" id="list-select">
            <option value="">분류</option>
            <option value="nation">맥북</option>
            <option value="nation">옷</option>
            <option value="nation">전자기기</option>
            <option value="nation">보석</option>
            <option value="nation">생선</option>
            <option value="nation">채소</option>
            <option value="nation">과일</option>
            <option value="nation">고기</option>
            <option value="nation">플루토늄</option>
          </select>
          <label for="list-select">Choose a nation:</label>

          <select name="list" id="list-select">
            <option value="">구입국가</option>
            <option value="nation"></option>
            <option value="nation">미국</option>
            <option value="nation">한국</option>
            <option value="nation">중국</option>
            <option value="nation">일본</option>
            <option value="nation">홍콩</option>
            <option value="nation">캐나다</option>
            <option value="nation">콜롬비아</option>
            <option value="nation">브라질</option>
          </select>
          <br />
          <input
            name="cost"
            type="text"
            required
            autocomplete="off"
            placeholder="물품가격$"
          />
          <input
            name="ship"
            type="text"
            required
            autocomplete="off"
            placeholder="배송비$"
          />
          <input
            name="weight"
            type="text"
            required
            autocomplete="off"
            placeholder="무게kg"
          />
          <input type="submit" value="계산하기" />
          <input type="reset" />
        </form>
      </div>
    </main>
  );
}

export default MyMain;