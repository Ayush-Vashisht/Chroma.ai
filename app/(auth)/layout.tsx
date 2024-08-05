import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth flex flex-col items-center justify-center min-h-screen">
      {children}
      <div className="mt-4 text-center">
        <div>Test Email: chroma+clerk_test@gmail.com</div>
        <div>Test password: chromaaitest</div>
      </div>
    </main>
  )
}

export default Layout
