import styled from 'styled-components';

const StyledDeliveryInputList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.sizes.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export default StyledDeliveryInputList;
