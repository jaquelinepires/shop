import { Handbag } from 'phosphor-react';
import { ComponentProps } from 'react';
import { Container } from './styles';

type CartButtonProps = ComponentProps<typeof Container>;

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <Container {...rest}>
       <Handbag weight="bold"/>
    </Container>
  );
}
