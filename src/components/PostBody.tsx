import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Code } from 'bright';
import remarkGfm from 'remark-gfm';
import { H2Component } from './H2Component';

export const mdxComponents = {
  pre: Code,
  code: (props: any) => (
    <code
      className='rounded bg-gray-200 px-1 text-black dark:bg-gray-700 dark:text-white'
      {...props}
    />
  ),
  h2: H2Component,
  h3: (props: any) => <h3 className='my-4 text-xl font-semibold' {...props} />,
  p: (props: any) => <p className='my-4' {...props} />,
  a: (props: any) => (
    <Link href={props.href} target='_blank' className='my-link text-blue-500'>
      {props.children}
    </Link>
  ),
  hr: (props: any) => <hr className='my-4' {...props} />,
  li: (props: any) => <li className='mx-4 my-2 list-disc' {...props} />,
  blockquote: (props: any) => (
    <blockquote className='my-4 border-l-4 border-gray-300 pl-4' {...props} />
  ),
};

export function PostBody({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
      components={mdxComponents}
    />
  );
}
