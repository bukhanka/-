'use client'

import { useState } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function ProjectManagement() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Эко-Инновации: Умные Города', description: 'Проект по оптимизации городской инфраструктуры', status: 'В разработке' },
    { id: 2, name: 'Нейросеть для анализа городского трафика', description: 'Система предсказания и оптимизации транспортных потоков', status: 'На рассмотрении' }
  ])

  const [newProject, setNewProject] = useState({ name: '', description: '' })

  const handleCreateProject = () => {
    if (newProject.name && newProject.description) {
      setProjects([...projects, { id: projects.length + 1, ...newProject, status: 'Новый' }])
      setNewProject({ name: '', description: '' })
    }
  }

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Управление проектами</span>
            <Dialog>
              <DialogTrigger asChild>
                <Button><Plus className="w-4 h-4 mr-2" /> Новый проект</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Создать новый проект</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Название проекта"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  />
                  <Textarea
                    placeholder="Описание проекта"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                  <Button onClick={handleCreateProject}>Создать</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {projects.map(project => (
              <li key={project.id} className="flex justify-between items-center p-4 border rounded-md">
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <span className="text-xs text-blue-500">{project.status}</span>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm"><Edit2 className="w-4 h-4" /></Button>
                  <Button variant="outline" size="sm"><Trash2 className="w-4 h-4" /></Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}