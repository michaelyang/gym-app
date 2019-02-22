import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => (
    <nav>
        <Link href="/404">
            <a>This will take you to 404</a>
        </Link>
    </nav>
);

export default Nav;
