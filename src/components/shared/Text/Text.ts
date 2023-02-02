import styled from 'styled-components';

enum ISize {
  '4x-large' = '4rem',
  '3x-large' = '3rem',
  '2x-large' = '2.25rem',
  'x-large' = '2rem',
  large = '1.5rem',
  medium = '1.25rem',
  base = '1rem',
}

enum IWeight {
  extralight = 200,
  light = 300,
  normal = 400,
  semibold = 600,
  bold = 700,
  extrabold = 800,
  black = 900,
}

interface IText {
  size?: keyof typeof ISize;
  weight?: keyof typeof IWeight;
  color?: string;
}

const Text = styled.span<IText>`
  font-size: ${({ size }) => (size ? ISize[size] : ISize.base)};
  font-weight: ${({ weight }) => (weight ? IWeight[weight] : IWeight.normal)};
  color: ${(props) => props.color || 'inherit'};
`;

export default Text;
