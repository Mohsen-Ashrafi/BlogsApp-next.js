"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLFormElement;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", "1");
    if (search.value) {
      newParams.set("search", search.value);
    } else {
      newParams.delete("search");
    }
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        key={searchParams?.get("search")}
        type="text"
        name="search"
        placeholder="Search ..."
        autoComplete="off"
        defaultValue={searchParams?.get("search") || ""}
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mr-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
