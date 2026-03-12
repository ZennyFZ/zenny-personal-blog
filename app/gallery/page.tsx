"use client";

import { ArrowLeft, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackgroundEffects } from "@/components/background-effects";
import Link from "next/link";
import { Projects } from "@/data/content";
import type { Project, SparklePosition } from "@/types";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export default function GalleryPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  const sortedProjects = [...Projects].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  const selectedProject =
    sortedProjects.find((project) => project.id === selectedProjectId) ?? null;

  const sparklePositions: SparklePosition[] = Array.from(
    { length: 20 },
    () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }),
  );

  const handleVisitWebsiteClick = (
    project: Project,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (project.type === "redacted") {
      event.preventDefault();
      toast.error("Hidden by client :x");
      return;
    }

    if (project.type === "coming_soon") {
      event.preventDefault();
      toast.error("This project is coming soon.");
    }

    if (project.type === "no_demo") {
      event.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <BackgroundEffects sparklePositions={sparklePositions} />

      <div className="relative z-10 px-4 pb-8 pt-8 sm:p-6 sm:pt-10 md:p-8 md:pt-12">
        <div className="mb-6 flex flex-col gap-4 rounded-lg border-4 border-pink-300 bg-white/80 p-3 backdrop-blur-sm pixel-shadow sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex w-full items-center gap-3 sm:w-auto sm:gap-4">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="shrink-0 border-2 border-pink-300 hover:bg-pink-100"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="min-w-0">
              <h1 className="pixelated-font text-lg font-bold leading-tight text-purple-800 sm:text-2xl">
                {"As I've Written"}
              </h1>
              <p className="text-xs text-purple-600 sm:text-sm">
                {"Let's pen the final stroke and end this story."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start rounded-md border-2 border-pink-200 bg-white/70 px-2 py-1 sm:self-auto">
            <Book className="h-5 w-5 text-pink-500 sm:h-6 sm:w-6" />
            <span className="pixelated-font text-xs text-purple-700 sm:text-sm">
              {sortedProjects.length} Projects
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {sortedProjects.map((project) => {
            const previewTechs = project.technologies.slice(0, 3);

            return (
              <Card
                key={project.id}
                className="group bg-white/90 border-4 border-pink-300 pixel-shadow hover:border-purple-400 transition-all hover:scale-[1.02]"
              >
                <div className="flex h-full flex-col p-4">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-3 overflow-hidden">
                    <Image
                      src={project.coverImage || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col space-y-3">
                    <h3 className="pixelated-font text-sm font-bold text-purple-800 line-clamp-2">
                      {project.title}
                    </h3>

                    <div>
                      <p className="text-xs text-purple-700 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5">
                        {previewTechs.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-purple-300 bg-purple-100 px-2 py-1 text-[10px] font-semibold text-purple-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProjectId(project.id)}
                      className="h-8 border-2 border-purple-300 bg-white text-[10px] uppercase tracking-wide text-purple-700 hover:bg-purple-100"
                    >
                      Detail
                    </Button>

                    <div className="mt-auto flex items-center justify-between pt-1">
                      {project.date && (
                        <span className="text-xs text-gray-500">
                          {project.date}
                        </span>
                      )}
                      <Link
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) =>
                          handleVisitWebsiteClick(project, event)
                        }
                      >
                        <Button
                          size="sm"
                          className="h-8 border-2 border-pink-400 bg-pink-500 px-3 text-[10px] uppercase tracking-wide text-white hover:bg-pink-600"
                        >
                          Visit Website
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProjectId(null);
          }
        }}
      >
        <DialogContent className="max-w-2xl border-4 border-pink-300 bg-white/95">
          {selectedProject && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="pixelated-font text-xl text-purple-800">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="grid gap-4 md:grid-cols-[180px_1fr]">
                <div className="aspect-square overflow-hidden rounded-lg border-2 border-pink-200 bg-gradient-to-br from-pink-100 to-purple-100">
                  <Image
                    src={selectedProject.coverImage || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wide text-purple-700">
                      Description
                    </h4>
                    <p className="text-sm leading-6 text-purple-800">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-purple-700">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-purple-300 bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-pink-200 pt-3">
                <span className="text-xs text-gray-500">
                  {selectedProject.date || "No date"}
                </span>
                <Link
                  href={selectedProject.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) =>
                    handleVisitWebsiteClick(selectedProject, event)
                  }
                >
                  <Button
                    size="sm"
                    className="h-8 border-2 border-pink-400 bg-pink-500 px-3 text-[10px] uppercase tracking-wide text-white hover:bg-pink-600"
                  >
                    Visit Website
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
