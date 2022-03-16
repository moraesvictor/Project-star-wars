import React, { useState } from 'react';
import * as S from './Tooltip.styles';

const DELAY = 300;

export const Tooltip = (prop) => {
  let timeOut;

  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    timeOut = setTimeout(() => {
      setVisible(true);
    }, prop.delay || DELAY);
  };

  const hideTooltip = () => {
    clearInterval(timeOut);
    setVisible(false);
  };

  return (
    <S.TooltipWrapper
      onMouseEnter={ showTooltip }
      onMouseLeave={ hideTooltip }
    >
      {prop.children}
      {visible && (
        <S.TooltipContent>
          {prop.content}
        </S.TooltipContent>) }
    </S.TooltipWrapper>
  );
};
