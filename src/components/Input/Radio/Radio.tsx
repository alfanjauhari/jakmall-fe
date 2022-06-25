import { getColorTheme } from '@/utils/theme';
import { forwardRef, InputHTMLAttributes } from 'react';
import { MdCheck, MdOutlineClear } from 'react-icons/md';
import StyledRadioContainer from './StyledParts';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  nominal?: string;
  error: any;
  isCurrent: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, id, nominal, error, isCurrent, ...props }, ref) => {
    return (
      <StyledRadioContainer
        isCurrent={isCurrent}
        error={error}
        hasNominal={!!nominal}
      >
        <input type="radio" ref={ref} id={id} {...props} />
        <label htmlFor={id}>
          <h1>{label}</h1>
          {nominal && <p>{nominal}</p>}
        </label>
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
      </StyledRadioContainer>
    );
  },
);
