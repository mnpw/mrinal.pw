import Layout from "../../components/layout"
import fs from 'fs';
import { join } from 'path'

export default function Posts({ content }) {
    return (
        <Layout>
            <div
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const postsDirectory = join(process.cwd(), '_posts')

    const fullPath = join(postsDirectory, `${params.slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const content = await import('../../rust/pkg').then((module) => {
        return module.parse_markdown_to_html(fileContents)
    })

    return { props: { content } }
}

export async function getStaticPaths() {
    const postsDirectory = join(process.cwd(), '_posts')
    const dirData = fs.readdirSync(postsDirectory)
    const posts = dirData.map((slug) => slug.replace(/\.md$/, ''))
    console.log(posts);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post
                },
            }
        }),
        fallback: false,
    }
}