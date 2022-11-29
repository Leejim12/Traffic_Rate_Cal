import MyAside from "./MyAside";
import MyMain from "./MyMain";
import "./MyAsMain.css";

function MyAsMain() {
  return (
    <div class="main-wrapper">
      <MyAside />
      <MyMain />
    </div>
  );
}

export default MyAsMain;
