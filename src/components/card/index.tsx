import * as React from 'react';
import { TCardProps } from '../../types/card';
import { Wrapper, WrapperOpen, WrapperSolved } from './styles';
import defaultImg from '../../assets/images/k-c.svg';

export const Card: React.FC<TCardProps> = ({ index, isOpen, isSolved, imgSrc, handleChooseCard }) => {
  if (isSolved) {
    return (
      <WrapperSolved>
        <img src={imgSrc} alt="Решенная карточка" />
      </WrapperSolved>
    );
  }

  if (isOpen) {
    return (
      <WrapperOpen>
        <img src={imgSrc} alt="Открытая карточка" />
      </WrapperOpen>
    );
  }

  return (
    <Wrapper onClick={() => handleChooseCard(index)}>
      <img src={defaultImg} alt="Закрытая карточка" />
    </Wrapper>
  );
};
