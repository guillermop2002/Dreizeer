import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dreizeer - Entrenador Personal",
  description: "Programas de entrenamiento personalizados para que alcances tus metas",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

