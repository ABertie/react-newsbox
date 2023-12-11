"use client"

import { faCheckToSlot, faInbox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ArticleItem(props) {
    return (
        <article className="border-t border-grey-400 p-3">
            <span className="articlesCategories" hidden>{props.category}</span>
            <a href={props.url} target="_blank" className="grid grid-cols-3 gap-x-3">
                <img src={props.img} alt="" className="rounded-full row-span-2 h-30 w-30 self-center"/>
                <h1 className="col-span-2 text-ellipsis whitespace-nowrap overflow-hidden w-full font-bold">{props.title}</h1>
                <p className="col-span-2">{props.abstract}</p>
            </a>
            {/* <button className="saveButton"><FontAwesomeIcon icon={true ? faInbox : faCheckToSlot}/></button> */}
        </article>
    )
}