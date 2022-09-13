import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter()
  return (
   <ProductContainer>
    <ImageContainer>
      {/* <Image /> */}
    </ImageContainer>

    <ProductDetails>
      <h1>Camiseta</h1>
      <span>R$ 79,90</span>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat debitis deserunt doloribus impedit neque. Beatae autem porro maxime ut sunt laudantium blanditiis ad ipsam voluptatem, excepturi inventore, tenetur mollitia?</p>
    
    <button>
      Comprar agora
    </button>
    </ProductDetails>
   </ProductContainer>
  );
}
