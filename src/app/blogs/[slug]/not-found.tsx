import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <p className="text-xl font-bold text-red-600 mb-8">
              No posts were found that match your search.
            </p>
            <Link href="/blogs" className="text-secondary-500">
              Go to the posts page?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
