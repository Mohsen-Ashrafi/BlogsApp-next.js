import Table from "@/ui/Table";
import { Category } from "types/ApiTypes";

interface CategoriesRowProps {
  index: number;
  category: Category;
}

function CategoriesRow({ index, category }: CategoriesRowProps) {
  const { description, slug, createdAt } = category;
  return (
    <Table.Row>
      <td className="px-2 py-2 w-4 text-center">{index + 1}</td>
      <td className="max-w-[100px] truncate">{slug}</td>
      <td className="max-w-[140px] truncate"> {description}</td>
      <td className="min-w-[90px] text-nowrap">
        {new Date(createdAt).toLocaleDateString("en-US")}
      </td>
    </Table.Row>
  );
}
export default CategoriesRow;
