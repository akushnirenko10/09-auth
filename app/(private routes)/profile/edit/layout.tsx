import { Metadata } from "next";

interface EditProfileLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Edit Profile Page | Notehub",
  description:
    "Edit your Notehub profile: change your username and keep your account details up to date.",
  openGraph: {
    title: "Edit Profile Page | Notehub",
    description:
      "Edit your Notehub profile: change your username and keep your account details up to date.",
    url: "https://notehub.com/profile/edit",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notehub edit profile page",
      },
    ],
  },
};

export default function EditProfileLayout({
  children,
}: EditProfileLayoutProps) {
  return children;
}
