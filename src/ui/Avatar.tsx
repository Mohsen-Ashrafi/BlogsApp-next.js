import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

function Avatar({ src, width = 24 }: AvatarProps) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
      alt={src || "Img"}
    />
  );
}

export default Avatar;
