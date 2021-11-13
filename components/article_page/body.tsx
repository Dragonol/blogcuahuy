import * as Components from "../index";
import Image from "next/image";
import * as Utilities from "./../../utilities";
import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

interface ArticleBodyProps {
  article: Components.Type.Article;
}

export const ArticleBody: React.FC<ArticleBodyProps> = (
  props: ArticleBodyProps
): JSX.Element => {
  const createdTimeText = Utilities.TimestampToText(props.article.createdAt);
  const iconSrc = Utilities.GetArticleIconSrc(props.article.type);
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto py-10 lg:py-36 w-11/12">
      <div className="flex flex-col space-y-6">
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="md:w-5 w-3 flex items-center">
              <Image
                src="/icons/back-icon.svg"
                height="1000"
                width="1000"
              ></Image>
            </div>
            <h4 className="m-0">Quay về</h4>
          </div>
        </Link>

        <div className="flex flex-col">
          <div className="inline-block">
            <div className="xl:w-11 lg:w-9 w-6 mt-1 flex-none">
              <Image src={iconSrc} height="1000" width="1000"></Image>
            </div>
          </div>{" "}
          <p className="m-0 text-gray-400">{createdTimeText}</p>
          <div className="flex space-x-3">
            <h1 className="m-0">
              {props.article.title}
            </h1>
          </div>
        </div>
      </div>
      <MDXRemote {...(props.article.mdxSource as MDXRemoteSerializeResult)} />
    </div>
  );
};
