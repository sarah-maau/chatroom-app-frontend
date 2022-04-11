import Document, { Html, Head, Main, NextScript } from 'next/document'
import CustomHead from '../components/layout/CustomHead'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <CustomHead />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
