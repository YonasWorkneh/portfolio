import Link from "next/link";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import Phone from "./Phone";
import StatusBar from "./StatusBar";
import Image from "next/image";
import { useState } from "react";
import ProjectsApp from "./ProjectsApp";
export default function Featured() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  return (
    <>
      <div className="hidden sm:block px-5 sm:px-0">
        <ProjectCard
          as={Link}
          title=" Black Cube"
          description={
            <>
              <span>2023, </span> &mdash; Shaping the future of legal services
              online
            </>
          }
          projLink="/projects/blackcube"
          imgSrc="/img/black-cube.png"
          bgGradient="blackcube"
        />
        <ProjectCard
          as={Link}
          title=" Legendx"
          description={
            <>
              <span>2023, </span> &mdash; Shaping the future of legal services
              online
            </>
          }
          projLink="/projects/legendx"
          imgSrc="/img/legendx.png"
          bgGradient="legendx"
        />
        <ProjectCard
          as={Link}
          title="Grand Theft Auto - VI"
          description={
            <>
              <span>2025</span> &mdash; A rockstar games legend landing page{" "}
              <span className="text-3xl text-white">🎮</span>
            </>
          }
          bgGradient="gta"
          projLink="/projects/gta"
          imgSrc="/img/gta.png"
        />
        <ProjectCard
          as={"div"}
          title="Since 2022"
          description={
            <>
              <span>2022 &mdash; present </span> Over 15+ projects
            </>
          }
        >
          <Projects />
        </ProjectCard>
      </div>
      <div className="sm:hidden w-full px-5 sm:px-0 h-[750px] mb-[150px]">
        <Phone className="w-full h-full">
          {isProjectsOpen ? (
            <>
              {isProjectsLoading ? (
                <div className="p-3 bg-[#111] h-full">
                  <StatusBar />
                  <div className="flex justify-center items-center h-full">
                    <div className="-mt-36">
                      <Image
                        src="/img/projects.png"
                        alt="gta-vi"
                        width={100}
                        height={130}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <ProjectsApp />
              )}
            </>
          ) : (
            <div className="">
              <StatusBar />
              <div className="grid grid-cols-4 gap-4 mt-8">
                {/* App Icons */}
                <Link
                  href="/projects/blackcube"
                  className="rounded-2xl flex flex-col items-center justify-center"
                >
                  <Image
                    src="/img/blackcube-logo.png"
                    alt="blackcube"
                    className="rounded-xl w-[55px] h-[50px]"
                    width={56}
                    height={56}
                  />
                  <span className="text-white text-xs mt-[2px]">
                    Black Cube
                  </span>
                </Link>
                <Link
                  href="/projects/legendx"
                  className="rounded-2xl flex flex-col items-center justify-center"
                >
                  <Image
                    src="/img/legendx-logo.png"
                    alt="legendx"
                    className="rounded-xl w-[55px] h-[50px]"
                    width={56}
                    height={56}
                  />
                  <span className="text-white text-xs mt-[2px]">Legendx</span>
                </Link>
                <Link
                  href="/projects/gta"
                  className="rounded-2xl flex flex-col items-center justify-center"
                >
                  <Image
                    src="/img/gta-vi.webp"
                    alt="gta-vi"
                    width={56}
                    height={56}
                    className="rounded-xl w-[55px] h-[50px]"
                  />
                  <span className="text-white text-xs mt-[2px]">GTA VI</span>
                </Link>
                <div
                  className="rounded-2xl flex flex-col items-center justify-center"
                  onClick={() => {
                    setIsProjectsOpen(true);
                    setTimeout(() => {
                      setIsProjectsLoading(false);
                    }, 2000);
                  }}
                >
                  <div className="rounded-xl bg-[#000] py-1 w-[56px] h-[50px] flex items-center justify-center">
                    <Image
                      src="/img/projects.png"
                      alt="gta-vi"
                      width={40}
                      height={40}
                      className="rounded-xl"
                    />
                  </div>
                  <span className="text-white text-xs mt-[2px]">Projects</span>
                </div>
              </div>

              {/* Dock */}
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <div className="w-full flex justify-center items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-white/20"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-white/70"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-white/20"></span>
                </div>
                <div className="p-2 py-3 bg-white/30 backdrop-blur-xl rounded-[1.5rem]">
                  <div className="flex justify-around items-center">
                    <Image
                      src="/img/phone.webp"
                      alt="phone"
                      width={56}
                      height={56}
                    />
                    <Image
                      src="/img/safari.jpg"
                      alt="safari"
                      width={54}
                      height={54}
                      className="rounded-xl"
                    />
                    <Image
                      src="/img/message.webp"
                      alt="messages"
                      width={56}
                      height={56}
                    />
                    <Image
                      src="/img/camera.webp"
                      alt="camera"
                      width={56}
                      height={56}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Phone>
      </div>
    </>
  );
}
