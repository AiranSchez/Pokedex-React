import * as React from 'react';
import {Footer} from './Footer';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Footer',
  decorators: [withA11y],
};

export const withText = () => <Footer />;
