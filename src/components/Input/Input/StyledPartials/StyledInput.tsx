import styled from 'styled-components';

const StyledInput = styled.div<{ error: any; touched?: boolean }>`
  position: relative;

  & > label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray};
    transition: ${({ theme }) => theme.transitions.veryFast};
    transform-origin: left top;
    pointer-events: none;
    padding: 0 ${({ theme }) => theme.sizes.lg};
  }

  & > input {
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid
      ${({ theme, error, touched }) =>
        touched ? theme.colors[error ? 'orange' : 'green'] : theme.colors.gray};
    padding: ${({ theme }) => theme.sizes.lg} 2.5rem
      ${({ theme }) => theme.sizes.lg} ${({ theme }) => theme.sizes.lg};
    transition: ${({ theme }) => theme.transitions.veryFast};
    font-weight: 600;

    &:focus {
      border-color: ${({ theme }) => theme.colors.green};
    }

    &:focus ~ label {
      top: 10%;
      transform: translateY(-10%) scale(0.9);
      margin-left: 0.2rem;
    }

    &:not(:placeholder-shown) ~ label {
      top: 10%;
      transform: translateY(-10%) scale(0.9);
      margin-left: 0.2rem;
    }

    &:not(:focus)::placeholder {
      opacity: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  & > .validation-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;

    & > .invalid-icon {
      display: ${({ error, touched }) =>
        touched && !!error ? 'block' : 'none'};
    }

    & > .valid-icon {
      display: ${({ error, touched }) =>
        touched && !error ? 'block' : 'none'};
    }
  }
`;

export default StyledInput;
