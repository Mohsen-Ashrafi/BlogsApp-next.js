import "@/styles/globals.css";
import Header from "@/components/Header";
import { ReactNode } from "react";
import inter from "@/constants/localFont";

export const metadata = {
  title: {
    template: "%s | Blog App",
    default: "Blog App",
  },
  description: "Web application for managing blogs and user comments",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} min-h-screen font-sans`}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
