import { Helmet } from "react-helmet";

const BlogsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Ronak Paul: Blogs</title>
        <meta
          name="description"
          content="All the technical blogs written by Ronak Paul. On the topics like Web Dev, Mobile Dev, Backend, Docker, Kubernetes, GitHub, Web3 as well as Daily Tech news etc"
        />
      </Helmet>
      <p>simple blogging page for test</p>
    </div>
  );
};

export default BlogsPage;
