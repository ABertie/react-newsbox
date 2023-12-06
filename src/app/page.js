"use client"

import PrimaryNavigation from "@/components/primarynav"
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import saveJSONtoLocalStorage from "./saveJSONtoLocalStorage"
import getJSONfromLocalStorage from "./getJSONfromLocalStorage"

export default function Home() {
  // const ORIGINAL_CATEGORIES = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sundayreview", "t-magazine", "technology", "theater", "travel", "upshot", "us", "world"]

  const CATEGORIES_ICONS = [{
      category: "arts",
      icon: "palette"
  },{
      category: "automobiles",
      icon: "car"
  },{
      category: "books",
      icon: "book"
  },{
      category: "business",
      icon: "briefcase"
  },{
      category: "fashion",
      icon: "shirt"
  },{
      category: "food",
      icon: "utensils"
  },{
      category: "health",
      icon: "heart-pulse"
  },{
      category: "home",
      icon: "timeline"
  },{
      category: "insider",
      icon: "people-group"
  },{
      category: "magazine",
      icon: "newspaper"
  },{
      category: "movies",
      icon: "clapperboard"
  },{
      category: "nyregion",
      icon: "location-dot"
  },{
      category: "obituaries",
      icon: "skull"
  },{
      category: "opinion",
      icon: "brain"
  },{
      category: "politics",
      icon: "landmark"
  },{
      category: "realestate",
      icon: "house-user"
  },{
      category: "science",
      icon: "flask"
  },{
      category: "sundayreview",
      icon: "calendar-day"
  },{
      category: "t-magazine",
      icon: "t"
  },{
      category: "technology",
      icon: "microchip"
  },{
      category: "theater",
      icon: "masks-theater"
  },{
      category: "travel",
      icon: "plane"
  },{
      category: "upshot",
      icon: "clipboard-check"
  },{
      category: "us",
      icon: "users"
  },{
      category: "world",
      icon: "earth-americas"
  }
  ]

  const [order, setOrder] = useState(!localStorage.getItem("CategoriesOrder") ? CATEGORIES_ICONS : localStorage.getItem("CategoriesOrder"))
  const [categories, setCategories] = useState(!localStorage.getItem("SavedCategories") ? order : getJSONfromLocalStorage("SavedCategories")[0])
  
  useEffect(function () {
    if (!localStorage.getItem("SavedCategories")) {
      saveJSONtoLocalStorage("SavedCategories", categories)
    }
  }, [])

  function clickHandler(event) {
    let svg = event.target.querySelector("svg")
    svg.style ? svg.style.transform = "rotate(90deg)" : svg.removeAttribute("style")
    console.log(svg.style);
  }

  return (
    <>
      <PrimaryNavigation site="Newsbox"/>
      <main>
        {categories.map((elem, i) => (
        <section key={i}>
          <button className="categoryButton" onClick={clickHandler}><i className={`fa-solid fa-${elem.icon}`}></i>{elem.category}<FontAwesomeIcon icon={faChevronRight} /></button> 
          <ul></ul>
        </section>))}
      </main>
    </>
  )
}
