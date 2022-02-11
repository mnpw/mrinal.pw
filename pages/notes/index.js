import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Notes</h2>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                    <Link href="/poking-the-system/" ><a>Poking the system</a></Link>
                </li>
                <li className={utilStyles.listItem}>
                    <Link href="/mothers-arguments-internet/" ><a>Mothers, arguments, and the internet</a></Link>
                </li>
            </ul>
        </Layout>
    )
}