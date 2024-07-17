import React from 'react';
import { styled } from 'styled-components';
import { myTheme } from '../styles/Theme.styled';

export const Text = styled.h4`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  color: ${myTheme.colors.medium};
`;
