import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>New</h2>
            <p>"Wake up, it is time."</p>
            <p>My ears were drifting away from the surface. But they could still register faint voices from the other side. I could feel my weight dissolving slowly in the quicksand of warmth. It had been three hours since I placed myself in the sleeping bag. Something powerful pulled me back to the surface. It was time for the summit push.</p>

            <blockquote>
                <div className="body">
                    <p>You have been asking what you could do in the great events that are now stirring, and have found that you could do nothing. But that is because your suffering has caused you to phrase the question in the wrong way... Instead of asking what you could do, you ought to have been asking what needs to be done.</p>
                </div>
                <p className="ref">— Steven Brust, The Paths of the Dead</p>
            </blockquote>

            <p>"For sunrise summit we must leave the camp by 2 am." </p>
            <p>We left the camp by 3:30 am. Some parts within me had begun with the acceptance process. The sooner you accept the reality of failure the easier it would be, they told me. Other parts could picture only one thing — a summit with the sunrise.</p>
            <p>I rushed ahead of the pack without thinking much, like a madman. Toes throbbing with pain, a possibly torn hip flexor and the barely functioning rest of me found a group of people from a different camp. This group was ahead of all the other groups. They had left their camp by 2 am.</p>

            <blockquote>
                <div className="body">
                    <p>How do you claim to know it is impossible? To believe that something is impossible is to mistake "No one sees how it is possible" for "It is impossible". As the years have gone by, I've been increasingly struck by just how stupid humans are, and how most of our intelligence is just the painfully slow accumulation of the cultural store of better concepts. Once you keep in mind how humans have been wrong forever about most things, the fact that everyone claims that something is impossible loses its misperceived predictive force.</p>
                </div>
                <p className="ref">— <Link href="https://www.lesswrong.com/s/3szfzHZr7EYGSWt92/p/fpecAJLG9czABgCe9?commentId=kgxEsw5kGJZBoLSBo"><a target="_blank" rel="noopener">buybuydandavis</a></Link></p>
            </blockquote>

            <p>It made no rational sense to put myself through this pain. I kept climbing up for three hours. At 6:20 am it dawned upon me that there is nothing left for me to climb. It took a while for my body to realise this, so I ambled around in awe of the human capability, with a shattered concept of reality. The domain of possibilities had expanded faster than I could make any sense of it.</p>
            <p>I was not supposed to see the sunrise on the summit but I did.</p>

            <blockquote>
                <div className="body">
                    <p>Even though <em>individual</em> problems in AI have seemed to become less intimidating over time, the total mountain-to-be-climbed has increased in height—just like conventional wisdom says is supposed to happen—as problems got taken off the "impossible" list and put on the "to do" list.</p>
                    <p>I started to understand what was happening—and what "Persevere!" really meant. ... And I realized that the word "impossible" had two usages:</p>
                    <p>1) Mathematical proof of impossibility conditional on specified axioms;</p>
                    <p>2) "I can't see any way to do that."</p>
                    <p>Needless to say, all my own uses of the word "impossible" had been of the second type.</p>
                </div>
                <p className="ref">— Eliezer Yudkowsky, <Link href="https://www.lesswrong.com/s/3szfzHZr7EYGSWt92/p/fpecAJLG9czABgCe9"><a target="_blank" rel="noopener">On Doing the Impossible</a></Link></p>

            </blockquote>
        </Layout >
    )
}