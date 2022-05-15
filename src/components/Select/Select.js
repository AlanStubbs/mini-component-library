import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledDiv>
        {displayedValue}
        <StyledIcon id='chevron-down' strokeWidth={2} size={24}/>
      </StyledDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const StyledDiv = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-weight: 400;
  font-size: 16 / 16 rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  top: 0;
  bottom: 0;
  margin: auto;

  pointer-events: none;
`;

export default Select;
