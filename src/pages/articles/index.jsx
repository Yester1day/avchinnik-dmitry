import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Skills - Dmitry Avchinnik</title>
        <meta
          name="My skills"
          content="about technologies I work with(05.01/2023)  "
        />
      </Head>
      <SimpleLayout
        title="Some words about technologies I work with."
        intro=" "
      >
        <div>
          Here some of my main skills and technologies
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <ul content="main-technologies">
              <li>▹React/React Native</li>
              <li>▹Redux</li>
              <li>▹Typescript/Javascript</li>
              <li>▹Material-UI/Tailwind</li>
              <li>▹Axios</li>
              <li>▹Storybook</li>
              <li>Node.js</li>
              <li>▹Unit-test/TDD</li>
              <li>▹Monorepo</li>
            </ul>
          </div>
          <div>
            Development - is the engine of progress. That's why I try to learn
            more new and interesting things, including them in my projects. Here
            are a few of them...
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <ul content="main-technologies">
                <li>▸Next.js</li>
                <li>▸Angular</li>
                <li>▸Bootstrap</li>
                <li>▸Python</li>
                <li>▸Java</li>
              </ul>
            </div>
          </div>
          <div className="relative h-80 w-80	">
            <div className="absolute bottom-0 right-0">
              “The swiftest way to triple your success is to double your
              investment in personal development.” - Robin Sharma
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
