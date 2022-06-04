import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Replayed</h2>
            <p>
                Jeff Winston dies at 43. He wakes up in a shrunken body — his eighteen year old self. More precisely, 25 years of Jeff's life die. He keeps <em>replaying</em> back to his young self. The 25 years keep dying. Ending at 43 and starting at 18. Again and again.
            </p>
            <p>
                Replay is written by Ken Grimwood. It is a gorgeous book. It gets heavier with every chapter. It is a book about love disguised in the wraps of science fiction. I initially thought that there would be a lot to unpack — the mechanics, the consistencies, the inconsistencies, the critical analysis. I don't have an analysis but I sure have accumulated a lot of feelings as I have turned through the pages. Replay dissolved a lot of things for me.
            </p>
            <p>~</p>
            <p>
                What would I do differently if I could live through it all again? I have always been amused by this question. I have understood its value as a thought experiment that gets the conversation going but I have never stayed with the question. I felt the gravity of this question only after reading the book. Replay rewires the laws to make this question a thousand times heavier. The idea of 'fixing' the flow of time is a false concept.
            </p>
            <p>
                The power Jeff is handcuffed with makes him a god. A miserable god. Bigger than any human. Moving through time again and again with the knowledge of events that have transpired and will transpire again. This life makes him the least human of all humans. It makes him lonely. It would be a mistake to think that infinite years is a long enough time to get close to the people you care about. Infinite years don't mean anything when they cannot be shared.
            </p>
            <p>~</p>

            <p>
                Restarting life is not about a clean slate and a life full of possibilities. It is about holding threads to the portals of the past and the future. Having all the time in the world and having no time at all. Death is when the past and the future are within reach and you lose grip on the present. Living is when both — the second that has been, and the second that will be — are unavailable.
            </p>

            <blockquote>
                <div className="body">
                    <p>"The unfathomable cycle in which he had been caught had proved to be a form of confinement, not release."</p>
                </div>
                <p className="ref">— Ken Grimwood, Replay</p>
            </blockquote>
            <p>
                Jeff Winston dies and opens his eyes again. With every replay, he grows bigger and fragmented. He never lives, he just keeps on dying.
            </p>
        </Layout>
    )
}