import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import React from 'react'

export interface DLPageRoute {
  name: string
  datalayerName?: string
}

export const LogPage = (PageRoutes?: DLPageRoute[]) => {
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