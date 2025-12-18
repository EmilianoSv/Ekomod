import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  image: any;
  category: string;
}

interface ProjectGalleryGridProps {
  projects: Project[];
}

export default function ProjectGalleryGrid({ projects }: ProjectGalleryGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group cursor-pointer overflow-hidden border-2 border-gray-200 hover:border-[#355070] transition-all duration-300 hover:shadow-xl"
            onClick={() => setSelectedProject(project)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-semibold bg-[#E89B33] px-3 py-1 rounded-full mb-2 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto bg-white">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold bg-linear-to-r from-[#E89B33] to-[#6B8E23] text-white px-4 py-2 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-gray-900">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-lg md:text-xl text-gray-600">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <img
                  src={selectedProject.image.src}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 px-6 py-3 bg-linear-to-r from-[#E89B33] to-[#6B8E23] text-white rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer"
                >
                  Solicitar cotización
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
