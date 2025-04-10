import React from "react";
import Link from "next/link";
import './global.css';

export default function RootLayout(
  {children,}:
    Readonly<{children: React.ReactNode;}>
){
  return(
    <html lang="en">
      <body>
        <header>
          <nav className="nav-bar">
            <Link href="/">Home</Link>
            <Link href="/rates">Rates</Link>
          </nav>
        </header>
        <main className="content">
          {children}
        </main>
        <footer className="footer">
          <p>Copyright 2025. Fixer Currency.</p>
        </footer>
      </body>
    </html>
  );
}