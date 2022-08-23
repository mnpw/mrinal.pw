import Layout from "../../components/layout";
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function Posts() {

    let code = `
                       ┌──────────────────┬────────────────┐
                       │                  │                │
                       │      Docker      │     Podman     │
                       │                  │                │
                       │                  │                │
                       │    ┌────────┐    │   ┌────────┐   │
               Client  │    │ Docker │    │   │        │   │
                       │    └───┬────┘    │   │        │   │
                       │        │         │   │        │   │
                       │    ┌───▼─────┐   │   │        │   │
               Engine  │    │ Dockerd │   │   │ Podman │   │
                       │    └───┬─────┘   │   │        │   │
                       │        │         │   │        │   │
                       │  ┌─────▼──────┐  │   │        │   │
 Runtime (High Level)  │  │ Containerd │  │   │        │   │
                       │  └─────┬──────┘  │   └───┬────┘   │
                       │        │         │       │        │
                       │     ┌──▼───┐     │    ┌──▼───┐    │
  Runtime (Low Level)  │     │ runc │     │    │ runc │    │
                       │     └──┬───┘     │    └──┬───┘    │
                       │        │         │       │        │
                       │     ┌──▼────┐    │    ┌──▼────┐   │
               Kernel  │     │ Linux │    │    │ Linux │   │
                       │     └───────┘    │    └───────┘   │
                       │                  │                │
                       └──────────────────┴────────────────┘
    `
    return (
        <Layout>
            <h2 className={utilStyles.headingXl}>Containers, not docker</h2>
            <p>
                I get a shiny new machine. I spend four hours finding the perfect wallpaper. And then, in a moment of weakness, I realise something. Perhaps my $EMPLOYER did not envision this - me browsing through Pinterest - when they decided to bestow all this computing power upon me?
            </p>
            <p>No time to procrastinate. Time to install some software, time to write some code, time to push $COMPANY closer to the cash capped mountain of success.            </p>
            <h3 className={utilStyles.headingMd}>docker something something 🤔</h3>
            <p>
                Here's the position I find myself in: I must get TimescaleDB (Postgres with some makeup on basically) running. But I don't want to waste my time fiddling with configs, and environment variables, and other scary things. Maybe I can run it in a container? Docker something something?
            </p>
            <p>
                I ran TimescaleDB in a container on my old Linux machine a few days ago. I can repeat the steps for the new machine. Search 'install docker macOS', click on some links, copy some commands, press enter, and I should be good to go.
            </p>
            <p>
                Hmmm. Easy. Three simple steps:
                <ol className={utilStyles.listSpace}>
                    <li>
                        Install Docker
                    </li>
                    <li>
                        Start Docker
                    </li>
                    <li>
                        Run TimescaleDB in Docker
                    </li>
                </ol>
            </p>

            <h3 className={utilStyles.headingMd}>docker and macOS cannot be friends 😞</h3>
            <p>
                I type <code>nix-env -iA nixpkgs.docker</code> (not really understanding what is happening) like the cool kids and press enter. Docker is installed. Great. Step 0 done.
            </p>
            <p>
                Now I type <code>sudo service start docker</code> and press enter. Error? Why? Ughhh.
            </p>
            <p>
                I take a step back to see what's going on. I want to start Docker. Docker has two parts: docker-client and docker-daemon. Client talks to daemon, so daemon should be running when client is being used. On Linux, <code>sudo service start docker</code> did the job of running the docker-daemon. <em>service</em> is a Linux specific tool (see <Link href="https://askubuntu.com/a/903405"><a target="_blank" rel="noopener">this</a></Link>) that makes managing <em>dockerd</em> (the docker-daemon) convenient.
            </p>


            <h3 className={utilStyles.headingMd}>looking for friendly daemons 👹</h3>
            <p>
                Turns out <em>service</em> and <em>dockerd</em> <Link href="https://stackoverflow.com/a/49719638/12764266"><a target="_blank" rel="noopener">don't exist for macOS</a></Link> like they do for Linux. So does it mean that I cannot run docker on macOS? Great. Back to step 0.
            </p>
            <p>
                When I search 'install docker macOS' the first result tells me to install Docker Desktop. Docker Desktop is a way to get <em>dockerd</em> running on a non-linux OS. But I will not let SEOed search results govern me so I decide against using it.
            </p>

            <p>
                I take a step back. I realise that I'm stuck. I cannot run TimescaleDB because I cannot get Docker working because <em>dockerd</em> is not available for macOS. I realise that there is a point of interjection. I don't <em>have</em> to run Docker, I just want something that can run TimescaleDB in a container.
            </p>

            <h3 className={utilStyles.headingMd}>a containerised world 📦</h3>
            <p>
                I learn within the confines of many StackOverflow tabs that Container ≠ Docker. I want to run TimescaleDB in a containerised form. And there are many tools that can help me do it. Podman is one such tool - thanks to the Open Container Initiative standards.
            </p>
            <p>
                Podman has a different way of doing things internally but it understands the concept of an image just like Docker does. Not just the concept of an image, but podman also supports Docker APIs so I can do <code>alias docker=podman</code>.
            </p>
            <p>
                I come out of a rabbit hole of containers, VMs, and OCI standards knowing a little more than before and I update my mental models:
            </p>
            <pre>
                <code>{code}</code>
            </pre>
            <p>
                Moral of the story? Docker is just a tool for containerization. When on macOS use Podman.
            </p>

            <p>
                ~
            </p>
            <p>
                Further reading:
            </p>
            <p>
                <ul className={utilStyles.list}>
                    <li>
                        - <Link href="https://fly.io/blog/docker-without-docker/"><a target="_blank" rel="noopener">Docker Without Docker</a></Link>
                    </li>
                    <li>
                        - <Link href="https://mergeboard.com/blog/2-qemu-microvm-docker/"><a target="_blank" rel="noopener">Execute Docker Containers as QEMU MicroVMs</a></Link>
                    </li>
                    <li>
                        - <Link href="https://mkdev.me/posts/the-tool-that-really-runs-your-containers-deep-dive-into-runc-and-oci-specifications"><a target="_blank" rel="noopener">The tool that really runs your containers: deep dive into runc and OCI specifications</a></Link>
                    </li>
                </ul>
            </p>
        </Layout>
    )
}