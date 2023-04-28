import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 115px;
  height: 115px;
  margin-bottom: 12px;

  background-color: #0083fc;
  cursor: pointer;

  &:hover {
    background-color: #ff5533;
  }
`;

export const WrapperOpen = styled(Wrapper)`
  background-color: #e5e5e5;

  pointer-events: none;
`;

export const WrapperSolved = styled(Wrapper)`
  opacity: 0;

  pointer-events: none;
`;
