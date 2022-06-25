import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  & > p {
    font-size: 0.8rem;
  }
`;

export default StyledBackButton;
