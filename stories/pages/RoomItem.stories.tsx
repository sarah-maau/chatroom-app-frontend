import React, { ComponentProps } from 'react'

import { ComponentMeta, Story } from '@storybook/react'
import RoomItem from '../../components/room/RoomItem'

export default {
  title: 'RoomItem',
  component: RoomItem
} as ComponentMeta<typeof RoomItem>

const Template: Story<ComponentProps<typeof RoomItem>> = ({title, key, disabled, nbOfProfiles,name, onClick}) =>
  <RoomItem title={title} key={key} disabled={disabled} nbOfProfiles={nbOfProfiles} name={name} onClick={onClick} />

export const Default = Template.bind({})

Default.decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  )
]

Default.args = {
  title: 'Join the room Inspecteur Derik',
  name: 'Inspecteur Derik',
  disabled: false,
  nbOfProfiles: 3,
  onClick: () => console.log('click')
}
