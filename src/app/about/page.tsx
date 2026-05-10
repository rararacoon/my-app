import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: '소개',
  description: '이 스타터킷에 대한 소개 페이지입니다.',
}

const features = [
  {
    title: 'App Router',
    description: 'Next.js 16 App Router 기반 라우팅, 레이아웃 중첩, Server Components 지원',
  },
  {
    title: '다크모드',
    description: 'next-themes를 통한 시스템 설정 감지 및 수동 전환 지원',
  },
  {
    title: '반응형 레이아웃',
    description: '모바일 햄버거 메뉴부터 데스크탑 네비게이션까지 모든 뷰포트 대응',
  },
  {
    title: 'shadcn/ui',
    description: 'Radix 기반 접근성 있는 UI 컴포넌트. 소스코드를 직접 소유합니다.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4 pt-10">
        <Badge variant="outline" className="w-fit">소개</Badge>
        <h1 className="text-4xl font-bold tracking-tight">스타터킷 소개</h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui로 구성된 모던 웹 개발
          스타터킷입니다. 설정 없이 바로 개발을 시작할 수 있습니다.
        </p>
        <Separator />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">주요 기능</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(({ title, description }) => (
            <Card key={title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
