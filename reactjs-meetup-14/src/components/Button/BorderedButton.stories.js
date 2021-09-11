import React from 'react';
import {Button} from "./Button";

// meta data 
export default {
    title: 'UI/Button/Bordered', //mandatory
    component:Button,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        children: 'Bordered Button',
        kind: "bordered",
        
    },
    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
          control: { type: 'select' }
        },
        kind: {
        options: ['filled', 'bordered'],
        control: "select"},  
    },
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    
}

export const Primary = Template.bind({})
Primary.args = {
    variant: "primary",
    
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: "secondary",
}

export const Success = Template.bind({})
Success.args = {
    variant: "success",
}

export const Warning = Template.bind({})
Warning.args = {
    variant: "warning",
}

export const Danger = Template.bind({})
Danger.args = {
    variant: "danger",
}

export const Info = Template.bind({})
Info.args = {
    variant: "info",
}

export const Light = Template.bind({})
Light.args = {
    variant: "light",
}

export const Dark = Template.bind({})
Dark.args = {
    variant: "dark",
}