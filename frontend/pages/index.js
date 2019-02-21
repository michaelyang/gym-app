import Link from 'next/link';

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link href="/test">
            <a>test me</a>
        </Link>
    </div>
);
export default Home;
