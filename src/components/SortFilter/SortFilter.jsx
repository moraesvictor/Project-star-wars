import React, { useContext, useState } from 'react';
import { APIContext } from '../../services/context';
import * as S from './SortFilter.styles';

function SortFilter() {
  const {
    filters, setFilters } = useContext(APIContext);
  const [filterOrder, setFilterOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const { column, sort } = filterOrder;

  const columns = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'terrain',
    'surface_water',
    'population',
  ];

  const onChangeOrderFilter = ({ target }) => {
    setFilterOrder({
      ...filterOrder,
      [target.name]: target.value,
    });
  };

  const handleBtnSort = () => {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  };

  return (
    <S.Wrapper>
      <S.Dropdown
        value={ column }
        name="column"
        onChange={ onChangeOrderFilter }
        data-testid="column-sort"
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>
        ))}
      </S.Dropdown>
      <span>
        <S.Label htmlFor="ASC">
          Ascendent
          <S.InputRadio
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            id="ASC"
            name="sort"
            onChange={ onChangeOrderFilter }
          />
        </S.Label>
        <S.Label htmlFor="DESC">
          Descendent
          <S.InputRadio
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            id="DESC"
            onChange={ onChangeOrderFilter }
            name="sort"
          />
        </S.Label>
      </span>
      <S.SorterButton
        data-testid="column-sort-button"
        onClick={ handleBtnSort }
        type="submit"
      >
        Sort
      </S.SorterButton>
    </S.Wrapper>
  );
}

export default SortFilter;
