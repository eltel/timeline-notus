import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/index.css";
import "styles/tailwind.css";
import "./globals.css";

export const metadata = {
  title: "Timeline Mthafkn Music",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
