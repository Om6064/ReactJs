const Service = () => {
 return (
  <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-32 px-4 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
    
    <div className="container mx-auto relative z-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
          ✨ Comprehensive Solutions
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive suite of employee management solutions designed to streamline your HR processes and boost organizational efficiency.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {[
          {
            title: 'Employee Directory',
            desc: 'Easily manage and view all employees in one centralized, searchable database with advanced filtering options.',
            icon: '📇',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200'
          },
          {
            title: 'Access Control',
            desc: 'Secure login system with advanced session management, role-based permissions, and multi-factor authentication.',
            icon: '🛡️',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
          },
          {
            title: 'Performance Tools',
            desc: 'Track progress, monitor KPIs, assign tasks, and conduct performance reviews with comprehensive analytics.',
            icon: '📈',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200'
          },
          {
            title: 'Leave Management',
            desc: 'Streamlined leave application, approval workflow, and calendar integration with automated notifications.',
            icon: '📅',
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200'
          },
          {
            title: 'Custom Reports',
            desc: 'Export data and generate insightful reports with customizable templates and automated scheduling.',
            icon: '📊',
            color: 'from-indigo-500 to-blue-500',
            bgColor: 'bg-indigo-50',
            borderColor: 'border-indigo-200'
          },
          {
            title: '24/7 Support',
            desc: 'Round-the-clock customer support with live chat, phone assistance, and comprehensive documentation.',
            icon: '💬',
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-teal-50',
            borderColor: 'border-teal-200'
          }
        ].map((service, idx) => (
          <div key={idx} className={`${service.bgColor} border-2 ${service.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group cursor-pointer relative overflow-hidden`}>
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            
            {/* Icon */}
            <div className={`text-6xl mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.color} w-fit group-hover:scale-110 transition-all duration-300 shadow-lg`}>
              <span className="filter drop-shadow-lg">{service.icon}</span>
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors relative z-10">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">{service.desc}</p>
            
            {/* Animated Bottom Border */}
            <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            
            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              →
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-20">
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of companies that trust our platform for their employee management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { number: '1000+', label: 'Happy Clients' },
          { number: '99.9%', label: 'Uptime' },
          { number: '24/7', label: 'Support' },
          { number: '50+', label: 'Features' }
        ].map((stat, idx) => (
          <div key={idx} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default Service
