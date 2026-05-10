'use client'

import { useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

export function DebounceDemo() {
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounceValue(value, 500)

  return (
    <Card className="max-w-sm">
      <CardContent className="flex flex-col gap-4 pt-6">
        <div className="flex flex-col gap-1.5">
          <Label>입력값</Label>
          <Input
            placeholder="입력해보세요..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 rounded-md bg-muted/50 p-3 text-sm">
          <p className="text-muted-foreground">즉시 반영: <span className="text-foreground font-mono">{value || '—'}</span></p>
          <p className="text-muted-foreground">500ms 디바운스: <span className="text-foreground font-mono">{debouncedValue || '—'}</span></p>
        </div>
      </CardContent>
    </Card>
  )
}
