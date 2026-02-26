export const metadata = {
  title: "Chatee",
  description: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
