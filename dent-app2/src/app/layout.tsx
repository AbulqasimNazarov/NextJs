// app/layout.tsx
import Navbar from "./components/navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* ← Navbar один раз здесь */}
        {children}
      </body>
    </html>
  );
}
