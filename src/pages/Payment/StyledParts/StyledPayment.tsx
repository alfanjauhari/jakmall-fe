import styled from 'styled-components';

const StyledPayment = styled.div`
  & > .header {
    margin-bottom: ${({ theme }) => theme.sizes.base};

    & > h1 {
      color: ${({ theme }) => theme.colors.orange};
      font-size: ${({ theme }) => theme.sizes.xl};
      font-weight: 600;
    }
  }

  & > .radio-group {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.sizes.base};

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default StyledPayment;
