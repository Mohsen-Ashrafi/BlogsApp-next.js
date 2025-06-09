import Table from "@/ui/Table";
import Empty from "@/ui/Empty";
import CategoriesRow from "./CategoriesRow";
import { getCategoryApi } from "@/services/categoryService";

async function CategoriesTable() {
  const { categories } = await getCategoryApi();
  if (!categories.length) return <Empty resourceName="categories" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Title</th>
        <th>description</th>
        <th>createdAt</th>
      </Table.Header>
      <Table.Body>
        {categories.map((category, index) => (
          <CategoriesRow
            key={category._id}
            category={category}
            index={index}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
export default CategoriesTable;
