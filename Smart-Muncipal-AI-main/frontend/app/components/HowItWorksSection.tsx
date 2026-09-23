const steps = [
  {
    step: "01",
    icon: "📸",
    title: "Capture the Issue",
    description:
      "Take a clear photo of the municipal problem — pothole, garbage dump, broken streetlight, or flooded drain. Any smartphone camera works.",
    tip: "💡 Tip: Take photos in daylight for best AI accuracy",
    color: "bg-blue-600",
    lineColor: "from-blue-400 to-purple-400",
  },
  {
    step: "02",
    icon: "🤖",
    title: "AI Auto-Detection",
    description:
      "Upload the photo to our portal. Our YOLO AI model analyzes the image in seconds and identifies the type of issue with confidence score.",
    tip: "⚡ Average detection time: under 3 seconds",
    color: "bg-purple-600",
    lineColor: "from-purple-400 to-orange-400",
  },
  {
    step: "03",
    icon: "🏢",
    title: "Auto Department Routing",
    description:
      "The system automatically routes your complaint to the correct department with priority level and suggested corrective action.",
    tip: "📬 Auto-assigned: Road, Sanitation, Electrical or Drainage Dept.",
    color: "bg-orange-500",
    lineColor: "from-orange-400 to-green-400",
  },
  {
    step: "04",
    icon: "✅",
    title: "Track & Resolve",
    description:
      "Government officers receive instant notification. Track complaint status in real-time until the issue is marked resolved.",
    tip: "🎯 Average resolution: 24 hours for High priority",
    color: "bg-green-600",
    lineColor: "",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            📖 Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From photo to resolution in 4 simple steps. Designed for both citizens filing complaints
            and government officers managing them.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Step number & icon */}
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}>
                  {step.icon}
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm card-hover w-full">
                  <span className="text-xs font-bold text-gray-400 tracking-widest">{step.step}</span>
                  <h3 className="text-gray-900 font-bold text-lg mt-1 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 italic">
                    {step.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User type cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">👤</div>
              <div>
                <p className="font-bold text-gray-900">For Citizens</p>
                <p className="text-gray-500 text-sm">Filing a complaint</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Take a photo of the civic issue",
                "Upload to this portal — no registration required",
                "AI automatically detects and categorizes the problem",
                "Receive a complaint ID to track your submission",
                "Get notified when issue is resolved",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">🏛️</div>
              <div>
                <p className="font-bold text-gray-900">For Government Officers</p>
                <p className="text-gray-500 text-sm">Managing complaints</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Receive auto-routed complaints with AI analysis",
                "View priority levels (High/Medium/Low)",
                "Access AI-suggested corrective action",
                "Update complaint status in real-time",
                "Generate department-wise reports",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
