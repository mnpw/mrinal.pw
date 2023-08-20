import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            {/* <blockquote style={{ background: 'rgba(243, 243, 243, 0.54)', color: '#202020' }}> */}

            <h2 className={utilStyles.headingXl}>Notes</h2>
            <div style={{ marginTop: "2rem", marginBottom: "1.2rem" }}>
                <h3 className={utilStyles.headingMd}>2023</h3>
            </div>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>20 aug</span> <Link href="/curse-of-ambition/" ><a>Ther curse of ambition</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>29 jul</span> <Link href="/things-i-like/" ><a>Things I like</a></Link>
                </li>
            </ul>
            <div style={{ marginTop: "2rem", marginBottom: "1.2rem" }}>
                <h3 className={utilStyles.headingMd}>2022</h3>
            </div>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>23 aug</span> <Link href="/containers-not-docker/" ><a>Containers, not Docker</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>04 jun</span> <Link href="/replayed/" ><a>Replayed</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>23 may</span> <Link href="/engineering-process/" ><a>Engineering: The creative process</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>16 may</span> <Link href="/a-rusty-winter/" ><a>A rusty winter</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>03 mar</span> <Link href="/pushing-against-reality/" ><a>Pushing against reality</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>15 feb</span> <Link href="/words-are-sacred/" ><a>Words are sacred</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>10 feb</span> <Link href="/poking-the-system/" ><a>Poking the system</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText + " " + utilStyles.tag}>31 jan</span> <Link href="/mothers-arguments-internet/" ><a>Mothers, arguments, and the internet</a></Link>
                </li>
            </ul>
            {/* </blockquote> */}
        </Layout >
    )
}