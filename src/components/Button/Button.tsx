import React from 'react';
import {useTheme} from 'styled-components';
import {ButtonProps} from './types';
import {BaseButton, LoadingSpinnerContainer} from './Button.sc';
import {LoadingSpinner} from 'components';

export const Button: React.FC<ButtonProps> = ({
  children,
  kind,
  loading,
  disabled,
  ...props
}) => {
  const {colors} = useTheme();

  return (
    <BaseButton loading={loading} kind={kind} disabled={disabled} {...props}>
      <span style={loading ? {opacity: 0, height: 0} : {}}>{children}</span>
      {loading && (
        <LoadingSpinnerContainer>
          <LoadingSpinner
            {...(disabled
              ? {}
              : {
                  foreground: colors.buttonLoadingSpinnerForeground,
                  background: colors.buttonLoadingSpinnerBackground,
                })}
          />
        </LoadingSpinnerContainer>
      )}
    </BaseButton>
  );
};
