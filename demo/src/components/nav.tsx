import { useHistory, } from 'react-router-dom'
import {pageRoutes} from '../pages/pageRoutes'
import React from 'react'

const next = (currentPageName:string, history:any) => {
    const nextPageIndex = pageRoutes.findIndex(
        r => r.name === currentPageName) + 1
    const nextPageName = (pageRoutes[nextPageIndex] || {}).name
    history.push(`/${nextPageName}`)
}

export const Nav = (props:any) => {
    const history = useHistory()
    return props.render(() => next(props.currentPageName, history))
}

export const WithNav = (currentPageName:string, el:JSX.Element) => {
    const history = useHistory()
    return React.cloneElement(el, {onClick: () => next(currentPageName, history)})
}