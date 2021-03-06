import styled from "styled-components";

export const FaqPartnerDiv = styled.div`
  margin-bottom: 200px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
    transition: 0.2s linear;
  }
`;

export const FaqUserDiv = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    transition: 0.2s linear;
  }
`;

export const FaqSubtitle = styled.div`
  font-size: 41px;
  margin-top: -10px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 36px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    font-size: 28px;
    transition: 0.2s linear;
  }
`;

export const FaqList = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 50px;
  }

  margin-top: 50px;
  @media screen and (max-width: 500px) {
    & > *:not(:last-child) {
      margin-bottom: 30px;
    }

    margin-top: 30px;
    transition: 0.2s linear;
  }
`;

export const FaqListItem = styled.div``;

export const ListTitle = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    font-size: 28px;
    transition: 0.2s linear;
  }
`;

export const ListContent = styled.div`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  align-items: center;
  div {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: black;
    margin: 0 10px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
    transition: 0.2s linear;
  }
`;

export const ListContentGroup = styled.div`
  margin: 10px 0;
`;
