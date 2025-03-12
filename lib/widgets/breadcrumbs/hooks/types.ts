export type Breadcrumb = {
  id: string
  index: number
  path: string
  label: string
}

type PathMatcher = (breadcrumb: Breadcrumb) => string

export type UseBreadcrumbsOptions = {
  /**
   * переопределяет отображаемый лейбл хлебной крошки
   */
  matcher?: PathMatcher
  /**
   * указывает начало хлебных крошек
   * @typeParam string - path name
   * @typeParam number - path index
   */
  startsWith?: number | string
  /**
   * указывает конец хлебных крошек
   * @typeParam string - path name
   * @typeParam number - path index
   */
  endsWith?: number | string
  /**
   * фильтрация хлебных крошек
   * @param breadcrumb
   */
  filter?: (breadcrumb: Breadcrumb) => boolean
}
