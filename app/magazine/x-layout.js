import "../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/index.css";
import "styles/tailwind.css";

export const metadata = {
  title: "Timeline Music Magazine",
  description: "Our Magazine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-page bg-cover bg-center bg-no-repeat h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
