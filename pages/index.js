import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import EssayImage from "../components/EssayImage";
import heroImg from "../public/soft.jpeg";

export default function Home() {
  return (
    <Layout home={true} nonBlog={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <EssayImage src={heroImg} height="50px" />
      <blockquote
        style={{ background: "rgba(243, 243, 243, 0.54)", color: "#202020" }}
      >
        {/* <div className="body" style={{ background: 'rgba(255, 255, 255, 0.65)' }}> */}
        <p>
          Welcome to my digital garden. I take the help of different mediums to
          tell different kinds of stories and I sow the seeds of my explorations
          here. Thanks for stopping by, and please feel free to look around.
        </p>
        <p>
          Mrinal – writer, computer programmer, part-time designer, over-time
          overthinker, and athlete
        </p>
        {/* </div> */}
      </blockquote>
      <section></section>
    </Layout>
  );
}
