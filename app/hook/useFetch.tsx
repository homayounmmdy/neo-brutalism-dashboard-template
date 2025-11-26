"use client";
import { useQuery } from "@tanstack/react-query";
import { PostType, UserType } from "../types/DataType";

const fetchData = async <T,>(endpoint: string): Promise<T> => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
   if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
   return res.json();
};

const useAPI = <T,>(endpoint: string) => {
   return useQuery({
      queryKey: [endpoint],
      queryFn: () => fetchData<T>(endpoint),
   });
};

export const useFetchUsers = () => useAPI<UserType[]>("users");
export const useFetchPosts = () => useAPI<PostType[]>("posts");
