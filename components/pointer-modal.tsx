"use client";

import React, { useState, ChangeEvent } from "react";
import {
  Plus,
  Minus,
  MousePointerClick,
  Bolt,
  DiamondPlus,
  X,
} from "lucide-react";

interface Website {
  name: string;
  link: string;
}

type Mode = "default" | "select" | "remove";

export default function PointerModal() {
  const [websites, setWebsites] = useState<Website[]>([
    { name: "StackOverflow", link: "https://stackoverflow.com" },
    { name: "GitHub Discussions", link: "https://github.com/discussions" },
    { name: "Reddit", link: "https://reddit.com" },
    { name: "Hacker News", link: "https://news.ycombinator.com" },
    { name: "Daily.dev", link: "https://daily.dev" },
    { name: "Dev.to", link: "https://dev.to" },
    { name: "StackExchange", link: "https://stackexchange.com" },
    { name: "Hashnode", link: "https://hashnode.com" },
  ]);

  const [mode, setMode] = useState<Mode>("default");
  const [selectedWebsites, setSelectedWebsites] = useState<Set<string>>(
    new Set()
  );
  const [newWebsite, setNewWebsite] = useState<Website>({ name: "", link: "" });

  const toggleSelect = (link: string) => {
    setSelectedWebsites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(link)) {
        newSet.delete(link);
      } else {
        newSet.add(link);
      }
      return newSet;
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewWebsite((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (newWebsite.name.trim() && newWebsite.link.trim()) {
      setWebsites([newWebsite, ...websites]);
      if (mode === "select") {
        setSelectedWebsites((prev) => new Set(prev).add(newWebsite.link));
      }
      setNewWebsite({ name: "", link: "" });
    }
  };

  const removeWebsite = (index: number) => {
    setWebsites((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleSelectMode = () => {
    if (mode !== "select") {
      setMode("select");
      setSelectedWebsites(new Set(websites.map((site) => site.link)));
    } else {
      const allSelected = websites.every((site) =>
        selectedWebsites.has(site.link)
      );
      if (allSelected) {
        setSelectedWebsites(new Set());
      } else {
        setSelectedWebsites(new Set(websites.map((site) => site.link)));
      }
    }
  };

  const toggleRemoveMode = () => {
    setMode((prev) => (prev !== "remove" ? "remove" : "default"));
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 dark:bg-neutral-900 p-6 rounded-xl w-96 shadow-lg">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-semibold dark:text-gray-200">Pointers</h2>
        <button className="cursor-pointer">
          <X size={15} className="dark:text-gray-200" />
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <button className="cursor-pointer" onClick={toggleSelectMode}>
          <MousePointerClick size={15} className="dark:text-gray-400" />
        </button>
        <button className="cursor-pointer" onClick={toggleRemoveMode}>
          <Bolt size={15} className="dark:text-gray-400" />
        </button>
      </div>
      <div>
        {websites.map((site, index) => (
          <div
            key={index}
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => {
              if (mode === "select") {
                toggleSelect(site.link);
              } else if (mode === "remove") {
                removeWebsite(index);
              }
            }}
          >
            <div className="flex items-center space-x-2 text-xs dark:text-gray-200 pointer-events-none">
              <img
                src={`https://www.google.com/s2/favicons?domain=${site.link}`}
                alt={`${site.name} favicon`}
                className="w-4 h-4 rounded-full"
              />
              <span>{site.name}</span>
            </div>
            <div className="flex items-center justify-center w-6 h-6 pointer-events-none">
              {mode === "select" ? (
                selectedWebsites.has(site.link) ? (
                  <DiamondPlus size={15} className="dark:text-gray-200" />
                ) : (
                  <Plus size={15} className="dark:text-gray-200" />
                )
              ) : mode === "remove" ? (
                <Minus size={15} className="dark:text-gray-200" />
              ) : (
                <Plus size={15} className="dark:text-gray-200" />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="name"
            placeholder="Site name"
            value={newWebsite.name}
            onChange={handleInputChange}
            className="text-xs p-2 border-2 border-gray-500 rounded-lg outline-none"
          />
          <input
            type="url"
            name="link"
            placeholder="URL"
            value={newWebsite.link}
            onChange={handleInputChange}
            className="text-xs p-2 border-2 border-gray-500 rounded-lg outline-none"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full border-2 border-gray-500 text-xs text-gray-600 hover:border-gray-900 dark:hover:border-gray-300 hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200 ease-in-out mt-2 rounded-lg p-1 cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}
