import { getColorTheme } from '@/utils/theme';
import styled from 'styled-components';

const StyledStepsLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.lg};
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  & > .steppers {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: ${({ theme }) => theme.sizes.lg};
    margin: ${({ theme }) => `-${theme.sizes.lg}`}
      ${({ theme }) => `-${theme.sizes.lg}`} 0;
    gap: ${({ theme }) => theme.sizes.lg};
    background-color: ${({ theme }) => theme.colors.background};

    & > .step {
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.orange};

      & > button {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & > .step-page {
          border-radius: 999px;
          color: ${({ theme }) => theme.colors.white};
          background-color: ${getColorTheme('orange', false, 0.5)};
          height: 25px;
          width: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
        }

        & > .step-page.active {
          background-color: ${({ theme }) => theme.colors.orange};
        }
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &:last-child {
          width: auto;
        }
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex-direction: row;
      justify-content: space-between;
      transform: translateX(50%);
      border-radius: 999px;
      position: absolute;
      right: 50%;
      top: -0.5rem;
      width: 60%;
    }
  }
`;

export default StyledStepsLayout;
