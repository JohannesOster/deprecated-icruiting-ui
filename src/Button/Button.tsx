import React from 'react';
import {ButtonProps} from './types';
import {BaseButton, LoadingSpinner, LoadingSpinnerContainer} from './Button.sc';
import {Link} from '../Link';

export const Button: React.FC<ButtonProps> = ({
  children,
  url,
  kind,
  loading,
  disabled,
  ...props
}) => {
  if (url) return <Link href={url}>{children}</Link>;

  return (
    <BaseButton loading={loading} kind={kind} disabled={disabled} {...props}>
      <span style={loading ? {opacity: 0, height: 0} : {}}>{children}</span>
      {loading && (
        <LoadingSpinnerContainer>
          <LoadingSpinner kind={kind} disabled={disabled} />
        </LoadingSpinnerContainer>
      )}
    </BaseButton>
  );
};
