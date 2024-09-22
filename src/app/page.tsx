/** Byimaan */

import type { Metadata } from "next";
import "./page.scss"

import { calender, dummyData2024 } from "@/constants/calender";
import Month from "./_components/month";
import Week from "./_components/week";
import Year from "./_components/year";

export const metadata: Metadata = {
  title: "Next level animations",
  description: "Next.js app which have next level animations",
};

export default function Home() {

  
  return (
    <main >
      
      <div className="wrapper">

        {/* Heading */}
        <div className="heading">
          NEXT
          LEVEL
          ANIMATIONS
        </div>
        {/* Records */}
        {
          Object.entries(calender).map(
            ([yearName, monthsObj]) => (
              <Year key={yearName} >
                {
                  Object.entries(monthsObj).map(
                    ([monthName, monthObj]) => (
                      <Month key={monthName} summary={monthName}>
                        {
                          Object.entries(monthObj).map(
                            ([weekName, animationArr]) => (
                              <Week key={weekName} data={animationArr} summary={weekName}>
                                {/* Week will handle all the days by itself */}
                              </Week>
                            )
                          )
                        }
                      </Month>  
                    )
                  )
                }
              </Year>  
            ) )
        }
      </div>


    </main>
  );
}
