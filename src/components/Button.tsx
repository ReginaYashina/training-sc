import React from 'react';
import { css, styled } from 'styled-components';
import { myTheme } from '../styles/Theme.styled';

type ButtonPropsType = {
  buttonType?: 'primary' | 'outlined';
};

export const Button = styled.button<ButtonPropsType>`
  border-radius: 5px;
  width: 86px;
  height: 30px;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid transparent;
  margin-left: 12px;

  &:first-of-type {
    margin-left: 0;
  }

  ${(props) =>
    props.buttonType === 'primary' &&
    css<ButtonPropsType>`
      background: ${myTheme.colors.primary};
      color: ${myTheme.colors.light};

      &:hover {
        color: ${myTheme.colors.primary};
        border-color: ${myTheme.colors.primary};
        background: transparent;
				transitioall .3s easen
      }
    `}

  ${(props) =>
    props.buttonType === 'outlined' &&
    css<ButtonPropsType>`
      background: transparent;
      color: ${myTheme.colors.primary};
      border-color: ${myTheme.colors.primary};

      &:hover {
        color: ${myTheme.colors.light};
        border-color: transparent;
        background: ${myTheme.colors.primary};
        transition: all 0.3s ease;
      }
    `}
`;
