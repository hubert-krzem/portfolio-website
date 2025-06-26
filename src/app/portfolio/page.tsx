import PortfolioEntryLeft from "@/components/PortfolioEntryLeft";
import PortfolioEntryRight from "@/components/PortfolioEntryRight";

export default function Portfolio() {
  return (
    <main className="text-black font-bold max-w-6xl mx-auto p-4">
        {/* Portfolio header */}
        <header className="
            mb-6 flex flex-col text-3xl
            md:flex-row md:items-center md:justify-between gap-4">
            <h1>Check out my portfolio</h1>

            <div className="flex items-center gap-5">
                <span>Sort:</span>
                <span className="underline cursor-pointer">Newest</span>
                <span className="rotate-90">→</span>
            </div>
        </header>

        {/* Elements */}
        <section>
            <PortfolioEntryLeft 
              title="FPL Live Notifications"
              description={'Fantasy premier league is played by over 12 million players. Yet the official app doesn’t support live notifications for in game events. \n I created an app that tracks the official FPL API and sends out push notifications whenever a users points are updated. By tracking the official API, the app can push out accurate updates that reflect the real state of a users team. \n This allows users to be better informed on how their team is performing in real time and helps new players understand what in game events actually mean for their scores.'}
            />

            <PortfolioEntryRight
              title="Lorem Ipsum"
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />

            

        </section>
    </main>
  );
}