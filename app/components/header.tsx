"use client";

import React from "react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "RSS Server and LMS Application Integration" }: HeaderProps) {
  return (
    <header 
      className="w-full border-b border-slate-200 bg-slate-50/80 px-6 py-4 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80"
      role="banner"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
        {/* Assessment Title Header */}
        <h1 className="text-xl font-bold tracking-tight text-slate-900 transition-colors dark:text-slate-50 sm:text-2xl">
          {title}
        </h1>
        
        {/* Context Tag for UI Clarity */}
        <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20">
          Assessment 1: Frontend Prototype
        </div>
      </div>
    </header>
  );
}