import RestaurantList from '../components/RestaurantList'
import Container from '../components/styled/Container'
import Cover from '../components/Cover'

export default function Home({ restaurants }) {
  return <Cover />
}

// export async function getStaticProps() {
//   const response = await fetch('https://restaurant-api.dicoding.dev/list')
//   const { restaurants } = await response.json()

//   return {
//     props: {
//       restaurants,
//     },
//   }
// }
