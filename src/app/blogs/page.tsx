import React, { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/spinner";

async function BlogsPage() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogsPage;
