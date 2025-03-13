import { ResponsiveContainer } from '$/shared/ui'

export const App = () => {
  return (
    <div className='my-40 flex flex-col gap-20'>
      <ResponsiveContainer>
        <h2 className='desk-title-bold-s text-color-tetriary'>
          use <span className='desk-title-bold-s text-color-primary-default'> npm run start </span> for run storybook
        </h2>
      </ResponsiveContainer>
    </div>
  )
}
