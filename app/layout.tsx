import AuthSessionProvider from '@/components/auth/AuthSessionProvider'; // Adjust path if necessary

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
