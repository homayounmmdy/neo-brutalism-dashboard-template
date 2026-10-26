import type { Meta, StoryObj } from "@storybook/react";
import Table from "../../app/components/Table";
import { Column } from "../../app/types/TableType";

/* -------------------------------------------------------------------------- */
/*                                Mock fixtures                               */
/* -------------------------------------------------------------------------- */

type User = {
   id: number;
   name: string;
   email: string;
   company: { name: string };
   phone: string;
};

const USERS: User[] = [
   {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      company: { name: "Romaguera-Crona" },
      phone: "1-770-736-8031",
   },
   {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      company: { name: "Deckow-Crist" },
      phone: "010-692-6593",
   },
   {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      company: { name: "Romaguera-Jacobson" },
      phone: "1-463-123-4447",
   },
   {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      company: { name: "Robel-Corkery" },
      phone: "493-170-9623",
   },
   {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      company: { name: "Keebler LLC" },
      phone: "(254)954-1289",
   },
];

/** Mirrors `app/users/page.tsx`. */
const userColumns: Column<User>[] = [
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

/* -------------------------------------------------------------------------- */
/*                                    Meta                                    */
/* -------------------------------------------------------------------------- */

/**
 * `Table` is generic, so we pin the instantiation via `typeof Table<User>`
 * (TS 4.7+). This keeps `args` fully typed (`TableProps<User>`) in every story.
 */
const meta: Meta<typeof Table<User>> = {
   title: "Components/Table",
   component: Table as typeof Table<User>,
   tags: ["autodocs"],
   parameters: { layout: "padded" },
   argTypes: {
      columns: { control: false, table: { category: "Data" } },
      data: { control: "object", table: { category: "Data" } },
      getRowKey: { control: false, table: { category: "Data" } },
      isLoading: { control: "boolean", table: { category: "State" } },
      error: { control: "text", table: { category: "State" } },
   },
   args: {
      columns: userColumns,
      data: USERS,
      getRowKey: (u) => u.id,
   },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/*                                    Base                                    */
/* -------------------------------------------------------------------------- */

/** Matches the real `UsersPage`. */
export const Default: Story = {};

/* -------------------------------------------------------------------------- */
/*                                   States                                   */
/* -------------------------------------------------------------------------- */

export const Empty: Story = {
   args: { data: [] },
};

export const Loading: Story = {
   args: { isLoading: true },
};

/** Table also accepts an `Error` object — the message is displayed. */
export const Error: Story = {
   args: { error: "Failed to load users" },
};

/* -------------------------------------------------------------------------- */
/*                                  Render                                    */
/* -------------------------------------------------------------------------- */

/** Demonstrates the `render` prop for full cell-level control. */
export const CustomCell: Story = {
   parameters: { controls: { disable: true } },
   render: (args) => (
      <Table<User>
         {...args}
         columns={[
            { key: "id", header: "ID" },
            {
               key: "name",
               header: "User",
               render: (u) => (
                  <div className="flex items-center gap-2">
                     <span className="inline-block h-8 w-8 border-2 border-black bg-pink-300" />
                     <span>{u.name}</span>
                  </div>
               ),
            },
            {
               key: "email",
               header: "Email",
               render: (u) => (
                  <span className="font-medium lowercase">{u.email}</span>
               ),
            },
            { key: "company.name", header: "Company" },
         ]}
      />
   ),
};

/* -------------------------------------------------------------------------- */
/*                                 Edge cases                                 */
/* -------------------------------------------------------------------------- */

/** Long strings — confirms the table doesn't overflow its layout. */
export const LongContent: Story = {
   args: {
      data: [
         {
            id: 999999,
            name: "Bartholomew Maximilian Fitzgerald the Third",
            email: "bartholomew.maximilian.fitzgerald.iii@extremely-long-domain.example.org",
            company: {
               name: "Consolidated Interdimensional Widgets & Gadgets Corporation",
            },
            phone: "+1 (999) 123-4567 ext. 8901",
         },
         ...USERS,
      ],
   },
};

/* -------------------------------------------------------------------------- */
/*                               Dark mode                                    */
/* -------------------------------------------------------------------------- */

/**
 * If you have `@storybook/addon-themes` wired up (see notes below), the
 * toolbar theme switch handles this globally. This story is a fallback for
 * when it isn't.
 */
export const DarkMode: Story = {
   decorators: [
      (Story) => (
         <div className="dark w-full rounded-none bg-gray-900 p-6">
            <Story />
         </div>
      ),
   ],
};

/* -------------------------------------------------------------------------- */
/*                                 Full page                                  */
/* -------------------------------------------------------------------------- */

/** Renders the table at page scale, with a title, at full viewport width. */
export const FullPage: Story = {
   parameters: { layout: "fullscreen", controls: { disable: true } },
   render: (args) => (
      <div className="p-6">
         <h1 className="mb-3 text-4xl font-black uppercase">Users</h1>
         <Table<User> {...args} />
      </div>
   ),
};
