import "./globals.css";
import {LckLayout} from "@/component/layout/LckLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="KnpuoeescFevb8JfTtF95jr_TqNeJdRJhZ0HveSXgso" />
      </head>
        <body>
            <LckLayout>
                {children}
            </LckLayout>
        </body>
    </html>
  );
}
