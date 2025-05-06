import Image from "next/image";

interface AvatarProps {
  src?: string;
  width?: number;
}

function Avatar({ src, width = 24 }: AvatarProps) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      className="rounded-lg ring-1 ring-secondary-300 ml-2"
      alt={src}
    />
  );
}

export default Avatar;
