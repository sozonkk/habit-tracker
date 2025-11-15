import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym Tracker - Bartek's Workout Assistant",
  description: "Track your workouts, build strength, progress over time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
