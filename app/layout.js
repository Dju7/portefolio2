import Header from "./components/Header";
import "./globals.css"

export const metadata = {
  title: "Portefolio Cros Julien",
  description: "portefolio developpeur web Junior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative w-full h-fit flex flex-col items-center overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
