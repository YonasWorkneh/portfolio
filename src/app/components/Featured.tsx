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
      <div className="sm:hidden w-full px-5 sm:px-0 h-[calc(100dvh-100px)] mb-[150px]">
        <Phone
          className="w-full h-full"
          onClosePhone={() => setIsProjectsOpen(false)}
        >
          {isProjectsOpen ? (
            <>
              {isProjectsLoading ? (
                <div className="p-3 bg-[#111] h-full">
                  <StatusBar />
                  <div className="flex justify-center items-center h-full">
                    <div className="-mt-36">
                      <svg
                        className="size-[100px] stroke-[3px] fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M91.3 76h186l-7 18.9h-179c-39.7 0-71.9 31.6-71.9 70.3v205.4c0 35.4 24.9 70.3 84 70.3V460H91.3C41.2 460 0 419.8 0 370.5V165.2C0 115.9 40.7 76 91.3 76zm229.1-56h66.5C243.1 398.1 241.2 418.9 202.2 459.3c-20.8 21.6-49.3 31.7-78.3 32.7v-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1 .6-12.6-82.1-223.2h61.4L218.2 299 320.4 20zM448 161.5V460H234c6.6-9.6 10.7-16.3 12.1-19.4h182.5V161.5c0-32.5-17.1-51.9-48.2-62.9l6.7-17.6c41.7 13.6 60.9 43.1 60.9 80.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <ProjectsApp
                  onCloseProjectApp={() => setIsProjectsOpen(false)}
                />
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
                    <svg
                      className="size-[40px] stroke-[3px] fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M91.3 76h186l-7 18.9h-179c-39.7 0-71.9 31.6-71.9 70.3v205.4c0 35.4 24.9 70.3 84 70.3V460H91.3C41.2 460 0 419.8 0 370.5V165.2C0 115.9 40.7 76 91.3 76zm229.1-56h66.5C243.1 398.1 241.2 418.9 202.2 459.3c-20.8 21.6-49.3 31.7-78.3 32.7v-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1 .6-12.6-82.1-223.2h61.4L218.2 299 320.4 20zM448 161.5V460H234c6.6-9.6 10.7-16.3 12.1-19.4h182.5V161.5c0-32.5-17.1-51.9-48.2-62.9l6.7-17.6c41.7 13.6 60.9 43.1 60.9 80.5z" />
                    </svg>
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
