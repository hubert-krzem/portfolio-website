import Image from "next/image"

{/* Blob + polaroid combo */}
export default function PolaroidBlob() {
    return (
        <div className="relative w-[500px] h-[500px] grid place-items-center">
          {/* SVG to generate blob */}
          <svg 
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-full h-full z-0 scale-[1.2]"
          > {/* z-0 sets depth at 0 */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "rgb(238, 205, 163)" }} />
                <stop offset="100%" style={{ stopColor: "rgb(239, 98, 159)" }} />
              </linearGradient>
            </defs>
            <path id="blob" d="M418,280.5Q345,311,319,328Q293,345,259.5,379.5Q226,414,160.5,421.5Q95,429,77.5,367.5Q60,306,109.5,264.5Q159,223,158,182.5Q157,142,199.5,167.5Q242,193,296,112Q350,31,336,117.5Q322,204,406.5,227Q491,250,418,280.5Z"
                  fill="url(#gradient)"
            />
          </svg>

          {/* IMG to hold and display polaroid */}
          <Image
            src="/polaroid-frame.png"
            alt="Project preview"
            className="relative z-10 w-1/2 h-auto rotate-10 hover:rotate-2 transition-transform duration-300 ease-in-out"
          />
        </div>
    );
}