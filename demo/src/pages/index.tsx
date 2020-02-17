import home from './home'
import about from './about'
import topics from './topics'

export const getImport = (name:string) => {
    const pageImports:any = {
        home, about, topics
    }

    return pageImports[name]
}