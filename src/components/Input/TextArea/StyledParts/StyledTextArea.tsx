import styled from 'styled-components';

const StyledTextArea = styled.div<{ error: any; touched?: boolean }>`
  position: relative;

  & > label {
    position: absolute;
    left: 0;
    top: ${({ theme }) => theme.sizes.lg};
    color: ${({ theme }) => theme.colors.gray};
    transition: ${({ theme }) => theme.transitions.veryFast};
    transform-origin: left top;
    pointer-events: none;
    padding: 0 ${({ theme }) => theme.sizes.lg};
  }

  & > textarea {
    width: 100%;
    outline: none;
    border: 1px solid
      ${({ theme, error, touched }) =>
        touched ? theme.colors[error ? 'orange' : 'green'] : theme.colors.gray};
    padding: ${({ theme }) => theme.sizes.lg} 2.5rem
      ${({ theme }) => theme.sizes.lg} ${({ theme }) => theme.sizes.lg};
    transition: ${({ theme }) => theme.transitions.veryFast};
    font-weight: 600;
    resize: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.green};
    }

    &:focus ~ label {
      top: 5%;
      transform: translateY(-5%) scale(0.9);
      margin-left: 0.2rem;
    }

    &:not(:placeholder-shown) ~ label {
      top: 5%;
      transform: translateY(-5%) scale(0.9);
      margin-left: 0.2rem;
    }

    &:not(:focus)::placeholder {
      opacity: 0;
    }
  }

  & > .validation-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ theme }) => theme.sizes.base};

    & > .invalid-icon {
      display: ${({ error, touched }) =>
        touched && !!error ? 'block' : 'none'};
    }

    & > .valid-icon {
      display: ${({ error, touched }) =>
        touched && !error ? 'block' : 'none'};
    }
  }

  & > .text-counter {
    font-size: 0.6rem;
    position: absolute;
    right: ${({ theme }) => theme.sizes.base};
    bottom: ${({ theme }) => theme.sizes.base};
    opacity: 0.8;
    font-weight: 600;
  }
`;

export default StyledTextArea;
