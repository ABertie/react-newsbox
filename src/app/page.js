"use client"

import PrimaryNavigation from "@/components/primarynav"
import { useEffect, useState } from "react"
import saveJSONtoLocalStorage from "./saveJSONtoLocalStorage"
import getJSONfromLocalStorage from "./getJSONfromLocalStorage"
import ArticleItem from "@/components/article"
import Category from "@/components/category"

export default function Home() {
  // const ORIGINAL_CATEGORIES = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sundayreview", "t-magazine", "technology", "theater", "travel", "upshot", "us", "world"]

  const CATEGORIES_ICONS = [{
      category: "arts",
      show: true,
      icon: "palette"
  },{
      category: "automobiles",
      show: true,
      icon: "car"
  },{
      category: "books",
      show: true,
      icon: "book"
  },{
      category: "business",
      show: true,
      icon: "briefcase"
  },{
      category: "fashion",
      show: true,
      icon: "shirt"
  },{
      category: "food",
      show: true,
      icon: "utensils"
  },{
      category: "health",
      show: true,
      icon: "heart-pulse"
  },{
      category: "home",
      show: true,
      icon: "timeline"
  },{
      category: "insider",
      show: true,
      icon: "people-group"
  },{
      category: "magazine",
      show: true,
      icon: "newspaper"
  },{
      category: "movies",
      show: true,
      icon: "clapperboard"
  },{
      category: "nyregion",
      show: true,
      icon: "location-dot"
  },{
      category: "obituaries",
      show: true,
      icon: "skull"
  },{
      category: "opinion",
      show: true,
      icon: "brain"
  },{
      category: "politics",
      show: true,
      icon: "landmark"
  },{
      category: "realestate",
      show: true,
      icon: "house-user"
  },{
      category: "science",
      show: true,
      icon: "flask"
  },{
      category: "sundayreview",
      show: true,
      icon: "calendar-day"
  },{
      category: "t-magazine",
      show: true,
      icon: "t"
  },{
      category: "technology",
      show: true,
      icon: "microchip"
  },{
      category: "theater",
      show: true,
      icon: "masks-theater"
  },{
      category: "travel",
      show: true,
      icon: "plane"
  },{
      category: "upshot",
      show: true,
      icon: "clipboard-check"
  },{
      category: "us",
      show: true,
      icon: "users"
  },{
      category: "world",
      show: true,
      icon: "earth-americas"
  }
  ]

//   const [order, setOrder] = useState(!localStorage.getItem("CategoriesOrder") ? CATEGORIES_ICONS : localStorage.getItem("CategoriesOrder"))

  const [categories, setCategories] = useState(CATEGORIES_ICONS)

  useEffect(function () {
    if (!localStorage.getItem("SavedCategories")) {
        saveJSONtoLocalStorage("SavedCategories", categories)
    }
    else {
        setCategories(getJSONfromLocalStorage("SavedCategories")[0])
    }
  }, [])

  return (
    <>
      <PrimaryNavigation site="Newsbox"/>
      <main className="border-b border-grey-400">
        {categories.map((object, i) => 
            (object.show && <Category key={i} icon={object.icon} category={object.category}/>)
        )}
      </main>
    </>
  )
}
