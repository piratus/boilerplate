import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, boolean, text } from '@kadira/storybook-addon-knobs'
import Button from './Button'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('with text', () => (
  <Button
    disabled={ boolean('disabled', false) }
    value={ text('value', 'some value') }
    onClick={ action('clicked') }
  >
    {text('Label', 'Hello Button')}
  </Button>
))

stories.add('with icon and text', () => (
  <Button
    disabled={ boolean('disabled', false) }
    value={ text('value', 'some value') }
    onClick={ action('clicked') }
  >
    &rarr; {text('Label', 'Hello Button')}
  </Button>
))
