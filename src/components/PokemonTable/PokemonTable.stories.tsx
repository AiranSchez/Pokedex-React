import * as React from 'react';
import {PokemonTable} from './PokemonTable';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'PokemonTable',
  decorators: [withA11y],
};

export const withText = () => <PokemonTable />;
