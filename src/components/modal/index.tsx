import * as React from 'react';
import { ModalContainer, ModalContent, ModalTitle, ModalButton } from './styles';
import { TModal } from '../../types';

export const Modal: React.FC<TModal> = ({ titleText, buttonText, handleButtonClick }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle dangerouslySetInnerHTML={{ __html: titleText }}></ModalTitle>
        <ModalButton type="button" onClick={handleButtonClick}>
          {buttonText}
        </ModalButton>
      </ModalContent>
    </ModalContainer>
  );
};
