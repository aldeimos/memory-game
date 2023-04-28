import * as React from 'react';

import imgNginx from '../assets/images/nginx.png';
import imgNodejs from '../assets/images/nodejs.png';
import imgReact from '../assets/images/react.png';
import imgRedux from '../assets/images/redux.png';
import imgSomething from '../assets/images/something.png';
import imgTs from '../assets/images/ts.png';
import imgWebpack from '../assets/images/webpack.png';
import imgWebstorm from '../assets/images/webstorm.png';
import { shuffleArray } from '../utils';
import { TCard } from '../types/card';
import { MAX_TRIES } from '../common';

const initialCards = [
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgNginx,
    type: 'nginx',
  },
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgNodejs,
    type: 'nodejs',
  },
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgReact,
    type: 'react',
  },
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgRedux,
    type: 'redux',
  },
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgSomething,
    type: 'smth',
  },
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgTs,
    type: 'ts',
  },
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgWebpack,
    type: 'webpack',
  },
  {
    isOpen: false,
    isSolved: false,
    imgSrc: imgWebstorm,
    type: 'webstorm',
  },
];

export const useGame = () => {
  const [cards, setCards] = React.useState<TCard[]>([]);
  const [counter, setCounter] = React.useState(0);
  const [tries, setTries] = React.useState(MAX_TRIES);
  const [choosedCards, setChoosedCards] = React.useState<TCard[]>([]);
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout>();

  const prepareGame = () => {
    const result = shuffleArray([...initialCards, ...initialCards]);
    setCards(result.map((card, index) => ({ ...card, id: index })));
    setChoosedCards([]);
    setTries(MAX_TRIES);
    setCounter(0);
    setTimeoutId(undefined);
  };

  const handleChooseCard = React.useCallback(
    (cardIndex: number) => {
      const current = cards.find((_, i) => i === cardIndex) as TCard;

      const newCards = [...cards];
      newCards[cardIndex] = { ...current, isOpen: true };
      setCards(newCards);

      setChoosedCards([...choosedCards, current]);
      setCounter((prev) => prev + 1);
    },
    [choosedCards, cards]
  );

  const handleCloseCards = () => {
    const [card1, card2] = choosedCards;
    setCards(
      cards.map((card) => {
        if (card.id === card1.id || card.id === card2.id) {
          return {
            ...card,
            isOpen: false,
          };
        } else return card;
      })
    );

    if (choosedCards.length > 2) {
      setChoosedCards((prev) => prev.slice(-1));
    } else setChoosedCards((prev) => prev.slice(2));

    clearTimeout(timeoutId);
    setTimeoutId(undefined);
  };

  const debouncedHandleCloseCards = () => {
    if (timeoutId) {
      handleCloseCards();
      clearTimeout(timeoutId);
      setTimeoutId(undefined);
    } else {
      const timeout = setTimeout(handleCloseCards, 1500);
      setTimeoutId(timeout);
    }
  };

  const handleChoosedCardsResult = () => {
    if (choosedCards.length > 1) {
      const [card1, card2] = choosedCards;
      if (card1.type === card2.type) {
        setCards(
          cards.map((card) => {
            if (card.type === card1.type) {
              return {
                ...card,
                isOpen: false,
                isSolved: true,
              };
            } else return card;
          })
        );

        setChoosedCards([]);
      } else {
        debouncedHandleCloseCards();
      }
    }
  };

  const handleResetGame = () => {
    prepareGame();
  };

  React.useEffect(() => {
    prepareGame();
  }, []);

  React.useEffect(() => {
    handleChoosedCardsResult();
  }, [choosedCards]);

  React.useEffect(() => {
    if (counter % 2 === 0 && counter !== 0) {
      setTries((prev) => prev - 1);
    }
  }, [counter]);

  const isGameLost = tries === 0 && cards.filter((card) => !card.isSolved).length > 0;
  const isGameWon = tries > 0 && cards.every((card) => card.isSolved);

  return {
    cards,
    tries,
    handleChooseCard,
    isGameLost,
    isGameWon,
    handleResetGame,
  };
};
