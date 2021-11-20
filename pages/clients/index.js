import Link from 'next/link';
import {useRouter} from "next/router";
import clientList from './DUMMY_CLIENT';

const Clients = () => {

    const route = useRouter();
    const clientId = route.query.id;
    console.log(route.query);

    /*const clients = clientList.map((cl) => (
        <li key={cl.id}>
            <Link href={`/clients/${cl.id}`}>{cl.name}</Link>
        </li>
    ))*/

    const clients = clientList.map((cl) => (
        <li key={cl.id}>
            <Link
                href={{
                    pathname: '/clients/[id]',
                    query: {id: cl.id}
                }}
            >
                {cl.name}
            </Link>
        </li>
    ))

    console.log(clients);

    return (
        <div>
            <h1>List of Clients</h1>
            <hr></hr>
            <ul>
                {clients}
            </ul>
        </div>

    )

}

export default Clients;