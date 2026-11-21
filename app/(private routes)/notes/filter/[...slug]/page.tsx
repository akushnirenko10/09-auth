import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api/serverApi";

interface NotesFilterPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: NotesFilterPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Notes - ${slug[0]} tags`,
    description: `Browse notes tagged with ${slug[0]} tags. Quickly find, edit and organize everything you wrote.`,
    openGraph: {
      title: `Notes - ${slug[0]} tags`,
      description: `Browse notes tagged with ${slug[0]} tags. Quickly find, edit and organize everything you wrote.`,
      url: `https://notehub.com/filter/${slug[0]}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg/",
          width: 1200,
          height: 630,
          alt: `Notes - ${slug[0]} tags`,
        },
      ],
    },
  };
}

export default async function NotesFilterPage({
  params,
}: NotesFilterPageProps) {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1, tag],
    queryFn: () => fetchNotes("", 1, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
