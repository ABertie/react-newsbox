"use client"

import { faChevronLeft, faGear, faInbox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function PrimaryNavigation(props) {
    return (
        <header>
            {/* <nav> */}
                {props.site === "Newsbox" 
                ? <Link href="/archive"><FontAwesomeIcon icon={faInbox} /></Link> 
                : <Link href="/"><FontAwesomeIcon icon={faChevronLeft} /></Link>}
                <h1>{props.site}</h1>
                {props.site === "News settings" 
                ? "" 
                : <Link href="/settings"><FontAwesomeIcon icon={faGear} /></Link>}
            {/* </nav> */}
        </header>
    )
}