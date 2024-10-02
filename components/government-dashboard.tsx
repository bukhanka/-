'use client'

import React, { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { ArrowLeft } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const DynamicBar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), { ssr: false })
const DynamicPie = dynamic(() => import('react-chartjs-2').then((mod) => mod.Pie), { ssr: false })

export function GovernmentDashboard() {
  // Mock data for projects
  const myProjects = [
    { id: 1, name: "Умный город", status: "В процессе", progress: 60 },
    { id: 2, name: "Экологическая инициатива", status: "Завершен", progress: 100 },
    { id: 3, name: "Цифровое образование", status: "Планируется", progress: 0 },
  ]

  // Mock data for regional statistics
  const regionalStats = {
    totalProjects: 150,
    completedProjects: 95,
    ongoingProjects: 45,
    plannedProjects: 10,
  }

  // Mock data for bar chart
  const barChartData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Реализованные проекты',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  // Mock data for pie chart
  const pieChartData = {
    labels: ['Технологии', 'Экология', 'Образование', 'Инфраструктура'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  }

  useEffect(() => {
    // This ensures that the scales are registered after the component mounts
    ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)
  }, [])

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Панель управления государственного служащего</h1>
        <Link href="/">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться на главную
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Перечень моих проектов</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Прогресс</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>{project.progress}%</TableCell>
                    <TableCell>
                      <Button size="sm">Подробнее</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Статистика реализованных проектов в регионе</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{regionalStats.totalProjects}</p>
                <p className="text-sm text-gray-500">Всего проектов</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{regionalStats.completedProjects}</p>
                <p className="text-sm text-gray-500">Завершенных</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{regionalStats.ongoingProjects}</p>
                <p className="text-sm text-gray-500">В процессе</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{regionalStats.plannedProjects}</p>
                <p className="text-sm text-gray-500">Запланированных</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Динамика реализации проектов</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicBar 
                data={barChartData} 
                options={{
                  responsive: true,
                  scales: {
                    x: {
                      type: 'category',
                    },
                    y: {
                      type: 'linear',
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </Suspense>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Распределение проектов по категориям</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicPie data={pieChartData} />
            </Suspense>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Связь с командами проектов</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Проект</TableHead>
                <TableHead>Контактное лицо</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Умный город</TableCell>
                <TableCell>Иван Петров</TableCell>
                <TableCell>ivan@smartcity.ru</TableCell>
                <TableCell>
                  <Button size="sm">Связаться</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Экологическая инициатива</TableCell>
                <TableCell>Анна Сидорова</TableCell>
                <TableCell>anna@ecoproject.ru</TableCell>
                <TableCell>
                  <Button size="sm">Связаться</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}