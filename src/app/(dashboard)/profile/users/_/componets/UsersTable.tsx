"use client";

import { useEffect, useState } from "react";
import Table from "@/ui/Table";
import Empty from "@/ui/Empty";
import { getAllUsersApi } from "@/services/authService";
import UsersRow from "./UsersRow";
import { User } from "types/Signup";
import Loading from "@/ui/Loading";

function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllUsersApi()
      .then((res) => {
        setUsers(res.users);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (!users.length) return <Empty resourceName="users" />;

  return (
    <Table>
      <Table.Header>
        <th className="w-4 text-center">#</th>
        <th className="max-w-[100px]">Name</th>
        <th className="max-w-[140px]">Email</th>
        <th className="min-w-[90px]">Created At</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
