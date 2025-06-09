import { getPosts } from "@/services/postServices";
import { cookies } from "next/headers";
import queryString from "query-string";
import PostList from "../../../_components/PostList";
import setCookieForFetch from "@/utils/setCookieForFetch";

interface CategoryProps {
  params: {
    categorySlug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

async function Category({ params, searchParams }: CategoryProps) {
  const { categorySlug } = params;

  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookieForFetch(cookieStore);
  const { posts } = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          No posts found in this category.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
