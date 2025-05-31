import Navbar from '@/components/layout/Navbar'; // Adjust path if necessary

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}
