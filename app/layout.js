export const metadata = {
  title: "Chatee - Private Video Calling App",
  description: "Secure & Private Video Calling Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
