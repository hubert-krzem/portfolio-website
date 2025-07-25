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
export default function PortfolioEntryLeft({ title, description, /* rotate=10, image, label, date */}: PortfolioEntryProps) {
    return (
        <section className="flex flex-row justify-between items-stretch w-full gap-8">
            {/* Polaroid image */}
            <div className="w-1/4 h-full">
                <PortfolioPolaroidBlob/>
            </div>

            {/* Title and text */}
            <div className="w-2/3 space-y-4 text-base">
                <h2 className="text-3xl underline">{title}</h2>

                {/* Code for splitting up text in description input by \n\n */}
                {description.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
                ))}
            </div>
        </section>
    );
}