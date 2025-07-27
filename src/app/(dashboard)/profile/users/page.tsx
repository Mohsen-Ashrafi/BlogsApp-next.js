// import { Suspense } from "react";
// import Fallback from "@/ui/Fallback";
// import dynamic from "next/dynamic";
// // import UsersTable from "./_/componets/UsersTable";

// const UsersTable = dynamic(() => import("./_/componets/UsersTable"), {
//   ssr: false,
//   loading: () => <Fallback />,
// });

// async function CategoryPage() {
//   return (
//     <div>
//       <div className="flex items-center justify-between">
//         <h1 className="text-secondary-700 mb-8 font-bold text-xl">
//           Users list
//         </h1>
//       </div>
//       <Suspense fallback={<Fallback />}>
//         <UsersTable />
//       </Suspense>
//     </div>
//   );
// }
// export default CategoryPage;

// app/(dashboard)/profile/users/page.tsx

import UsersTableWrapper from "./UsersTableWrapper";

export default function CategoryPage() {
  return (
    <div>
      <h1 className="text-secondary-700 mb-8 font-bold text-xl">Users list</h1>
      <UsersTableWrapper />
    </div>
  );
}
