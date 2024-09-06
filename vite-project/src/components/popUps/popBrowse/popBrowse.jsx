import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteTodo } from "../../../api";
import { UserContext } from "../../../context/userContext";
import { CardContext } from "../../../context/cardContext";
import Calendar from "../../calendar/calendar";
import * as S from "./popBrowse.styled.js";

const PopBrowse = ({ id }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { cards, setcards } = useContext(CardContext);
  const [isRedacting, setIsRedacting] = useState(false);

  const card = cards.filter((card) => {
    return card._id === id;
  })[0];

  const [selected, setSelected] = useState(new Date(card.date));
  const [description, setDescription] = useState(card.description);

  let bgcolor = "";
  switch (card.topic) {
    case "Web Design":
      bgcolor = "_orange";
      break;
    case "Research":
      bgcolor = "_green";
      break;
    case "Copywriting":
      bgcolor = "_purple";
      break;
    default:
      bgcolor = "_gray";
      break;
  }

  async function onDeleteButton() {
    try {
      const result = await deleteTodo({ id: id, token: user.token });

      setcards(result.tasks);
      navigate("/");
    } catch (_) {
      console.log("Error");
    }
  }

  function saveButton() {
    console.log("Идет сохранение");
    setIsRedacting(false);
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
              <S.popBrowseForm id="formBrowseCard" action="#">
                <S.formBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.formBrowseArea
                    name="description"
                    id="textArea01"
                    label="Описание"
                    value={description}
                    disabled={!isRedacting}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  />
                </S.formBrowseBlock>
              </S.popBrowseForm>
              <Calendar
                selected={selected}
                setSelected={setSelected}
                size="1.75"
              />
            </S.popBrowseWrap>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className={bgcolor}>
                <p className={bgcolor}>{card.topic}</p>
              </div>
            </div>
            <S.popBrowseBtnBrowse>
              <div>
                {isRedacting ? (
                  <>
                    <S.btnBor onClick={() => saveButton()}>
                      <p>Сохранить</p>
                    </S.btnBor>
                    <S.btnBor onClick={() => setIsRedacting(false)}>
                      <p>Отменить</p>
                    </S.btnBor>
                  </>
                ) : (
                  <S.btnBor onClick={() => setIsRedacting(true)}>
                    <p>Редактировать задачу</p>
                  </S.btnBor>
                )}
                <S.btnBor onClick={() => onDeleteButton()}>
                  <div>Удалить задачу</div>
                </S.btnBor>
              </div>
              <S.btnBg01>
                <Link to="/">Закрыть</Link>
              </S.btnBg01>
            </S.popBrowseBtnBrowse>
          </S.popBrowseContent>
        </S.popBrowseBlock>
      </S.popBrowseContainer>
    </S.popBrowse>
  );
};

export default PopBrowse;
