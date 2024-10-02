'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Search, Users, Settings, LogIn, LogOut, UserPlus, ArrowRight, Lightbulb, TrendingUp, Award } from 'lucide-react'
import { ProjectCardComponent } from '@/components/project-card'
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SupportMeasures } from '@/components/support-measures'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [userRole, setUserRole] = useState<'user' | 'government' | null>(null)

  const handleAuth = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
    } else {
      setIsAuthModalOpen(true)
    }
  }

  const handleLogin = (role: 'user' | 'government') => {
    setIsLoggedIn(true)
    setUserRole(role)
    setIsAuthModalOpen(false)
  }

  const handleRegister = () => {
    setIsLoggedIn(true)
    setIsRegisterModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-700">
                  ИнновацииЗдесь
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink href="/search" icon={<Search className="w-4 h-4 mr-2" />}>
                  Поиск
                </NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <NavLink 
                    href={userRole === 'government' ? "/government-dashboard" : "/dashboard"} 
                    icon={<Settings className="w-4 h-4 mr-2" />}
                  >
                    Личный кабинет
                  </NavLink>
                  <Button variant="outline" size="sm" className="text-red-700 border-red-700 hover:bg-red-50" onClick={handleAuth}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Выйти
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-700 hover:bg-blue-50" onClick={handleAuth}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Войти
                  </Button>
                  <Button variant="outline" size="sm" className="text-green-700 border-green-700 hover:bg-green-50" onClick={() => setIsRegisterModalOpen(true)}>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Регистрация
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Инновации меняют мир</h1>
              <p className="text-xl mb-8 text-blue-100">Присоединяйтесь к сообществу новаторов и воплощайте свои идеи в жизнь</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="bg-blue-800 text-white border-white hover:bg-blue-700 transition-colors duration-300">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <Image 
                  src="/images/413.jpg" 
                  alt="Инновации" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-2xl" 
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">1000+</p>
                  <p className="text-sm">успешных проектов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((projectId) => (
              <Link key={projectId} href={`/project/${projectId}`} className="block">
                <div className="cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg rounded-lg overflow-hidden">
                  <ProjectCardComponent isPreview={true} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 transition-colors duration-300 shadow-lg">
              Показать больше проектов
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Почему ИнновацииЗдесь?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Lightbulb className="w-16 h-16 text-blue-700" />, title: "Вдохновение", description: "Черпайте идеи из тысяч инновационных проектов" },
              { icon: <Users className="w-16 h-16 text-blue-700" />, title: "Сообщество", description: "Присоединяйтесь к сети единомышленников и экспертов" },
              { icon: <TrendingUp className="w-16 h-16 text-blue-700" />, title: "Рост", description: "Развивайте свои проекты с помощью наших инструментов" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Поддержка инноваций</h2>
          <SupportMeasures />
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Истории успеха</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((storyId) => (
              <div key={storyId} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <Image src={`/images/success-story-${storyId}.jpg`} alt={`История успеха ${storyId}`} width={100} height={100} className="rounded-full mr-6" />
                  <div>
                    <h3 className="text-2xl font-semibold">Название проекта {storyId}</h3>
                    <p className="text-gray-600">Имя основателя</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg">Краткое описание истории успеха и как платформа помогла в развитии проекта.</p>
                <Button variant="outline" className="w-full text-blue-700 border-blue-700 hover:bg-blue-50 transition-colors duration-300">Читать полную историю</Button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-700 text-white p-12 rounded-lg mb-24">
          <h2 className="text-4xl font-bold mb-8 text-center">Присоединяйтесь к инновационному сообществу</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Input placeholder="Ваш email" className="max-w-xs bg-white text-gray-900" />
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300">Подписаться на новости</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">О нас</h3>
              <p className="text-gray-400">ИнновацииЗдесь - платформа для развития и поддержки инновационных проектов в России.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ссылки</h3>
              <ul className="space-y-2">
                <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Проекты</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">О платформе</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Правовая информация</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Условия использования</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Политика конфиденциальности</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 ИнновацииЗдесь. Все права защищены.
          </div>
        </div>
      </footer>

      <MockAuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onLogin={handleLogin} />
      <MockRegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} onRegister={handleRegister} />
    </div>
  )
}

function MockAuthModal({ isOpen, onClose, onLogin }: { isOpen: boolean; onClose: () => void; onLogin: (role: 'user' | 'government') => void }) {
  const [selectedRole, setSelectedRole] = useState<'user' | 'government'>('user')

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Авторизация</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Input placeholder="Логин" />
          <Input type="password" placeholder="Пароль" />
          <Select value={selectedRole} onValueChange={(value: 'user' | 'government') => setSelectedRole(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите роль" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">Пользователь</SelectItem>
              <SelectItem value="government">Государственный служащий</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-col space-y-2">
            <Button onClick={() => onLogin(selectedRole)}>Войти</Button>
            <Button variant="outline" onClick={() => onLogin(selectedRole)}>Войти с помощью Госуслуг</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function MockRegisterModal({ isOpen, onClose, onRegister }: { isOpen: boolean; onClose: () => void; onRegister: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Регистрация</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Input placeholder="Имя" />
          <Input placeholder="Email" />
          <Input type="password" placeholder="Пароль" />
          <Input type="password" placeholder="Подтвердите пароль" />
          <Button onClick={onRegister}>Зарегистрироваться</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-700 text-sm font-medium transition-colors duration-200"
    >
      {icon}
      {children}
    </Link>
  )
}