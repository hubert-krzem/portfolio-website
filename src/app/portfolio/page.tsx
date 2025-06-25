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
            <PortfolioEntryLeft />
            <PortfolioEntryRight />

        </section>
    </main>
  );
}