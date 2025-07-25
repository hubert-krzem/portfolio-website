/* 'use client';
import { useState } from 'react'; */

import PortfolioEntryLeft from "@/components/PortfolioEntryLeft";
import PortfolioEntryRight from "@/components/PortfolioEntryRight";

export default function Portfolio() {

  /*
  const projects = [
    { title: "FPL Live Notifications", date: "2025-01"},
    { title: "Hex Oust", date: "2025-05"},
    { title: "Portfolio Website", date: "2025-07"}
  ]

  const [selectedSort, setSelectedSort] = useState('newest');
  */

  return (
    <main className="text-black font-bold max-w-6xl mx-auto p-4">
        {/* Portfolio header */}
        <header className="
          mb-6 flex flex-col text-3xl
          md:flex-row md:items-center md:justify-between gap-4"
          >

          <h1>Check out my portfolio</h1>

          {/* Dropdown menu to sort projects */}
          <div className="z-15">

            <label className="flex items-center gap-2">
              <span>Sort:</span>
              
              <select className="appearance-none" name="sort">
                <option value="longest"> Longest</option>
                <option value="newest"> Newest</option>  
              </select>

              <span className="rotate-90">→</span>
            </label>

          </div>
        </header>

        {/* Elements */}
        <section>
          <ul>
            <li>
              <PortfolioEntryLeft 
                title="FPL Live Notifications"
                description={'Fantasy premier league is played by over 12 million players. Yet the official app doesn’t support live notifications for in game events. \nI created an app that tracks the official FPL API and sends out push notifications whenever a users points are updated. By tracking the official API, the app can push out accurate updates that reflect the real state of a users team. \n This allows users to be better informed on how their team is performing in real time and helps new players understand what in game events actually mean for their scores.'}
              />
            </li>

            <li>
              <PortfolioEntryRight
                title="Lorem Ipsum"
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              />
            </li>

            <li>
              <PortfolioEntryLeft
                title="Lorem Ipsum"
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              />
            </li>
          </ul>
        </section>
    </main>
  );
}