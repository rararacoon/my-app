import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { SectionHeader } from '@/components/common/section-header'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { FetchDemo } from './_fetch-demo'

export const metadata: Metadata = { title: '데이터 페칭' }

export default function DataFetchingPage() {
  return (
    <PageWrapper tag="예제" title="데이터 페칭" description="API 호출, 로딩 상태, 에러 처리 패턴을 확인하세요.">
      <div className="flex flex-col gap-10">

        <section className="flex flex-col gap-4">
          <SectionHeader title="Server Component 데이터 페칭" description="Next.js Server Component에서 직접 fetch합니다." />
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">서버에서 실행</Badge>
            <Badge variant="outline">캐싱 자동 적용</Badge>
            <Badge variant="outline">JS 번들 미포함</Badge>
          </div>
          <ServerFetchExample />
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="Skeleton 로딩 패턴" description="데이터를 불러오는 동안 표시되는 Skeleton UI입니다." />
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="gap-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="Client 데이터 페칭" description="버튼을 눌러 API를 호출하고 로딩/에러 상태를 확인하세요." />
          <FetchDemo />
        </section>

      </div>
    </PageWrapper>
  )
}

async function ServerFetchExample() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      next: { revalidate: 60 },
    })
    const data = await res.json() as { id: number; title: string; completed: boolean }

    return (
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>서버에서 가져온 데이터</AlertTitle>
        <AlertDescription className="font-mono text-xs">
          ID: {data.id} · {data.title} · {data.completed ? '완료' : '미완료'}
        </AlertDescription>
      </Alert>
    )
  } catch {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>데이터를 불러올 수 없습니다</AlertTitle>
        <AlertDescription>네트워크 연결을 확인해주세요.</AlertDescription>
      </Alert>
    )
  }
}
