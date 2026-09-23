const services = [
  {
    id: "pothole",
    icon: "🕳️",
    title: "Pothole Detection",
    description: "AI identifies road damage and potholes from photos. Auto-assigns to Road Maintenance Department.",
    department: "Road Maintenance",
    priority: "High",
    color: "from-red-50 to-red-100",
    iconBg: "bg-red-500",
    borderColor: "border-red-200",
    badge: "bg-red-100 text-red-700",
  },
  {
    id: "garbage",
    icon: "🗑️",
    title: "Garbage Dumping",
    description: "Detect illegal waste disposal sites. Reported to Sanitation Department for immediate cleanup.",
    department: "Sanitation Dept.",
    priority: "High",
    color: "from-green-50 to-green-100",
    iconBg: "bg-green-600",
    borderColor: "border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: "streetlight",
    icon: "💡",
    title: "Streetlight Issues",
    description: "Identify damaged or non-functional streetlights. Routes complaint to Electrical Department.",
    department: "Electrical Dept.",
    priority: "Medium",
    color: "from-yellow-50 to-yellow-100",
    iconBg: "bg-yellow-500",
    borderColor: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "drainage",
    icon: "🌊",
    title: "Drainage Overflow",
    description: "Detect blocked or overflowing drains. Critical issues fast-tracked to the Drainage Department.",
    department: "Drainage Dept.",
    priority: "High",
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-600",
    borderColor: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🏢 Municipal Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Issues We Detect & Resolve
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our AI model is trained on real municipal data to detect 4 critical civic issues
            and automatically route them to the correct government department.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`bg-gradient-to-br ${service.color} border ${service.borderColor} rounded-2xl p-6 card-hover cursor-pointer group`}
            >
              {/* Icon */}
              <div className={`${service.iconBg} w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Meta */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>🏢</span>
                  <span className="font-medium">{service.department}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Priority:</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${service.badge}`}>
                    {service.priority}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                <a href="#ai-detection">Detect with AI</a>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-4">
            <span className="text-3xl">🤖</span>
            <div className="text-left">
              <p className="font-bold text-gray-900">Powered by YOLO AI Model</p>
              <p className="text-gray-500 text-sm">Trained on 10,000+ real municipal images with 94%+ accuracy</p>
            </div>
            <a
              href="#ai-detection"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Try Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
