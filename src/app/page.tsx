import Button from "@/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Home | Blog Management Web Application",
};

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        Blog Management Application
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-sm sm:text-lg leading-loose">
          Where you can manage a complete blog application!
          <br /> You can create a blog - leave comments and monitor everything
          that happens in your panel!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10 text-sm sm:text-lg">
          <Button>
            <Link href="/blogs">Reading blogs</Link>
          </Button>
          <Button>
            <Link href="/profile">Manage Blogs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
