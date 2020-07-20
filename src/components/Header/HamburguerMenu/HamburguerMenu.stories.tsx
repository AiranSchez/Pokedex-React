import * as React from 'react';
import {HamburguerMenu} from './HamburguerMenu';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'HamburguerMenu',
  decorators: [withA11y],
};

export const withText = () => <HamburguerMenu />;
