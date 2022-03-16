import React from 'react';
import styled from 'styled-components';
import Table from './components/Table/Table';
import FilterByName from './components/FilterByName/FilterByName';
import NumericFilter from './components/NumericFilter/NumericFilter';
import ProviderAPI from './services/context';
import SortFilter from './components/SortFilter/SortFilter';
import ActiveFilters from './components/ActiveFilters/ActiveFilters';
import { StarWarsHeader } from './components/StarWarsHeader/StarWarsHeader';

const Wrapper = styled.div`
font-family: cursive;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
`;

const Separator = styled.div``;
function App() {
  return (
    <Wrapper>
      <ProviderAPI>
        <Header>
          <div>
            <FilterByName />
            <NumericFilter />
            <SortFilter />
          </div>
          <StarWarsHeader />
        </Header>
        <Separator>
          <ActiveFilters />
        </Separator>
        <Table />
      </ProviderAPI>
    </Wrapper>
  );
}

export default App;
