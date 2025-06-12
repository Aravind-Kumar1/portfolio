import ProjectGallery from "@/components/sections/project-gallery"

export default function ProjectsPage() {
    return (
        <main className="min-h-screen">
            <div className="pt-32">
                <div className="container mx-auto px-4">
                    <div className="w-full mx-auto bg-blue-600 rounded-2xl">
                        <div className="h-96 flex items-center px-12 md:px-16">
                            <p className="text-4xl md:text-5xl lg:text-6xl text-white text-left leading-tight md:leading-tight lg:leading-tight w-full"
                               style={{fontFamily: 'Poppins', fontWeight: '300', lineHeight: '1.3'}}>
                                <span className="block">Every project is a collaboration.</span>
                                <span className="block">Ideas into reality through</span>
                                <span className="block">thoughtful design</span>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-16 w-full">
                    <ProjectGallery/>
                </div>
            </div>
        </main>
    )
}