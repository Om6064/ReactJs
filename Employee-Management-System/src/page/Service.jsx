const Service = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-950 py-32 px-4 relative overflow-hidden text-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-800 text-white rounded-full text-sm font-semibold">
            ✨ Comprehensive Solutions
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
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
              color: 'from-blue-400 to-cyan-400',
              bgColor: 'bg-gray-800',
              borderColor: 'border-blue-700'
            },
            {
              title: 'Access Control',
              desc: 'Secure login system with advanced session management, role-based permissions, and multi-factor authentication.',
              icon: '🛡️',
              color: 'from-green-400 to-emerald-400',
              bgColor: 'bg-gray-800',
              borderColor: 'border-green-700'
            },
            {
              title: 'Performance Tools',
              desc: 'Track progress, monitor KPIs, assign tasks, and conduct performance reviews with comprehensive analytics.',
              icon: '📈',
              color: 'from-purple-400 to-pink-400',
              bgColor: 'bg-gray-800',
              borderColor: 'border-purple-700'
            },
            {
              title: 'Leave Management',
              desc: 'Streamlined leave application, approval workflow, and calendar integration with automated notifications.',
              icon: '📅',
              color: 'from-orange-400 to-red-400',
              bgColor: 'bg-gray-800',
              borderColor: 'border-red-700'
            },
            {
              title: 'Custom Reports',
              desc: 'Export data and generate insightful reports with customizable templates and automated scheduling.',
              icon: '📊',
              color: 'from-indigo-400 to-blue-400',
              bgColor: 'bg-gray-800',
              borderColor: 'border-indigo-700'
            },
            {
              title: '24/7 Support',
              desc: 'Round-the-clock customer support with live chat, phone assistance, and comprehensive documentation.',
              icon: '💬',
              color: 'from-teal-400 to-cyan-400',
              bgColor: 'bg-gray-800',
              borderColor: 'border-cyan-700'
            }
          ].map((service, idx) => (
            <div key={idx} className={`${service.bgColor} border-2 ${service.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group cursor-pointer relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>

              <div className={`text-6xl mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.color} w-fit group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <span className="filter drop-shadow-lg">{service.icon}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors relative z-10">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors relative z-10">{service.desc}</p>

              <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              <div className="absolute top-6 right-6 text-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                →
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies that trust our platform for their employee management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-700 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '1000+', label: 'Happy Clients' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' },
            { number: '50+', label: 'Features' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
