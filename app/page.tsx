import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/ui/icons';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>
          <span>Find and fix&nbsp;</span>
          <span className={title({ color: 'violet' })}>errors&nbsp;</span>
          <br />
          <span>in your code, regardless of your experience level!</span>
        </h1>

        <p className={subtitle({ class: 'text-lg mt-4 text-gray-700' })}>
          A simple and fast solution for efficient bug fixing.
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
          href={siteConfig.links.docs}
        >
          Getting Started
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
