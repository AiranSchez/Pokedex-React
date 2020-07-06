import * as React from 'react';
import {Content} from './Content';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Content',
  decorators: [withA11y],
};

export const withText = () => <Content />;
