import { getMe } from "@/lib/api/serverApi";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import css from "./ProfilePage.module.css";

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

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar}
            alt={user.username}
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
}
