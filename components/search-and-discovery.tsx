'use client'

import { useState } from 'react'
import { Search, Tag, Home } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

interface Project {
  id: number
  name: string
  tags: string[]
  description: string
  stage: string
  investment: string
  team: number
  hasRID: boolean
  hasCofinancing: boolean
  hasMVP: boolean
  hasProduction: boolean
  hasLegalEntity: boolean
  matchesAOStrategy: boolean
}

const mockProjects: Project[] = [
  {
    id: 1,
    name: "Умный город: Оптимизация городской инфраструктуры",
    tags: ['TRL 5', 'Умный город', 'ООО', 'Архангельская область', 'ИИ', 'Экология', 'B2G', 'Инфраструктура', 'Стартап'],
    description: "Инновационное решение для оптимизации городской инфраструктуры с использованием ИИ и технологий устойчивого развития.",
    stage: "TRL 5",
    investment: "60 млн руб. из 100 млн руб.",
    team: 5,
    hasRID: true,
    hasCofinancing: true,
    hasMVP: true,
    hasProduction: false,
    hasLegalEntity: true,
    matchesAOStrategy: true,
  },
  {
    id: 2,
    name: "ЭкоТех: Система очистки воздуха в мегаполисах",
    tags: ['TRL 4', 'Экология', 'ООО', 'Москва', 'Очистка воздуха', 'Здоровье', 'B2G', 'B2B'],
    description: "Инновационная система очистки воздуха для крупных городов, использующая передовые технологии фильтрации и мониторинга качества воздуха.",
    stage: "TRL 4",
    investment: "40 млн руб. из 80 млн руб.",
    team: 4,
    hasRID: false,
    hasCofinancing: true,
    hasMVP: true,
    hasProduction: true,
    hasLegalEntity: true,
    matchesAOStrategy: false,
  },
  {
    id: 3,
    name: "ТранспортАИ: Оптимизация городского трафика",
    tags: ['TRL 6', 'Транспорт', 'ИИ', 'Санкт-Петербург', 'Умный город', 'B2G', 'Логистика'],
    description: "Система на основе ИИ для оптимизация городского трафика, снижения заторов и улучшения транспортной ситуации в крупных городах.",
    stage: "TRL 6",
    investment: "75 млн руб. из 90 млн руб.",
    team: 6,
    hasRID: true,
    hasCofinancing: false,
    hasMVP: true,
    hasProduction: true,
    hasLegalEntity: true,
    matchesAOStrategy: true,
  },
]

type FilterKeys = 'hasRID' | 'hasCofinancing' | 'hasMVP' | 'hasProduction' | 'hasLegalEntity' | 'matchesAOStrategy'

export function SearchAndDiscovery() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Project[]>([])
  const [showResults, setShowResults] = useState(false)
  const [filters, setFilters] = useState({
    hasRID: false,
    hasCofinancing: false,
    hasMVP: false,
    hasProduction: false,
    hasLegalEntity: false,
    matchesAOStrategy: false,
  })

  const handleSearch = () => {
    const filteredProjects = mockProjects.filter(project => 
      (project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      Object.entries(filters).every(([key, value]) => !value || project[key as FilterKeys])
    )
    setSearchResults(filteredProjects)
    setShowResults(true)
  }

  const handleFilterChange = (filterName: FilterKeys) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName]
    }))
  }

  const filterLabels: Record<FilterKeys, string> = {
    hasRID: 'Наличие РИД',
    hasCofinancing: 'Наличие софинансирования',
    hasMVP: 'Наличие MVP',
    hasProduction: 'Наличие производства',
    hasLegalEntity: 'Наличие юр. лица',
    matchesAOStrategy: 'Соответствие стратегии АО',
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Поиск проектов</h1>
        <Link href="/">
          <Button variant="outline">
            <Home className="w-4 h-4 mr-2" /> На главную
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Параметры поиска</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Введите ключевые слова..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
              {(Object.keys(filters) as FilterKeys[]).map((key) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={filters[key]}
                    onCheckedChange={() => handleFilterChange(key)}
                  />
                  <Label htmlFor={key}>{filterLabels[key]}</Label>
                </div>
              ))}
            </div>
            <Button onClick={handleSearch} className="w-full">
              <Search className="w-4 h-4 mr-2" /> Поиск
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <Card>
          <CardHeader>
            <CardTitle>Результаты поиска</CardTitle>
          </CardHeader>
          <CardContent>
            {searchResults.length > 0 ? (
              <ul className="space-y-4">
                {searchResults.map(project => (
                  <li key={project.id} className="border-b pb-4">
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">
                          <Tag className="w-3 h-3 mr-1" /> {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-2 text-sm">
                      <p><strong>Этап:</strong> {project.stage}</p>
                      <p><strong>Инвестиции:</strong> {project.investment}</p>
                      <p><strong>Команда:</strong> {project.team} человек</p>
                      {(Object.keys(filters) as FilterKeys[]).map(key => (
                        <p key={key}>
                          <strong>{filterLabels[key]}:</strong> {project[key] ? 'Да' : 'Нет'}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Проекты не найдены. Попробуйте изменить параметры поиска.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}