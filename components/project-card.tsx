'use client'

import { useState } from 'react'
import { Star, FileText, Edit, Users, Target, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface ProjectCardComponentProps {
  isPreview?: boolean;
}

export function ProjectCardComponent({ isPreview = false }: ProjectCardComponentProps) {
  const [projectTitle] = useState("Эко-Инновации: Умные Города")
  const [projectStatus] = useState("В разработке")
  const [developmentStage] = useState(75)

  const mockTeamMembers = [
    { name: "Анна С.", role: "Директор", avatar: "/avatars/anna.jpg" },
    { name: "Михаил Р.", role: "Тех. директор", avatar: "/avatars/mikhail.jpg" },
    { name: "Елена К.", role: "Фин. директор", avatar: "/avatars/elena.jpg" },
  ]

  return (
    <Card className={`w-full ${isPreview ? 'hover:shadow-xl transition-shadow duration-300' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-xl text-blue-700">{projectTitle}</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Star className="w-6 h-6 text-yellow-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Проект подтвержден</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Badge variant="secondary" className="text-sm font-medium">{projectStatus}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-600" />
            <div className="flex-grow">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Идея</span>
                <span>MVP</span>
                <span>Пилот</span>
                <span>Масштабирование</span>
              </div>
              <Progress value={developmentStage} className="w-full h-2" />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700">Интегрированная система управления городской инфраструктурой</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <div className="flex -space-x-2">
                {mockTeamMembers.map((member) => (
                  <TooltipProvider key={member.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar className="w-8 h-8 border-2 border-white">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{member.name} - {member.role}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
            {!isPreview && (
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="text-blue-700 border-blue-700 hover:bg-blue-50">
                  <FileText className="w-4 h-4 mr-1" />
                  Документы
                </Button>
                <Button variant="outline" size="sm" className="text-green-700 border-green-700 hover:bg-green-50">
                  <Edit className="w-4 h-4 mr-1" />
                  Редактировать
                </Button>
              </div>
            )}
          </div>
          
          {!isPreview && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Описание проекта</h3>
              <p className="text-sm text-gray-600">
                Наша платформа 'ЭкоСити' объединяет данные с множества IoT-устройств, анализирует их с помощью ИИ и предоставляет рекомендации по оптимизации транспорта, энергопотребления и утилизации отходов.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}