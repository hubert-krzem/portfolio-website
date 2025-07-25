import PortfolioPolaroidBlob from "./PortfolioPolaroidBlob";

type PortfolioEntryProps = {
  title: string;
  description: string;
  // image?: string;
  // rotate?: number;
  // label?: string;
  // date?: string;
};

{/* Portfolio Entry element  */}
export default function PortfolioEntryRight({ title, description, /* rotate=10, image, label, date*/ }: PortfolioEntryProps) {
    return (
        <section className="flex flex-row justify-between items-stretch w-full gap-8">
            {/* Title and text */}
            <div className="w-2/3 space-y-4 text-base">
                <h2 className="text-3xl underline">{title}</h2>

                {description.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
                ))}
            </div>
            
            {/* Polaroid image */}
            <div className="w-1/4 h-full">
                <PortfolioPolaroidBlob/>
            </div>
        </section>
    );
}