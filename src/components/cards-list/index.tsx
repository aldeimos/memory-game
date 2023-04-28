import * as React from 'react';
import { Wrapper } from './styles';
import { Card } from '../card';
import { TCardsList } from '../../types/card';

export const CardsList: React.FC<TCardsList> = ({ cards, handleChooseCard }) => {
  return (
    <Wrapper>
      {cards.map((card, i) => (
        <Card
          key={i}
          index={i}
          imgSrc={card.imgSrc}
          isOpen={card.isOpen}
          isSolved={card.isSolved}
          type={card.type}
          handleChooseCard={handleChooseCard}
        />
      ))}
    </Wrapper>
  );
};
