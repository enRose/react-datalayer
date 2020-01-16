import { useHistory, } from 'react-router-dom'
import { DLPageRoute } from '../components/with-datalayer'
import { PageRoute } from '../components/with-datalayer/router'

export enum PageNames {
    home = 'home',
    about = 'about',
    users = 'users',
}

export interface Page extends DLPageRoute, PageRoute { }

export const pages: Page[] = [
    {
        name: PageNames.home,
    },
    {
        name: PageNames.about,
    },
    {
        name: PageNames.users,
    },
]

export const OnNext = (currentPageName: string) => {
    const nextPageIndex = pages.findIndex(r => r.name === currentPageName) + 1
    const nextPageName = (pages[nextPageIndex] || {}).name
    useHistory().push(`/${nextPageName}`)
}