import Layout from "../../components/layout"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>What is <code>Sized</code> trait?</h2>
            <p style={{ marginBottom: "1.5em" }}><span className={utilStyles.labelText}>#rust</span> <span className={utilStyles.labelText}>#programming</span></p>
            <p>It seems <em>intuitive</em> what <code>Sized</code> means. When I first encountered it, I assumed that a <code>Sized</code> type parameter is one that has a known size at compile time. The standard library <Link href="https://doc.rust-lang.org/std/marker/trait.Sized.html" target="_blank" rel="noopener">has a similar definition</Link>:</p>
            <blockquote>
                Types with a constant size known at compile time.
            </blockquote>
            <p>
                Some questions follow: Why does this trait exist? Shouldn't all types implement <code>Sized</code>? If not, then how does one allocate memory for types that don't implement <code>Sized</code>?
            </p>
            <p>
                Most types indeed do implement the <code>Sized</code> trait. The ones that don't are called dynamically sized types (DST). The two main DSTs exposed by Rust are trait objects (<code>dyn MyTrait</code>) and slices (<code>[T]</code>,<code>str</code>) (with one more <Link href="https://doc.rust-lang.org/nomicon/exotic-sizes.html#extern-types" target="_blank" rel="noopener">in the works</Link>).
            </p>

            <p>On dynamically sized types, <Link href="https://doc.rust-lang.org/nomicon/exotic-sizes.html#extern-types" target="_blank" rel="noopener">The Rust Reference</Link> says:

                <blockquote>
                    Most types have a fixed size that is known at compile time and implement the trait Sized. A type with a size that is known only at run-time is called a dynamically sized type (DST) or, informally, an unsized type.
                </blockquote>
                And <Link href="https://doc.rust-lang.org/nomicon/exotic-sizes.html#extern-types" target="_blank" rel="noopener">The Rustonomicon</Link> says:
                <blockquote>
                    On the surface, this is a bit nonsensical: Rust must know the size and alignment of something in order to correctly work with it! In this regard, DSTs are not normal types. Because they lack a statically known size, these types can only exist behind a pointer.
                </blockquote>
            </p>
            <p>
                So although DSTs exist, they can't be accessed directly — only through a pointer to them. And to address my concern, it is not so much that all types should implement <code>Sized</code>, <Link href="https://doc.rust-lang.org/reference/dynamically-sized-types.html" target="_blank" rel="noopener">rather</Link> all variables, function parameters, const items and static items must be <code>Sized</code>.
            </p>

            <p>
                But then why do DSTs even exist in Rust? <Link href="https://smallcultfollowing.com/babysteps/blog/2013/04/30/dynamically-sized-types/" target="_blank" rel="noopener">While introducing them</Link>, Niko Matsakis notes:
                <blockquote>
                    If we change the representation of vectors and slices [to use DSTs], we can have composable types and all the efficiency and flexibility of the current system. The price is that we must distinguish “sized” from “unsized” type parameters.
                </blockquote>
            </p>
            <p>
                In essence the trait <code>Sized</code> <Link href="https://github.com/rust-lang/rust/issues/6308#issuecomment-18554501" target="_blank" rel="noopener">exists</Link> because DSTs exist. And DST exist because, uh well, to make things more 'composable' (don't ask me the details, that is above my pay grade).
            </p>
            <p> Anywho, <code>Sized</code> is a trait that most people writing Rust will not be worrying about most of the time since all generic type parameters are sized by default everywhere. An interesting scenario where one might encounter it is while <Link href="https://stackoverflow.com/questions/30938499/why-is-the-sized-bound-necessary-in-this-trait" target="_blank" rel="noopener">defining default Trait methods</Link>.
            </p>
            <p><code>Sized</code> is a seemingly simple trait but a lot of things lead to it existing in the standard library! Thanks for reading. If you want to know about DSTs, here are some interesting links to follow through:</p>

            <ul className={utilStyles.list} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>• <Link href="https://doc.rust-lang.org/nomicon/exotic-sizes.html" target="_blank" rel="noopener">Exotically Sized Types</Link></li>
                <li style={{ marginBottom: "0.5rem" }}>• <Link href="https://smallcultfollowing.com/babysteps/blog/2014/01/05/dst-take-5/" target="_blank" rel="noopener">DST, Take 5</Link></li>
                <li style={{ marginBottom: "0.5rem" }}>• <Link href="https://faultlore.com/blah/dsts-are-polymorphic-generics/" target="_blank" rel="noopener">DSTs Are Just Polymorphically Compiled Generics</Link> </li>
            </ul>
        </Layout>
    )
}