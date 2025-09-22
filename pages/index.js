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
      <EssayImage src={heroImg} />
      <blockquote
        style={{ background: "rgba(243, 243, 243, 0.54)", color: "#202020" }}
      >
        {/* <div className="body" style={{ background: 'rgba(255, 255, 255, 0.65)' }}> */}
        <p>Welcome to my digital garden. Feel free to look around.</p>
        <p>
          I sow the seeds of my explorations here. My passions overwhelm my
          capabilities. This place is an attempt to understand them better.
        </p>
        <p>
          A synthesist, a computer programmer, perhaps a designer, some kind of
          a craftsman? I consider myself many things. I take the help of
          different mediums to tell different kinds of stories.
        </p>
        <p>Thanks for stopping by.</p>
        <p>
          <em>Attunig to the subtleties of storytelling,</em> <br></br>
          Mrinal.
        </p>
        {/* </div> */}
      </blockquote>
      <section></section>
    </Layout>
  );
}
