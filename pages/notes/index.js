import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Notes</h2>
            <div style={{ marginTop: "2rem", marginBottom: "1.2rem" }}>
                <h3 className={utilStyles.headingMd}>2022</h3>
            </div>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText}>03 mar</span> <Link href="/pushing-against-reality/" ><a>Pushing against reality</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText}>15 feb</span> <Link href="/words-are-sacred/" ><a>Words are sacred</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText}>10 feb</span> <Link href="/poking-the-system/" ><a>Poking the system</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <span className={utilStyles.labelText}>31 jan</span> <Link href="/mothers-arguments-internet/" ><a>Mothers, arguments, and the internet</a></Link>
                </li>
            </ul>
        </Layout>
    )
}