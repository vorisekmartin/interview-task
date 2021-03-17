import Head from 'next/head'
import Lectors  from '../src/components/Lectors/Lectors';
import GlobalStyle from '../src/styled/global';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Lectors />
    </>
  
  )
}
