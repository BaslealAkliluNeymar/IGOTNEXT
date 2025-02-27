import '@/app/ui/global.css';
import { font } from '@/app/font';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
