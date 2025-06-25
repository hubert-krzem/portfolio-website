import PortfolioPolaroidBlob from "./PortfolioPolaroidBlob";

{/* Portfolio Entry element  */}
export default function PortfolioEntry() {
    return (
        <section className="flex flex-row justify-between items-stretch w-full gap-8">
            {/* Title and text */}
            <div className="w-2/3 space-y-4 text-base">
                <h2 className="text-3xl">FPL Live Notifications</h2>
                <p>Fantasy premier league is played by over 12 million players. Yet the official app doesn’t support live notifications for in game events. <br></br>
                    <br></br>I created an app that tracks the official FPL API and sends out push notifications whenever a users points are updated. By tracking the official API, the app can push out accurate updates that reflect the real state of a users team. <br></br>
                    <br></br>This allows users to be better informed on how their team is performing in real time and helps new players understand what in game events actually mean for their scores.
                </p>
            </div>
            
            {/* Polaroid image */}
            <div className="w-1/4 h-full">
                <PortfolioPolaroidBlob />
            </div>
        </section>
    );
}