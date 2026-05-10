'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

interface ToastButtonProps {
  variant: 'default' | 'success' | 'error' | 'warning'
  label: string
}

const messages: Record<ToastButtonProps['variant'], string> = {
  default: '알림 메시지입니다.',
  success: '작업이 성공적으로 완료됐습니다.',
  error: '오류가 발생했습니다.',
  warning: '주의가 필요합니다.',
}

export function ToastButton({ variant, label }: ToastButtonProps) {
  const handleClick = () => {
    const message = messages[variant]
    if (variant === 'success') toast.success(message)
    else if (variant === 'error') toast.error(message)
    else if (variant === 'warning') toast.warning(message)
    else toast(message)
  }

  return (
    <Button variant="outline" onClick={handleClick}>
      {label}
    </Button>
  )
}
