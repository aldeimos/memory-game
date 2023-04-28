import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 685px;
  height: 370px;

  transform: translate(-50%, -50%);
  background-color: #ff5533;
  border-radius: 12px;
`;

export const ModalTitle = styled.span`
  margin-top: 65px;
  margin-bottom: auto;

  font-family: 'Formular';
  font-weight: 700;
  font-size: 24px;
  line-height: 50px;

  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

export const ModalButton = styled.button`
  width: 344px;
  height: 62px;
  margin-bottom: 30px;
  padding: 0;

  font-family: 'Formular';
  font-weight: 700;
  font-size: 24px;
  line-height: 10px;

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  background: #0083fc;
  border-radius: 12px;
  border: 0;
  cursor: pointer;
`;
