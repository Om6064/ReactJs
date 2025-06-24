import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-800 text-blue-100 rounded-full text-sm font-semibold">
            🎉 Welcome to the Future of Employee Management
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Welcome to
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> MyCompany</span>
          </h1>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Simplify your employee management with our intuitive platform.
            Streamline processes, boost productivity, and create a better workplace experience.
          </p>
          <Link to="/service">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              🚀 Explore Services
            </button>
          </Link>

          <div className="mt-16 flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the features that make our platform the perfect choice for modern businesses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: 'Fast & Reliable',
                icon: '🚀',
                desc: 'Our system is optimized for speed and uptime with 99.9% availability guaranteed.',
                color: 'from-blue-400 to-cyan-400',
                bgColor: 'bg-gray-900'
              },
              {
                title: 'Secure Login',
                icon: '🔒',
                desc: 'Your data is safe with industry standard security protocols and end-to-end encryption.',
                color: 'from-green-400 to-emerald-400',
                bgColor: 'bg-gray-900'
              },
              {
                title: 'User Friendly',
                icon: '👍',
                desc: 'Intuitive UI designed for admins and employees alike with zero learning curve.',
                color: 'from-purple-400 to-pink-400',
                bgColor: 'bg-gray-900'
              }
            ].map((item, index) => (
              <div key={index} className={`${item.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 group cursor-pointer`}>
                <div className={`text-5xl mb-6 p-4 rounded-2xl bg-gradient-to-r ${item.color} w-fit mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="filter drop-shadow-lg">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>

                <div className="mt-6 flex justify-center">
                  <div className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gray-800 px-6 py-3 rounded-full">
              <span className="text-gray-400">Trusted by</span>
              <span className="font-bold text-blue-400">1000+</span>
              <span className="text-gray-400">companies worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
