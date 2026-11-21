import NoteForm from "@/components/NoteForm/NoteForm";
import { Metadata } from "next";
import css from "./CreateNote.module.css";

export const metadata: Metadata = {
  title: "Create New Note | Notehub",
  description:
    "Quickly create a new note in Notehub - the efficient app for organizing your thoughts and ideas",
  openGraph: {
    title: "Create New Note | Notehub",
    description:
      "Quickly create a new note in Notehub - the efficient app for organizing your thoughts and ideas",
    url: "https://notehub.com/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Create New Note | Notehub",
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
