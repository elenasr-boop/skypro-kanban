import styled from "styled-components";

export const topicStyles = {
  _purple: {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  _orange: {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  _green: {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  },
  _gray: {
    backgroundColor: "#94a6be",
    color: "#ffffff",
  },
};

export const popBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  &:target {
    display: block;
  }

  @media (max-width: 660px) {
    top: 70px;
  }
`;

export const popBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const popBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media (max-width: 660px) {
    border-radius: 0;
  }

  @media (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const popBrowseContent = styled.div`
  display: block;
  text-align: left;

  & .categories__theme {
    opacity: 1;
  }

  & .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  & .theme-top {
    display: block;
  }

  @media (max-width: 495px) {
    & .theme-down {
      display: block;
      margin-bottom: 20px;
    }
    & .theme-top {
      display: none;
    }
  }
`;

export const popBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  & div button {
    margin-right: 8px;
  }

  @media (max-width: 495px) {
    & button {
      width: 100%;
      height: 40px;
    }

    & div {
      width: 100%;
    }

    & div button {
      margin-right: 0px;
    }
  }
`;

export const popBrowseBtnEdit = styled(popBrowseBtnBrowse)`
  display: none;
`;

export const btnBrowse03 = styled.button`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &:hover a {
    color: #ffffff;
  }
`;

export const btnBor = styled(btnBrowse03)`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  & a {
    color: #565eef;
  }
`;

export const btnBg01 = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }

  & a {
    color: #ffffff;
  }
`;

export const btnBg03 = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  & a {
    color: #ffffff;
  }
`;

export const popBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 22px;

  @media (max-width: 660px) {
    display: block;
  }
`;

export const popBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media (max-width: 495px) {
    max-width: 100%;
  }
`;

export const formBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const formBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
`;

export const ActiveCategorie = styled.div`
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};
  width: 115px;
  height: 30px;
  border-radius: 24px;
  align-content: center;
  padding: 8px, 20px, 8px, 20px;

  p {
    color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 600;
    line-height: 14.21px;
    text-align: center;
  }
`;

export const popBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const popBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Status = styled.div`
  margin-bottom: 11px;

  p {
    margin-bottom: 14px;
  }
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.button`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${({ $active }) => ($active ? "#fff" : "#94A6BE")};
  background-color: ${({ $active }) => ($active ? "#94A6BE" : "#fff")};
  padding: 7px 14px;
  margin-right: 7px;
  margin-bottom: 7px;
  height: 30px;
  text-align: center;
  display: ${({ $isRedacting, $active }) =>
    $isRedacting || $active ? "block" : "none"};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const Error = styled.p`
  color: red;
  padding-bottom: 10px;
`;