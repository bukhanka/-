'use client'

import { useState } from 'react'
import { ProjectCardComponent } from './project-card'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Личный кабинет пользователя</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Иванов Иван</span>
            <Button variant="outline">Выйти</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="projects">
          <TabsList className="mb-8">
            <TabsTrigger value="projects">Мои проекты</TabsTrigger>
            <TabsTrigger value="developments">Мои разработки</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <div className="mb-6 flex justify-between items-center">
              <Input
                type="search"
                placeholder="Поиск проектов..."
                className="max-w-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button>Создать новый проект</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCardComponent />
              <ProjectCardComponent />
              <ProjectCardComponent />
              {/* Add more ProjectCardComponents as needed */}
            </div>
          </TabsContent>

          <TabsContent value="developments">
            <div className="mb-6 flex justify-between items-center">
              <Input
                type="search"
                placeholder="Поиск разработок..."
                className="max-w-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button>Добавить новую разработку</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Здесь будут отображаться карточки разработок */}
              {/* Можно создать отдельный компонент DevelopmentCard */}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white shadow-sm mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-500">
          © 2024 Платформа для проектов и разработок. Все права защищены.
        </div>
      </footer>
    </div>
  )
}