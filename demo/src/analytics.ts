
export class Ana {
  public config: any
  private static instance: Ana

  private constructor() {}

  public static getInstance(): Ana {
    if (!Ana.instance) {
      Ana.instance = new Ana()
    }

    return Ana.instance
  }

  public set(config: any) {
    this.config = config.default
  }
  
  public report(pathname: string) {
    const page = this.config?.find((c:any) =>
            c.pathname === pathname)
          
    console.log('report: ', page)
  }
}