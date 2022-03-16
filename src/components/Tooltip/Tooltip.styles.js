import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  display: table-cell;
  text-align: center;
`;

export const TooltipContent = styled.div`
 text-align: center;
 display: table-cell;
 position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

 &::before {
  content: " ";
  left: 50%;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
 }
`;
