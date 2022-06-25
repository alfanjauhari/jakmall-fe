import { Checkbox, Input, TextArea } from '@/components';
import { StoreSchema } from '@/utils';
import { ChangeEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { StyledDelivery, StyledDeliveryInputList } from './StyledParts';

export default function Delivery({
  register,
  watch,
  formState: { errors, touchedFields },
  setValue,
}: Omit<UseFormReturn<StoreSchema>, 'handleSubmit'>) {
  const emailPatternValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <form>
      <StyledDelivery>
        <div className="header">
          <h1>Delivery</h1>
          <Checkbox
            label="Send as dropshipper"
            {...register('send_as_dropshipper', {
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                const { checked } = event.target;

                if (checked) {
                  setValue('dropshipper_name', null);
                  setValue('dropshipper_phone_number', null);
                }
              },
            })}
          />
        </div>
        <StyledDeliveryInputList>
          <Input
            placeholder="Email"
            label="Email"
            error={errors.email}
            touched={touchedFields.email}
            {...register('email', {
              required: true,
              pattern: emailPatternValidation,
            })}
          />
          <Input
            placeholder="Dropshipper Name"
            label="Dropshipper Name"
            error={errors.dropshipper_name}
            touched={touchedFields.dropshipper_name}
            disabled={!watch('send_as_dropshipper')}
            {...register('dropshipper_name', {
              required: !!watch('send_as_dropshipper'),
            })}
          />
          <Input
            placeholder="Phone Number"
            label="Phone Number"
            error={errors.phone_number}
            touched={touchedFields.phone_number}
            {...register('phone_number', {
              required: true,
              pattern: /[0-9,+-]/g,
              minLength: 6,
              maxLength: 20,
            })}
          />
          <Input
            placeholder="Dropshipper Phone Number"
            label="Dropshipper Phone Number"
            error={errors.dropshipper_phone_number}
            touched={touchedFields.dropshipper_phone_number}
            disabled={!watch('send_as_dropshipper')}
            {...register('dropshipper_phone_number', {
              required: !!watch('send_as_dropshipper'),
              pattern: /[0-9,+-]/g,
              minLength: 6,
              maxLength: 20,
            })}
          />
          <TextArea
            placeholder="Delivery Address"
            label="Delivery Address"
            error={errors.delivery_address}
            touched={touchedFields.delivery_address}
            maxLength={120}
            length={watch('delivery_address')?.length || 0}
            {...register('delivery_address', {
              required: true,
              maxLength: 120,
            })}
          />
        </StyledDeliveryInputList>
      </StyledDelivery>
    </form>
  );
}
