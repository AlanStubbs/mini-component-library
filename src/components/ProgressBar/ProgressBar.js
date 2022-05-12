/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    "height": 16 + "px",
    "padding": 4 + "px",
    "borderRadius": 8 + "px",
  },
  medium: {
    "height": 12 + "px",
    "padding": 0 + "px",
    "borderRadius": 4 + "px",
  },
  small: {
    "height": 8 + "px",
    "padding": 0 + "px",
    "borderRadius": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return <StyledProgressBar 
    role="progressbar" 
    aria-valuemin={0} 
    aria-valuemax={100} 
    aria-valuenow={value}
    style={{ 
      '--borderRadius': styles.borderRadius, 
      '--padding': styles.padding }}
    > 
      <VisuallyHidden>{value}%</VisuallyHidden>
      <CornerTrimmer>
        <StyledProgressValue style={{
          '--height': styles.height,
          '--width': value + '%'
        }}>
        </StyledProgressValue>
      </CornerTrimmer>
  </StyledProgressBar>;
};

const CornerTrimmer = styled.div`
  border-radius: 4px;
  /* trim corners to radius as bar approaches 100% */
  overflow: hidden;
`;

const StyledProgressBar = styled.div`
  border-radius: var(--borderRadius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const StyledProgressValue = styled.div`
  height: var(--height);
  width: var(--width);

  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
