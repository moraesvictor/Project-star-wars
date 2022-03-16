import React, { useContext } from 'react';
import { APIContext } from '../../services/context';
import * as S from './ActiveFilters.styles';

const ActiveFilters = () => {
  const { onClickRemoveFilter, filters } = useContext(APIContext);
  return (
    <S.Wrapper>
      <S.Label htmlFor="active-filters">
        <h3>Active Filters</h3>
        <ul>
          { filters.filterByNumericValues.length > 0
                && filters.filterByNumericValues.map((filter, index) => (
                  <S.ActiveFilterWrapper key={ index }>
                    <S.ActiveFilter data-testid="filter" key={ filter.column }>
                      { `${filter.column} ${filter.comparison} ${filter.value} ` }
                    </S.ActiveFilter>
                    <S.CloseButton
                      type="button"
                      id={ filter.column }
                      onClick={ (event) => onClickRemoveFilter(event.target.id) }
                    >
                      x
                    </S.CloseButton>
                  </S.ActiveFilterWrapper>
                ))}
        </ul>

      </S.Label>
    </S.Wrapper>
  );
};

export default ActiveFilters;
