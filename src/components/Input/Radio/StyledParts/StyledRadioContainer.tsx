import styled from 'styled-components';

const StyledRadioContainer = styled.div<{
  hasNominal: boolean;
  error: any;
  isCurrent: boolean;
}>`
  position: relative;
  padding: ${({ theme }) => theme.sizes.xl};

  & > label, input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & > input {
    opacity: 0;

    &:checked ~ label {
      border-color: ${({ theme }) => theme.colors.green};
    }

    &:checked ~ .valid-icon {
      display: block;
    }

    &:focus ~ label {
      border-color: ${({ theme }) => theme.colors.orange};
    }
  }

  & > label {
    cursor: pointer;
    padding: ${({ theme }) => theme.sizes.base};
    border: 1px solid black;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h1 {
      font-size: ${({ hasNominal }) => (hasNominal ? '0.8rem' : '1.2rem')};
      margin-bottom: ${({ hasNominal }) => (hasNominal ? '0.2rem' : '0')};
    }

    & > p {
      font-weight: 600;
    }
  }

  & > .validation-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;

    & > .invalid-icon {
      display: ${({ error, isCurrent }) =>
        !!error && isCurrent ? 'block' : 'none'};
    }

    & > .valid-icon {
      display: ${({ error, isCurrent }) =>
        !error && isCurrent ? 'block' : 'none'};
    }
  }
}
`;

export default StyledRadioContainer;
