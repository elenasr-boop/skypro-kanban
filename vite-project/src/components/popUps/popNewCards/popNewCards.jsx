import { useNavigate } from "react-router-dom";
import * as S from "./popNewCards.styled.js";
import { useContext, useState } from "react";
import "react-day-picker/style.css";
import { ru } from "date-fns/locale/ru";
import { createTodo } from "../../../api.js";
import { parse } from "date-fns/parse";
import { CardContext, UserContext } from "../../../context/userContext.jsx";
import { deleteSpaces, safeString } from "../../../helpers.js";

const PopNewCard = () => {
  const { user } = useContext(UserContext);
  const { setCards } = useContext(CardContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const [topic, setTopic] = useState("Research");
  const [todo, setTodo] = useState({
    title: "Новая задача",
    description: "",
  });

  async function clickOnButtonCreate() {
    const data = selected
      ? parse(selected.toLocaleDateString(), "dd.MM.yyyy", new Date())
      : new Date();

    try {
      const result = await createTodo({
        title: safeString(deleteSpaces( {str: todo.title} )),
        topic: topic,
        status: "Без статуса",
        description: safeString(deleteSpaces( {str: todo.description} )),
        date: data,
        token: user.token,
      });

      setCards(result.tasks);
      navigate("/");
    } catch (_) {
      console.log("Error");
    }
  }

  function changeTopic() {
    setTopic(event.target.value);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  }

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.CloseLink to="/">&#10006;</S.CloseLink>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={handleInputChange}
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormNewArea
                    name="description"
                    id="textArea"
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>

              <S.Dates>
                <S.PopNewCardData>Даты</S.PopNewCardData>
                <S.StyledDayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  locale={ru}
                  footer={
                    selected
                      ? `Срок исполнения: ${selected.toLocaleDateString()}`
                      : "Выберите срок исполнения."
                  }
                />
              </S.Dates>
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP className="subttl">Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.Fieldset>
                  <>
                    <S.Input
                      type="radio"
                      id="Web Design"
                      name="topic"
                      value="Web Design"
                      onChange={() => {
                        changeTopic();
                      }}
                    />
                    <S.Label htmlFor="Web Design">
                      <S.CategoriesTheme $color="_orange">
                        <S.CategoriesThemeP $color="_orange">
                          Web Design
                        </S.CategoriesThemeP>
                      </S.CategoriesTheme>
                    </S.Label>
                  </>

                  <>
                    <S.Input
                      type="radio"
                      id="Research"
                      name="topic"
                      value="Research"
                      onChange={() => {
                        changeTopic();
                      }}
                    />
                    <S.Label htmlFor="Research">
                      <S.CategoriesTheme $color="_green">
                        <S.CategoriesThemeP $color="_green">
                          Research
                        </S.CategoriesThemeP>
                      </S.CategoriesTheme>
                    </S.Label>
                  </>
                  <>
                    <S.Input
                      type="radio"
                      id="Copywriting"
                      name="topic"
                      value="Copywriting"
                      onChange={() => {
                        changeTopic();
                      }}
                    />
                    <S.Label htmlFor="Copywriting">
                      <S.CategoriesTheme $color="_purple">
                        <S.CategoriesThemeP $color="_purple">
                          Copywriting
                        </S.CategoriesThemeP>
                      </S.CategoriesTheme>
                    </S.Label>
                  </>
                </S.Fieldset>
              </S.CategoriesThemes>
            </S.Categories>
            <S.FormCreate
              onClick={() => {
                clickOnButtonCreate();
              }}
            >
              Создать задачу
            </S.FormCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
