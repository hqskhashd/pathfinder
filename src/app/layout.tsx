import "./globals.css";

export const metadata = {
  title: "Pathfinder",
  description: "You need the right extracurriculars.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
