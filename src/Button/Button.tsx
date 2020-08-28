import React from 'react';
import {ButtonProps} from './types';
import {BaseButton, LoadingSpinner, LoadingSpinnerContainer} from './Button.sc';
import {Link} from '../Link';

export const Button: React.FC<ButtonProps> = ({
  children,
  url,
  kind,
  isLoading,
  disabled,
  ...props
}) => {
  if (url) return <Link href={url}>{children}</Link>;

  return (
    <BaseButton
      isLoading={isLoading}
      kind={kind}
      disabled={disabled}
      {...props}
    >
      <span style={isLoading ? {opacity: 0, height: 0} : {}}>{children}</span>
      {isLoading && (
        <LoadingSpinnerContainer>
          <LoadingSpinner kind={kind} disabled={disabled} />
        </LoadingSpinnerContainer>
      )}
    </BaseButton>
  );
};
