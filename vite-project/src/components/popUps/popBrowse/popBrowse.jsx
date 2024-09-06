import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteTodo, editTodo } from "../../../api";
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
  const [status, setStatus] = useState(card.status);
  const [oldVersion, setOldVersion] = useState({
    date: new Date(card.date),
    status: card.status,
    description: card.description,
  });

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

  async function saveButton() {
    try {
      const result = await editTodo({
        id: id,
        token: user.token,
        title: card.title,
        topic: card.topic,
        status: status,
        description: description,
        date: selected,
      });

      setcards(result.tasks);

      setOldVersion({
        date: new Date(selected),
        description: description,
        status: status,
      });
      setIsRedacting(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  function cancelButton() {
    setDescription(oldVersion.description);
    setSelected(oldVersion.date);
    setStatus(oldVersion.status);
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
                <S.StatusTheme
                  $active={status === "Без статуса"}
                  $isRedacting={isRedacting}
                  onClick={() => setStatus("Без статуса")}
                >
                  <p>Без статуса</p>
                </S.StatusTheme>
                <S.StatusTheme
                  $active={status === "Нужно сделать"}
                  $isRedacting={isRedacting}
                  onClick={() => setStatus("Нужно сделать")}
                >
                  <p>Нужно сделать</p>
                </S.StatusTheme>
                <S.StatusTheme
                  $active={status === "В работе"}
                  $isRedacting={isRedacting}
                  onClick={() => setStatus("В работе")}
                >
                  <p>В работе</p>
                </S.StatusTheme>
                <S.StatusTheme
                  $active={status === "Тестирование"}
                  $isRedacting={isRedacting}
                  onClick={() => setStatus("Тестирование")}
                >
                  <p>Тестирование</p>
                </S.StatusTheme>
                <S.StatusTheme
                  $active={status === "Готово"}
                  $isRedacting={isRedacting}
                  onClick={() => setStatus("Готово")}
                >
                  <p>Готово</p>
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
                setSelected={isRedacting ? setSelected : undefined}
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
                    <S.btnBor onClick={() => cancelButton()}>
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
