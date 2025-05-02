import { useRouter } from "next/navigation";

export default function useMoveBack(): () => void {
  const router = useRouter();
  return () => router.back();
}