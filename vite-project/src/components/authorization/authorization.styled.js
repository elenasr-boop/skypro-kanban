import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginBlock = styled.div`
  width: 100% - 16px;
  height: 900px;
  background-color: rgba(234, 238, 246, 1);
  display: flex;
  justify-content: center;
  padding-top: 185px;
`;

export const MainBlock = styled.div`
  width: 368px;
  height: 329px;
  background-color: rgba(255, 255, 255, 1);
  border: 0.7px rgba(212, 219, 229, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const InnerBlock = styled.div`
  width: 248px;
  height: 229px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Entrance = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.03em;
  text-align: center;
  height: 30px;
`;

export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const LoginInput = styled.input`
  max-width: 248px;
  max-height: 30px;
  padding: 8px 10px 8px 10px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(148, 166, 190, 1);
`;

export const LoginButton = styled.button`
  width: 248px;
  height: 38px;
  padding: 8px 10px 8px 10px;
  border: none;
  color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  background: rgba(86, 94, 239, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
`;

export const RegisterText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  color: rgba(148, 166, 190, 0.4);
`;

export const RegisterLink = styled(Link)`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  color: rgba(148, 166, 190, 0.4);
`;
