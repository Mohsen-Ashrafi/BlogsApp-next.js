export const dynamic = "force-dynamic";

import { Suspense } from "react";

import CardsWrapper from "./_components/CardsWrapper";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_components/LatestPosts";

async function Profile() {
  return (

    <div>
      <h1 className="text-xl mb-8 text-secondary-700">Dashboard</h1>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>

      <h2 className="text-xl mb-4 text-secondary-600">Latest posts</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}

export default Profile;
