import styled from 'styled-components';

const StyledFinish = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -${({ theme }) => theme.sizes.lg};

  & > h1 {
    font-size: ${({ theme }) => theme.sizes.xl};
    color: rgba(255, 138, 0, 1);
    font-weight: 600;
    line-height: 1;
  }

  & > .information {
    margin: ${({ theme }) => theme.sizes.base} 0;

    & > .order-id {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }
`;

export default StyledFinish;
