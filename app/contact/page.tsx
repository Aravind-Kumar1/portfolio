import ContactForm from "@/components/sections/contact-form"
import SocialLinks from "@/components/sections/social-links"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's build something amazing together.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  )
}
