import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }
  
const Games = ({games}) => {
    return (
      <div>
        <h1>Welcome to the Gamez!</h1>
        {games.length > 0 && games.map(
          ({ _id, name = '', slug = '', thumbnail = "" }) =>
            slug && (
              <div key={_id}>
                <img
                    src={urlFor(thumbnail)
                        .width(50)
                        .url()}
                    alt={`${name}'s picture`}
                />
                <Link href="/game/[slug]" as={`/game/${slug.current}`}>
                  <a>{name}</a>
                </Link>{' '}
              </div>
            )
        )}
      </div>
    )
}

export async function getStaticProps() {
    const games = await client.fetch(groq`
      *[_type == "game"]
    `)
    return {
      props: {
        games
      }
    }
}

export default Games