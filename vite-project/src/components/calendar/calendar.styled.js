import styled from "styled-components";
import { DayPicker } from "react-day-picker";

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media (max-width: 495px) {
    width: 100%;
  }

  @media (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const PopNewCardData = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: #000;
`;

export const StyledDayPicker = styled(DayPicker)`
  --rdp-month_caption-font: bold large var(--rdp-font-family);
  --rdp-accent-color: rgba(148, 166, 190, 1);
  color: rgba(148, 166, 190, 1);
  --rdp-day-height: {props => props === "2" ? "2rem" : "1.75rem" };
  --rdp-day-width: {props => props === "2" ? "2rem" : "1.75rem" };

  .rdp-selected {
    background-color: rgba(148, 166, 190, 1);
    color: #fff;
    border-radius: 18px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 11.72px;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .rdp-day {
    border: none;
    width: 22px;
    height: 22px;
    font-weight: 200;
    font-size: medium;

    button {
      top: 82px;
      left: 107px;
      gap: 0px;
      opacity: 0px;
    }
  }

  .rdp-day:hover {
    background-color: rgba(234, 238, 246, 1);
    border-radius: 18px;
  }

  .rdp-month_caption {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.41px;
    text-align: left;
  }

  .rdp-months {
    max-width: none;
  }

  .rdp-footer {
    margin-top: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 11.72px;
    text-align: left;
  }

  .rdp-month_grid {
    border-collapse: inherit;
    width: 168px;
    height: 172px;
    gap: 5px;
  }
`;

export const Dates = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.41px;
  text-align: left;
`;
