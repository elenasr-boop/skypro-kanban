import Calendar from "../../calendar/calendar";
import { useNavigate } from "react-router-dom";
import * as S from "./popNewCards.styled.js"

const PopNewCard = () => {
  const navigate = useNavigate();

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.CloseLink to="/">
              &#10006;
            </S.CloseLink>
            <S.PopNewCardWrap>
              <S.PopNewCardForm
                id="formNewCard"
                action="#"
              >
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

              <Calendar bool={true}></Calendar>
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP className="subttl">Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.CategoriesTheme className="_orange _active-category">
                  <p className="_orange">Web Design</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme className="_green">
                  <p className="_green">Research</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme className="_purple">
                  <p className="_purple">Copywriting</p>
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.Categories>
            <S.FormCreate onClick={ () => {
              navigate("/");
            }}>
              Создать задачу
            </S.FormCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
