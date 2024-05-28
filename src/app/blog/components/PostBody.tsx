import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Code } from 'bright';
import remarkGfm from 'remark-gfm';
import { H2Component } from './H2Component';

export const mdxComponents = {
  pre: Code,
  code: (props: any) => <code className='text-black bg-gray-200 dark:bg-gray-700 dark:text-white rounded px-1' {...props} />,
  h2: H2Component,
  h3: (props: any) => <h3 className='my-4 text-xl font-semibold' {...props} />,
  p: (props: any) => <p className='my-4' {...props} />,
  a: (props: any) => (
    <Link href={props.href} target='_blank' className='my-link text-blue-500'>
      {props.children}
    </Link>
  ),
  hr: (props: any) => <hr className='my-4' {...props} />,
  li: (props: any) => <li className='my-2 mx-4 list-disc' {...props} />,
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
