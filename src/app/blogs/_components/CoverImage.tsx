import Image from "next/image";

function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md">
      <Image
        src={coverImageUrl}
        alt={title}
        fill
        className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
        quality={80}
      />
    </div>
  );
}

export default CoverImage;
