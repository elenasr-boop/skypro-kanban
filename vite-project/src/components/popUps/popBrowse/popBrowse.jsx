import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteTodo } from "../../../api";
import { UserContext } from "../../../context/userContext";
import { CardContext } from "../../../context/cardContext";
import Calendar from "../../calendar/calendar";
import * as S from "./popBrowse.styled.js"

const PopBrowse = ({ id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const {user} = useContext(UserContext);
  const {cards, setCards} = useContext(CardContext);

  const card = cards.filter((card) => {
    return card._id === id;
  })[0];

  let bgcolor = "";
  switch (card.topic) {
    case "Web Design": bgcolor = "_orange"; break;
    case "Research": bgcolor = "_green"; break;
    case "Copywriting": bgcolor = "_purple"; break;
    default: bgcolor = "_gray"; break;
  }

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
    <S.popBrowse>
      <S.popBrowseContainer>
        <S.popBrowseBlock>
          <S.popBrowseContent>
            <S.popBrowseTopBlock>
              <S.popBrowseTtl>{card.title}</S.popBrowseTtl>
              <S.ActiveCategorie $topicColor={bgcolor}>
                <p>{card.topic}</p>
              </S.ActiveCategorie>
            </S.popBrowseTopBlock>
            <S.Status>
              <p>Статус</p>
              <S.StatusThemes>
                <S.StatusTheme>
                  <p>{card.status}</p>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.Status>
            <S.popBrowseWrap>
              <S.popBrowseForm
                id="formBrowseCard"
                action="#"
              >
                <S.formBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.formBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    value={card.description}
                    placeholder="Введите описание задачи..."
                  />
                </S.formBrowseBlock>
              </S.popBrowseForm>
              <Calendar selected={selected} setSelected={setSelected} size="1.75" />
            </S.popBrowseWrap>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className={bgcolor}>
                <p className={bgcolor}>{card.topic}</p>
              </div>
            </div>
            <S.popBrowseBtnBrowse>
              <div>
                <S.btnBor>
                  <a href="#">Редактировать задачу</a>
                </S.btnBor>
                <S.btnBor onClick={() => onDeleteButton()}>
                  <div>Удалить задачу</div>
                </S.btnBor>
              </div>
              <S.btnBg01>
                <Link to="/">Закрыть</Link>
              </S.btnBg01>
            </S.popBrowseBtnBrowse>
            <S.popBrowseBtnEdit>
              <div>
                <S.btnBg01>
                  <a href="#">Сохранить</a>
                </S.btnBg01>
                <S.btnBg03>
                  <a href="#">Отменить</a>
                </S.btnBg03>
                <S.btnBor
                  id="btnDelete" onClick={() => onDeleteButton()}
                >
                  <div>Удалить задачу</div>
                </S.btnBor>
              </div>
              <S.btnBg01>
                <a href="#">Закрыть</a>
              </S.btnBg01>
            </S.popBrowseBtnEdit>
          </S.popBrowseContent>
        </S.popBrowseBlock>
      </S.popBrowseContainer>
    </S.popBrowse>
  );
};

export default PopBrowse;
