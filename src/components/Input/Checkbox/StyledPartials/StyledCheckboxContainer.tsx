import styled from 'styled-components';

const StyledCheckboxContainer = styled.label`
  line-height: 1;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.sizes.base} auto;
  gap: 0.5rem;
}
`;

export default StyledCheckboxContainer;
