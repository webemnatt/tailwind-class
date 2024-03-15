import Header from './header';
import Main from './main/index';
import Footer from './footer';
import { mobileMenu, headerMenu } from './data';

export default function Home() {
  return (
    <>
      <Header headerList={headerMenu} mobileList={mobileMenu} />
      <Main />
      <Footer />
    </>
  );
}
