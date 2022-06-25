import { MdOutlineChevronRight } from 'react-icons/md';
import styled from 'styled-components';

const StyledDividerIcon = styled(MdOutlineChevronRight)`
  margin-top: ${({ theme }) => theme.sizes.lg};
  transform: rotate(90deg);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: rotate(0);
    margin-top: 0;
    width: 100%;
  }
`;

export default StyledDividerIcon;
