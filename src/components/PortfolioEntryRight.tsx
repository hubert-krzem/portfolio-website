import PortfolioPolaroidBlob from "./PortfolioPolaroidBlob";

{/* Portfolio Entry element  */}
export default function PortfolioEntry() {
    return (
        <section className="flex flex-row justify-between items-stretch w-full gap-8">
            {/* Polaroid image */}
            <div className="w-1/4 h-full">
                <PortfolioPolaroidBlob />
            </div>

            {/* Title and text */}
            <div className="w-2/3 space-y-4 text-base">
                <h2 className="text-3xl">Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
                    <br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>
                    <br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>
    );
}