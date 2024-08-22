// import { lightFormat } from "date-fns";
// import Calendar from "../../calendar/calendar";
import { Link, useNavigate } from "react-router-dom";
import { StyledDayPicker } from "../popNewCards/popNewCards.styled";
import { useContext, useState } from "react";
import { ru } from "date-fns/locale";
import { deleteTodo } from "../../../api";
import { UserContext } from "../../../context/userContext";
import { CardContext } from "../../../context/cardContext";

const PopBrowse = ({ id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const {user} = useContext(UserContext);
  const {cards, setCards} = useContext(CardContext);

  const card = cards.filter((card) => {
    return card._id === id;
  })[0];

  async function onDeleteButton () {
    try {
      const result = await deleteTodo ({id: id, token: user.token});

      setCards(result.tasks)
      navigate("/");
    } catch (_) {
      console.log('Error');
    }
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{card.topic}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    value={card.description}
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>
              <StyledDayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                locale={ru}
              />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">{card.topic}</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03" onClick={() => onDeleteButton()}>
                  <div>Удалить задачу</div>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete" onClick={() => onDeleteButton()}
                >
                  <div>Удалить задачу</div>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
