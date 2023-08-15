export const metadata = {
  title: "Puro Codear",
  description: "Vamo a aprende",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
