// import { getPostById } from "@/services/postServices";
// import Breadcrumbs from "@/ui/Breadcrumbs";
// import { notFound } from "next/navigation";
// import CreatePostForm from "../../create/_/CreatePostForm";

// interface EditPageProps {
//   params: {
//     postId: string;
//   };
// }

// async function EditPage({ params: { postId } }: EditPageProps) {
//   const { post } = await getPostById(postId);

//   if (!post) return notFound();
//   return (
//     <div>
//       <Breadcrumbs
//         breadcrumbs={[
//           {
//             label: "Posts",
//             href: "/profile/posts",
//           },
//           {
//             label: "Edit a post",
//             href: `/profile/posts/${postId}/edit`,
//             active: true,
//           },
//         ]}
//       />
//       <CreatePostForm postToEdit={post} />
//     </div>
//   );
// }

// export default EditPage;

import { getPostById } from "@/services/postServices";
import Breadcrumbs from "@/ui/Breadcrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

interface EditPageProps {
  params: Promise<{ postId: string }>;
}

async function EditPage({ params }: EditPageProps) {
  const { postId } = await params;
  const { post } = await getPostById(postId);

  if (!post) return notFound();
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Posts",
            href: "/profile/posts",
          },
          {
            label: "Edit a post",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}

export default EditPage;
