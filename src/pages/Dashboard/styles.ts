import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 16px;
  margin-top: -140px;

  display: grid;

  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
  grid-gap: 32px;
`;
