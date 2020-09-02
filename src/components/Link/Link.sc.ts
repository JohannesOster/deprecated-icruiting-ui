import styled from 'styled-components';

export const BaseLink = styled.a`
  ${({theme}) => theme.typography.font200};
  color: ${({theme}) => theme.colors.typographyPrimary};

  transition-property: color;
  transition-duration: ${({theme}) => theme.animation.timing100};
  transition-timing-function: ${({theme}) => theme.animation.linearCurve};

  &:hover {
    color: ${({theme}) => theme.colors.typographySecondary};
  }
`;
