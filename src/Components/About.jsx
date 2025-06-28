import React from 'react'
import img1 from '../images/mobile.png';
import img2 from '../images/web-dev.png';
import img3 from '../images/bac-dev.png';
import img4 from '../images/depl.png';
import img5 from '../images/full.png';
import { CiGlobe, CiMobile2, CiServer, } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";

const About = ({ isSidebarOpen }) => {
  const mobileTags = ['React Native', 'iOS', 'Android'];
  const webTags = ['React', 'Next.js', 'TypeScript', 'Tailwind css'];
  const backendTags = ['Node.js', 'Express', 'MongoDB'];
  const Development = ['Vercel', 'Hostinger', 'Netlify',];
  return (
    <>
      <div className={`${isSidebarOpen ? 'w-[full]' : 'w-full'}w-full min-h-screen bg-[#0A0A0A] text-gray-200 p-8`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mt-12 mb-4">About Me</h1>
          <p className="text-xl text-[#A1A1A1] mb-12">I build digital experiences across multiple platforms and technologies.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Mobile Developer Card (Left - takes 1 of 3 columns) */}
            <div className="lg:col-span-1 bg-[#1C1C24] hover:bg-[#181422] cursor-pointer text-white p-6 rounded-2xl border border-[#232323] flex flex-col justify-between">
              <div>
                <div className="mb-4 bg-[#312938] p-3 rounded-full w-max">
                  <CiMobile2 size={24} />
                </div>
                <h2 className="text-[30px] font-[700] text-center">Mobile Developer</h2>
                <p className="text-[#A1A1A1] mb-4">
                  Creating native and cross-platform mobile experiences that users love.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mobileTags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-[#2C2C3A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex h-[200px] justify-center items-center mt-4">
                <img src={img1} alt="Mobile Development" className="w-60" />
              </div>
            </div>

            {/* Right Column (takes 2 of 3 columns) */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Web Developer Card (Top Right) - NOW RESPONSIVE */}
              <div className="bg-[#1C1C24] hover:bg-[#0F1823] text-white p-6 rounded-2xl border border-[#232323] flex-1">
                {/* Flex container: flex-col by default, md:flex-row for medium screens up */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  {/* Text content */}
                  <div>
                    <div className="mb-4 bg-[#312938] p-3 rounded-full w-max">
                      <CiGlobe size={24} />
                    </div>
                    <h2 className="text-[30px] font-[700]">Web Developer</h2>
                    <p className="text-[#A1A1A1] mb-4">
                      Building responsive, accessible, and performant web applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {webTags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-[#2C2C3A]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Image: shrinks to not grow/shrink, centers itself */}
                  <img src={img2} alt="Web Development" className="w-[200px] self-center flex-shrink-0" />
                </div>
              </div>

              {/* Backend Developer Card (Bottom Right) - NOW RESPONSIVE */}
              <div className="bg-[#1C1C24] hover:bg-[#0C1D16] text-white p-6 rounded-2xl border border-[#232323] flex-1">
                {/* Flex container: flex-col by default, md:flex-row for medium screens up */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  {/* Text content */}
                  <div>
                    <div className="mb-4 bg-[#312938] p-3 rounded-full w-max">
                      <CiServer size={24} />
                    </div>
                    <h2 className="text-[30px] font-[700]">Backend Developer</h2>
                    <p className="text-[#A1A1A1] mb-4">
                      Designing robust APIs and server-side solutions that scale.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {backendTags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-[#2C2C3A]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Image: shrinks to not grow/shrink, centers itself */}
                  <img src={img3} alt="Backend Development" className="w-[200px] self-center flex-shrink-0" />
                </div>
              </div>

            </div>
            <div className="lg:col-span-1 hover:bg-[#231A0F] bg-[#1C1C24] text-white p-6 rounded-2xl border border-[#232323] flex flex-col justify-between">
              <div>
                <div className="mb-4 bg-[#312938] p-3 rounded-full w-max">
                  <CiMobile2 size={24} />
                </div>
                <h2 className="text-[30px] font-[700] text-center ">Deployment</h2>
                <p className="text-[#A1A1A1] mb-4">
                  Automating deployment pipelines.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Development.map((tag, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-[#2C2C3A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <img src={img4} alt="Mobile Development" className="w-[200px]" />
              </div>
            </div>



          </div>
          <div className="bg-[#1C1C24] hover:bg-[#1D1421] transition-all duration-300 group pt-5  pb-5 text-white p-6 rounded-2xl border mt-5 border-[#232323] flex-1">
            {/* Flex container: flex-col by default, md:flex-row for medium screens up */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              {/* Text content */}
              <div>
                <div className="mb-4 bg-[#312938] p-3 rounded-full w-max">
                  <FaLaptopCode size={24} />
                </div>
                <h2 className="text-[30px] font-[700] text-center">Full Stack Developer</h2>
                <p className="text-[#A1A1A1] mb-4">
                  Bridging the gap between frontend and backend to create complete, end-to-end solutions.
                </p>
                <button className="bg-[white] text-[black] px-5 py-1 cursor-pointer m-auto block mt-10 rounded-[10px]">View Project</button>
              </div>
              {/* Image: shrinks to not grow/shrink, centers itself */}
              <img src={img5} alt="Backend Development" className="w-[250px] transition-all duration-500 group-hover:bg-[#301D38] self-center flex-shrink-0 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About