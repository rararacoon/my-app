import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { SectionHeader } from '@/components/common/section-header'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '설정 및 최적화',
  description: '성능 최적화, SEO 설정 등 프로덕션 환경을 위한 설정들을 확인하세요.',
  openGraph: {
    title: '설정 및 최적화 | my-app',
    description: '성능 최적화, SEO 설정 등 프로덕션 환경을 위한 설정들을 확인하세요.',
  },
}

const seoItems = [
  { label: 'title 템플릿', desc: 'layout.tsx에서 "%s | my-app" 형식으로 자동 적용됩니다.' },
  { label: 'description 메타', desc: '각 page.tsx에서 export const metadata로 개별 설정합니다.' },
  { label: 'OpenGraph', desc: 'SNS 공유 시 표시될 제목/설명을 metadata.openGraph로 설정합니다.' },
  { label: 'lang="ko"', desc: 'layout.tsx의 html 태그에 lang 속성이 설정되어 있습니다.' },
]

const perfItems = [
  { label: 'Turbopack', desc: 'Next.js 16 기본 번들러로 빠른 개발 서버를 제공합니다.' },
  { label: 'Server Components', desc: '기본적으로 Server Component를 사용해 JS 번들 크기를 줄입니다.' },
  { label: 'next/font', desc: 'Geist 폰트를 자동 최적화하여 layout shift 없이 로드합니다.' },
  { label: '이미지 최적화', desc: 'next/image를 사용하면 WebP 변환, lazy loading이 자동 적용됩니다.' },
]

export default function OptimizationPage() {
  return (
    <PageWrapper tag="예제" title="설정 및 최적화" description="프로덕션 환경을 위한 설정들을 확인하세요.">
      <div className="flex flex-col gap-10">

        <section className="flex flex-col gap-4">
          <SectionHeader title="SEO 설정" description="현재 페이지의 metadata가 어떻게 적용되었는지 확인하세요." />
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="secondary">title: 설정 및 최적화 | my-app</Badge>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {seoItems.map(({ label, desc }) => (
              <Card key={label}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="성능 최적화" description="스타터킷에 기본 적용된 성능 최적화 항목입니다." />
          <div className="grid gap-3 sm:grid-cols-2">
            {perfItems.map(({ label, desc }) => (
              <Card key={label}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  )
}
