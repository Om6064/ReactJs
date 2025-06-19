const Service = () => {
  return (
    <div className="bg-white py-32 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Employee Directory',
              desc: 'Easily manage and view all employees in one place.',
              icon: '📇'
            },
            {
              title: 'Access Control',
              desc: 'Secure login system with session and role handling.',
              icon: '🛡️'
            },
            {
              title: 'Performance Tools',
              desc: 'Track progress, KPIs and assign tasks.',
              icon: '📈'
            },
            {
              title: 'Leave Management',
              desc: 'Apply, approve and manage employee leaves.',
              icon: '📅'
            },
            {
              title: 'Custom Reports',
              desc: 'Export data and generate insightful reports.',
              icon: '📊'
            },
            {
              title: '24/7 Support',
              desc: 'We’re here whenever you need us.',
              icon: '💬'
            }
          ].map((service, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
