import { Note, NoteData } from "@/types/note";
import { User } from "@/types/user";
import { nextServer } from "./api";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  query?: string,
  currentPage?: number,
  tag?: string,
): Promise<FetchNotesResponse> {
  const { data } = await nextServer.get<FetchNotesResponse>("/notes", {
    params: {
      search: query,
      page: currentPage,
      perPage: 12,
      tag,
    },
  });
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await nextServer.get<Note>(`/notes/${id}`);
  return data;
}

export async function createNote(noteData: NoteData): Promise<Note> {
  const { data } = await nextServer.post<Note>("/notes", noteData);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await nextServer.delete<Note>(`/notes/${id}`);
  return data;
}

export type UserRequest = {
  email: string;
  password: string;
};

export async function register(userData: UserRequest): Promise<User> {
  const { data } = await nextServer.post<User>("/auth/register", userData);
  return data;
}

export async function login(userData: UserRequest): Promise<User> {
  const { data } = await nextServer.post<User>("auth/login", userData);
  return data;
}

interface CheckSession {
  success: boolean;
}

export async function checkSession(): Promise<boolean> {
  const { data } = await nextServer.get<CheckSession>("/auth/session");
  return data.success;
}

export async function getMe(): Promise<User> {
  const { data } = await nextServer.get<User>("/users/me");
  return data;
}

export async function logout(): Promise<void> {
  await nextServer.post("/auth/logout");
}

interface UpdateMeParams {
  email?: string;
  username?: string;
}

export async function updateMe(userData: UpdateMeParams) {
  const { data } = await nextServer.patch<User>("/users/me", userData);
  return data;
}
