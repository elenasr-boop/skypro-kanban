import { useNavigate } from "react-router-dom";
import * as S from "./popNewCards.styled.js";
import { useState } from "react";
import "react-day-picker/style.css";
import { ru } from "date-fns/locale/ru";

const PopNewCard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  function createTodo() {
    console.log(
      `Data: ${selected ? selected.toLocaleDateString() : new Date()}, `
    );
    // navigate("/");
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
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>

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
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP className="subttl">Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.Fieldset
                  onClick={() => {
                    console.log("Выбрано");
                  }}
                >
                  <>
                    <S.Input
                      type="radio"
                      id="Web design"
                      name="topic"
                      value="Web design"
                    />
                    <S.Label htmlFor="Web design">
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
                createTodo();
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
