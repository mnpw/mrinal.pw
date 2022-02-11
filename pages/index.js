import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Welcome to my digital garden.  Feel free to look around.
        </p>
        <p>
          I sow the seeds of my explorations here.  My passions overwhelm my capabilities. This place is an attempt to understand them better.
        </p>
        <p>
          A synthesist, a computer programmer, perhaps a designer, some kind of a craftsman? I consider myself many things.  I take the help of different mediums to tell different kinds of stories.
        </p>
        <p>Thanks for stopping by.</p>
        <p>
          <em>Attuning to the subtleties of storytelling,</em> <br></br>
          Mrinal.
        </p>
      </section>
    </Layout >
  )
}
