'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface Todo {
  id: number
  title: string
  completed: boolean
}

export function FetchDemo() {
  const [data, setData] = useState<Todo | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    setData(null)
    try {
      const id = Math.floor(Math.random() * 20) + 1
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      if (!res.ok) throw new Error('데이터를 불러올 수 없습니다.')
      const json = await res.json() as Todo
      setData(json)
      toast.success('데이터를 불러왔습니다.')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : '오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <Button onClick={fetchData} disabled={loading} variant="outline">
        {loading ? '불러오는 중...' : '랜덤 데이터 불러오기'}
      </Button>
      {loading && (
        <Card>
          <CardContent className="flex flex-col gap-2 pt-4">
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-1/4" />
          </CardContent>
        </Card>
      )}
      {data && !loading && (
        <Card>
          <CardContent className="pt-4 text-sm">
            <p className="text-muted-foreground">ID: <span className="text-foreground">{data.id}</span></p>
            <p className="text-muted-foreground mt-1">제목: <span className="text-foreground">{data.title}</span></p>
            <p className="text-muted-foreground mt-1">상태: <span className="text-foreground">{data.completed ? '✅ 완료' : '⏳ 미완료'}</span></p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
