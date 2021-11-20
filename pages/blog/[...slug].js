import {useRouter} from "next/router";

const BlogPost = () => {

    const router= useRouter();
    console.log(router.query);

    return (
        <div>

            <h3>Blog Post</h3>
        </div>
    )

}

export default BlogPost;