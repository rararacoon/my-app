'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Monitor, Smartphone } from 'lucide-react'

export function MobileDetector() {
  const isMobile = useIsMobile()

  return (
    <Card className="max-w-sm">
      <CardContent className="flex items-center gap-3 pt-6">
        {isMobile ? (
          <Smartphone className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Monitor className="h-5 w-5 text-muted-foreground" />
        )}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">현재 기기</p>
          <Badge variant={isMobile ? 'secondary' : 'outline'}>
            {isMobile ? '모바일' : '데스크탑'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
