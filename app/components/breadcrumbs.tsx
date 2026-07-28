/****************************************************************************************************
This code is for for a fully dynamic, accessible breadcrumb component. It reads your current URL 
path using Next.js hooks and automatically builds the navigation trail for your pages 
(e.g., Home > Feeds > [id])
*****************************************************************************************************/

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Split pathname into individual segments, filtering out empty strings
  const pathSegments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="mb-6 flex items-center text-sm font-medium text-slate-500 dark:text-slate-400"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* Root / Home Link */}
        <li className="inline-flex items-center">
          <Link 
            href="/" 
            className="hover:text-blue-600 transition-colors dark:hover:text-blue-400"
          >
            Home
          </Link>
        </li>

        {/* Dynamic Segments */}
        {pathSegments.map((segment, index) => {
          // Construct the nested URL string up to the current segment
          const routeTo = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          
          // Format text: capitalize and remove dashes/hyphens
          const segmentLabel = segment
            .replace(/-/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase());

          return (
            <li key={routeTo} className="flex items-center">
              {/* Separator Chevron Icon */}
              <svg 
                className="mx-2 h-3 w-3 text-slate-400 dark:text-slate-600" 
                aria-hidden="true" 
                xmlns="http://w3.org" 
                fill="none" 
                viewBox="0 0 6 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m1 9 4-4-4-4" 
                />
              </svg>

              {isLast ? (
                // Current Page (Active - Not a Link)
                <span 
                  aria-current="page" 
                  className="text-slate-800 dark:text-slate-200 font-semibold"
                >
                  {segmentLabel}
                </span>
              ) : (
                // Clickable Parent Links
                <Link 
                  href={routeTo} 
                  className="hover:text-blue-600 transition-colors dark:hover:text-blue-400"
                >
                  {segmentLabel}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}