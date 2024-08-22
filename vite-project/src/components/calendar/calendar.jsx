import "react-day-picker/style.css";
import { ru } from "date-fns/locale/ru";
import { Dates, PopNewCardData, StyledDayPicker } from "./calendar.styled";

const Calendar = ({ selected, setSelected, size }) => {
  return (
    <PopNewCardData>
      <Dates>Даты</Dates>
      <StyledDayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        locale={ru}
        $size={size}
        footer={
          selected
            ? `Срок исполнения: ${selected.toLocaleDateString()}`
            : "Выберите срок исполнения."
        }
      />
    </PopNewCardData>
  );
};

export default Calendar;
