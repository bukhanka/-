import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const supportMeasures = [
  {
    category: "Финансовая поддержка",
    measures: [
      { title: "Гранты для стартапов", description: "До 500 000 рублей для инновационных проектов на ранней стадии" },
      { title: "Льготные кредиты", description: "Ставка от 3% годовых для малого и среднего бизнеса" },
      { title: "Субсидии на оборудование", description: "Возмещение до 50% затрат на приобретение производственного оборудования" },
    ]
  },
  {
    category: "Инфраструктурная поддержка",
    measures: [
      { title: "Бизнес-инкубаторы", description: "Льготная аренда офисов и производственных помещений" },
      { title: "Технопарки", description: "Доступ к высокотехнологичному оборудованию и лабораториям" },
      { title: "Промышленные парки", description: "Готовая инфраструктура для размещения производств" },
    ]
  },
  {
    category: "Консультационная поддержка",
    measures: [
      { title: "Центр поддержки предпринимательства", description: "Бесплатные консультации по юридическим и бухгалтерским вопросам" },
      { title: "Экспортный центр", description: "Помощь в выходе на международные рынки" },
      { title: "Центр инноваций социальной сферы", description: "Поддержка социальных предпринимателей" },
    ]
  },
]

export function SupportMeasures() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Меры поддержки Архангельской области</CardTitle>
        <CardDescription>Узнайте о доступных мерах поддержки для вашего проекта</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={supportMeasures[0].category}>
          <TabsList className="grid w-full grid-cols-3">
            {supportMeasures.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {supportMeasures.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.measures.map((measure, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{measure.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{measure.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-6 text-center">
          <Button>Подробнее о мерах поддержки</Button>
        </div>
      </CardContent>
    </Card>
  )
}