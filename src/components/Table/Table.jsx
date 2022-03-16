import React from 'react';
import * as S from './Table.styles';
import { useTable } from './hooks/useTable';
// import { Tooltip } from '../Tooltip/Tooltip';

export default function Table() {
  const { renderDataAfterNumericFilter } = useTable();

  const header = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain',
    'surface_water', 'population', 'films', 'created', 'edited', 'url'];

  /**
     * Filtered header array ommiting name item
     */
  const H = header.filter((item) => item !== 'name');

  return (
    <S.Wrapper>
      <S.Tabela>
        <S.Header>
          <tr>
            {header.map((item, index) => <th key={ index }>{item}</th>)}
          </tr>
        </S.Header>
        <tbody>
          {renderDataAfterNumericFilter
          && renderDataAfterNumericFilter.map((list) => (
            <tr key={ list.name }>
              <S.TableItem data-testid="planet-name">{list.name}</S.TableItem>
              {H.map((item, idx) => (
                // <Tooltip key={ idx } content={ list[item] }>
                <S.TableItem key={ idx }>{list[item]}</S.TableItem>
                // </Tooltip>))}
              ))}
            </tr>
          ))}
        </tbody>
      </S.Tabela>
    </S.Wrapper>
  );
}
