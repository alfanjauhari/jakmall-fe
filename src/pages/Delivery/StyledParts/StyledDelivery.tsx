import styled from 'styled-components';

const StyledDelivery = styled.div`
  & > .header {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.sizes.base};
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.sizes.base};

    & > h1 {
      color: ${({ theme }) => theme.colors.orange};
      font-size: ${({ theme }) => theme.sizes.xl};
      font-weight: 600;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex-direction: row;
    }
  }
`;

export default StyledDelivery;
