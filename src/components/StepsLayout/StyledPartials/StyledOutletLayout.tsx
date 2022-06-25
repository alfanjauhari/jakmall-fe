import FullHeightDiv from '@/components/FullHeightDiv';
import styled from 'styled-components';

const StyledOutletLayout = styled(FullHeightDiv)`
  margin-top: ${({ theme }) => theme.sizes.lg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > .outlet {
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 60%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      width: 70%;
    }
  }

  & > hr.divider {
    border: 0.5px solid ${({ theme }) => theme.colors.gray};
    width: 100%;
    margin-top: ${({ theme }) => theme.sizes.base};
    opacity: 0.5;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: auto;
      width: 0;
      margin-bottom: 0;
      margin-top: 0;
      margin-right: ${({ theme }) => theme.sizes.base};
      margin-left: ${({ theme }) => theme.sizes.base};
    }
  }

  & > .summary {
    width: 100%;
    margin-top: ${({ theme }) => theme.sizes.lg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    width: 100%;

    & > .summary-header {
      & > .title {
        font-size: ${({ theme }) => theme.sizes.xl};
        color: ${({ theme }) => theme.colors.orange};
        font-weight: 600;
        line-height: 1;
      }

      & > .description {
        margin-top: ${({ theme }) => theme.sizes.base};
        font-size: 0.8rem;
      }
    }

    & > .delivery {
      margin: ${({ theme }) => theme.sizes.xxl} 0;

      & > h3 {
        font-size: 0.8rem;
      }

      & > p {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.green};
      }
    }

    & > .content {
      & > .data-price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > .title {
          color: black;
          opacity: 0.8;
          font-size: 0.8rem;
        }

        & > .price {
          color: black;
          font-weight: 600;
          font-size: 0.8rem;
        }

        &:not(:first-child) {
          margin-top: ${({ theme }) => theme.sizes.base};
        }
      }

      & > .total-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: ${({ theme }) => theme.sizes.lg};

        & > h1 {
          font-size: ${({ theme }) => theme.sizes.lg};
          font-weight: 600;
          color: ${({ theme }) => theme.colors.orange};
        }
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin-top: 0;
      width: 40%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      width: 30%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

export default StyledOutletLayout;
