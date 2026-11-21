import css from "./LayoutNotes.module.css";

interface NotesFilterLayout {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}
export default function NotesFilterLayout({
  children,
  sidebar,
}: NotesFilterLayout) {
  return (
    <>
      <section className={css.container}>
        <aside className={css.sidebar}>{sidebar}</aside>
        <div className={css.notesWrapper}>{children}</div>
      </section>
    </>
  );
}
