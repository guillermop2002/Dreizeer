import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness para Tercera Edad - Dreizeer",
  description: "Programas de entrenamiento adaptados para personas mayores",
};

export default function SpecialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

