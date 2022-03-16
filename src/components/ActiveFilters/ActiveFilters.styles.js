import styled from 'styled-components';
import * as $Tokens from '../../$Tokens/Colors';

export const Label = styled.label`

  h3 {
  color: ${$Tokens.TEXT_MEDIUM};
  margin-left: 4px;
}`;

export const ActiveFilter = styled.li`
  color: ${$Tokens.TEXT_ACTIVE};
  display: flex;
  white-space: nowrap;
  margin-bottom: 8px;

  &:hover {
    color: ${$Tokens.TEXT_ACTIVE_DARK};
 
    } 
`;

export const ActiveFilterWrapper = styled.div`
  display: flex;
  max-width: 240px;
  align-items: center;
  `;

export const CloseButton = styled.button`
  border-radius: 8px;
  border: 1px solid ${$Tokens.BUTTON_GHOST_BORDER};
  background-color: ${$Tokens.BUTTON_TERTIARY_VARIANT_BACKGROUND};
  color: ${$Tokens.TEXT_DARK};
  margin-left: 4px;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    background: ${$Tokens.BUTTON_TERTIARY_HOVER_BACKGROUND}
  }
`;

export const Wrapper = styled.div`
  background-color: ${$Tokens.SEPARATOR_DARK};
`;
