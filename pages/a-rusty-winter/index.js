import Layout from "../../components/layout";
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>A rusty winter</h2>
            <h3 className={utilStyles.headingLg}>I.</h3>
            <p>
                I came across Mr. <Link
                href="https://twitter.com/ericwastl?lang=en"
                target="_blank"
                rel="noopener">Wastl</Link> and his shenanigans during a cold winter in an ancient time. His handmade programming puzzles caught my attention. He called the challenge Advent of Code. The project seemed like the cool cousin of Project Euler to me. For the uninitiated, Advent of Code (AoC) is an advent calendar where a new programming puzzle unlocks everyday from December 1 to December 25 every year.
            </p>
            <p>
                My interest in gophers peaked around the same time (perhaps it was <Link href="https://github.com/mnpw/AoC-19" target="_blank" rel="noopener">2019</Link>?). Naturally, as one must do, I learned enough <Link href="https://go.dev/" target="_blank" rel="noopener">Go</Link> to make a decent attempt at the <Link href="https://adventofcode.com/" target="_blank" rel="noopener">Advent of Code</Link> puzzles that winter. I had a fun time, but Go and I slowly drifted apart after our first date at the AoC arcade. Two years later it was time for me to go on another date — with a crab.
            </p>
            <p>
                With fewer hair on my head and more free time on my hand, I decided to make a serious attempt at the 2021 edition of AoC. My goal this time was to focus on clarity and readability instead of cleverness. I saw the appeal of the way each puzzle was structured with AoC. Having two parts in each problem forces you to think of simplicity and extensibility of your solutions. This would be a great way to learn the language of the crabs, I thought. It was time to write the solutions in <Link href="https://www.rust-lang.org/" target="_blank" rel="noopener">Rust</Link>.
            </p>
            <p>
                I maintained a diary of sorts as I went about collecting stars for every puzzle I solved this time. The world has space for one more person wanting to talk about their sorrows and joys of coding. Grab some popcorn. I'm open sourcing the dearest diary for your reading pleasure now.
            </p>
            <p>~</p>
            <h3 className={utilStyles.headingLg}>II.</h3>
            <p>March 1, Puzzle 6</p>
            <blockquote>
                <p>
                    Dear diary, I did not know I still had it in me. It has been so long since I wrote code, I thought I lost the sacred knowledge. What was more surprising was that I had not forgotten how to employ the power of dynamic programming. I felt so cool after getting the stars today.
                </p>
            </blockquote>
            <p>March 2, Puzzle 7</p>
            <blockquote>
                <p>
                    I came across a fun fact through this problem. It was a humbling refresher of college level mathematics. The first solution I thought of was a million miles away from the correct solution. Only after processing the stupidity of my first solution could I see the beauty of the correct one. The <Link
                    href="https://math.stackexchange.com/questions/318381/on-a-1-d-line-the-point-that-minimizes-the-sum-of-the-distances-is-the-median"
                    target="_blank"
                    rel="noopener">proof</Link> hurts my brain, but gosh it is so beautiful to look at.
                </p>
            </blockquote>
            <p>March 9, Problem 8</p>
            <blockquote>
                <p>
                    I feel sad. I had a fight with the borrow checker. Perhaps she got angry in response to my desire for abstraction? I wanted to code a general puzzle solver. I wanted to make a scalable solution. Big mistake. Leaving this puzzle in between to go on a vacation helped me realize my mistake. Done is better than perfect. I finally did it but I'm not happy with the code structure.
                </p>
            </blockquote>
            <p>March 11, Problem 9</p>
            <blockquote>
                <p>
                    How do I even debug Rust code? I thought you can only write correct code with Rust. That it was impossible to write incorrect code with Rust. That is why I picked it. Heck is this? Guess the crabs don't protect you from logical errors.
                    It took a long time to figure out the bug in my flood fill flavored algorithm. I could only figure out the problem by adding some <Link
                    href="https://stackoverflow.com/a/69982036/12764266"
                    target="_blank"
                    rel="noopener">color</Link> to the huge grid I was trying to print to the standard output. TIL: Even 24 inch is not big enough (in monitor size; to fit in a 100 x 100 grid of three digit numbers).
                </p>
            </blockquote>
            <p>March 18, Problem 12</p>
            <blockquote>
                <p>
                    Making my code 'generic' bit my ass again. How many times before I learn? Going out for a run and spending time away from the computer helped in solving this puzzle. It turns out that writing a customizable core depth-first-search function is not as easy as I thought it was going to be. The bug in my code was the assumption that the first encountered smallcase node must be the repeatable node. Biases into play. We must let any smallcase node be repeatable, not just the first one.
                </p>
            </blockquote>
            <p>March 19, Problem 13</p>
            <blockquote>
                <p>
                    Why does my solution print the answer upside down? Why? Did I overlook something? I knocked at the official advent of code subreddit door for a hint and my eye went to a very short solution. Makes me feel I'm writing dumb code. Maybe dumb but readable solutions are better than concise and cryptic solutions. Too much effort in fixing upside down printing. I will just turn my laptop upside down for the answer.
                </p>
            </blockquote>
            <p>March 23, Problem 14</p>
            <blockquote>
                <p>
                    Should I be clever or not? Do I invent a new data structure today? Maybe I should stick with the obvious method. Part 2 will not work with the obvious method. It is exponentially exploding! I can exploit the fact that the final answer does not require me to give back the full polymer chain. It is time for a frequency map!
                </p>
            </blockquote>
            <p>March 25, Problem 15</p>
            <blockquote>
                <p>
                    I had completely forgotten about the shortest path algorithm. Not surprising. Thankfully, while looking for the implementation of Dijkstra's algorithm, I stumbled upon the gem that <Link
                    href="https://rosettacode.org/wiki/Rosetta_Code"
                    target="_blank"
                    rel="noopener">Rosetta Code</Link> is. Running the code after implementing a janky version of the shortest path algorithm gave a peek of the shit storm that was about to hit me. Turns out binary heap <Link
                    href="https://doc.rust-lang.org/stable/src/alloc/collections/binary_heap.rs.html#162"
                    target="_blank"
                    rel="noopener">does not allow</Link> for priority updation. And I want priority updation. It brings me cosmic shame to say that I gave up and used an external crate that implements a <Link
                    href="https://github.com/garro95/priority-queue"
                    target="_blank"
                    rel="noopener">priority queue</Link>. What would I have done? Implemented a priority queue myself? With my own hands? No way. Forgetting the shortest path algorithm and then using an external crate? Shameful. But hey, the code works.
                </p>
            </blockquote>
            <p>March 26, Problem 16</p>
            <blockquote>
                <p>
                    It?? worked?? THE MESSAGE PARSING WORKED AT THE FIRST GO??? My joy knows no bounds. Got to know that you cannot add custom methods on fundamental types (<code>"some_string".my_cool_custom_function()</code> does not work) but this lack is evened by the fact that a <Link
                    href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.reduce"
                    target="_blank"
                    rel="noopener">reduce</Link> implementation exists.
                </p>
            </blockquote>
            <p>March 29, Problem 17</p>
            <blockquote>
                <p>
                    Ffs do I have to review physics now? Why does this puzzle have projectiles? Turns out the Part 1 to this puzzle is simpler than I had earlier thought. I can remove the horizontal movement to solve Part 1. The second part is just a clever brute force (which I am very proud to figure out) with some basic bound checks. Only if <Link
                    href="https://doc.rust-lang.org/std/ops/struct.RangeInclusive.html"
                    target="_blank"
                    rel="noopener">RangeInclusive</Link> played nicely.
                </p>
            </blockquote>
            <p>March 30, Problem 18</p>
            <blockquote>
                <p>
                    Okay we are going to implement a tree in rust, aren't we? I have avoided smart pointers for long enough. Turns out I need to dissect the rust book before I can go any further. Trial period is over.
                </p>
            </blockquote>
            <p>~</p>
            <h3 className={utilStyles.headingLg}>III.</h3>
            <p>
                The reason why I initially picked Rust was not because it was fast or reliable or productive. I picked it because cool people were using it and they said that it has a steep learning curve. I wanted to push myself. I wanted to learn about the philosophy behind the design of a language that was very much evolving. In the process of becoming familiar with Rust — the programming language, I also became familiar with Rust — the historical artefact.
            </p>
            <blockquote>
                <div className="body">
                    <p>The point of a genealogical analysis is to show that a given system of thought was the result of contingent turns of history, not the outcome of rationally inevitable ends.</p>
                </div>
                <p className="ref">— Michel Foucault</p>
            </blockquote>
            <p>
                I never got back to finishing problem 18. But Advent of Code had done what it was supposed to do. It made the second date happen. I went out with the crab again but this time to the land of concurrency.
            </p>
            <p>~</p>
        </Layout>
    );
}