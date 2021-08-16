import styled from '@emotion/styled'

export const Row = styled.div<{
    gap?: number | boolean,
    between?: boolean,
    marginBottom?: number
}>`
  display: flex;
  align-items: center;
  justify-content: ${ props => props.between ? 'space-between' : undefined };
  margin-bottom: ${ props => props.marginBottom + 'rem' };

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${ p => typeof p.gap === 'number' ? p.gap + 'rem' : p.gap ? "2rem" : undefined };
  }
`