import type { Meta, StoryObj } from '@storybook/react'
import { UserFeedback } from '$/widgets'

const meta = {
  title: 'WIDGETS/UserFeedback',
  component: UserFeedback,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  decorators: (Story) => {
    return (
      <div className='flex flex-col'>
        <div id='banner' className='desk-title-bold-l flex h-screen items-center justify-center bg-banner-lavender-300'>
          Banner
        </div>
        <div className='desk-title-bold-l flex h-screen items-center justify-center bg-banner-barvcray-300'>Advantages</div>
        {Story()}
        <div className='desk-title-bold-l flex h-screen items-center justify-center bg-banner-skyblue-300'>Footer</div>
      </div>
    )
  }
} satisfies Meta<typeof UserFeedback>

export default meta

type Story = StoryObj<typeof UserFeedback>

export const BaseViewAfterBannerAnd10sec: Story = {
  render: () => {
    const submitCallback = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 3000))

    return <UserFeedback submitCallback={submitCallback} />
  }
}
