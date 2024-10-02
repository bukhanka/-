'use client'

import { useState } from 'react'
import { Star, ChevronDown, ChevronUp, FileText, Edit, ExternalLink, PieChart, BarChart, LineChart, UserCircle, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LineChart as RechartsLineChart, Line, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';

export function FullCardComponent() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [projectTitle, setProjectTitle] = useState("Название проекта")

  const marketData = [
    { name: 'TAM', value: 100 },
    { name: 'SAM', value: 20 },
    { name: 'SOM', value: 2 },
  ];

  const competitorData = [
    { name: 'Компания A', value: 30 },
    { name: 'Компания B', value: 25 },
    { name: 'Компания C', value: 15 },
    { name: 'Другие', value: 30 },
  ];

  const growthData = [
    { year: '2024', growth: 10 },
    { year: '2025', growth: 15 },
    { year: '2026', growth: 20 },
    { year: '2027', growth: 25 },
  ];

  const financialData = [
    { year: '2024', revenue: 10, profit: 2 },
    { year: '2025', revenue: 15, profit: 3 },
    { year: '2026', revenue: 25, profit: 5 },
    { year: '2027', revenue: 40, profit: 8 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-[105rem] mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Input 
                value={projectTitle} 
                onChange={(e) => setProjectTitle(e.target.value)}
                className="text-3xl font-bold border-none bg-transparent text-white placeholder-white/70 focus:ring-0"
                placeholder="Введите название проекта"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Star className="w-8 h-8 text-yellow-300" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Проект подтвержден</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="secondary" size="icon">
                <FileText className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="icon">
                <Edit className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="p-6">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="details">Детали</TabsTrigger>
            <TabsTrigger value="market">Рынок</TabsTrigger>
            <TabsTrigger value="finance">Финансы</TabsTrigger>
            <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Этапы TRL</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>TRL 1</span>
                    <span>TRL 3</span>
                    <span>TRL 5</span>
                    <span>TRL 7</span>
                    <span>TRL 9</span>
                  </div>
                  <Progress value={60} className="w-full h-2" />
                  <div className="mt-4">
                    <h4 className="font-semibold">Текущий этап: TRL 5</h4>
                    <p className="text-sm text-gray-600">Планируемая дата достижения TRL 9: 01.09.2024</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Команда</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((member) => (
                      <Avatar key={member} className="w-12 h-12">
                        <AvatarImage src={`/placeholder-avatar-${member}.png`} alt={`Член команды ${member}`} />
                        <AvatarFallback>ЧК</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Textarea 
                    placeholder="Опишите команду проекта..." 
                    className="min-h-[100px]"
                  />
                  <div className="mt-4">
                    <h4 className="font-semibold">Ключевые роли:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Руководитель проекта</li>
                      <li>Технический директор</li>
                      <li>Ведущий разработчик</li>
                      <li>Маркетолог</li>
                      <li>Финансовый аналитик</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ключевые Показатели</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Необходимый объем средств</h4>
                      <Progress value={60} className="w-full" />
                      <p className="text-sm text-gray-600">60 млн руб. из 100 млн руб.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Риски (PEST+M анализ)</h4>
                      <div className="space-y-4">
                        {[
                          {
                            category: "Политические",
                            risks: [
                              { name: "Изменение законодательства", value: 3 },
                              { name: "Государственная поддержка", value: 4 },
                            ]
                          },
                          {
                            category: "Экономические",
                            risks: [
                              { name: "Экономическая нестабильность", value: 3 },
                              { name: "Изменение курса валют", value: 2 },
                            ]
                          },
                          {
                            category: "Социальные",
                            risks: [
                              { name: "Демографические изменения", value: 2 },
                              { name: "Изменение потребительских предпочтений", value: 3 },
                            ]
                          },
                          {
                            category: "Технологические",
                            risks: [
                              { name: "Появление новых технологий", value: 4 },
                              { name: "Кибербезопасность", value: 3 },
                            ]
                          },
                          {
                            category: "Рыночные",
                            risks: [
                              { name: "Конкуренция", value: 4 },
                              { name: "Изменение спроса", value: 3 },
                            ]
                          },
                        ].map((category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h5 className="font-semibold text-sm mb-2">{category.category}</h5>
                            <div className="space-y-2">
                              {category.risks.map((risk, riskIndex) => (
                                <div key={riskIndex} className="flex items-center">
                                  <span className="text-sm font-medium flex-grow">{risk.name}</span>
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`w-4 h-4 ${
                                          star <= risk.value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Концепция</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Опишите концепцию проекта..." 
                    className="min-h-[150px]"
                  />
                  <div className="mt-4">
                    <h4 className="font-semibold">Ключевые особенности:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Инновационное решение для городской инфраструктуры</li>
                      <li>Использование ИИ для оптимизации процессов</li>
                      <li>Экологичность и устойчивое развитие</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Решение</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Опишите решение..." 
                    className="min-h-[150px]"
                  />
                  <div className="mt-4">
                    <h4 className="font-semibold">Теги:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['TRL 5', 'Умный город', 'ООО', 'Архангельская область', 'ИИ', 'Экология', 'B2G', 'Инфраструктура', 'Стартап'].map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Проблематика</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Опишите проблематику..." 
                    className="min-h-[150px]"
                  />
                  <div className="mt-4">
                    <h4 className="font-semibold">Ключевые проблемы:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Неэффективное использование ресурсов в городах</li>
                      <li>Высокий уровень загрязнения окружающей среды</li>
                      <li>Отсутствие интегрированных решений для управления городской инфраструктурой</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Бизнес-модель (Канва Остервальдера)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="border p-2 rounded">
                      <h3 className="font-semibold mb-2">Ключевые партнеры</h3>
                      <ul className="list-disc list-inside">
                        <li>Поставщики технологий</li>
                        <li>Муниципалитеты</li>
                        <li>Интеграторы</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded">
                      <h3 className="font-semibold mb-2">Ключевые виды деятельности</h3>
                      <ul className="list-disc list-inside">
                        <li>Разработка ПО</li>
                        <li>Анализ данных</li>
                        <li>Консалтинг</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded">
                      <h3 className="font-semibold mb-2">Ценностные предложения</h3>
                      <ul className="list-disc list-inside">
                        <li>Оптимизация городской инфраструктуры</li>
                        <li>Снижение затрат</li>
                        <li>Улучшение качества жизни</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded">
                      <h3 className="font-semibold mb-2">Ключевые ресурсы</h3>
                      <ul className="list-disc list-inside">
                        <li>Команда разработчиков</li>
                        <li>ИИ алгоритмы</li>
                        <li>Инфраструктура</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded">
                      <h3 className="font-semibold mb-2">Каналы сбыта</h3>
                      <ul className="list-disc list-inside">
                        <li>Прямые продажи</li>
                        <li>Партнерская сеть</li>
                        <li>Онлайн-платформа</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded">
                      <h3 className="font-semibold mb-2">Взаимоотношения с клиентами</h3>
                      <ul className="list-disc list-inside">
                        <li>Персональная поддержка</li>
                        <li>Обучение</li>
                        <li>Сообщество пользователей</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded">
                      <h3 className="font-semibold mb-2">Структура затрат</h3>
                      <ul className="list-disc list-inside">
                        <li>Разработка и поддержка ПО</li>
                        <li>Маркетинг и продажи</li>
                        <li>Инфраструктура</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded col-span-2">
                      <h3 className="font-semibold mb-2">Потоки доходов</h3>
                      <ul className="list-disc list-inside">
                        <li>Подписка на облачное решение</li>
                        <li>Консалтинговые услуги</li>
                        <li>Интеграция и кастомизация</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Инвестиционные метрики</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">ROI (Рентабельность инвестиций)</h4>
                      <Progress value={75} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">75% за 3 года</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">IRR (Внутренняя норма доходности)</h4>
                      <Progress value={60} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">25%</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Payback Period (Срок окупаемости)</h4>
                      <Progress value={40} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">2.5 года</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">NPV (Чистая приведенная стоимость)</h4>
                      <Progress value={80} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">50 млн руб.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">MOIC (Множитель инвестированного капитала)</h4>
                      <Progress value={70} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">2.5x</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Burn Rate (Скорость расходования средств)</h4>
                      <Progress value={30} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">2 млн руб. / месяц</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Инвестиционный план</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Опишите инвестиционный план..." 
                    className="min-h-[150px] mb-4"
                  />
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={[
                            { name: 'Разработка продукта', value: 40 },
                            { name: 'Маркетинг и продажи', value: 30 },
                            { name: 'Операционные расходы', value: 20 },
                            { name: 'Резерв', value: 10 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {marketData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Подробная оценка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Экономическая эффективность</h3>
                    <Progress value={80} className="w-full" />
                    <p className="text-sm text-gray-600 mt-1">Высокий потенциал возврата инвестиций</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Софинансирование</h3>
                    <Progress value={60} className="w-full" />
                    <p className="text-sm text-gray-600 mt-1">Привлечено 60% необходимых средств</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Соответствие устойчивым целям</h3>
                    <Progress value={90} className="w-full" />
                    <p className="text-sm text-gray-600 mt-1">Высокое соответствие целям устойчивого развития ООН</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Оценка рисков</h3>
                    <Progress value={40} className="w-full" />
                    <p className="text-sm text-gray-600 mt-1">Низкий уровень рисков</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Технологическая готовность</h3>
                    <Progress value={70} className="w-full" />
                    <p className="text-sm text-gray-600 mt-1">Высокая степень готовности технологии</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="market">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Анализ рынка (TAM, SAM, SOM)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={marketData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {marketData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Объем рынка:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>TAM (Общий объем рынка): $100 млрд</li>
                      <li>SAM (Доступный объем рынка): $20 млрд</li>
                      <li>SOM (Реально достижимый объем рынка): $2 млрд</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Конкурентный анализ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={competitorData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Ключевые конкуренты:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Компания A: 30% доли рынка</li>
                      <li>Компания B: 25% доли рынка</li>
                      <li>Компания C: 15% доли рынка</li>
                      <li>Другие: 30% доли рынка</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Целевая аудитория</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={[
                            { name: 'Муниципальные органы власти', value: 50 },
                            { name: 'Крупные предприятия', value: 30 },
                            { name: 'Средний бизнес', value: 15 },
                            { name: 'Другие', value: 5 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {marketData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Сегменты целевой аудитории:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Муниципальные органы власти: 50%</li>
                      <li>Крупные предприятия: 30%</li>
                      <li>Средний бизнес: 15%</li>
                      <li>Другие: 5%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Прогноз роста рынка</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={growthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line type="monotone" dataKey="growth" stroke="#8884d8" />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Ожидаемый рост рынка:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>2024: 10%</li>
                      <li>2025: 15%</li>
                      <li>2026: 20%</li>
                      <li>2027: 25%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="finance">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Финансовые показатели</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={financialData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Ключевые показатели:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Выручка: 10 млн руб.</li>
                      <li>EBITDA: 2 млн руб.</li>
                      <li>Чистая прибыль: 1.5 млн руб.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Структура расходов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={[
                            { name: 'Разработка', value: 40 },
                            { name: 'Маркетинг', value: 25 },
                            { name: 'Административные расходы', value: 20 },
                            { name: 'Другое', value: 15 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {marketData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Распределение расходов:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Разработка: 40%</li>
                      <li>Маркетинг: 25%</li>
                      <li>Административные расходы: 20%</li>
                      <li>Другое: 15%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Прогноз денежных потоков</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={[
                        { year: '2024', value: 5 },
                        { year: '2025', value: 10 },
                        { year: '2026', value: 20 },
                        { year: '2027', value: 35 },
                        { year: '2028', value: 50 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Прогноз на ближайшие 5 лет:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>2024: 5 млн руб.</li>
                      <li>2025: 10 млн руб.</li>
                      <li>2026: 20 млн руб.</li>
                      <li>2027: 35 млн руб.</li>
                      <li>2028: 50 млн руб.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Инвестиционные метрики</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">ROI (Рентабельность инвестиций)</h4>
                      <Progress value={75} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">75% за 3 года</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">IRR (Внутренняя норма доходности)</h4>
                      <Progress value={60} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">25%</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Payback Period (Срок окупаемости)</h4>
                      <Progress value={40} className="w-full" />
                      <p className="text-sm text-gray-600 mt-1">2.5 года</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Консультации с экспертами</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 mb-4">
                    {[
                      { name: 'Анна', icon: 'user-circle' },
                      { name: 'Борис', icon: 'user' },
                      { name: 'Вера', icon: 'user-circle' },
                      { name: 'Григорий', icon: 'user' },
                      { name: 'Дарья', icon: 'user-circle' },
                    ].map((expert, index) => (
                      <Avatar key={index} className="w-12 h-12">
                        <AvatarImage src={`/placeholder-expert-${index + 1}.png`} alt={`Эксперт ${expert.name}`} />
                        <AvatarFallback>
                          {expert.icon === 'user-circle' ? (
                            <UserCircle className="w-6 h-6" />
                          ) : (
                            <User className="w-6 h-6" />
                          )}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <Textarea placeholder="Опишите ваш запрос к экспертам..." className="min-h-[100px]" />
                    <div className="flex space-x-2">
                      <Button className="flex-1">Отправить</Button>
                      <Button variant="outline" className="flex-1">Посмотреть ответ эксперта</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Гранты, конкурсы и мероприятия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { type: 'Грант', description: 'Грант на развитие инновационных технологий' },
                      { type: 'Конкурс', description: 'Конкурс стартапов в сфере умных городов' },
                      { type: 'Выставка', description: 'Международная выставка урбанистики и городских технологий' },
                      { type: 'Форум', description: 'Форум по устойчивому развитию городов' },
                      { type: 'Субсидия', description: 'Государственная субсидия на разработку экологичных решений' },
                      { type: 'Конференция', description: 'Научно-практическая конференция по инновациям в городской среде' },
                    ].map((item, index) => (
                      <Button key={index} variant="outline" className="justify-start h-auto py-4 px-6">
                        <div>
                          <ExternalLink className="w-5 h-5 mb-2" />
                          <div className="font-semibold">{item.type}</div>
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">Рекомендации системы:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      <li>Подготовить заявку на грант "Инновации в городской среде"</li>
                      <li>Участвовать в конкурсе "Технологии умного города 2024"</li>
                      <li>Посетить выставку "Urban Tech Expo 2024"</li>
                      <li>Выступить с докладом на конферении "Smart City Solutions"</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}