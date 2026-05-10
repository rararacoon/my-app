import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="w-full">
      <Separator />
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} my-app. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with Next.js · Tailwind CSS · shadcn/ui
        </p>
      </div>
    </footer>
  )
}
