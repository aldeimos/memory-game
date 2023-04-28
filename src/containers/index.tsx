import React from 'react';
import { useGame } from './hook';
import { CardsList } from '../components/cards-list';
import { GameInformer } from '../components/game-informer';
import { Modal } from '../components/modal';
import { MAX_TRIES } from '../common';
import { Container, ContentWrapper, GameTitle, MainGameField } from './styles';
import { getWordByNumber } from '../utils';

export const Main = () => {
  const { cards, tries, handleChooseCard, handleResetGame, isGameLost, isGameWon } = useGame();

  return (
    <Container>
      <ContentWrapper>
        <GameTitle>Memory</GameTitle>
        <MainGameField>
          <GameInformer title="Сделано ходов" counter={MAX_TRIES - tries} />
          <CardsList cards={cards} handleChooseCard={handleChooseCard} />
          <GameInformer title="Осталось попыток" counter={tries} />
        </MainGameField>
      </ContentWrapper>
      {isGameLost && (
        <Modal
          titleText={`Увы, вы проиграли<br/>У вас кончились ходы`}
          buttonText="Сыграть еще раз"
          handleButtonClick={handleResetGame}
        />
      )}
      {isGameWon && (
        <Modal
          titleText={`Ура, вы выиграли!<br/> Это заняло ${MAX_TRIES - tries} ${getWordByNumber(MAX_TRIES - tries, [
            'ход',
            'хода',
            'ходов',
          ])}`}
          buttonText="Сыграть еще раз"
          handleButtonClick={handleResetGame}
        />
      )}
    </Container>
  );
};
