import styled from "styled-components";

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media (max-width: 495px) {
    width: 100%;
  };

  @media (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTtl = styled.div`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarSvg = styled.svg`
  fill: #94a6be;
`;

export const Content = styled.div`
  margin-bottom: 12px;
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

export const DayNameWeekend = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CellOtherMonth = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  opacity: 0;

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CellWeekend = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CellCurrent = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  };
`;

export const CellOtherMonthWeekend = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  };
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media (max-width: 660px) {
    padding: 0;
  }
`;

export const PeriodP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  @media (max-width: 660px) {
    font-size: 14px;
  };
`;

export const PeriodSpan = styled.span`
    color: #000000;
`;