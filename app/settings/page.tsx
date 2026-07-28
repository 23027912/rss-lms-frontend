"use client";

import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import { useTheme } from "../context/themecontext";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Breadcrumb Navigation Trail */}
      <Breadcrumbs />

      {/* Main Core Title Section */}
      <div className="border-b border-slate-200 pb-4 dark:border-slate-800">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Application Settings
        </h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Customise your workspace preferences. Settings are automatically saved to your browser storage.
        </p>
      </div>

      {/* Theme Options Container Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Visual Appearance
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Switch between Light Mode and Dark Mode for improved readability.
            </p>
          </div>

          {/* Accessible Toggle Button Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Current: {theme}
            </span>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <div className="flex items-center gap-2">
                  {/* Moon Icon for Dark Mode Option */}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Switch to Dark Mode
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {/* Sun Icon for Light Mode Option */}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Switch to Light Mode
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Auxiliary Mock Configuration Section (Optional Layout Preferences Element) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 opacity-60">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              LMS Target Feed View Configuration
            </h3>
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-2xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              Locked
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Layout options (Card Grid vs Dense Rows). These controls will activate during the Assessment 2 integration phase.
          </p>
        </div>
      </div>
    </div>
  );
}