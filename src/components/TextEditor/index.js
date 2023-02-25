import {Component} from 'react'

import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {
  BgContainer,
  Button,
  BodyContainer,
  TextContainer,
  Container,
  HrLine,
  TextArea,
  Button1,
  Button2,
  RowContainer,
} from './styleComponents'

class TextEditor extends Component {
  state = {weig: false, sty: false, under: false}

  onBold = () => this.setState(prev => ({weig: !prev.weig}))

  onSty = () => this.setState(prev => ({sty: !prev.sty}))

  onUnder = () => this.setState(prev => ({under: !prev.under}))

  renderBtn = () => {
    const {weig, sty, under} = this.state
    return (
      <Container>
        <li>
          <Button
            isBold={weig}
            type="button"
            data-testid="bold"
            onClick={this.onBold}
          >
            <VscBold size={25} />
          </Button>
        </li>
        <li>
          <Button1
            isItal={sty}
            type="button"
            data-testid="italic"
            onClick={this.onSty}
          >
            <GoItalic size={25} />
          </Button1>
        </li>
        <li>
          <Button2
            isUnder={under}
            type="button"
            data-testid="underline"
            onClick={this.onUnder}
          >
            <AiOutlineUnderline size={25} />
          </Button2>
        </li>
      </Container>
    )
  }

  render() {
    const {weig, sty, under} = this.state

    return (
      <BgContainer>
        <BodyContainer>
          <RowContainer>
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </RowContainer>
          <div>
            <TextContainer>
              {this.renderBtn()}
              <HrLine />

              <TextArea isBold={weig} isItal={sty} isUnder={under} />
            </TextContainer>
          </div>
        </BodyContainer>
      </BgContainer>
    )
  }
}
export default TextEditor
