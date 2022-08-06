const selected =
  "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
const unselected =
  "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";

interface IProps {
    href: string;
    navLocation: string,
    setNavLocation: Function
}

export default function NavLink({ href, navLocation, setNavLocation }: IProps) {
  return (
    <a
      href={`#${href}`}
      className={href === navLocation ? selected : unselected}
      onClick={() => setNavLocation(href)}
    >
      {href}
    </a>
  );
}
