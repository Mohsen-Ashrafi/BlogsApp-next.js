"use client";

import dynamic from "next/dynamic";
import Fallback from "@/ui/Fallback";

const UsersTable = dynamic(() => import("./_/componets/UsersTable"), {
  ssr: false,
  loading: () => <Fallback />,
});

export default function UsersTableWrapper() {
  return <UsersTable />;
}
