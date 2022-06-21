import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Game = ({game}) => {
    const {
      name = 'Missing name',
      iframe,
      thumbnail
    } = game
    return (
      <article>
        <h1>{name}</h1>
        <img
            src={urlFor(thumbnail)
              .width(50)
              .url()}
            alt={`${name}'s picture`}
          />
          <div>
              <iframe src={iframe}></iframe>
          </div>
      </article>
    )
  }


const query = groq`*[_type == "game" && slug.current == $slug][0]{
    "name": name,
    iframe,
    thumbnail
  }`
  export async function getStaticPaths() {
    const paths = await client.fetch(
      groq`*[_type == "game" && defined(slug.current)][].slug.current`
    )
  
    return {
      paths: paths.map((slug) => ({params: {slug}})),
      fallback: true,
    }
  }
  
  export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const game = await client.fetch(query, { slug })
    return {
      props: {
        game
      }
    }
  }
  export default Game