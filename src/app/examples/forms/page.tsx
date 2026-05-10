import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { SectionHeader } from '@/components/common/section-header'
import { Separator } from '@/components/ui/separator'
import { LoginForm } from './_login-form'
import { SignupForm } from './_signup-form'

export const metadata: Metadata = { title: '폼 예제' }

export default function FormsPage() {
  return (
    <PageWrapper tag="예제" title="폼 예제" description="react-hook-form과 zod로 구현한 폼 예제입니다.">
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-4">
          <SectionHeader title="로그인 폼" description="이메일/비밀번호 유효성 검사 예제입니다." />
          <div className="max-w-sm">
            <LoginForm />
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <SectionHeader title="회원가입 폼" description="비밀번호 확인, 약관 동의 등 복합 유효성 검사 예제입니다." />
          <div className="max-w-sm">
            <SignupForm />
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
