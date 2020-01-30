import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Header />
    <Home />
    <Footer />
  </div>
);

export default Index;
