import { ComponentProvider, type ComponentProviderProps } from './ComponentProvider'

export class ComponentFactory<Props extends {}> {
  private Component: React.FC<Props>

  constructor(component: React.FC<Props>) {
    this.Component = component
  }

  getComponentProvider(props: Omit<ComponentProviderProps<Props>, 'Component'>): React.JSX.Element {
    return <ComponentProvider {...props} Component={this.Component} />
  }
}
