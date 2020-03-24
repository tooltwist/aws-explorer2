// import * as axios from 'axios'

// console.log(`Initializing axios in it's plugin`)
// let options = {}
// // The server-side needs a full url to works
// if (process.server) {
//   options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3001}`
// }

// console.log(`options isz:`, options)
// export default axios.create(options)


export default function ({ $axios, redirect }) {
  // $axios.onRequest(config => {
  //   console.log('Making request to ' + config.url)
  // })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

    // // Create a custom axios instance
    // const api = $axios.create({
    //   headers: {
    //     common: {
    //       Accept: 'text/plain, */*'
    //     }
    //   }
    // })
  
    // // Set baseURL to something different
    // api.setBaseURL('https://my_api.com')
  
    // // Inject to context as $api
    // inject('api', api)
  
}