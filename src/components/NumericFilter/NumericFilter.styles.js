import styled from 'styled-components';
import * as $Tokens from '../../$Tokens/Colors';

export const NumericInput = styled.input`
border-radius: 8px;
background-color: ${$Tokens.INPUT_BACKGROUND};
margin-left: 5px;
`;

export const FilterButton = styled.button`
border-radius: 8px;
border: 1px solid ${$Tokens.BUTTON_GHOST_BORDER};
background-color: ${$Tokens.BUTTON_TERTIARY_VARIANT_BACKGROUND};
color: ${(props) => props.primary && $Tokens.BUTTON_PRIMARY_BACKGROUND};
margin-left: 4px;
cursor: pointer;

&:hover {
  background: ${$Tokens.BUTTON_TERTIARY_HOVER_BACKGROUND}
}
`;

export const Dropdown = styled.select`
border-radius: 8px;
background-color: ${$Tokens.INPUT_BACKGROUND};
margin-left: 5px;
cursor: pointer;
`;

export const DropdownItem = styled.option`
color: ${$Tokens.TEXT_LIGHT};
cursor: pointer;
`;

export const Wrapper = styled.div`
 display: flex;
 margin-top: 8px;
 `;
