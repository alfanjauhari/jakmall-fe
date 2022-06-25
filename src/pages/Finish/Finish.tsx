import { StyledBackButton } from '@/components';
import { initialValues, mapData, ShipmentType, StoreSchema } from '@/utils';
import generateOrderID from '@/utils/generateOrderId';
import { UseFormReturn } from 'react-hook-form';
import { MdOutlineArrowBack } from 'react-icons/md';
import StyledFinish from './StyledParts';

export default function Finish({
  watch,
  reset,
}: Omit<UseFormReturn<StoreSchema>, 'handleSubmit'>) {
  const shipmentData =
    mapData.shipments[watch('shipment_type') as ShipmentType];

  return (
    <StyledFinish>
      <h1>Thank you</h1>
      <div className="information">
        <div className="order-id">ORDER ID: {generateOrderID()}</div>
        <p>
          Your order will be delivered {shipmentData.estimation} with{' '}
          {shipmentData.name}
        </p>
      </div>
      <StyledBackButton to="/" onClick={() => reset(initialValues)}>
        <MdOutlineArrowBack size={15} />
        <p>Go to homepage</p>
      </StyledBackButton>
    </StyledFinish>
  );
}
