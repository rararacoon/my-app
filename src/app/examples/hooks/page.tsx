import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { SectionHeader } from '@/components/common/section-header'
import { Separator } from '@/components/ui/separator'
import { MobileDetector } from './_mobile-detector'
import { DebounceDemo } from './_debounce-demo'
import { LocalStorageDemo } from './_local-storage-demo'

export const metadata: Metadata = { title: 'usehooks-ts 예제' }

export default function HooksPage() {
  return (
    <PageWrapper tag="예제" title="usehooks-ts 예제" description="usehooks-ts 라이브러리의 다양한 훅 사용법을 확인하세요.">
      <div className="flex flex-col gap-10">

        <section className="flex flex-col gap-4">
          <SectionHeader title="useMediaQuery" description="화면 크기를 감지합니다. 현재 모바일 여부를 확인하세요." />
          <MobileDetector />
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="useDebounce" description="입력값 변화를 지연시켜 불필요한 연산을 줄입니다." />
          <DebounceDemo />
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="useLocalStorage" description="localStorage를 React 상태처럼 사용합니다." />
          <LocalStorageDemo />
        </section>

      </div>
    </PageWrapper>
  )
}
