'use client'

import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  const content = {
    zh: {
      nav: {
        about: '自我介紹',
        experience: '經歷',
        projects: 'Side Projects',
        work: '工作經歷',
        music: '音樂作品',
      },
      hero: {
        name: '邱渝珊',
        nickname: 'little lamb wolf / mimi',
        title: '充滿熱情的跨領域學習者',
      },
      about: {
        title: '關於我',
        description: '我是個性活潑、學習能力極強的人，對程式設計充滿熱情。擁有跨領域才能，涉及文學、金融、心理學、物理、資訊等領域，強調融合知識創新應用。',
      },
      skills: {
        title: '技術技能',
        list: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'Arduino', 'PHP'],
      },
      services: {
        title: '提供的服務',
        list: [
          '家教/陪讀（幼兒至高中全科）',
          '學生服務（作業、專題、研究）',
          '企業服務（商業開發、系統）',
          '個人開發項目',
          '代寫與分析服務',
        ],
      },
      contact: {
        title: '聯絡方式',
        email: '369starofdavid@gmail.com',
        github: 'chessplayer-mimi',
      },
    },
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Side Projects',
        work: 'Work',
        music: 'Music',
      },
      hero: {
        name: 'YU-SHAN CHIU',
        nickname: 'little lamb wolf / mimi',
        title: 'Energetic and Highly Adaptable Developer',
      },
      about: {
        title: 'About Me',
        description: 'I am an energetic and highly adaptable individual with a passion for programming. I believe coding will become a universal skill. I have a multidisciplinary background spanning literature, finance, psychology, physics, and information technology.',
      },
      skills: {
        title: 'Technical Skills',
        list: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'Arduino', 'PHP'],
      },
      services: {
        title: 'Services Offered',
        list: [
          'Tutoring (All subjects from kindergarten to high school)',
          'Student Services (Homework, Projects, Research)',
          'Business Services (Development, Systems)',
          'Personal Development Projects',
          'Writing and Analysis Services',
        ],
      },
      contact: {
        title: 'Contact',
        email: '369starofdavid@gmail.com',
        github: 'chessplayer-mimi',
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.about}
              </a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">
                {t.skills.title}
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">
                {t.services.title}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
                {t.contact.title}
              </a>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 rounded ${
                  language === 'zh'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t.hero.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">{t.hero.nickname}</p>
          <p className="text-2xl md:text-3xl text-gray-800 font-semibold">{t.hero.title}</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t.about.title}</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">{t.about.description}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t.skills.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.skills.list.map((skill) => (
              <div
                key={skill}
                className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6 text-center font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.services.list.map((service, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">{t.contact.title}</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Email</h3>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-blue-600 hover:text-blue-800 text-lg transition"
                >
                  {t.contact.email}
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">GitHub</h3>
                <a
                  href={`https://github.com/${t.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-lg transition"
                >
                  @{t.contact.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p>&copy; 2024 {t.hero.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
