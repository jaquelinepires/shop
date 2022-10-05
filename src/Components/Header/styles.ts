import { styled } from "../../styles"


export const Container = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  button: {
    marginLeft: 'auto'
  },

  a: {
  textDecoration: 'none',
  color: '$gray900',
  fontSize: '$2xl',
  fontWeight: 'bold'
}
})
