import { useHistory, } from 'react-router-dom'
import { DLPageRoute } from './components/with-datalayer'
import { PageRoute } from './components/router'

export enum PageNames {
    firstPage = '0-page',
    secondPage = '1-page',
    thirdPage = '2-page',
    Error = 'error',
}

export const firstPage = PageNames.firstPage

export interface Page extends DLPageRoute, PageRoute { }

export const pages: Page[] = [
    {
        name: PageNames.firstPage,
        datalayerName: 'xyz',
        suspense: true
    },
    {
        name: PageNames.secondPage,
    },
    {
        name: PageNames.thirdPage,
    },
    {
        name: PageNames.Error,
    },
]

export const OnNext = (currentPageName: string) => {
    const nextPageIndex = pages.findIndex(r => r.name === currentPageName) + 1
    const nextPageName = (pages[nextPageIndex] || {}).name
    useHistory().push(`/${nextPageName}`)
}