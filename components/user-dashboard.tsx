'use client'

import { useState } from 'react'
import { User, Briefcase, MessageSquare, Check, Database, FileText, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ProjectCardComponent } from '@/components/project-card'
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"

export function UserDashboard() {
  const [user, setUser] = useState({
    name: 'Иван Петров',
    type: 'Молодой ученый',
    avatar: '/avatars/ivan.jpg'
  })

  const [projects, setProjects] = useState([
    { id: 1, name: 'Эко-Инновации: Умные Города', status: 'В разработке' },
    { id: 2, name: 'Нейросеть для анализа городского трафика', status: 'На рассмотрении' }
  ])

  const [intellectualProperty, setIntellectualProperty] = useState([
    { id: 1, title: 'Метод оптимизации городского освещения', type: 'Патент', number: '2023456789' },
    { id: 2, title: 'Алгоритм прогнозирования транспортных потоков', type: 'Свидетельство о регистрации ПО', number: '2023987654' },
  ])

  const [scientificArticles, setScientificArticles] = useState([
    { id: 1, title: 'Применение машинного обучения в управлении умными городами', journal: 'Вестник урбанистики', year: 2023 },
    { id: 2, title: 'Анализ эффективности солнечных панелей в городской среде', journal: 'Экологический журнал', year: 2022 },
  ])

  const [recommendations, setRecommendations] = useState([
    { id: 1, title: 'Проект по разработке системы умного освещения', similarity: 0.85 },
    { id: 2, title: 'Исследование влияния зеленых зон на городской микроклимат', similarity: 0.72 },
  ])

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-6 h-6" />
            <span>Личный профиль</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.type}</p>
          </div>
          <Button variant="outline" className="ml-auto">Редактировать профиль</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Briefcase className="w-6 h-6" />
            <span>Мои проекты</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="mb-4">Создать новый проект</Button>
          <div className="space-y-4">
            {projects.map(project => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <ProjectCardComponent
                  title={project.name}
                  status={project.status}
                  isPreview={true}
                />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-6 h-6" />
            <span>Личный консультант</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Ваш личный консультант: <strong>Анна Сидорова</strong></p>
          <Button className="mt-4">Связаться с консультантом</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-6 h-6" />
            <span>Мои РИД</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="loadFromFIPS" />
            <label htmlFor="loadFromFIPS">Подгрузить с ФИПС</label>
          </div>
          <div className="space-y-4">
            {intellectualProperty.map(item => (
              <div key={item.id} className="border p-4 rounded-md">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.type} - {item.number}</p>
              </div>
            ))}
          </div>
          <Button className="mt-4">Добавить РИД</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-6 h-6" />
            <span>Научные статьи</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="loadFromELibrary" />
            <label htmlFor="loadFromELibrary">Подгрузить с eLibrary</label>
          </div>
          <div className="space-y-4">
            {scientificArticles.map(article => (
              <div key={article.id} className="border p-4 rounded-md">
                <h4 className="font-semibold">{article.title}</h4>
                <p className="text-sm text-gray-500">{article.journal}, {article.year}</p>
              </div>
            ))}
          </div>
          <Button className="mt-4">Добавить статью</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="w-6 h-6" />
            <span>Рекомендации по схожим проектам</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map(rec => (
              <div key={rec.id} className="border p-4 rounded-md">
                <h4 className="font-semibold">{rec.title}</h4>
                <p className="text-sm text-gray-500">Схожесть: {(rec.similarity * 100).toFixed(0)}%</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}