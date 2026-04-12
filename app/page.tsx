'use client'

import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  const content = {
    zh: {
      nav: {
        about: '自我介紹',
        experience: '經歷',
        skills: '技術技能',
        projects: 'Side Projects',
        services: '提供的服務',
        contact: '聯絡方式',
      },
      hero: {
        name: '邱渝珊',
        nickname: ' mimi/雪/little lamb wolf ',
        title: '充滿熱情的跨領域學習者',
      },
      about: {
        title: '關於我',
        description: '我是個性活潑、學習能力極強的人，對程式設計充滿熱情。擁有跨領域才能，涉及文學、金融、心理學、物理、資訊等領域，強調融合知識創新應用。',
      },
      skills: {
        title: '技術技能',
        list: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Arduino', 'PHP'],
      },
      services: {
        title: '提供的服務',
        list: [
          '家教/陪讀（幼兒至高中全科）',
          '學生服務（作業、專題、研究）',
          '企業服務（商業開發、系統）',
          '個人開發項目',
          
        ],
      },
      projects: {
        title: 'side projects',
        list: [
          {
            name: '剪刀石頭布大戰遊戲',
            description: '一款互動式剪刀石頭布對戰小遊戲，挑戰你的運氣與策略！',
            url: 'https://chessplayer-mimi.github.io/rock-peper-scissors-war/',
          },
          {
            name: '你破防了嗎～病毒式傳播小遊戲',
            description: '模擬病毒式傳播機制的趣味小遊戲，看看你能不能保持理智！',
            url: 'https://chessplayer-mimi.github.io/smash-u/',
          },
        ],
      },
      experience: {
        title: '經歷',
        years: [
          {
            year: '2026',
            events: [
              'SITCON 學生計算機年會（工人）',
              '東吳大學數學系科技部學生兼任助理',
            ],
          },
          {
            year: '2025',
            events: [
              'SITCON 學生計算機年會（會眾）',
              'SCoML 2025 ICU 患者存活預測競賽（亞軍）',
              'COSCUP 開源人年會（會眾）',
              'HITCON 台灣駭客年會（會眾）',
              'QRACON 學生量子電腦計算機年會（會眾）',
            ],
          },
          {
            year: '2024',
            events: [
              '睿橋科技股份有限公司實習生（管理 MySQL、維護 database、擔任後端工程師）',
              '清華大學工業工程學系實驗助理（協助研究：矽光子 Silicon Photonics、半導體微影技術 Nanolithography、半導體奈影 Semiconductor Lithography、證明 σ 與相干成像）',
            ],
          },
          {
            year: '2023',
            events: [
              '全國高中醫療科技創意競賽（佳作）',
              '金融知識奧林匹克競賽（團體組優勝）',
            ],
          },
          {
            year: '2022',
            events: [
              '全國高中閱讀心得寫作比賽（優等）',
              '研修社會心理學（雲林科技大學技職學院教育研究所劉威德老師開設）',
              '參加廣達《游於藝》計畫（擔任開幕主持人）',
            ],
          },
          {
            year: '2021',
            events: [
              '研修當代應用心理學（雲林科技大學技職學院教育研究所劉威德老師開設）',
              '全國數位探究科學競賽（第三名）',
              '擔任閱讀領航人：正是時候讀莊子',
            ],
          },
        ],
      },
      contact: {
        title: '聯絡方式',
        email: '369starofdavid@gmail.com',
        github: 'chessplayer-mimi',
        linkedin: 'mimi-chiu',
      },
    },
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Side Projects',
        services: 'Services',
        contact: 'Contact',
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
        list: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Arduino', 'PHP'],
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
      projects: {
        title: 'Side Projects',
        list: [
          {
            name: 'Rock Paper Scissors War',
            description: 'An interactive rock-paper-scissors battle game — test your luck and strategy!',
            url: 'https://chessplayer-mimi.github.io/rock-peper-scissors-war/',
          },
          {
            name: 'Did You Break? — Viral Spread Game',
            description: 'A fun game simulating viral spread mechanics. Can you keep your cool?',
            url: 'https://chessplayer-mimi.github.io/smash-u/',
          },
        ],
      },
      experience: {
        title: 'Experience',
        years: [
          {
            year: '2026',
            events: [
              'SITCON Student Computer Conference (Staff)',
            ],
          },
          {
            year: '2025',
            events: [
              'SITCON Student Computer Conference (Attendee)',
              'SCoML 2025 ICU Patient Survival Prediction Competition (Runner-up)',
              'COSCUP Open Source Conference (Attendee)',
              'HITCON Taiwan Hacker Conference (Attendee)',
              'QRACON Student Quantum Computing Conference (Attendee)',
            ],
          },
          {
            year: '2024',
            events: [
              'Intern at Ruiqiao Technology Co., Ltd. (MySQL management, database maintenance, backend engineer)',
              'Research Assistant at NTHU Industrial Engineering (Silicon Photonics, Nanolithography, Semiconductor Lithography)',
            ],
          },
          {
            year: '2023',
            events: [
              'National High School Medical Technology Creative Competition (Honorable Mention)',
              'Financial Knowledge Olympiad (Team Excellence Award)',
            ],
          },
          {
            year: '2022',
            events: [
              'National High School Reading Essay Competition (Excellent)',
              'Studied Social Psychology (National Yunlin University of Science and Technology)',
              'Quanta "Wandering in Arts" Program (Opening Ceremony Host)',
            ],
          },
          {
            year: '2021',
            events: [
              'Studied Contemporary Applied Psychology (National Yunlin University of Science and Technology)',
              'National Digital Science Inquiry Competition (3rd Place)',
              'Reading Navigator: The Right Time to Read Zhuangzi',
            ],
          },
        ],
      },
      contact: {
        title: 'Contact',
        email: '369starofdavid@gmail.com',
        github: 'chessplayer-mimi',
        linkedin: 'mimi-chiu',
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
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.about}
              </a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.experience}
              </a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.skills}
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.projects}
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.services}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.contact}
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

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t.experience.title}</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block" />
            <div className="space-y-8">
              {t.experience.years.map((yearData) => (
                <div key={yearData.year} className="flex gap-6">
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                    {yearData.year.slice(2)}
                  </div>
                  <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">{yearData.year}</h3>
                    <ul className="space-y-2">
                      {yearData.events.map((event, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-purple-400" />
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
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

      {/* Side Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.projects.list.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition mb-1">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                    <span className="mt-3 inline-block text-xs text-blue-500 group-hover:underline">
                      {project.url}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/30">
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
      <section id="contact" className="py-20 px-4">
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
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">LinkedIn</h3>
                <a
                  href={`https://www.linkedin.com/in/${t.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-lg transition"
                >
                  Mimi Chiu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p>&copy; 2026 {t.hero.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
