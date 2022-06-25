import { forwardRef, HTMLAttributes, useEffect, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import { UseFormReturn } from 'react-hook-form';
import { mapData, PaymentType, ShipmentType, StoreSchema } from '@/utils';
import { Overwrite } from '@/types';
import {
  StyledBackButton,
  StyledContinueButton,
  StyledDividerIcon,
  StyledOutlet,
  StyledOutletLayout,
  StyledStepsLayout,
} from './StyledPartials';

export type StepsLayoutProps = Overwrite<
  HTMLAttributes<HTMLDivElement>,
  UseFormReturn<StoreSchema>
>;
export const steps = [
  {
    title: 'Delivery',
    path: '/',
  },
  {
    title: 'Payment',
    path: '/payment',
  },
  {
    title: 'Finish',
    path: '/finish',
  },
];

export const StepsLayout = forwardRef<HTMLDivElement, StepsLayoutProps>(
  ({ handleSubmit, trigger, watch, ...props }, ref) => {
    const location = useLocation();
    const navigate = useNavigate();

    const shipmentTypeField = watch('shipment_type');
    const paymentTypeField = watch('payment_type');
    const priceFields = watch(['send_as_dropshipper', 'shipment_type']);

    const currentStep = useMemo(() => {
      const currentStepIndex = steps.findIndex(
        (step) => step.path === location.pathname,
      );

      if (currentStepIndex <= -1) {
        return {
          ...steps[0],
          index: 0,
        };
      }

      return {
        ...steps[currentStepIndex],
        index: currentStepIndex,
      };
    }, [location]);

    const handleChangePage = async (page: string) => {
      const isValid = await trigger(undefined, { shouldFocus: true });

      if (steps.findIndex((step) => step.path === page) < currentStep.index) {
        navigate(page);

        return;
      }

      if (isValid) {
        navigate(page);
      }
    };

    const handleContinue = (values: StoreSchema) => {
      const nextRoute = steps[currentStep.index + 1].path;

      navigate(nextRoute);
    };

    const shipmentData = mapData.shipments[shipmentTypeField as ShipmentType];

    const calculatePrices = useMemo(() => {
      let price: number = 500000;

      if (priceFields[0]) {
        price += 5900;
      }

      if (priceFields[1]) {
        price += mapData.shipments[priceFields[1] as ShipmentType].price;
      }

      return price;
    }, [priceFields]);

    return (
      <StyledStepsLayout ref={ref} {...props}>
        <div className="steppers">
          {steps.map((step, index) => (
            <div className="step" key={step.path}>
              <button onClick={() => handleChangePage(step.path)} type="button">
                <p
                  className={`step-page ${
                    step.path === location.pathname ? 'active' : ''
                  }`}
                >
                  {index + 1}
                </p>
                <p className="step-title">{step.title}</p>
              </button>
              {index + 1 !== steps.length && <StyledDividerIcon size={20} />}
            </div>
          ))}
        </div>
        <StyledOutlet>
          {location.pathname !== '/finish' && (
            <StyledBackButton
              to={steps[currentStep.index > 0 ? currentStep.index - 1 : 0].path}
            >
              <MdOutlineArrowBack size={15} />
              <p>
                {currentStep.index <= 0
                  ? 'Back to Cart'
                  : `Back to ${steps[currentStep.index - 1].title}`}
              </p>
            </StyledBackButton>
          )}
          <StyledOutletLayout>
            <div className="outlet">
              <Outlet />
            </div>
            <hr className="divider" />
            <div className="summary">
              <div className="summary-header">
                <h1 className="title">Summary</h1>
                <p className="description">10 items purchased</p>
              </div>
              {shipmentData && (
                <div className="delivery">
                  <h3>Delivery estimation</h3>
                  <p>
                    {shipmentData.estimation} by {shipmentData.name}
                  </p>
                </div>
              )}
              <div className="content">
                {priceFields
                  .filter((data) => !!data)
                  .map((data) => (
                    <div
                      className="data-price"
                      key={
                        typeof data === 'boolean'
                          ? 'dropshipper'
                          : (data as string)
                      }
                    >
                      <p className="title">
                        {typeof data === 'boolean' ? (
                          'Dropshipping fee'
                        ) : (
                          <>
                            <span style={{ fontWeight: 600 }}>
                              {mapData.shipments[data as ShipmentType].name}
                            </span>
                            <span> shipment</span>
                          </>
                        )}
                      </p>
                      <p className="price">
                        {Intl.NumberFormat('en-US').format(
                          typeof data === 'boolean'
                            ? 5900
                            : mapData.shipments[data as ShipmentType].price,
                        )}
                      </p>
                    </div>
                  ))}
                <div className="total-price">
                  <h1>Total</h1>
                  <h1>{Intl.NumberFormat('en-US').format(calculatePrices)}</h1>
                </div>
                {location.pathname !== '/finish' && (
                  <StyledContinueButton
                    block
                    onClick={handleSubmit(handleContinue)}
                  >
                    {currentStep.index === 1 && !!paymentTypeField
                      ? `Pay with ${
                          mapData.payments[paymentTypeField as PaymentType].name
                        }`
                      : 'Continue'}
                  </StyledContinueButton>
                )}
              </div>
            </div>
          </StyledOutletLayout>
        </StyledOutlet>
      </StyledStepsLayout>
    );
  },
);
