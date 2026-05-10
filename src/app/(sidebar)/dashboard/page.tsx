import type { Metadata } from 'next'
import { SectionHeader } from '@/components/common/section-header'
import { EmptyState } from '@/components/common/empty-state'
import { LayoutDashboard } from 'lucide-react'

export const metadata: Metadata = {
  title: '대시보드',
  description: '사이드바 레이아웃 예시 페이지입니다.',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="대시보드"
        description="사이드바 레이아웃을 사용하는 예시 페이지입니다."
      />
      <EmptyState
        icon={LayoutDashboard}
        title="콘텐츠가 없습니다"
        description="대시보드 콘텐츠를 여기에 추가하세요."
      />
    </div>
  )
}
