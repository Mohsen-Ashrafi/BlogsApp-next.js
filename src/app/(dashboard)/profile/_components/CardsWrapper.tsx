import { fetchCardData } from "@/services/data";
import Card from "./Card";

async function CardsWrapper() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title="Users" value={numberOfUsers} type="users" />
      <Card title="Posts" value={numberOfPosts} type="posts" />
      <Card title="Comments" value={numberOfComments} type="comments" />
    </div>
  );
}

export default CardsWrapper;
