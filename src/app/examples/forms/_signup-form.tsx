'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

const schema = z
  .object({
    name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
    email: z.string().email('올바른 이메일을 입력해주세요.'),
    password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
    confirmPassword: z.string(),
    agree: z.boolean().refine((v) => v, '약관에 동의해주세요.'),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof schema>

export function SignupForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { agree: false } })

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800))
    toast.success(`${data.name}님, 회원가입이 완료됐습니다!`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">이름</Label>
        <Input id="name" placeholder="홍길동" {...register('name')} />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="signup-email">이메일</Label>
        <Input id="signup-email" type="email" placeholder="example@email.com" {...register('email')} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="signup-password">비밀번호</Label>
        <Input id="signup-password" type="password" {...register('password')} />
        {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>}
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="agree"
          onCheckedChange={(checked) => setValue('agree', checked === true)}
        />
        <Label htmlFor="agree" className="text-sm font-normal cursor-pointer">
          이용약관 및 개인정보처리방침에 동의합니다.
        </Label>
      </div>
      {errors.agree && <p className="text-xs text-destructive">{errors.agree.message}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '가입 중...' : '회원가입'}
      </Button>
    </form>
  )
}
