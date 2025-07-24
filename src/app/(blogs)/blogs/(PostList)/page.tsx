import { cookies } from "next/headers";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import PostList from "../_components/PostList";
import { JSX } from "react";
import setCookieOnReq from "@/utils/setCookieOnReq";

interface BlogsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

async function BlogsPage({
  searchParams,
}: BlogsPageProps): Promise<JSX.Element> {
  const queries = queryString.stringify(searchParams);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  const { search } = await searchParams;
  const resultText = posts.length > 1 ? "results" : "result";

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "Sorry, we couldn't find any posts that match your search."
            : `showing ${posts.length} ${resultText} for `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default BlogsPage;
