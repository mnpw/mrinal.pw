import Layout from "../../components/layout";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

export default function Posts() {
  return (
    <Layout>
      <h2 className={utilStyles.headingXl}>Notes</h2>
      <div style={{ marginTop: "2rem", marginBottom: "1.2rem" }}>
        <h3 className={utilStyles.headingMd}>2025</h3>
      </div>
      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            23 jun
          </span>{" "}
          <Link href="/decide/">Decide</Link>
        </li>
      </ul>
      <div style={{ marginTop: "2rem", marginBottom: "1.2rem" }}>
        <h3 className={utilStyles.headingMd}>2023</h3>
      </div>
      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            06 nov
          </span>{" "}
          <Link href="/rust-sized-trait/">What is Sized trait?</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            20 aug
          </span>{" "}
          <Link href="/curse-of-ambition/">The curse of ambition</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            29 jul
          </span>{" "}
          <Link href="/things-i-like/">Things I like</Link>
        </li>
      </ul>
      <div style={{ marginTop: "2rem", marginBottom: "1.2rem" }}>
        <h3 className={utilStyles.headingMd}>2022</h3>
      </div>
      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            23 aug
          </span>{" "}
          <Link href="/containers-not-docker/">Containers, not Docker</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            04 jun
          </span>{" "}
          <Link href="/replayed/">Replayed</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            23 may
          </span>{" "}
          <Link href="/engineering-process/">
            Engineering: The creative process
          </Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            16 may
          </span>{" "}
          <Link href="/a-rusty-winter/">A rusty winter</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            03 mar
          </span>{" "}
          <Link href="/pushing-against-reality/">Pushing against reality</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            15 feb
          </span>{" "}
          <Link href="/words-are-sacred/">Words are sacred</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            10 feb
          </span>{" "}
          <Link href="/poking-the-system/">Poking the system</Link>
        </li>
        <li className={utilStyles.listItem}>
          <span className={utilStyles.labelText + " " + utilStyles.tag}>
            31 jan
          </span>{" "}
          <Link href="/mothers-arguments-internet/">
            Mothers, arguments, and the internet
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
