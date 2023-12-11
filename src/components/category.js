"use client"

import { faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import ArticleItem from "./article"

export default function Category(props) {
    const [articles, setArticles] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [loading, setLoading] = useState(true)

    // useEffect(function () {
    //     fetch(`https://api.nytimes.com/svc/topstories/v2/${props.category}.json?api-key=LNlTIFnb0NXHyHx2WdIRXyjml6HXIlLJ`)
    //         .then(res => res.json())
    //         .then(data => setArticles(data.results))
    // }, [])

    function getArticles(event) {
        let svg = event.target.querySelector("svg")
        svg.classList.toggle("rotate-90")

        if (loaded) return
        // const LIST_COUNT = 8

        setLoading(true)

        fetch(`https://api.nytimes.com/svc/topstories/v2/${props.category}.json?api-key=LNlTIFnb0NXHyHx2WdIRXyjml6HXIlLJ`)
            .then(res => res.json())
            .then(function (data) { 
                const FILTERED_ARTICLE = data.results.filter(function(article) {
                    if (article.item_type === "Article" || article.item_type === "Interactive") return article
                })

                setArticles(FILTERED_ARTICLE)
                setLoaded(true)
                setLoading(false)
            })
    }

    return (
        <details className="border-t border-grey-400">
            <summary className="p-3 flex justify-between items-center uppercase" onClick={getArticles} ><i className={`fa-solid fa-${props.icon} mr-2`}></i>{props.category}<FontAwesomeIcon icon={faChevronRight} className="ml-auto transition-transform duration-300"/></summary> 
                {loading 
                    ? <p className="text-center"><FontAwesomeIcon icon={faSpinner} spinPulse size="2x" /></p>
                    : articles.map((article, i) => (
                    <ArticleItem key={i}
                        item={article.item_type}
                        category={article.section}
                        url={article.url}
                        img={article.multimedia && article.multimedia[2].url}
                        title={article.title}
                        abstract={article.abstract} />
                    ))
            }
        </details>
    )
}