"use client";

import Loading from "@/app/loading";
import Error from "@/components/Error/Error";
import { updateMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import css from "./EditProfilePage.module.css";

export default function EditProfilePage() {
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: updateMe,
    onSuccess: (updated) => {
      setUser(updated);
      router.push("/profile");
    },
  });

  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    mutate({ username });
  };

  return (
    <>
      {isError && <Error />}
      {isPending && <Loading />}
      {user && (
        <main className={css.mainContent}>
          <div className={css.profileCard}>
            <h1 className={css.formTitle}>Edit Profile</h1>

            <Image
              src={user.avatar}
              alt={user.username}
              width={120}
              height={120}
              className={css.avatar}
            />

            <form className={css.profileInfo} action={handleSubmit}>
              <div className={css.usernameWrapper}>
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  type="text"
                  className={css.input}
                  defaultValue={user.username}
                  name="username"
                />
              </div>

              <p>Email: {user.email}</p>

              <div className={css.actions}>
                <button type="submit" className={css.saveButton}>
                  Save
                </button>
                <button
                  type="button"
                  className={css.cancelButton}
                  onClick={() => router.back()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
      )}
    </>
  );
}
