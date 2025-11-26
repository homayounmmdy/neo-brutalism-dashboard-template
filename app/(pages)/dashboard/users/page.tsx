"use client";
import SectionHeader from "@/app/components/SectionHeader";
import { UserType } from "@/app/types/DataType";
import { useQuery } from "@tanstack/react-query";

const UsersPage = () => {
   const fetchUsers = async (): Promise<UserType[]> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
   };

   const {
      data: users,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
   });
   return (
      <div>
         <SectionHeader title="USERS" />

         <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {isLoading && <p className="p-6 font-bold">Loading users...</p>}
            {error && (
               <p className="p-6 font-bold text-red-600">
                  Error loading users!
               </p>
            )}

            {users && (
               <div className="overflow-x-auto">
                  <table className="w-full">
                     <thead className="bg-cyan-300 border-b-4 border-black">
                        <tr>
                           <th className="px-3 md:px-6 py-2 md:py-4 text-left font-black uppercase border-r-4 border-black">
                              ID
                           </th>
                           <th className="px-3 md:px-6 py-2 md:py-4 text-left font-black uppercase border-r-4 border-black">
                              Name
                           </th>
                           <th className="px-3 md:px-6 py-2 md:py-4 text-left font-black uppercase border-r-4 border-black">
                              Email
                           </th>
                           <th className="px-3 md:px-6 py-2 md:py-4 text-left font-black uppercase border-r-4 border-black">
                              Company
                           </th>
                           <th className="px-3 md:px-6 py-2 md:py-4 text-left font-black uppercase">
                              Phone
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {users.map((user, idx) => (
                           <tr
                              key={user.id}
                              className={`${idx % 2 === 0 ? "bg-white" : "bg-purple-100"} border-b-4 border-black`}
                           >
                              <td className="px-3 md:px-6 py-2 md:py-4 font-bold border-r-4 border-black">
                                 {user.id}
                              </td>
                              <td className="px-3 md:px-6 py-2 md:py-4 font-bold border-r-4 border-black">
                                 {user.name}
                              </td>
                              <td className="px-3 md:px-6 py-2 md:py-4 font-medium border-r-4 border-black">
                                 {user.email}
                              </td>
                              <td className="px-3 md:px-6 py-2 md:py-4 font-bold border-r-4 border-black">
                                 {user.company.name}
                              </td>
                              <td className="px-3 md:px-6 py-2 md:py-4 font-medium">
                                 {user.phone}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </div>
   );
};

export default UsersPage;
