'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="text-6xl font-bold text-muted-foreground/30">오류</p>
      <h1 className="text-2xl font-semibold">문제가 발생했어요</h1>
      <p className="text-muted-foreground">
        {error.message || '예기치 못한 오류가 발생했습니다.'}
      </p>
      {error.digest && (
        <p className="font-mono text-xs text-muted-foreground/60">
          오류 코드: {error.digest}
        </p>
      )}
      <Button onClick={() => unstable_retry()}>다시 시도</Button>
    </div>
  )
}
