import { FullCardComponent } from '@/components/full-card'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="outline" className="mb-6">← Назад на главную</Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Подробная информация о проекте</h1>
        <FullCardComponent />
      </div>
    </div>
  )
}