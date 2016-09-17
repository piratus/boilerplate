import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import <%= pascalEntityName %> from './<%= pascalEntityName %>'

const stories = storiesOf('<%= pascalEntityName %>', module)

stories.addDecorator(withKnobs)

stories.add('with value', () => (
  <<%= pascalEntityName %>
    onClick={ action('click') }
    propName={ text('propName', 'some value') }
  />
))
