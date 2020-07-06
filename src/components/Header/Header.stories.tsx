import * as React from 'react';
import {Header} from './Header';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Header',
  decorators: [withA11y],
};

export const withText = () => <Header />;
