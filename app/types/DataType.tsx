export type PostType = {
   id: number;
   title: string;
   body: string;
   userId: number;
};

export type UserType = {
   id: number;
   name: string;
   email: string;
   phone: string;
   company: { name: string };
};
