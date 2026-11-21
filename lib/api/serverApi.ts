import { User } from "@/types/user";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { nextServer } from "./api";

interface CheckSession {
  success: boolean;
}

export async function checkSession(): Promise<AxiosResponse<CheckSession>> {
  const cookieStore = await cookies();
  const res = await nextServer.get<CheckSession>("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
}

export async function getMe(): Promise<User> {
  const cookieStore = await cookies();
  const { data } = await nextServer.get("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
}
