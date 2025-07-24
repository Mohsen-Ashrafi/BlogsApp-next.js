export const dynamic = "force-dynamic";

import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import CategoriesTable from "./_/components/CategoriesTable";

async function CategoryPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          Categories list
        </h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
}
export default CategoryPage;
