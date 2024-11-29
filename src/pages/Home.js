import HeadedParagraph from "../components/HeadedParagraph";
import Hero from "../components/Hero";
import IconLink from "../components/IconLink";

const Home = () => {
  return (
    <>
      <Hero />
      <HeadedParagraph title="Who are we?">
        We are a team of passionate students constantly finding ways to make the
        lives of students at{" "}
        <IconLink to="https://engg.dypvp.edu.in" external>
          Dr. D. Y. Patil Institute of Technology, Pimpri
        </IconLink>
        more seamless and enjoyable. We organise various events, workshops and
        projects for all round development. <br /> Lorem ipsum dolor sit amet
        consectetur adipisicing elit .Molestias placeat voluptates accusamus
        minima obcaecati itaque, dolores temporibus est nam sint ab impedit, sit
        quam perferendis eos rerum nisi doloribus amet, laborum corporis culpa
        excepturi veritatis id deserunt? Dolorem, quisquam sed voluptas illum
        officiis vel cumque quos ducimus esse labore sint?
      </HeadedParagraph>
      <HeadedParagraph title="Join our Team!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        placeat voluptates accusamus minima obcaecati itaque, dolores temporibus
        est nam sint ab impedit, sit quam perferendis eos rerum nisi doloribus
        amet, laborum corporis culpa excepturi veritatis id deserunt? Dolorem,
        quisquam sed voluptas illum officiis vel cumque quos ducimus esse labore
        sint?
        <a href="#" className="button">
          Join Team
        </a>
      </HeadedParagraph>
    </>
  );
};

export default Home;
