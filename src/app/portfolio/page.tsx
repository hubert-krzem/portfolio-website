import PortfolioEntry from "@/components/PortfolioEntry";

export default function Portfolio() {
  return (
    <main className="text-black font-bold max-w-6xl mx-auto">
        {/* Portfolio header */}
        <header className="
            mb-6 flex flex-col text-3xl p-4
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
            <PortfolioEntry />
        </section>
    </main>
  );
}