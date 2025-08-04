"use client"
import { Suspense } from "react";
import PostTable from "./_/components/PostTable";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";

interface PageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

async function page({ searchParams }: PageProps) {
  const search = await searchParams;
  const query = queryString.stringify(search);
  const { totalPages } = await getPosts(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 text-secondary-700 mb-12">
        <h1 className="font-bold text-xl">List of posts</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostTable query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default page;
