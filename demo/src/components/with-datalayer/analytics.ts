// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Ana {
  export let config: any 
  
  export const report = (pathname: string) => {
    const page = config?.find((c:any) =>
            `/${c.pathname}` === pathname)
          
    console.log('report: ', page)
  }
}