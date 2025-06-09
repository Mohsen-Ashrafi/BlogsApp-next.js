import "@/styles/globals.css";
import { ReactNode } from "react";
import inter from "@/constants/localFont";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

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
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
