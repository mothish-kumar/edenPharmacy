import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata = {
  title: "Eden Pharmacy",
  description: "Elbrit Life Science Private Limited Assignment-Mothish Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
