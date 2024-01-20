import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getPost } from '../page';
import { Code } from 'bright';

export const mdxComponents = {
  pre: Code,
  h2: (props: any) => <h2 className='text-2xl font-semibold' {...props} />,
  h3: (props: any) => <h3 className='text-xl font-semibold' {...props} />,
  p: (props: any) => <p className='my-4' {...props} />,
  a: (props: any) => (
    <a
      className='link-primary'
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.children}
    </a>
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

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  //   console.log(post);
  return (
    <div className='mx-4 md:mx-24'>
      <h1 className='text-3xl mt-12 sm:mt-24 mb-6'>{post.title}</h1>
      <PostBody>{post.body}</PostBody>
      
    </div>
  );
}
