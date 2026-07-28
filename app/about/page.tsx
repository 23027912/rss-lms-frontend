"use client";

import React from "react";
import Breadcrumbs from "../components/breadcrumbs";

export default function AboutPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Breadcrumb Navigation Trail */}
      <Breadcrumbs />

      {/* Main Core Title Section */}
      ### border-b border-slate-200 pb-4 dark:border-slate-800
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          About This Project
        </h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Frontend architecture blueprint and systems overview for the integration pipeline.
        </p>
      

      {/* Student Identification Block */}
      ### rounded-xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/30 dark:bg-blue-950/20
        <h3 className="text-lg font-bold text-blue-900 dark:text-blue-400">
          Student Identification Metadata
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100 block">Full Name:</span>
            <span className="text-base">Sunita Yadav</span>
          </div>
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100 block">Student ID Number:</span>
            <span className="text-base text-mono">23027912</span>
          </div>
        </div>
      

      {/* Video Demonstration Section */}
      ### space-y-3
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          System Interface Video Walkthrough
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The video demonstration below outlines system navigation, responsive hamburger menu transformations, and user preference state switching.
        </p>
        
        {/* Responsive HTML5 Video Container Frame */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900 aspect-video w-full max-w-3xl">
          <video 
            className="h-full w-full object-cover" 
            controls 
            poster="/video-placeholder.jpg"
            preload="metadata"
          >
            <source src="/demo-presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag. Please view the root repository file.
          </video>
        </div>
      

      {/* Architectural Context & Project Continuity Breakdown */}
      ### grid gap-6 md:grid-cols-2
        <div className="space-y-3 rounded-xl border border-slate-200 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Assessment 1 Target Scope
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            This module represents a pure decoupled **frontend visual layout prototype**. All rendered article logs, feed cards, and data streams use static mock entities to establish stable layout spacing, theme context hooks, and access configurations ahead of structural assembly.
          </p>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Future RSS to LMS Bridge
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            During Assessment 2, an active background server architecture will be integrated. The application will consume live raw xml text feeds, sanitize formatting properties, and safely syndicate educational data payloads straight into target Learning Management System course endpoints.
          </p>
        </div>
      
    </div>
  );
}