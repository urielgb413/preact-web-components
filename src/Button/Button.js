import { h } from 'preact'
import register from 'preact-custom-element'

const Button = ({ children }) => <button>{children}</button>

register(Button, 'as-button', ['children'])
export default Button
