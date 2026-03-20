import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Visynex Studio | Industrial AI",
  description: "Advanced industrial computer vision platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[var(--color-slate-900)] text-white flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[var(--color-slate-900)]">
          {children}
        </div>
      </body>
    </html>
  );
}
