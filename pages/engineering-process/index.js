import Layout from "../../components/layout";
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Engineering: The creative process</h2>
            <h3 className={utilStyles.headingLg}>I.</h3>
            <p>
                My relationship with the sciences is something I am deeply proud of. Yet I make deliberate attempts to steer conversations away from that topic. I harbour a deep aversion to calling myself an engineer. It is easy to smell on me. Labels are delicate, and more often than not, a bit too reductive. I have been wanting to put more words to what this label means. To talk about the creative process that engineering is, to me.
            </p>
            <p>
                Most engineers, if the tales are to be believed, are forged of unmatched brilliance. They play only with instruction manuals and machines. They finish their PhDs before they grow big enough in size to ride on a roller coaster. There are no prodigal origins in my case. Exposure to engineering happened ordinarily for me. Neither I was opening machines when I was four, nor I was writing computer software when I was nine
            </p>
            <p>
                Amongst all the sciences, the sciences of the computers are dearest to me. Computers caught my attention because I wanted to play games, listen to songs and watch movies. It started with a utilitarian necessity but I stayed long enough to learn how to love them. When you stick with something for long enough, you either discover an endless space to zoom in and out or you don't. I was lucky enough to find the humbling infinite canvas with computers. The island of computer science runs direct ferries to all other islands — human biology, space exploration, visual arts, you name it. There are direct links to <em>everywhere</em>.
            </p>
            <p>
                Engineering is a creative process — a fine iterative balance between consumption and creation. And like any creative process, there is a lot of tacit knowledge. Lots of things that I just know. Lots of practices that I just follow. Lots of habits. How I read code, which search result I click first, and which ones I discard — the knowledge is encoded in subtle ways. Much of my ability as an engineer resides in my ability to construct and traverse the dense network made up of bits picked up along many years. This network is not something that happened to me. There were a lot of things that I did that shaped it. It is something that one can actively cultivate. It is, however, not something that can be codified to a set of followable instructions. There is no exact character count after which to start refactoring your code.
            </p>
            <p>
                Most of my network building has come from straight up abusing the search engines. Getting in the <Link href="https://twitter.com/_mnpw/status/1462778755198320644"><a target="_blank" rel="noopener">rabbit holes</a></Link> and keeping a high level track of them. Not just opening a lot of links, but parsing through the right kind of information. Combing through five year old commit messages, never opening w3schools links, and digging deep within the source code of libraries decaying in the forest of dependency hell. An explicitised version of this can look like building personal knowledge base (<Link href="http://ceasarbautista.com/posts/memex_meetup_2.html"><a target="_blank" rel="noopener">memex</a></Link>, anyone?) built from handpicked resources. <em>Good taste</em> and <em>work experience</em> are the properties of this network. One comes from consuming <em>good</em> things, and the other comes from doing <em>a lot</em> of things.
            </p>
            <blockquote>
                <div className="body">
                    <p>Phrases like "don't repeat yourself", "you aren't going to need it", "separation of concerns", "test-driven development" etc were originally produced from some body of valid experience, but then wildly over-generalized and over-applied without any of the original nuance. The way to convey tacit knowledge, if at all, is via the body of experiences that generated the rule. For this reason I find much more value in specific experience reports or in watching people actually working, as opposed to writing about general principles.</p>
                </div>
                <p className="ref">— Jamie Brandon, <Link href="https://www.scattered-thoughts.net/writing/on-bad-advice/"><a target="_blank" rel="noopener">On bad advice</a></Link></p>
            </blockquote>
            <p>
                While I cannot give you the recipe to build the perfect network, I can take you for a walk through the network I have built for myself.
            </p>
            <p>~</p>
            <h3 className={utilStyles.headingLg}>II.</h3>
            <p>
                It all starts with a problem. A vague higher level goal. I want to get to a place I am not at.
            </p>
            <p>
                I got interested in Rust recently and landed on the <Link href="https://doc.rust-lang.org/book/"><a target="_blank" rel="noopener">book</a></Link>. Crawling up slowly, and skipping some chapters as one must do, I reached chapter 20 — Making a multi-threaded web server. All the right buzzwords. Bingo! I followed the instructions and wrote some code. I was done with the chapter but it didn't feel <em>enough</em>. I did not have a clear direction but I wanted to somehow extend it. Make it cooler, technically impressive, and add more horsepower to the engine.
            </p>
            <p>
                The problem was fuzzy to me because of the unknown unknowns. A well articulated problem is a critical part of the solution, after all. How do I get to a rigorous articulation of the problem when all I'm leading with is a want to make 'something cool'? I call this the design part of the engineering process. This is where I get stuck the most and give up on the whole thing. This is also the part I enjoy the most. It is very much like being a detective. I'm surrounded by links, 100+ tabs spread across multiple browser windows, and scratch pads with poorly drawn ascii architectural diagrams. We need to get to the root of the things.
            </p>
            <p>
                The direction was fuzzy but one thing was very clear. The core problem was building a web server. It was necessary for me to look at the problem through a genealogical lens. To get to the motivation of the problem. Instead of starting with 'how to make a modern web server?', I started with 'what problem a modern web server is supposed to solve?'. Questions followed. Questions that seemed a bit too stupid in the moment. What even a web server is? When does a server disappear and when does a framework begin? Routing and serving are different things?
            </p>
            <p>
                The only way out of this fog was to take somebody else's definition of the problem and work with that. I spent a good amount of time looking at state of the art solutions to find the 'right' direction. <code>Axum</code>, <code>Tide</code>, and <code>Dropshot</code> to name a few. Looking at their evolution gave some much needed <Link href="https://rustasync.github.io/team/2018/09/11/tide.html"><a target="_blank" rel="noopener">answers</a></Link>. <code>Dropshot</code> aimed at elegantly exposing REST APIs while <code>Axum</code> focused on modularity by being deeply connected with <code>Tower</code>. All projects were different from each other in many ways. I focused on tracing the similarities between them. This was essential to answer the question of 'What problem a modern web server is supposed to solve?'
            </p>
            <p>
                Everywhere I looked, I saw <code>async</code>. It was common to most web servers and frameworks I looked at. Concurrency wasn't even on my mind when I set out to extend the project. The <code>async/.await</code> rabbit hole was calling my name and I did not hesitate to jump. One thing led to another and I soon found myself tangled in <code>mio</code>'s source code. Polling? Futures? Executor? The heck? I watched Steve Klabnik <Link href="https://www.youtube.com/watch?v=NNwK5ZPAJCk"><a target="_blank" rel="noopener">nerding out</a></Link> many times. Ashley Williams came to my rescue with an absolutely gorgeous <Link href="https://www.youtube.com/watch?v=aGJTXdXQN2o"><a target="_blank" rel="noopener">talk</a></Link> on the origin philosophy of asynchronous programming. It led me to some historical <Link href="https://www.dre.vanderbilt.edu/~schmidt/PDF/reactor-siemens.pdf"><a target="_blank" rel="noopener">artifacts</a></Link> and gave me confidence to open the <Link href="https://copyconstruct.medium.com/nonblocking-i-o-99948ad7c957"><a target="_blank" rel="noopener">scrolls</a></Link> of <Link href="https://www.ncameron.org/rfcs/2394"><a target="_blank" rel="noopener">ancient</a></Link> <Link href="http://aturon.github.io/tech/2016/09/07/futures-design/"><a target="_blank" rel="noopener">wisdom</a></Link>. From <code>axum</code> to <code>tokio</code>. From <code>tokio</code> to <code>hyper</code>. From <code>hyper</code> to <code>mio</code>. From <code>mio</code> to <code>futures</code>. I maintained a log of the fission as I went through it. There was too much to know but I had absorbed enough to figure out the direction I wanted to go in.
            </p>
            <blockquote>
                <div className="body">
                    <p>When I learn something today, I usually do it by piecing together clues gleaned from out of date tutorials and random forum posts until a coherent picture forms, and that is a skill you should practice relentlessly because it's the most valuable skill you will ever acquire.</p>
                </div>
                <p className="ref">— <Link href="https://twitter.com/bodil/status/1308783627908583430"><a target="_blank" rel="noopener">Bodil</a></Link></p>
            </blockquote>
            <p>
                I picked up the beautiful idea of constructing software outside-in while watching one of <Link href="https://www.youtube.com/c/JonGjengset"><a target="_blank" rel="noopener">Jon's</a></Link> videos. It is akin to the end user flavour of TDD approach. The approach called for defining the ergonomics of the web server. It meant defining how the <Link href="https://github.com/tokio-rs/axum#usage-example"><a target="_blank" rel="noopener"><code>main</code> function of the end user</a></Link> would look like, and how would it register the routes and their associated function. A high level structure became apparent through this. The next step was ensuring bare minimum end-to-end functionality. Respond with a "hello world" static body when I type <code>localhost:3000</code> in my browser. Fancy macros for http methods and modularity can come in later. I actively wanted to avoid the trap of making the web server do everything all at once. It was perfectly okay to not handle all the routes and all the edge cases just yet. It can be a very dumb piece of software, as long as a piece of functionality works end to end.
            </p>
            <p>
                A compass calibrated to the north of novelty is a bad compass. It is one of the uncomfortable truths I have come to realise. The way to the unknown waters is through charted routes. In simple words, it means starting with the "hello world" level of complexity and not trying to do everything. With some hacking I got a very <Link href="https://github.com/mnpw/webserver-rs"><a target="_blank" rel="noopener">simple version</a></Link> of the web server up and running. Of course, the process was not as linear as I am making it sound here. It was an iterative mish-mosh of the parts mentioned above. And like all side projects, it is a work in progress.
            </p>
            <p>~</p>
            <h3 className={utilStyles.headingLg}>III.</h3>
            <p>
                While working up on a <Link href="https://github.com/hyperium/hyper/pull/2837"><a target="_blank" rel="noopener">pull request</a></Link> for <code>hyper</code>, I picked <code>client::get()</code> as the entry point and started digging from there. It led me to <code>HttpConnector</code> and <code>PoolClient</code> types. That eventually led me to <code>HttpInfo</code>, the place where I wanted to be at to add the feature. For my web server project, I studied <code>mini-redis</code>'s server design. I went from <code>server::run()</code> to <code>Handler::run()</code> to <code>Connection::read_frame()</code>. I used the <code>read_frame</code> method as the basis for parsing raw data to http packets for my project.
            </p>
            <p>
                I came across a <Link href="https://mitchellh.com/writing/contributing-to-complex-projects"><a target="_blank" rel="noopener">brilliant essay</a></Link> by Mitchell Hashimoto recently — 'Contributing to complex projects'. He talks about 'trace down, learn up' approach, which I found to be remarkably similar to my hacky process.
            </p>
            <blockquote>
                <div className="body">
                    <p>I think too many engineers look at stereotypically complex projects such as programming languages, browsers, databases, etc. as magic or as destined for higher-beings. I like to remember that all projects were started by other humans. If they could do it, I can do it too. And so can you.</p>
                </div>
                <p className="ref">— Mitchell Hashimoto, <Link href="https://mitchellh.com/writing/contributing-to-complex-projects"><a target="_blank" rel="noopener">Contributing to Complex Projects</a></Link></p>
            </blockquote>
            <p>
                I have grown to value courage immensely in the engineering process. It comes up again and again whenever I wear the engineering gloves. It comes up in many ways, big and small. It shows up when I feel okay with being stuck in a hard problem. It shows up when I am okay with diving into the source code of an arcane external dependencies with a bag of breakpoints, in a programming language I had picked four days ago. It shows up when I am okay with actually reading the question on stackoverflow instead of directly scrolling to the answer. It shows up when I am okay with digging in email archives to find the answers, and end up discovering some <Link href="https://lists.debian.org/debian-user/1997/04/msg00011.html"><a target="_blank" rel="noopener">cool things</a></Link> in the process. It shows up when I am okay with picking up <Link href="https://www.man7.org/tlpi/"><a target="_blank" rel="noopener">books</a></Link> that are way outside of my comfort zone.
            </p>
            <p>
                Courage is not memorising all the <code>man</code> pages, or having the syntax for writing loops in shell at the tip of your tongue, or memorising all flags that you can possibly pass to <code>grep</code>. Courage is the shift from "It is impossible" to "It is figureoutable". I've seen my courage grow as I have put more hours to the craft of engineering.
            </p>
            <p>
                I have spent a good amount of time thinking about this craft. What makes somebody a good engineer? Why do I program? Why are some more effective and others are not? What makes me look up to someone in the programming world?
            </p>
            <p>
                To me, good engineering looks like the willingness to connect seemingly disconnected components. It is the ability to give space to multiple contradicting ideas and cut through to one when needed. Most of it just comes with time. There is no denying there.  It is very much like cooking. If the recipe calls for baking at 175°F for 40 minutes, then it cannot be done in 4 minutes. There are limits to short circuiting. You can break production only so many times in a day in the name of learning. Good engineering is hopping around, and making a gentle note of ideas, and coming back to them time and time over again.
            </p>
            <p>
                I am no genius but I really enjoy poking things. I wrote my first line of code eight years ago, with pen and paper, the old fashioned way. The programs have grown from four lines since then. I've cursed computers multiple times as the lines have grown. Sometimes I thought about quitting programming in favour of smooth talking. But I keep coming back. I became a decent engineer purely out of necessity. It was either fix the constantly breaking internet on my linux distro or live without the internet forever. I did not have much choice. Cursing computers is my way to express my love for the infinite complexity and labour of many geniuses that they contain within them.
            </p>
            <p>
                Engineering is not about talking to computers for me. It is about talking to humans <em>through</em> computers. A good engineer, perhaps, is someone who people want to work with. That is the direction in which I want this creative process to bloom.
            </p>
        </Layout>
    )
}