import { forwardRef, InputHTMLAttributes } from 'react';
import { MdCheck, MdOutlineClear } from 'react-icons/md';
import { getColorTheme } from '@/utils/theme';
import StyledInput from './StyledPartials';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error: any;
  touched?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, value, error, touched, ...props }, ref) => {
    return (
      <StyledInput error={error} touched={touched}>
        <input ref={ref} value={value} name={name} {...props} />
        <label htmlFor={name}>{label}</label>
        <div className="validation-icon">
          <MdOutlineClear
            size={20}
            color={getColorTheme('orange', false) as string}
            className="invalid-icon"
          />
          <MdCheck
            size={20}
            color={getColorTheme('green', false) as string}
            className="valid-icon"
          />
        </div>
      </StyledInput>
    );
  },
);
