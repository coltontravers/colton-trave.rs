import Link from 'next/link';
import Header from "../components/Header/Header"

const Index = () => (
    <div>
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <Header/>
        <p>Hello Next.js</p>
    </div>
  );
  
  export default Index;