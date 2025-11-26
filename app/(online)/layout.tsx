import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrenamiento Online - Dreizeer",
  description: "Entrena donde y cuando quieras con nuestro programa de coaching online",
};

export default function OnlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

