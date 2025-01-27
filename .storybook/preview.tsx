import { RootProvider } from '../src/app/providers'
import '../lib/shared/style.css'
import './reset.css'
import { STORYBOOK_VIEWPORTS } from '../src/configs/storybook.config'
import type { Preview } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview: Preview = {
  decorators: [
    (storyFn, context) => withConsole()(storyFn)(context),
    (Story) => (
      <RootProvider>
        <Story />
      </RootProvider>
    )
  ],

  parameters: {
    layout: 'fullscreen',

    viewport: {
      viewports: {
        ...STORYBOOK_VIEWPORTS,
        ...INITIAL_VIEWPORTS
      },
      defaultViewport: 'fullscreen'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
