import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Now</h2>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                    This section is being made. Check out <Link href="/notes/"><a>my notes</a></Link> in the meanwhile.
                </li>
            </ul>
        </Layout>
    )
}