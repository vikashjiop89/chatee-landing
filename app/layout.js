export const metadata = {
  title: "Chatee",
  description: "Private & Secure Video Calling App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
