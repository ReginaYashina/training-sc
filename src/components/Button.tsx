import React from 'react';
import { css, styled } from 'styled-components';

type ButtonPropsType = {
  buttonType?: 'primery' | 'outlined';
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
    props.buttonType === 'primery' &&
    css<ButtonPropsType>`
      background: #4e71fe;
      color: #fff;
    `}

  ${(props) =>
    props.buttonType === 'outlined' &&
    css<ButtonPropsType>`
      background: transparent;
      color: #4e71fe;
      border-color: #4e71fe;
    `}
`;
