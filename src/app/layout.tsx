import "./globals.css";
import {LckLayout} from "@/component/layout/LckLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <LckLayout>
                {children}
            </LckLayout>
        </body>
    </html>
  );
}
