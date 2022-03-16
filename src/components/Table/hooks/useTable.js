import { useContext } from 'react';
import { APIContext } from '../../../services/context';

export const useTable = () => {
  const { applyFilter, filters } = useContext(APIContext);
  const renderDataAfterNumericFilter = applyFilter();

  function sortData(dataTable) {
    const sortColumn = filters.order.column;
    const isString = !parseInt(dataTable[0][sortColumn], 10);
    const isAscending = filters.order.sort === 'ASC';
    const DECRESCENT = -1;
    const order = isAscending ? 1 : DECRESCENT;

    return dataTable.sort((a, b) => (isString
      ? (a[sortColumn].localeCompare(b[sortColumn]) * order)
      : (a[sortColumn] - b[sortColumn]) * order));
  }
  if (renderDataAfterNumericFilter.length > 0) {
    sortData(renderDataAfterNumericFilter);
  }

  return { renderDataAfterNumericFilter };
};
