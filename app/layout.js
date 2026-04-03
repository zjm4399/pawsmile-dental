export const metadata = {
  title: 'PawSmile™ | Professional Pet Dental Care',
  description: 'Eliminate bad breath and plaque with our vet-recommended dental water additive. No brushing required!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer style={{ padding: '2rem', textAlign: 'center', background: '#F8FAFC', color: '#64748B', fontSize: '0.875rem' }}>
          © 2026 PawSmile™ Pet Wellness. All rights reserved. 🐾
        </footer>
      </body>
    </html>
  )
}
