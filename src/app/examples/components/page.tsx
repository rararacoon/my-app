import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { SectionHeader } from '@/components/common/section-header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { ToastButton } from './_toast-button'

export const metadata: Metadata = { title: '컴포넌트 쇼케이스' }

export default function ComponentsPage() {
  return (
    <PageWrapper tag="예제" title="컴포넌트 쇼케이스" description="모든 UI 컴포넌트의 실제 동작을 확인하세요.">
      <div className="flex flex-col gap-10">

        {/* 버튼 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Button" description="다양한 variant와 size를 제공합니다." />
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <Separator />

        {/* 배지 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Badge" description="상태나 카테고리를 표시합니다." />
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        <Separator />

        {/* 알림 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Alert" description="사용자에게 중요한 정보를 전달합니다." />
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>안내</AlertTitle>
            <AlertDescription>일반적인 안내 메시지입니다.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>오류가 발생했습니다. 다시 시도해주세요.</AlertDescription>
          </Alert>
        </section>

        <Separator />

        {/* 토스트 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Toast (Sonner)" description="화면 하단에 표시되는 알림입니다." />
          <div className="flex flex-wrap gap-2">
            <ToastButton variant="default" label="기본 토스트" />
            <ToastButton variant="success" label="성공 토스트" />
            <ToastButton variant="error" label="에러 토스트" />
            <ToastButton variant="warning" label="경고 토스트" />
          </div>
        </section>

        <Separator />

        {/* 탭 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Tabs" description="콘텐츠를 탭으로 구분합니다." />
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">개요</TabsTrigger>
              <TabsTrigger value="tab2">기능</TabsTrigger>
              <TabsTrigger value="tab3">설정</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <Card>
                <CardHeader>
                  <CardTitle>개요</CardTitle>
                  <CardDescription>탭의 첫 번째 콘텐츠입니다.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="tab2">
              <Card>
                <CardHeader>
                  <CardTitle>기능</CardTitle>
                  <CardDescription>탭의 두 번째 콘텐츠입니다.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="tab3">
              <Card>
                <CardHeader>
                  <CardTitle>설정</CardTitle>
                  <CardDescription>탭의 세 번째 콘텐츠입니다.</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* 아바타 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Avatar" description="사용자 프로필 이미지를 표시합니다." />
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>김</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>이</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>박</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <Separator />

        {/* 진행 표시줄 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Progress" description="작업 진행률을 표시합니다." />
          <div className="flex flex-col gap-3 max-w-sm">
            <Progress value={30} />
            <Progress value={60} />
            <Progress value={90} />
          </div>
        </section>

        <Separator />

        {/* 스켈레톤 */}
        <section className="flex flex-col gap-4">
          <SectionHeader title="Skeleton" description="콘텐츠 로딩 중 표시되는 플레이스홀더입니다." />
          <div className="flex flex-col gap-3 max-w-sm">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </section>

      </div>
    </PageWrapper>
  )
}
