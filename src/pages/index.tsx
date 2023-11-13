import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Menu from '@/components/Menu';
import Partners from '@/components/Partners';
import Price from '@/components/Price';
import Products from '@/components/Products';
import Roadmap from '@/components/Roadmap';
import Vision from '@/components/Vision';

export default function Home() {
  return (
    <div>
      <Menu></Menu>
      <Header></Header>
      <Introduction></Introduction>
      <Products></Products>
      <Price></Price>
      <Vision></Vision>
      <Roadmap></Roadmap>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}
