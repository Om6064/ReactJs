import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      
      <section className="bg-blue-50 py-28 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to Flowbite</h1>
          <p className="text-gray-700 text-lg mb-8">
            Simplify your employee management with our intuitive platform.
          </p>
          <Link to="/service">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
              Explore Services
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Fast & Reliable', icon: '🚀', desc: 'Our system is optimized for speed and uptime.' },
              { title: 'Secure Login', icon: '🔒', desc: 'Your data is safe with industry standard security.' },
              { title: 'User Friendly', icon: '👍', desc: 'Intuitive UI for admins and employees alike.' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
