"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isWorkflowVisible, setIsWorkflowVisible] = useState(true);

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Hero Welcome Banner */}
      ### text-center sm:text-left space-y-4 max-w-3xl
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          RSS Server & LMS Integration Portal
        </h2>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Welcome to the management control prototype. This application acts as an educational content syndication bridge, designed to capture remote data updates and transform them into active institutional coursework modules.
        </p>
        
        {/* Call to Action Quick Nav Links */}
        <div className="pt-2 flex flex-wrap gap-4 justify-center sm:justify-start">
          <Link 
            href="/feeds" 
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Explore Feeds / Posts
          </Link>
          <Link 
            href="/about" 
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            View Project Details
          </Link>
        </div>
      

      {/* Interactive Workflow Visual Section (Rubric Requirement) */}
      ### space-y-4
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            System Architecture Blueprint
          </h3>
          {/* Hide/Show Interactive Control */}
          <button
            onClick={() => setIsWorkflowVisible(!isWorkflowVisible)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            aria-expanded={isWorkflowVisible}
          >
            {isWorkflowVisible ? "Hide Pipeline Diagram ──" : "Show Pipeline Diagram ＋"}
          </button>
        </div>

        {/* Workflow Diagram Grid Layout */}
        <div className={`transition-all duration-300 ${isWorkflowVisible ? "block opacity-100" : "hidden opacity-0"}`}>
          <div className="grid gap-4 md:grid-cols-3 text-center">
            {/* Step 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                1
              </div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Sourced Feeds</h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Raw target XML formats gathered across external academic web directories.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/20 p-5 shadow-sm dark:border-blue-900/30 dark:bg-blue-950/10 relative">
              {/* Desktop Chevron Icon */}
              <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-slate-300 dark:text-slate-700">
                ➔
              </div>
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-sm">
                2
              </div>
              <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm">RSS Processing Server</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Normalizes structured logs and cleans dynamic tags safely in real-time.
              </p>
              <span className="mt-2 inline-block rounded bg-blue-100 px-1.5 py-0.5 text-2xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                Current Prototype Focus
              </span>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 relative">
              {/* Desktop Chevron Icon */}
              <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-slate-300 dark:text-slate-700">
                ➔
              </div>
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                3
              </div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Target LMS Endpoints</h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Syndicated content feeds straight into institutional course blocks seamlessly.
              </p>
            </div>
          </div>
        </div>
      

      {/* Progress Log Container Block */}
      ### rounded-xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-950/40
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Assessment Continuity Note
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          This system uses static, blog-style data modules as a placeholder framework. The modular component structure built here prepares the site template layout for active server-side parsing and database integration coming next in Assessment 2.
        </p>
      
    </div>
  );
}
