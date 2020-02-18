import { PageRoute } from '../components/with-datalayer'

export enum PageNames {
    home = 'home',
    about = 'about',
    topics = 'topics',
}

// Can choose to extend if we want
export interface Page extends PageRoute { }

export const pageRoutes: Array<Page> = Object
    .values(PageNames).map(
        pageName => <Page>{
        name: pageName,
        suspense: true
    })