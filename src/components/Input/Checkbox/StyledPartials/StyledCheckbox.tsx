import styled from 'styled-components';

const StyledCheckbox = styled.input`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  display: grid;
  place-content: center;
  border: 2px solid #000;
  transform: translateY(-0.075em);
  cursor: pointer;

  &:before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: ${({ theme }) => theme.colors.green};
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.green};
  }

  &:checked:before {
    transform: scale(1);
  }
`;

export default StyledCheckbox;
