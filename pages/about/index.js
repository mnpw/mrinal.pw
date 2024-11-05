import Layout from "../../components/layout";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

export default function Posts() {
  return (
    <Layout>
      <h2 className={utilStyles.headingXl}>$whoami</h2>
      <p>Hi, I'm Mrinal Paliwal 👋🏼</p>
      <p>
        I work as Systems Engineer 2 at Bytebeam. I've spent the last two years
        here taking care of our data pipeline. I also own our data broker
        service!
      </p>
      <p>
        <Link href="https://bytebeam.io/" target="_blank" rel="noopener">
          Bytebeam
        </Link>{" "}
        is a deep-tech IoT startup building AWS for IoT devices. We build the
        control plane through which companies can provision, update, debug, and
        gather data from hardware devices.
      </p>
      <p>
        I work closely with the CEO, CTO, and our enterprise customers on the
        data pipeline at Bytebeam. Our data pipeline has four main components:
        Device SDKs, an in-house MQTT data broker written in Rust 🦀, storage
        layer, and analytics services.
      </p>
      <p>
        Recently, I worked on re-architecting the broker and storage layer of
        our pipeline. Our broker had a write bottleneck to Clickhouse and our
        analytics services had a read bottleneck on Clickhouse. I worked on
        optimising writes from Broker and migrating storage layer from
        Clickhouse to Object Store (S3 and equivalent). It solved for the
        bottlenecks and also enabled data-lake-like persistence to pipeline.
      </p>
      <p>
        The data broker service, which I maintain, acts as gateway between IoT
        devices and internal services. We've built it in-house using Rust and
        have also open-sourced it. I have worked on a bunch of features for it
        and maintain its release lifecycle for our cloud and enterprise
        customers (for whom we have a Bring Your Own Cloud model).
      </p>
      <p>
        Before Bytebeam I worked with{" "}
        <Link href="https://www.makemytrip.com/" target="_blank" rel="noopener">
          MakeMyTrip
        </Link>{" "}
        - India's leading travel platform. I was part of the booking management
        team as a full stack engineer.
      </p>
      <p>
        Professional life aside, I'm also passionate about writing 📝 – it is my
        primary way of thinking. I maintain a{" "}
        <Link href="/notes/">personal blog</Link> and have also authored some{" "}
        <Link
          href="https://bytebeam.io/blog/rumqtt-r19-persistence-10k-load-and-public-infra/"
          target="_blank"
          rel="noopener"
        >
          posts
        </Link>{" "}
        for Bytebeam. Nowadays I'm interested in systems software like async
        runtimes, streaming systems, and databases.
      </p>
      <p>
        If you think we might be a good fit then please reach out –{" "}
        <span className={utilStyles.labelText}>mrinalpaliwal98</span>+ gmail
        suffix.
      </p>
      <p>
        <Link
          href="https://www.linkedin.com/in/mnpw/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </Link>
      </p>
      <p>
        <Link
          href="https://www.github.com/mnpw/"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>
      </p>
      <Link href="/mrinal_paliwal_nov_2024.pdf" target="_blank" rel="noopener">
        Resume
      </Link>
    </Layout>
  );
}
