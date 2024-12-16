import { type Meta, type StoryObj } from '@storybook/react'
import { mockDataCombine, mockDataEsia, mockDataMobileId } from './mocks'
import { AuthProvider } from '$/widgets'

const meta = {
  title: 'WIDGETS/AuthProvider',
  component: AuthProvider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex min-h-screen min-w-full items-center justify-center'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof AuthProvider>

export default meta

type Story = StoryObj<typeof AuthProvider>

export const EsiaAllProps: Story = {
  args: {
    mode: 'esia',
    ...mockDataEsia
  }
}
export const EsiaWithBadge: Story = {
  args: {
    mode: 'esia',
    ...mockDataEsia
  }
}
export const EsiaWithoutSubLink: Story = {
  args: {
    mode: 'esia',
    ...mockDataEsia,
    subLink: {
      text: '',
      href: ''
    }
  }
}

export const EsiaWithoutBadge: Story = {
  args: {
    mode: 'esia',
    ...mockDataEsia,
    badge: ''
  }
}

export const MobileIdAllProps: Story = {
  args: {
    mode: 'mobileId',
    ...mockDataMobileId
  }
}

export const MobileIdWithBadge: Story = {
  args: {
    mode: 'mobileId',
    ...mockDataMobileId
  }
}

export const MobileIdWithoutSubLink: Story = {
  args: {
    mode: 'mobileId',
    ...mockDataMobileId,
    subLink: {
      text: '',
      href: ''
    }
  }
}

export const MobileIdWithoutBadge: Story = {
  args: {
    mode: 'mobileId',
    ...mockDataMobileId,
    badge: ''
  }
}

export const CombineAllProps: Story = {
  args: {
    mode: 'combine',
    ...mockDataCombine
  }
}

export const CombineWithoutSubLink: Story = {
  args: {
    mode: 'combine',
    ...mockDataCombine,
    esiaConfig: {
      ...mockDataCombine.esiaConfig,
      subLink: {
        text: '',
        href: ''
      }
    },
    mobileIdConfig: {
      ...mockDataCombine.mobileIdConfig,
      subLink: {
        text: '',
        href: ''
      }
    }
  }
}

export const CombineWithoutBadge: Story = {
  args: {
    mode: 'combine',
    ...mockDataCombine,
    badge: ''
  }
}

export const SingleLoading: Story = {
  args: {
    mode: 'esia',
    ...mockDataEsia,
    isLoading: true
  }
}

export const CombineLoading: Story = {
  args: {
    mode: 'combine',
    ...mockDataCombine,
    esiaConfig: {
      ...mockDataCombine.esiaConfig,
      isLoading: true
    },
    mobileIdConfig: {
      ...mockDataCombine.mobileIdConfig,
      isLoading: true
    }
  }
}

export const CombineMobileIdLoading: Story = {
  args: {
    mode: 'combine',
    ...mockDataCombine,
    mobileIdConfig: {
      ...mockDataCombine.mobileIdConfig,
      isLoading: true
    }
  }
}
