import type { Metadata } from 'next'
import Link from 'next/link'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { SectionHeader } from '@/components/common/section-header'
import { EmptyState } from '@/components/common/empty-state'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Inbox, Plus } from 'lucide-react'

export const metadata: Metadata = { title: '레이아웃 예제' }

export default function LayoutsPage() {
  return (
    <PageWrapper
      tag="예제"
      title="레이아웃 예제"
      description="다양한 레이아웃 패턴과 반응형 디자인 구현 방법을 확인하세요."
      action={<Button size="sm"><Plus className="mr-1 h-3.5 w-3.5" />새로 만들기</Button>}
    >
      <div className="flex flex-col gap-10">

        <section className="flex flex-col gap-4">
          <SectionHeader
            title="SectionHeader"
            description="섹션 제목과 설명, 오른쪽 액션 버튼을 배치합니다."
            action={<Badge variant="outline">컴포넌트</Badge>}
          />
          <p className="text-sm text-muted-foreground">위 헤더가 SectionHeader 컴포넌트 예시입니다.</p>
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="EmptyState" description="데이터가 없을 때 표시되는 빈 상태 UI입니다." />
          <EmptyState
            icon={Inbox}
            title="항목이 없습니다"
            description="새 항목을 추가해서 시작해보세요."
            action={
              <Button size="sm">
                <Plus className="mr-1 h-3.5 w-3.5" />항목 추가
              </Button>
            }
          />
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="반응형 그리드" description="화면 크기에 따라 열 수가 바뀝니다." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-sm">카드 {i + 1}</CardTitle>
                  <CardDescription>모바일 1열 → 태블릿 2열 → 데스크탑 3열</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="사이드바 레이아웃" description="(sidebar) Route Group으로 분리된 레이아웃입니다." />
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                사이드바 레이아웃은 별도 Route Group으로 분리되어 있습니다.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/dashboard">대시보드 예제 보기</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

      </div>
    </PageWrapper>
  )
}
