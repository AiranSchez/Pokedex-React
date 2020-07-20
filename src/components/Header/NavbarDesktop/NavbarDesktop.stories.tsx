import * as React from 'react';
import {NavbarDesktop} from './NavbarDesktop';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'NavbarDesktop',
  decorators: [withA11y],
};

export const withText = () => <NavbarDesktop />;
