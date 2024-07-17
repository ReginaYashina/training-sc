import React from 'react';

import { styled } from 'styled-components';
import { myTheme } from '../styles/Theme.styled';

type WrapperPropsType = {
  color?: string;
};
export const Wrapper = styled.div<WrapperPropsType>`
  background-color: ${(props) => props.color || myTheme.colors.secondary};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25px;
  }
`;
