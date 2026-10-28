"use client";
import SectionHeader from "@/app/components/SectionHeader";
import Table from "@/app/components/Table";
import { useFetchUsers } from "@/app/hooks/useFetch";
import { Column } from "@/app/types/TableType";

type User = {
   id: number;
   name: string;
   email: string;
   company: { name: string };
   phone: string;
};

const columns: Column<User>[] = [
   { key: "id", header: "ID" },
   { key: "name", header: "Name" },
   {
      key: "email",
      header: "Email",
      render: (u) => <span className="font-medium">{u.email}</span>,
   },
   { key: "company.name", header: "Company" },
   {
      key: "phone",
      header: "Phone",
      render: (u) => <span className="font-medium">{u.phone}</span>,
   },
];

const UsersPage = () => {
   const { data: users, isLoading, error } = useFetchUsers();

   return (
      <div>
         <SectionHeader title="USERS" sectionClassName="mt-3" />
         <Table<User>
            columns={columns}
            data={users}
            getRowKey={(user) => user.id}
            isLoading={isLoading}
            error={error}
         />
      </div>
   );
};

export default UsersPage;
