import styled from 'styled-components';
import * as $Tokens from '../../$Tokens/Colors';

export const Wrapper = styled.div``;

export const Tabela = styled.table`
border: 1px solid  ${$Tokens.SKELETON_LIGHT};

th {
  border: 1px solid ${$Tokens.CHECKBOX_BORDER};
  border-radius: 8px;
  margin-right: 8px;
  

}
`;

export const TableItem = styled.td`
  text-align: center;
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid ${$Tokens.CHECKBOX_BORDER};
  border-left: none;
  border-right: none;

  &:first-child {
    border-left: 1px solid ${$Tokens.CHECKBOX_BORDER};;
  }

  &:last-child {
    border-right: 1px solid ${$Tokens.CHECKBOX_BORDER};;
  }
`;

export const Header = styled.thead`
border-bottom: 1px solid ${$Tokens.SKELETON_MEDIUM};
`;
