import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrenador Personal en tu Zona - Dreizeer",
  description: "Entrenamiento personalizado en tu barrio",
};

export default function LocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

