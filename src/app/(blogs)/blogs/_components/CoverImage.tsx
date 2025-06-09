import Image from "next/image";
import Link from "next/link";

interface CoverImageProps {
  title: string;
  coverImageUrl: string;
  slug?: string;
}

function CoverImage({ title, coverImageUrl, slug }: CoverImageProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center"
          quality={90}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
