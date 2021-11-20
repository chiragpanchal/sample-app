import {Fragment} from "react";
import {useRouter} from "next/router";

const Portfolio = () => {

    const router=useRouter()

    console.log(router.asPath);
    console.log(router.query);
    console.log(router.route);
    console.log(router.basePath);

    console.log(router.query.portfolioId);

    return (
        <Fragment>
            <h3>Portfolio  </h3>
        </Fragment>
    )

}

export default Portfolio;