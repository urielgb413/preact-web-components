import { h } from 'preact'
import { Loader } from 'preact-web-components'
import style from './style.css'

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <Loader />
  </div>
)

export default Home
