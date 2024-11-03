import {
  AutoStoriesOutlined,
  Instagram,
  LinkedIn,
  PublicOutlined,
  Twitter,
} from "@mui/icons-material";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Newsletter from "../components/blogpage/Newsletter";
import { Helmet } from "react-helmet";

const TagBox = ({ name }) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-950 dark:text-slate-300 px-7 py-1 rounded-full text-xs mx-3 my-3 font-poppins">
      {name}
    </div>
  );
};

const SingleBlogPage = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  //   For referencing the indicator
  const howMuchReadBarRef = useRef(null);
  // for referencing the whole container of this page to get the height
  const containerRef = useRef(null);

  const query = `query Publication {
    publication(id:"638980f9bc608d676e463a68") {
        post(slug: "${slug}") {
            title
      subtitle
      
      tags {
        name
      }
      coverImage {
        url
      }
      brief
      readTimeInMinutes
      
            content {
                html
            }
        }
    }
}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  const fetchBlog = () => {
    fetch("https://gql.hashnode.com", options)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data.data.publication.post);
        console.log(data.data.publication.post);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  };

  const changeHowMuchReaded = (e) => {
    let readed = (window.scrollY / containerRef.current.scrollHeight) * 100;
    if (readed > 90) readed = 100;
    howMuchReadBarRef.current.style.width = readed + "%";
  };

  useEffect(() => {
    fetchBlog();

    howMuchReadBarRef.current.style.width = "0%";

    window.addEventListener("scroll", changeHowMuchReaded);

    return () => {
      window.removeEventListener("scroll", changeHowMuchReaded);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.brief} />
      </Helmet>

      <div className="flex flex-col items-center" ref={containerRef}>
        <div className="w-full h-1  fixed z-50">
          <div ref={howMuchReadBarRef} className={` h-full bg-blue-500`}></div>
        </div>
        {/* Blog banner */}
        <div className="w-full h-[500px] bg-blue-100 mb-10 dark:bg-black">
          <img
            src={blog?.coverImage.url}
            alt={"blog banner"}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* blog details : titles, sub-titles, brief etc */}
        <div className="w-5/6 text-center space-y-5 flex flex-col items-center">
          <h1 className="text-4xl font-poppins dark:text-white">
            {blog?.title}
          </h1>
          <h2 className="text-xl font-poppins dark:text-white">
            {blog?.subtitle}
          </h2>

          <p className="w-3/4 text-lg text-slate-500">{blog?.brief}</p>

          <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-400">
            <AutoStoriesOutlined />
            <p>8 mins to read</p>
          </div>
        </div>

        {/* Main content section */}
        <div className="w-full flex flex-1 mt-32">
          {/* sticky sidebar */}
          <div className="flex-[0.2] w-full  h-96 sticky top-20 py-7">
            {/* share section */}
            <div className="w-full flex flex-col items-center">
              <div className="flex items-center space-x-3 text-sm bg-blue-600 text-white px-4 py-1 rounded-3xl">
                <PublicOutlined />
                <p>Share on Socials</p>
              </div>

              <div className="flex space-x-3 my-5">
                <Link
                  to={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.ronakpaul.com/blog/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn
                    fontSize="large"
                    className="text-black dark:text-white"
                  />
                </Link>

                <Link
                  to={`https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20blog!&url=https%3A%2F%2Fronakpaul.com%2Fblog%2F${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    fontSize="large"
                    className="text-black dark:text-white"
                  />
                </Link>

                <Link
                  to={"https://instagram.com"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <Instagram
                    fontSize="large"
                    className="text-black dark:text-white"
                  />
                </Link>
              </div>
            </div>

            {/* Tags section */}
            <div className="w-full flex justify-center flex-wrap mt-20">
              {blog?.tags.map((tag, index) => (
                <TagBox name={tag.name} key={index} />
              ))}
            </div>
          </div>

          {/* Main blog part */}
          <div className=" w-full flex-[0.8] px-10 overflow-hidden">
            <div
              dangerouslySetInnerHTML={{ __html: blog?.content.html }}
              className="w-full dark:text-white  text-2xl font-light [&_p]:my-4 [&_ol]:ml-10 [&_ol]:my-7 [&_ol]:list-disc [&_hr]:my-5 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:ml-10 [&_ul]:my-5 [&_h1]:text-5xl [&_h1]:mt-28 [&_h1]:mb-10 [&_h2]:text-4xl [&_h2]:mt-28 [&_h2]:mb-10 [&_h2]:font-bold [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:mt-28 [&_h3]:mb-10 [&_img]:my-20 leading-relaxed [&_pre]:bg-black [&_pre]:text-slate-500 [&_pre]:px-5 [&_pre]:py-3 [&_pre]:rounded-md [&_pre]:my-7 [&_pre]:overflow-x-scroll"
            ></div>
          </div>
        </div>

        {/* Newsletter subscribe section */}
        <div className="w-1/2 mt-40 flex flex-col items-center space-y-7">
          <p className="text-xl font-poppins dark:text-white">
            Subscribe to my Newsletter
          </p>
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
