import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 194px;
`;

export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
  
  color ${(props) => props.color || '#0083FC'};
`;
