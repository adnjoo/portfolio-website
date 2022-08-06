interface IProps {
    href: string,
    text: string
}

export default function AboutLink({ href, text }: IProps) {
  return (
    <a className="text-indigo-700 font-bold" href={href} target="_blank">
      {text}
    </a>
  );
}
