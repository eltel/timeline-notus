import Link from "next/link";
import kebabCase from "@/lib/utils/kebabCase";

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-medium uppercase text-yellow-500 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {text.split(" ").join("-")}
    </Link>
  );
};

export default Tag;
