import '../../styles/globals.css'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'


const client = new ApolloClient({
    uri: "http://localhost:3333"
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
