import { useEffect, lazy, Suspense } from 'react'
import { withRouter, Route, MemoryRouter, Switch } from 'react-router-dom'
import React from 'react'

export interface PageRoute {
  name: string
  datalayerName?: string
  suspense?: boolean
  relativePath?: string
}

const LogPage = (PageRoutes?: PageRoute[]) => {
  const LogPaging = ({history}:any) => {
    useEffect(() => history.listen(() => {
      console.log('Router', history.action, history.location)
      if (PageRoutes) {
        const pageRoute = PageRoutes.find(pageRoute => 
          pageRoute.name === history.location.pathname)
        
      }
    }), [history.location.pathname])
    return null
  }
  return React.createElement(withRouter(LogPaging))
}

export const DatalayerRouter = ({ pageRoutes, suspenseFallback }: {
	pageRoutes: PageRoute[], suspenseFallback?: JSX.Element
}) => {
	const routes = pageRoutes.map((pageRoute: PageRoute) =>
		<Route key={pageRoute.name} exact path={`/${pageRoute.name}`} component={() => {
			const PageComponent = lazy(() => import(`/${pageRoute.name}`))
      
      const fallback = suspenseFallback?suspenseFallback:<p>Loading</p>

			return (
				pageRoute.suspense ?
					<Suspense fallback={fallback}>
						<PageComponent />
					</Suspense>
					:
					<PageComponent />)
		}} />
  )
  
	return (
  <MemoryRouter initialEntries={[`/${pageRoutes[0].name}`]}>
		<Switch>
			{routes}
		</Switch>
    {LogPage()}
	</MemoryRouter>)
}