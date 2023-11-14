import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Menu from '@/components/Menu';
import Price from '@/components/Price';
import Products from '@/components/Products';
import Roadmap from '@/components/Roadmap';
import Vision from '@/components/Vision';

export default function Home() {
  const [scrollPosition, setPosition] = useState({ scrollY: 0 });
  console.log('🚀 ~ file: index.tsx:14 ~ Home ~ scrollPosition:', scrollPosition);

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollY: window.scrollY });
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <div id='header'>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' style={{ borderRadius: '50%' }} />
        <title>Compare-Ai</title>
      </Head>
      <Menu></Menu>
      <Header></Header>
      <Introduction></Introduction>
      <Products></Products>
      <Price></Price>
      <Vision positionScroll={scrollPosition.scrollY}></Vision>
      <Roadmap></Roadmap>
      {/* <Partners></Partners> */}
      <Footer></Footer>
    </div>
  );
}
