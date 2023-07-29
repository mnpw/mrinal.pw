import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Things I like</h2>
            <ul className={utilStyles.list} style={{ marginTop: "2rem" }}>
                <li className={utilStyles.listItem}>• learning a new concept that gently kneads my brain</li>
                <li className={utilStyles.listItem}>• sipping coffee in a moment of pause with no rush</li>
                <li className={utilStyles.listItem}>• techno music, with an extra shot of melody, in a dim space</li>
                <li className={utilStyles.listItem}>• arts and crafts, textures, making things with hands</li>
                <li className={utilStyles.listItem}>• walking barefoot with a meditative rhythm</li>
                <li className={utilStyles.listItem}>• feeling the burn of survival instinct during a workout set</li>
                <li className={utilStyles.listItem}>• stretching my toes, back, and hips. and the crackling it brings</li>
                <li className={utilStyles.listItem}>• sun baking my skin in an icy weather</li>
                <li className={utilStyles.listItem}>• kissing and cuddling with loving, soft, and warm body</li>
                <li className={utilStyles.listItem}>• fifteen minute naps that heal the weariness in my soul</li>
                <li className={utilStyles.listItem}>• resting my cheeks on my hugger's shoulder, rubbing their back</li>
                <li className={utilStyles.listItem}>• cold water to drink and to bathe in in hot weather</li>
                <li className={utilStyles.listItem}>• a mother's concern, care, her gentleness, her kind affection</li>
                <li className={utilStyles.listItem}>• resting in the fragrance of a flower</li>
                <li className={utilStyles.listItem}>• laughing with my stomach, crying in joy, at the same time</li>
                <li className={utilStyles.listItem}>• warm fuzziness while meditating, like a pot full of stew on a low burn</li>
            </ul>

        </Layout >
    )
}