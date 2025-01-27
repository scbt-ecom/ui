import { type FieldValues } from 'react-hook-form'
import { ComponentProvider, type ComponentProviderProps } from './ComponentProvider'
import { FormProvider, type FormProviderProps } from './FormProvider'

export class ComponentFactory<Props extends {}> {
  constructor(private component: React.FC<Props>) {}

  getComponentProvider(props: Omit<ComponentProviderProps<Props>, 'Component'>): React.JSX.Element {
    return <ComponentProvider {...props} Component={this.component} />
  }

  getFormProvider<TFieldValues extends FieldValues>(
    props: Omit<FormProviderProps<Props, TFieldValues>, 'renderComponent'>
  ): React.JSX.Element {
    const { args, ...restProps } = props
    return (
      <FormProvider<Props, TFieldValues>
        {...restProps}
        args={args}
        // TODO: я не смог победить тайпскрипт, если получится можете пофиксить
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        renderComponent={(control, componentProps) => <this.component {...componentProps} control={control} />}
      />
    )
  }
}
