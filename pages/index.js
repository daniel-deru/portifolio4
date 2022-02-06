import { HomeStyle } from './styled/index.styled'



import Text from '../components/Text'

export default function Home() {

  return (
    <HomeStyle>
      <div className='home-container'>

        <div>

          <div>
            <Text fontSize={"4em"}>Hi, I'm Daniel.</Text>
          </div>

          <div>
            <Text fontSize={"3em"} fill={"white"}>Welcome To My Portifolio. </Text>
          </div>

        </div>

        <div>
          <button className="cta">Check Out My Work</button>
        </div>

      </div>
    </HomeStyle>
  )
}
