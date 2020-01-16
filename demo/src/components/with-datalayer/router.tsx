import React, { lazy, Suspense } from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'

export interface PageRoute {
	name: string
	suspense?: boolean
}

export const Router = ({ pageRoutes, suspenseFallback }: {
	pageRoutes: PageRoute[], suspenseFallback?: any
}) => {
	const routes = pageRoutes.map((pageRoute: PageRoute) =>
		<Route key={pageRoute.name} exact path={`/${pageRoute.name}`} component={() => {
			let PageComponent = lazy(() => import(`/${pageRoute.name}`))

			return (
				pageRoute.suspense && suspenseFallback ?
					<Suspense fallback={React.createElement(suspenseFallback)}>
						<PageComponent />
					</Suspense>
					:
					<PageComponent />)
		}} />
	)

	const firstPage = pageRoutes[0].name

	return (<MemoryRouter initialEntries={[`/${firstPage}`]}>
		<Switch>
			{routes}
		</Switch>
	</MemoryRouter>)
}