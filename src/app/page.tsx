import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Box, Palette, Zap } from 'lucide-react'
import Link from 'next/link'

const stack = [
  {
    icon: Zap,
    title: 'Next.js 16',
    description: 'App Router, Server Components, Streaming 지원',
  },
  {
    icon: Palette,
    title: 'Tailwind CSS v4',
    description: '유틸리티 퍼스트 CSS 프레임워크',
  },
  {
    icon: Box,
    title: 'shadcn/ui',
    description: 'Radix 기반 접근성 있는 UI 컴포넌트',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-4 pt-10">
        <Badge variant="outline" className="w-fit">
          스타터킷 v0.1.0
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">
          모던 웹 개발을 <br />
          빠르게 시작하세요
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui로 구성된 스타터킷입니다.
          바로 개발을 시작할 수 있습니다.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/about">
              시작하기 <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/rararacoon/my-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">기술 스택</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {stack.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader className="pb-2">
                <Icon className="mb-1 h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
