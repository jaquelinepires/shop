import { AppProps } from "next/app"
import Link from "next/link"
import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Container>
    <Header>
      <Link href="/">
        Shop
      </Link>
    </Header>
    
    < Component {...pageProps} />
  </Container>

  )
}
