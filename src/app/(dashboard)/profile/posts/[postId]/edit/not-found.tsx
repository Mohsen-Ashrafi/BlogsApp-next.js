import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-secondary-400" />
      <h2 className="text-xl font-semibold">
        The page you were looking for was not found
      </h2>
      <p>No post found with this information</p>
      <Button
        href="/profile/posts"
        className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-400"
      >
        Back
      </Button>
    </main>
  );
}
