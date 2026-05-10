import { type ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface PageWrapperProps {
  tag?: string
  title: string
  description?: string
  action?: ReactNode
  children: ReactNode
}

export function PageWrapper({
  tag,
  title,
  description,
  action,
  children,
}: PageWrapperProps) {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4 pt-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            {tag && (
              <Badge variant="outline" className="w-fit">
                {tag}
              </Badge>
            )}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="max-w-lg text-base text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
        <Separator />
      </section>
      {children}
    </div>
  )
}
