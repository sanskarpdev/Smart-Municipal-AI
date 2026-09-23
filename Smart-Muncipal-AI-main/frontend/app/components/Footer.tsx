const departments = [
  { name: "Road Maintenance", phone: "1800-111-2222", email: "roads@municipal.gov.in", icon: "🛣️" },
  { name: "Sanitation Dept.", phone: "1800-333-4444", email: "sanitation@municipal.gov.in", icon: "🗑️" },
  { name: "Electrical Dept.", phone: "1800-555-6666", email: "electrical@municipal.gov.in", icon: "⚡" },
  { name: "Drainage Dept.", phone: "1800-777-8888", email: "drainage@municipal.gov.in", icon: "🌊" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gov-gradient text-white">
      {/* Department contacts */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl font-bold mb-8 text-blue-100">Department Helplines</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{dept.icon}</span>
                  <p className="font-semibold text-sm">{dept.name}</p>
                </div>
                <p className="text-blue-200 text-sm flex items-center gap-2 mb-1">
                  <span>📞</span> {dept.phone}
                </p>
                <p className="text-blue-300 text-xs flex items-center gap-2">
                  <span>✉️</span>
                  <a href={`mailto:${dept.email}`} className="hover:text-white transition-colors truncate">
                    {dept.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-xl">🏛️</span>
                </div>
                <div>
                  <p className="font-bold text-lg">MunicipalAI</p>
                  <p className="text-blue-200 text-xs">Smart City Portal</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                AI-powered complaint management system for smart, efficient municipal governance.
                Built to serve citizens and empower government officers.
              </p>
              <div className="flex gap-3">
                {["🇮🇳 Govt. of India", "ISO 27001"].map((badge) => (
                  <span key={badge} className="bg-white/10 text-blue-200 text-xs px-3 py-1.5 rounded-full border border-white/20">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                {[
                  { label: "File a Complaint", href: "#ai-detection" },
                  { label: "Track Complaint", href: "#how-it-works" },
                  { label: "AI Detection", href: "#ai-detection" },
                  { label: "Services", href: "#services" },
                  { label: "Officer Login", href: "#" },
                  { label: "RTI Portal", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors flex items-center gap-2">
                      <span className="text-blue-400">›</span> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
              <div className="space-y-3 text-blue-200 text-sm">
                <div className="flex gap-3">
                  <span className="shrink-0">📞</span>
                  <div>
                    <p className="font-medium text-white">Toll-Free Helpline</p>
                    <p>1800-XXX-XXXX (24×7)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0">✉️</span>
                  <div>
                    <p className="font-medium text-white">Email Support</p>
                    <p>complaints@municipal.gov.in</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0">📍</span>
                  <div>
                    <p className="font-medium text-white">Office Address</p>
                    <p>Municipal Corporation Office,<br />Smart City Complex</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0">🕐</span>
                  <div>
                    <p className="font-medium text-white">Office Hours</p>
                    <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4 text-center text-blue-300 text-xs">
        <p>
          © 2025 MunicipalAI — Government of India. All rights reserved. &nbsp;|&nbsp;
          <a href="#" className="hover:text-white">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#" className="hover:text-white">Terms of Use</a> &nbsp;|&nbsp;
          <a href="#" className="hover:text-white">RTI</a>
        </p>
        <p className="mt-1 opacity-60">
          Powered by AI · YOLO Detection Model · FastAPI Backend
        </p>
      </div>
    </footer>
  );
}
