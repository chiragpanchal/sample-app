import {Fragment} from "react";
import Link from 'next/link';

export default function Home() {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <ul>
                <li><Link href='./blog/main' >Blog</Link></li>
                <li><Link href='./clients/' >Clients</Link></li>
                <li><Link href='./portfolio/' >Portfolio</Link></li>
                <li><Link href='./about/' >About</Link></li>
            </ul>
        </Fragment>
    )
}
