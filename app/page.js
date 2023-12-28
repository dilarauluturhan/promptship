import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="text-primary-green w-full flex-center flex-col font-inter">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] sm:text-6xl text-center ">
        Discover & Share <br className="max-md:hidden" />{" "}
        <span className="green_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center">
        PromptShip is an AI prompting tool for the modern world to discover,
        create, and share creative prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
