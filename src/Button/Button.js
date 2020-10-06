import { h } from 'preact'
import register from 'preact-custom-element'

const handleButtonClick = (e) => {
  console.log('hello from', e.target.innerText)
}

const Button = ({ label = 'Default' }) => (
  <button onClick={handleButtonClick}>{label}</button>
)

register(Button, 'as-button', ['name'])
export default Button
