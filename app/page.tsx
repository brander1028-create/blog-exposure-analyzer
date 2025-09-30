export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-blue-900">
            Blog Exposure Analyzer
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            블로그 노출도를 분석하고 개선 방안을 찾아보세요
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  주요 기능
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>블로그 글 검색 순위 분석</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>키워드별 노출도 측정</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>경쟁 블로그 비교 분석</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>SEO 개선 제안</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-center text-gray-500">
                  곧 더 많은 기능이 추가될 예정입니다!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
