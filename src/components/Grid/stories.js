import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';

// Import our component from this folder
import Grid from './Grid';

import theme from '../../style/theme';

storiesOf('Grid', module)
  .addDecorator(muiTheme([theme]))
  .add('Default', () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                {value}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  });
