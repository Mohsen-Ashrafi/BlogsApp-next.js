import { cookies } from "next/headers";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import PostList from "../_components/PostList";
import { JSX } from "react";
import setCookieForFetch from "@/utils/setCookieForFetch";

interface BlogsPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

async function BlogsPage({
  searchParams,
}: BlogsPageProps): Promise<JSX.Element> {
  // const queries = queryString.stringify(searchParams);
  const queries = queryString.stringify(searchParams || {}); // 👈 fallback
  const cookieStore = await cookies();
  const options = setCookieForFetch(cookieStore);
  const { posts } = await getPosts(queries, options);

  // const { search } = searchParams;
  const search = searchParams?.search;
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
