'use client'

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
        <h1 className="text-2xl font-semibold">치명적 오류가 발생했어요</h1>
        <p className="text-sm text-muted-foreground">페이지를 불러오는 중 문제가 생겼습니다.</p>
        <button
          onClick={() => unstable_retry()}
          className="rounded-md bg-foreground px-4 py-2 text-sm text-background"
        >
          다시 시도
        </button>
      </body>
    </html>
  )
}
