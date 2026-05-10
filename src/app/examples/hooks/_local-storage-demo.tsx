'use client'

import { useLocalStorage } from 'usehooks-ts'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function LocalStorageDemo() {
  const [savedName, setSavedName] = useLocalStorage('example-name', '')

  return (
    <Card className="max-w-sm">
      <CardContent className="flex flex-col gap-4 pt-6">
        <div className="flex flex-col gap-1.5">
          <Label>이름 저장 (새로고침해도 유지됩니다)</Label>
          <div className="flex gap-2">
            <Input
              placeholder="이름을 입력하세요"
              value={savedName}
              onChange={(e) => setSavedName(e.target.value)}
            />
            <Button variant="outline" onClick={() => setSavedName('')}>
              초기화
            </Button>
          </div>
        </div>
        {savedName && (
          <p className="text-sm text-muted-foreground">
            저장된 값: <span className="font-medium text-foreground">{savedName}</span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}
