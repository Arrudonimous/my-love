import "./globals.css";

export const metadata = {
  title: "For My Love",
  description: "Criado para minha amada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
