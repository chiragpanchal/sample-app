import {useRouter} from "next/router";

const ClientProject = () => {


    const router = useRouter();

    console.log(router.query);

    const clientId = router.query.id;
    const projectId = router.query.clientProjectId;

    const BackToHomeHandler = () => {
        // router.reload();
        router.replace('/');
    }

    const NavigateToSuperProject = () => {
        router.push({
            pathname: '/clients/[id]/[clientProjectId]',
            query: {
                id: 999,
                clientProjectId: 999111
            }
        })
    }

    return (
        <div>
            <h1> Projects for Client {clientId} , (Project ID = {projectId} ) </h1>
            <button onClick={BackToHomeHandler}>Back to Home</button>
            <button onClick={NavigateToSuperProject}>Take me to Super Project</button>
        </div>
    )


}

export default ClientProject;