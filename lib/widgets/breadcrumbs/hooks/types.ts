export type Breadcrumb = {
  id: string
  index: number
  path: string
  label: string
}

type PathMatcher = (breadcrumb: Breadcrumb) => Partial<Breadcrumb>

export type UseBreadcrumbsOptions = {
  /**
   * включить главную страницу
   * @default true
   */
  rootEnabled?: boolean
  /**
   * переопределяет отображаемый лейбл хлебной крошки
   * @default undefined
   */
  matcher?: PathMatcher
  /**
   * указывает начало хлебных крошек
   * @typeParam string - path name
   * @typeParam number - path index
   * @default undefined
   */
  startsWith?: number | string
  /**
   * указывает конец хлебных крошек
   * @typeParam string - path name
   * @typeParam number - path index
   * @default undefined
   */
  endsWith?: number | string
  /**
   * фильтрация хлебных крошек
   * @param breadcrumb
   * @default undefined
   */
  filter?: (breadcrumb: Breadcrumb) => boolean
}
