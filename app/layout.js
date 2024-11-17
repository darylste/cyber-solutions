import './globals.css';

export const metadata = {
  title: 'Cyber Solutions',
  description: 'Internet Technologies CW2',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
