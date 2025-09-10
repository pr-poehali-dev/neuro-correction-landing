import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-medical-light">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={20} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl text-medical-dark">НейроСтудия</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-medical-dark hover:text-medical-blue transition-colors">Услуги</a>
              <a href="#advantages" className="text-medical-dark hover:text-medical-blue transition-colors">Преимущества</a>
              <a href="#reviews" className="text-medical-dark hover:text-medical-blue transition-colors">Отзывы</a>
              <a href="#contact" className="text-medical-dark hover:text-medical-blue transition-colors">Контакты</a>
              <Button className="bg-medical-blue hover:bg-blue-600">Консультация</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-medical-light py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-6 bg-blue-50 text-medical-blue border-blue-200">
                Профессиональная медицина
              </Badge>
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-6 leading-tight">
                Студия нейромышечной коррекции
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Современные методы лечения и коррекции нейромышечных нарушений. 
                Восстановление здоровья с научным подходом и индивидуальной программой.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-medical-blue hover:bg-blue-600 text-white px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-medical-blue text-medical-blue hover:bg-blue-50">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Users" size={24} className="text-medical-blue" />
                    </div>
                    <div className="font-montserrat text-2xl font-bold text-medical-dark">1000+</div>
                    <div className="text-sm text-gray-600">Пациентов</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Award" size={24} className="text-green-600" />
                    </div>
                    <div className="font-montserrat text-2xl font-bold text-medical-dark">15+</div>
                    <div className="text-sm text-gray-600">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Star" size={24} className="text-purple-600" />
                    </div>
                    <div className="font-montserrat text-2xl font-bold text-medical-dark">98%</div>
                    <div className="text-sm text-gray-600">Успешных случаев</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Clock" size={24} className="text-orange-600" />
                    </div>
                    <div className="font-montserrat text-2xl font-bold text-medical-dark">24/7</div>
                    <div className="text-sm text-gray-600">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-blue-50 text-medical-blue border-blue-200">
              Наши услуги
            </Badge>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-medical-dark mb-4">
              Методики лечения и коррекции
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный подход к восстановлению нейромышечных функций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "Нейромышечная коррекция",
                description: "Восстановление функций нервной системы и мышечного тонуса с помощью современных методик",
                color: "blue"
              },
              {
                icon: "Zap",
                title: "Электростимуляция",
                description: "Применение электрических импульсов для активации и укрепления мышечных групп",
                color: "purple"
              },
              {
                icon: "Target",
                title: "Точечная терапия",
                description: "Целенаправленное воздействие на проблемные зоны для максимального эффекта",
                color: "green"
              },
              {
                icon: "Waves",
                title: "Биорезонансная терапия",
                description: "Коррекция на клеточном уровне с использованием резонансных частот",
                color: "orange"
              },
              {
                icon: "Stethoscope",
                title: "Диагностика состояния",
                description: "Комплексное обследование для определения оптимальной программы лечения",
                color: "red"
              },
              {
                icon: "Heart",
                title: "Реабилитация",
                description: "Полный курс восстановления с индивидуальным подходом к каждому пациенту",
                color: "teal"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name={service.icon as any} size={24} className={`text-${service.color}-600`} />
                  </div>
                  <CardTitle className="font-montserrat text-xl text-medical-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-blue-50 text-medical-blue border-blue-200">
              Преимущества
            </Badge>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-medical-dark mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Shield",
                title: "Лицензированная деятельность",
                description: "Все необходимые сертификаты и лицензии"
              },
              {
                icon: "UserCheck",
                title: "Квалифицированные специалисты",
                description: "Врачи с многолетним опытом и постоянным обучением"
              },
              {
                icon: "Microscope",
                title: "Современное оборудование",
                description: "Новейшие технологии для точной диагностики"
              },
              {
                icon: "TrendingUp",
                title: "Доказанная эффективность",
                description: "Высокий процент успешных результатов лечения"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={28} className="text-medical-blue" />
                </div>
                <h3 className="font-montserrat text-lg font-semibold text-medical-dark mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-blue-50 text-medical-blue border-blue-200">
              Отзывы пациентов
            </Badge>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-medical-dark mb-4">
              Что говорят наши пациенты
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Мария Петрова",
                age: "45 лет",
                condition: "Нарушение координации",
                rating: 5,
                text: "После курса лечения значительно улучшилась координация движений. Врачи профессиональные, оборудование современное."
              },
              {
                name: "Александр Иванов",
                age: "38 лет", 
                condition: "Мышечные спазмы",
                rating: 5,
                text: "Спазмы практически исчезли уже через месяц лечения. Очень благодарен специалистам за внимательный подход."
              },
              {
                name: "Елена Сидорова",
                age: "52 года",
                condition: "Реабилитация после инсульта",
                rating: 5,
                text: "Восстановление проходит намного быстрее, чем ожидала. Индивидуальный подход и современные методики дают результат."
              }
            ].map((review, index) => (
              <Card key={index} className="border border-gray-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-montserrat text-lg text-medical-dark">{review.name}</CardTitle>
                      <CardDescription>{review.age} • {review.condition}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({length: review.rating}).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-blue-50 text-medical-blue border-blue-200">
              Наша команда
            </Badge>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-medical-dark mb-4">
              Квалифицированные специалисты
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Др. Анна Волкова",
                specialization: "Невролог, к.м.н.",
                experience: "15 лет опыта",
                description: "Специалист по нейромышечным расстройствам, автор 20+ научных работ"
              },
              {
                name: "Др. Михаил Соколов", 
                specialization: "Физиотерапевт",
                experience: "12 лет опыта",
                description: "Эксперт по реабилитации и восстановительной медицине"
              },
              {
                name: "Др. Елена Морозова",
                specialization: "Нейрофизиолог",
                experience: "10 лет опыта", 
                description: "Специалист по диагностике и коррекции нервной системы"
              }
            ].map((doctor, index) => (
              <Card key={index} className="text-center border border-gray-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-medical-blue to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat text-xl text-medical-dark">{doctor.name}</CardTitle>
                  <CardDescription className="text-medical-blue font-medium">{doctor.specialization}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">{doctor.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-blue-50 text-medical-blue border-blue-200">
              Сертификаты и лицензии
            </Badge>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-medical-dark mb-4">
              Наши документы и награды
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { image: "/img/aa11c611-72d7-4bf8-9a15-8f5dbc7a3123.jpg", title: "Лицензия на медицинскую деятельность" },
              { image: "/img/b3fa682b-7ae4-4538-95af-ed41cc8355e3.jpg", title: "Сертификат специалиста" },
              { image: "/img/9d13f225-1ed5-4346-8924-862ce132cc18.jpg", title: "Современное оборудование" },
              { image: "/img/aa11c611-72d7-4bf8-9a15-8f5dbc7a3123.jpg", title: "Лицензия Минздрава РФ" },
              { image: "/img/b3fa682b-7ae4-4538-95af-ed41cc8355e3.jpg", title: "Награда за достижения" },
              { image: "/img/9d13f225-1ed5-4346-8924-862ce132cc18.jpg", title: "Сертификат качества" },
              { image: "/img/aa11c611-72d7-4bf8-9a15-8f5dbc7a3123.jpg", title: "Разрешение на деятельность" },
              { image: "/img/b3fa682b-7ae4-4538-95af-ed41cc8355e3.jpg", title: "Диплом повышения квалификации" }
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] bg-white rounded border border-gray-200 overflow-hidden mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-montserrat text-sm font-medium text-medical-dark text-center">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-medical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6 bg-blue-900 text-blue-300 border-blue-700">
                Свяжитесь с нами
              </Badge>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
                Запишитесь на консультацию
              </h2>
              <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                Получите профессиональную консультацию и индивидуальный план лечения. 
                Первичная консультация проводится бесплатно.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-blue-200 text-sm">Ежедневно с 8:00 до 20:00</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">info@neurostudio.ru</div>
                    <div className="text-blue-200 text-sm">Ответим в течение часа</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Москва, ул. Медицинская, д. 15</div>
                    <div className="text-blue-200 text-sm">5 минут от метро</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-montserrat">Быстрая запись</CardTitle>
                <CardDescription className="text-blue-200">
                  Оставьте заявку, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-200">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-200">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Услуга</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Выберите услугу</option>
                    <option value="consultation">Консультация</option>
                    <option value="diagnostics">Диагностика</option>
                    <option value="treatment">Лечение</option>
                  </select>
                </div>
                <Button className="w-full bg-white text-medical-dark hover:bg-gray-100">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-dark border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={20} className="text-white" />
                </div>
                <span className="font-montserrat font-bold text-xl text-white">НейроСтудия</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Профессиональная студия нейромышечной коррекции в Москве
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Диагностика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лечение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реабилитация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">О клинике</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Специалисты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оборудование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-3 text-sm text-blue-200">
                <div>+7 (495) 123-45-67</div>
                <div>info@neurostudio.ru</div>
                <div>Москва, ул. Медицинская, 15</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-blue-200">
            © 2024 НейроСтудия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}