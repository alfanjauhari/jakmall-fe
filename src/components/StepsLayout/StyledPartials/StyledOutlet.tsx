import FullHeightDiv from '@/components/FullHeightDiv';
import styled from 'styled-components';

const StyledOutlet = styled(FullHeightDiv)`
  margin-top: ${({ theme }) => theme.sizes.lg};
`;

export default StyledOutlet;
