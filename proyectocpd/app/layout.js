import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: 'Proyecto 1 CPD',
  description: 'Proyecto 1 de cómputo paralelo y distribuido',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
