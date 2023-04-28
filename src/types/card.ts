export type TCard = {
  id?: number;
  isOpen: boolean;
  isSolved: boolean;
  imgSrc: string;
  type: string;
};

export type TCardsList = {
  cards: TCard[];
  handleChooseCard: (cardIndex: number) => void;
};

export type TCardProps = TCard & {
  index: number;
  handleChooseCard: (cardIndex: number) => void;
};
