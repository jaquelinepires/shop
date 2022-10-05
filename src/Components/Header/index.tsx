
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Cart } from '../Cart';
import { Container } from './styles';


export function Header() {
  const { pathname } = useRouter()
  const showCartButton = pathname !== "/success";
  
  return (
    <Container>
        <Link href="/">
          Shop
        </Link>

        {showCartButton && <Cart />}
     </Container>
  );
}
