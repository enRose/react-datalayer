import { useEffect, lazy, Suspense } from 'react'
import { withRouter, Route, MemoryRouter, Switch, useLocation } from 'react-router-dom'
import React from 'react'

export interface PageRoute {
  name: string
  datalayerName?: string
  suspense?: boolean
}

const LogPage = (pageRoutes?: PageRoute[], analytics?:any) => {
  const LogPaging = () => {
    let location = useLocation()

    useEffect(
      () => {
        console.log('location: ', location.pathname)

        analytics?.report(location.pathname)
      },
      [location]
    )
    return null
  }
  return React.createElement(withRouter(LogPaging))
}

export const DatalayerRouter = 
({ pageRoutes, analytics, suspenseFallback }: {
	pageRoutes: PageRoute[], analytics?:any, suspenseFallback?: JSX.Element
}) => {
	const routes = pageRoutes.map((pageRoute: PageRoute) =>
		<Route key={pageRoute.name} exact path={`/${pageRoute.name}`} component={() => {
  
      const PageComponent = lazy(() => import(`../../pages/${pageRoute.name}`))
      
      const fallback = suspenseFallback ? suspenseFallback : <div>loading...</div>
      
      return (
				<Suspense fallback={fallback}>
					<PageComponent />
				</Suspense>
			)
		}} />
  )
  
	return (
  <MemoryRouter initialEntries={[`/${pageRoutes[0].name}`]}>
		<Switch>
			{routes}
		</Switch>
    {LogPage(pageRoutes, analytics)}
	</MemoryRouter>)
}