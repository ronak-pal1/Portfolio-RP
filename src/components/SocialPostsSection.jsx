import { useEffect, useState } from 'react';
import { Star } from "@mui/icons-material";

const TweetEmbed = ({ tweetId }) => {
  useEffect(() => {

    if(innerWidth <1024) return;

    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.querySelectorAll('iframe[id^=twitter-widget]').forEach(el => el.remove());
    };
  }, [tweetId]);

  return (
    <div className="w-full max-w-md">
      <blockquote className="twitter-tweet" data-dnt="true">
        <a href={`https://twitter.com/ronak_pal1/status/${tweetId}`}></a>
      </blockquote>
    </div>
  );
};

const SocialPostsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const tweetIds = [
    '1950946258128097541', // LinkedIn post
    '1888901852944621634'  // Hackathon post
  ];

  return (
    <div className="mt-28 hidden lg:block min-h-[400px]">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold dark:text-white">
          Featured
        </p>
        <Star fontSize="large" className="dark:text-white" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-8 px-4 w-full">
        {isClient && tweetIds.map((tweetId) => (
          <TweetEmbed key={tweetId} tweetId={tweetId} />
        ))}
      </div>
    </div>
  );
};

export default SocialPostsSection;
