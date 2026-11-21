"use client";

import Error from "@/components/Error/Error";
import Loader from "@/components/Loader/Loader";
import Modal from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import css from "./NotePreview.client.module.css";
import { fetchNoteById } from "@/lib/api/clientsApi";

export default function NotePreviewClient() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal>
      <button
        className={css.backBtn}
        type="button"
        onClick={() => router.back()}
      >
        Back
      </button>
      {isLoading && <Loader />}
      {isError && <Error />}
      {note && (
        <main className={css.main}>
          <div className={css.container}>
            <div className={css.item}>
              <div className={css.header}>
                <h2>{note.title}</h2>
              </div>
              <p className={css.tag}>{note.tag}</p>
              <p className={css.content}>{note.content}</p>
              <p className={css.date}>{note.createdAt}</p>
            </div>
          </div>
        </main>
      )}
    </Modal>
  );
}
