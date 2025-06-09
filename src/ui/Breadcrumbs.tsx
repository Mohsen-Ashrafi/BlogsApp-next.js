import Link from "next/link";
import { FC } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-1 text-sm text-secondary-500">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={breadcrumb.href} className="flex items-center">
              {!isLast && (
                <>
                  <Link
                    href={breadcrumb.href}
                    className="hover:text-secondary-700 transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                  <ChevronRightIcon className="h-4 w-4 mx-2 text-secondary-400" />
                </>
              )}
              {isLast && (
                <span className="text-secondary-700 font-medium">
                  {breadcrumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
