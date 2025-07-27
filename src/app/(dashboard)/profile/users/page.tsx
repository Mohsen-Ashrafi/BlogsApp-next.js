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

import UsersTableWrapper from "./UsersTableWrapper";

function CategoryPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          Users list
        </h1>
      </div>
      <UsersTableWrapper />
    </div>
  );
}

export default CategoryPage;
