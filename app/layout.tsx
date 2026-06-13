export const metadata = {
  title: 'Fitness Tracker',
  description: 'Track your fitness journey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
