import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullImageWithText from "../components/fullimagewithtext"
import { navigate } from "gatsby"

 function encode(data){
   return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
 }

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]:  e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/',{
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      }),
    }).then(()=> navigate(form.getAttribute('action'))).catch((error) => alert(error))
  }

  render() {
    const data = this.props.data;
    return (
      <Layout>
        <SEO title="Contact" />
        <FullImageWithText
          imageInfo={{
            image: data.file,
            alt: 'Old letters wrapped in a bundle ',
            text: 'Contact',
          }}
          />
        <form
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact"/>
            <div hidden>
              <label>
                Don't fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-section">
              <label className="form-label" htmlFor={'name'}>
                Your name
              </label>
              <input
                className="form-input"
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
                />
            </div>
            

            <div className="form-section">
              <label className="form-label" htmlFor={'email'}>
                  Email
                </label>
                <input
                className="form-input"
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={true}
                />
            </div>


            <div className="form-section">
              <label className="form-label" htmlFor={'message'}>
                  Message
                </label>
                <textarea
                className="form-input-large"
                name={'message'}
                onChange={this.handleChange}
                id={'message'}
                required={true}
                />
            </div>


              <button className="form-button" type="submit">
                Send
              </button>
          </form>
      </Layout>
    )
  }
  
}

export const query = graphql`
  {
    file(relativePath: {eq: "letters-wrapped.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage
