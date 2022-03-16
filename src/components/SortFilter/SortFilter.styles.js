import styled from 'styled-components';
import * as $Tokens from '../../$Tokens/Colors';

export const InputRadio = styled.input`
margin-left: 5px;
cursor: pointer;
`;

export const Label = styled.label`
align-items: center;
cursor: pointer;
margin-right: 4px;

&:hover {
  color: ${$Tokens.BUTTON_PRIMARY_HOVER_BACKGROUND} 
}
`;

export const Dropdown = styled.select`
border-radius: 8px;
background-color: ${$Tokens.INPUT_BACKGROUND};
cursor: pointer;
margin-left: 4px;
margin-right: 4px;
`;

export const SorterButton = styled.button`
border-radius: 8px;
border: 1px solid ${$Tokens.BUTTON_GHOST_BORDER};
background-color: ${$Tokens.BUTTON_TERTIARY_VARIANT_BACKGROUND};
color: ${$Tokens.TEXT_DARK};
margin-left: 4px;
cursor: pointer;

&:hover {
  background: ${$Tokens.BUTTON_TERTIARY_HOVER_BACKGROUND}
}
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 8px;

`;
