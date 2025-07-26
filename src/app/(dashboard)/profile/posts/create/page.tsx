"use client";

export const dynamic = "force-dynamic";

import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "./_/CreatePostForm";

function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Posts",
            href: "/profile/posts",
          },
          {
            label: "Create a post",
            href: "/profile/posts/create",
            active: true,
          },
        ]}
      />
      <CreatePostForm />
    </div>
  );
}

export default Page;
