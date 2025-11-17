export type NavLink = {
  name: string
  url: string
  external?: boolean
}

export interface Config {
    site: string
    font: string
    title: string
    description: string
    author: string
    tags: string[]
    pageSize: number
    headerLinks: NavLink[]
    footerLinks: string[]
}