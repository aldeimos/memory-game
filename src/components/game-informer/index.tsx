import * as React from 'react';
import { Wrapper, Text } from './styles';
import { Informer } from '../../types';

export const GameInformer: React.FC<Informer> = ({ title, counter }) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
      <Text color="#FF5533">{counter}</Text>
    </Wrapper>
  );
};
