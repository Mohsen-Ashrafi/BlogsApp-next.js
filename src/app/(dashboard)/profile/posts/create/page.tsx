import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "./_/CreatePostForm";

function page() {
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

export default page;


