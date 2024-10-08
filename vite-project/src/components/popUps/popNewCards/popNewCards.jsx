import { useNavigate } from "react-router-dom";
import * as S from "./popNewCards.styled.js";
import { useContext, useState } from "react";
import { createTodo } from "../../../api.js";
import { UserContext } from "../../../context/userContext.jsx";
import { safeString } from "../../../helpers.js";
import { CardContext } from "../../../context/cardContext.jsx";
import Calendar from "../../calendar/calendar.jsx";

const PopNewCard = () => {
  const { user } = useContext(UserContext);
  const { setcards } = useContext(CardContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const [topic, setTopic] = useState("Research");
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [isError, setIsError] = useState(false);

  async function clickOnButtonCreate() {
    const data = selected ? selected : new Date();

    if (todo.title.trim() !== "" || todo.description.trim() !== "") {
      try {
        const result = await createTodo({
          title: safeString({ str: todo.title.trim() }),
          topic: topic,
          status: "Без статуса",
          description: safeString({ str: todo.description.trim() }),
          date: data,
          token: user.token,
        });
        setcards(result.tasks);
        navigate("/");
      } catch (e) {
        setIsError(true);
      }
    } else {
      setIsError(true);
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

              <Calendar
                selected={selected}
                setSelected={setSelected}
                size="2"
              />
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
            {isError && (
              <S.Error>
                {todo.title.trim() === "" && todo.description.trim() === ""
                  ? "Введите название или описание задачи"
                  : "Ошибка в загрузке, попробуйте снова."}
              </S.Error>
            )}
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
