import { Radio } from '@/components';
import { mapData, StoreSchema } from '@/utils';
import { UseFormReturn } from 'react-hook-form';
import StyledPayment from './StyledParts';

export default function Shipment({
  register,
  formState: { errors },
  watch,
}: Omit<UseFormReturn<StoreSchema>, 'handleSubmit'>) {
  return (
    <StyledPayment>
      <div className="header">
        <h1>Shipment</h1>
      </div>
      <div className="radio-group">
        {Object.entries(mapData.shipments).map(([key, data]) => (
          <Radio
            {...register('shipment_type', {
              required: true,
            })}
            label={data.name}
            value={key}
            id={key}
            nominal={Intl.NumberFormat('en-US').format(data.price)}
            key={key}
            error={errors.shipment_type}
            isCurrent={watch('shipment_type') === key}
          />
        ))}
      </div>
      <div style={{ margin: '1rem 0' }} />
      <div className="header">
        <h1>Payment</h1>
      </div>
      <div className="radio-group">
        {Object.entries(mapData.payments).map(([key, data]) => (
          <Radio
            {...register('payment_type')}
            label={data.name}
            value={key}
            id={key}
            nominal={
              data.saldo
                ? Intl.NumberFormat('en-US').format(data.saldo)
                : undefined
            }
            key={key}
            error={errors.payment_type}
            isCurrent={watch('payment_type') === key}
          />
        ))}
      </div>
    </StyledPayment>
  );
}
