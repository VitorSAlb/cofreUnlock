import "./globals.css";

export const metadata = {
  title: "Cofre",
  description: "Open cofre para engima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
