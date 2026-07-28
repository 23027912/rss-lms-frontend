/****************************************************************************************************
  Footer component with Student ID and Name
*****************************************************************************************************/

"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full border-t border-slate-200 bg-slate-50 px-6 py-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        {/* Student and Assignment Metadata */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Developer: <span className="font-normal">Sunita Yadav</span>
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Student ID: <span className="font-normal">23027912</span>
          </p>
        </div>

        {/* Dynamic Project Status & Copyright */}
        <div className="text-center sm:text-right">
          <p className="font-medium text-blue-600 dark:text-blue-400">
            RSS Server & LMS Integration Project
          </p>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
            &copy; {currentYear} &bull; All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}