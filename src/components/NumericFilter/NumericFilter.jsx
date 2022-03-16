import React, { useContext, useEffect, useState } from 'react';
import * as S from './NumericFilter.styles';
import { APIContext } from '../../services/context';

export default function FilterNumeric() {
  const {
    filters,
    setFilters,
    columns,
  } = useContext(APIContext);

  const [filterValues, setFilterValues] = useState({});
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterValues;

  useEffect(() => {
    setFilterValues({
      column: columns[0],
      comparison: 'maior que',
      value: '0',
    });
  }, [columns]);

  const onChangeNumericFilter = ({ target }) => {
    setFilterValues({
      ...filterValues,
      [target.name]: target.value });
  };

  const handleBtnFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, filterValues],
    });
  };
  return (
    <S.Wrapper>
      <S.Dropdown
        value={ column }
        name="column"
        onChange={ onChangeNumericFilter }
        data-testid="column-filter"
      >
        {columns.map((columnOption) => (
          <S.DropdownItem key={ columnOption }>{columnOption}</S.DropdownItem>
        ))}
      </S.Dropdown>
      <S.Dropdown
        value={ comparison }
        name="comparison"
        onChange={ onChangeNumericFilter }
        data-testid="comparison-filter"
      >
        {comparisons.map((comparisonOption) => (
          <S.DropdownItem key={ comparisonOption }>{comparisonOption}</S.DropdownItem>
        ))}
      </S.Dropdown>
      <S.NumericInput
        type="number"
        value={ value }
        name="value"
        data-testid="value-filter"
        placeholder="0"
        onChange={ onChangeNumericFilter }
      />
      <S.FilterButton
        primary
        type="button"
        data-testid="button-filter"
        onClick={ handleBtnFilter }
      >
        Filter
      </S.FilterButton>
    </S.Wrapper>
  );
}
