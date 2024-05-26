import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from '@radix-ui/themes';
import { Code } from 'bright';
import remarkGfm from 'remark-gfm';
import { H2Component } from './H2Component';

export const mdxComponents = {
  pre: Code,
  h2: H2Component,
  h3: (props: any) => <h3 className='my-4 text-xl font-semibold' {...props} />,
  p: (props: any) => <p className='my-4' {...props} />,
  a: (props: any) => (
    <Link href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </Link>
  ),
  hr: (props: any) => <hr className='my-4' {...props} />,
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
