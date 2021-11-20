import {useRouter} from "next/router";
import Link from 'next/link'

const ClientInfo = () => {

    const router = useRouter();
    console.log(router.asPath)
    const clientId = router.query.id;
    const path= router.asPath;

    console.log(router.query);

    const LoadProjectHandler = () => {
        router.push(`${path}/456`)
    }

    return (
        <div>
            <h3>Client Info : client ID: {clientId} </h3>
            <Link href={`${router.asPath}/123`}>View Projects</Link>
            <p>

            </p>
            <button onClick={LoadProjectHandler}>Load Projects for {clientId}</button>
        </div>

    )

}
export default ClientInfo;