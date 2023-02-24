import {  StoryObj }  from "@storybook/react"
import { SignIn } from "./SignIn"
import { expect } from '@storybook/jest';
import { rest } from "msw"
import { within, userEvent, waitFor } from '@storybook/testing-library';


export default {
    title: 'Pages/SignIn',
    component: SignIn,
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
}

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)


        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'marcosvinicius@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*******'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
    }
}
