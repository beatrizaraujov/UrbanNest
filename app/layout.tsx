import "./globals.css"
import NavBar from "@/components/sections/ui/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-neutral-950 antialiased">
        
        <div className="reveal-overlay" /> 

        <NavBar />
        
        
        {children}
      </body>
    </html>
  )
}