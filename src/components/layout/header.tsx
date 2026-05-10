import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Separator } from '@/components/ui/separator'

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/about', label: '소개' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          my-app
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
      <Separator />
    </header>
  )
}
