import React, { ReactNode, Suspense } from "react";
import CategoryList from "./../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";

export const metadata = {
  title: "Blogs",
};

interface LayoutProps {
  children: ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 text-secondary-700 mb-12">
        <h1 className="text-lg font-bold">Blogs List</h1>
        <Search />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9 mb-20">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
