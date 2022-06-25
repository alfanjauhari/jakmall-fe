import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledCheckbox, StyledCheckboxContainer } from './StyledPartials';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    return (
      <StyledCheckboxContainer>
        <StyledCheckbox type="checkbox" ref={ref} {...props} />
        {label}
      </StyledCheckboxContainer>
    );
  },
);
