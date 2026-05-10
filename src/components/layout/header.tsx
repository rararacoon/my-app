import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { MobileNav } from './mobile-nav'
import { Separator } from '@/components/ui/separator'

export const navLinks = [
  { href: '/', label: '홈' },
  { href: '/about', label: '소개' },
  { href: '/examples', label: '예제' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          my-app
        </Link>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <MobileNav links={navLinks} />
        </div>
      </div>
      <Separator />
    </header>
  )
}
