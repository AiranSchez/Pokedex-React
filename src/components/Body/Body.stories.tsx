import * as React from 'react';
import {Body} from './Body';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Content',
  decorators: [withA11y],
};

export const withText = () => <Body />;
