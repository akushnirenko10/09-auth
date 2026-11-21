import Profile from "@/components/Profile/Profile";
import { getMe } from "@/lib/api/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page | Notehub",
  description:
    "View your Notehub profile: username, email and avatar. Edit your account details in one click.",
  openGraph: {
    title: "Profile Page | Notehub",
    description:
      "View your Notehub profile: username, email and avatar. Edit your account details in one click.",
    url: "https://notehub.com/profile",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notehub profile page",
      },
    ],
  },
};

export default async function ProfilePage() {
  const user = await getMe();

  return <Profile user={user} />;
}
