import { Link } from "react-router-dom";
import { PopExit } from "./popUser.styled";

const PopUser = () => {
  return (
    <PopExit>
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <Link to="/login" >Да, выйти</Link>
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </button>
            </div>
          </form>
          </div>
      </div>
    </PopExit>
  );
};

export default PopUser;
