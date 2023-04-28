import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1036px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const GameTitle = styled.div`
  margin-bottom: 110px;

  font-family: 'Formular';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 35px;
  text-transform: uppercase;

  color: #0083fc;
`;

export const MainGameField = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
