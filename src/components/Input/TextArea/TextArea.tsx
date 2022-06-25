import { forwardRef, TextareaHTMLAttributes, useRef } from 'react';
import { MdCheck, MdOutlineClear } from 'react-icons/md';
import { getColorTheme } from '@/utils/theme';
import StyledTextArea from './StyledParts';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error: any;
  touched?: boolean;
  length: number;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, name, error, touched, maxLength, length = 0, ...props }, ref) => {
    return (
      <StyledTextArea error={error} touched={touched}>
        <textarea ref={ref} name={name} maxLength={maxLength} {...props} />
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
        <p className="text-counter">
          {length}/{maxLength}
        </p>
      </StyledTextArea>
    );
  },
);
