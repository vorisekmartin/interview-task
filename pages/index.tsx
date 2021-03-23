import Head from 'next/head'
import Lecturers  from '../src/components/Lecturers/Lecturers';
import GlobalStyle from '../src/styled/global';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Lecturers />
    </>
  
  )
}
