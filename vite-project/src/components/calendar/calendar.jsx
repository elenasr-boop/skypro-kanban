import * as S from "./calendar.styled.js";


const Calendar = ( {bool, data} ) => {
  return (
    <S.Calendar>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">
              <S.CalendarSvg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </S.CalendarSvg>
            </S.NavAction>
            <S.NavAction data-action="next">
              <S.CalendarSvg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </S.CalendarSvg>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.Content>
          <S.DaysNames>
            <S.DayName>пн</S.DayName>
            <S.DayName>вт</S.DayName>
            <S.DayName>ср</S.DayName>
            <S.DayName>чт</S.DayName>
            <S.DayName>пт</S.DayName>
            <S.DayNameWeekend>сб</S.DayNameWeekend>
            <S.DayNameWeekend>вс</S.DayNameWeekend>
          </S.DaysNames>
          <S.Cells>
            <S.CellOtherMonth>28</S.CellOtherMonth>
            <S.CellOtherMonth>29</S.CellOtherMonth>
            <S.CellOtherMonth>30</S.CellOtherMonth>
            <S.Cell>31</S.Cell>
            <S.Cell>1</S.Cell>
            <S.CellWeekend>2</S.CellWeekend>
            <S.CellWeekend>3</S.CellWeekend>
            <S.Cell>4</S.Cell>
            <S.Cell>5</S.Cell>
            <S.Cell>6</S.Cell>
            <S.Cell>7</S.Cell>
            <S.CellCurrent>8</S.CellCurrent>
            <S.CellWeekend>9</S.CellWeekend>
            <S.CellWeekend>10</S.CellWeekend>
            <S.Cell>11</S.Cell>
            <S.Cell>12</S.Cell>
            <S.Cell>13</S.Cell>
            <S.Cell>14</S.Cell>
            <S.Cell>15</S.Cell>
            <S.CellWeekend>16</S.CellWeekend>
            <S.CellWeekend>17</S.CellWeekend>
            <S.Cell>18</S.Cell>
            <S.Cell>19</S.Cell>
            <S.Cell>20</S.Cell>
            <S.Cell>21</S.Cell>
            <S.Cell>22</S.Cell>
            <S.CellWeekend>23</S.CellWeekend>
            <S.CellWeekend>24</S.CellWeekend>
            <S.Cell>25</S.Cell>
            <S.Cell>26</S.Cell>
            <S.Cell>27</S.Cell>
            <S.Cell>28</S.Cell>
            <S.Cell>29</S.Cell>
            <S.CellWeekend>30</S.CellWeekend>
            <S.CellOtherMonthWeekend>1</S.CellOtherMonthWeekend>
          </S.Cells>
        </S.Content>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <S.CalendarPeriod>
          <S.PeriodP>
            {bool ? "Выберите срок исполнения" : `Срок исполнения: ${data}`} <S.PeriodSpan></S.PeriodSpan>.
          </S.PeriodP>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.Calendar>
  );
};

export default Calendar;
