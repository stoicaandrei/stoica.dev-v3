import { Container, Icon } from '@/atoms';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrei Stoica - Software engineer, founder, consultant</title>
        <meta
          name="description"
          content="Highly motivated and very passionate React Full Stack Developer 5 years of experience in Typescript, React, Next.js, Tailwind CSS, Ant Design, Node js, PostgreSQL, MongoDB"
        />
      </Head>
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <Link href="https://twitter.com">
              <Icon icon="twitter" className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com">
              <Icon icon="instagram" className="w-6 h-6" />
            </Link>
            <Link href="https://github.com">
              <Icon icon="github" className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com">
              <Icon icon="linkedin" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
