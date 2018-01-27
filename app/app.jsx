import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

/* Import Components */
import Cards from './components/Cards'
import Card from './components/Card'
import About from './components/About'

const cards = [
  // Kindergarten sight words
  // http://wdaes-sfusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1390123067395
  ['一', 'one', 'jat1'],
  ['二', 'two', 'ji6'],
  ['三', 'three', 'saam1'],
  ['四', 'four', 'sei3'],
  ['五', 'five', 'ng5'],
  ['六', 'six', 'luk6'],
  ['七', 'seven', 'cat1'],
  ['八', 'eight', 'baat3'],
  ['九', 'nine', 'gau2'],
  ['十', 'ten', 'sap6'],
  ['大', 'big', 'daai6'],
  ['中', 'medium', 'mui4'],
  ['小', 'small', 'siu2'],
  ['上', 'up', 'seong2'],
  ['天', 'sky', 'tin1'],
  ['日', 'day', 'jat6'],
  ['月', 'moon/month', 'jyut6'],
  ['星', 'star', 'sing1'],
  ['山', 'mountain', 'saan1'],
  ['水', 'water', 'seoi2'],
  ['火', 'fire', 'fo2'],
  ['石', 'rock', 'sek6'],
  ['木', 'wood', 'muk6'],
  ['雨', 'rain', 'jyu5'],
  ['人', 'person', 'jan4'],
  ['口', 'mouth', 'hau2'],
  ['耳', 'ear', 'ji5'],
  ['手', 'hand', 'sau2'],
  ['牙', 'teeth', 'ngaa4'],
  ['心', 'heart', 'sam1'],
  ['男', 'man', 'naam4'],
  ['女', 'woman', 'neoi5'],
  ['朋友', 'friend', 'pang4 jau5'],
  ['左', 'left', 'zo2'],
  ['右', 'right', 'jau5'],
  ['生', 'birth', 'saang1'],
  ['花', 'flower', 'faa1'],
  ['草', 'grass', 'cou2'],
  ['瓜', 'melon', 'gwaa1'],
  ['豆', 'bean', 'dau6'],
  ['果', 'fruit', 'guo3'],
  ['肉', 'meat', 'juk6'],
  ['白', 'white', 'baak6'],
  ['工', 'work', 'gung1'],
  ['去', 'go', 'heoi3'],
  ['早', 'early', 'zou2'],
  ['有', 'have', 'jau2'],
  ['牛', 'cow', 'ngau4'],
  ['羊', 'sheep', 'joeng4'],
  ['馬', 'horse', 'maa5'],
  ['車', 'car', 'ce1'],
  ['我', 'I/me', 'ngo5'],
  ['你', 'you', 'nei5'],
  ['的', 'belonging to', 'dik1'],
  ['今天', 'today', 'gam1'],
  ['他', 'he/him', 'taa1'],
  ['是', 'is', 'si6'],
  ['魚', 'fish', 'jyu4 jyu4'],
  ['明天', 'tomorrow', 'ming4'],
  ['和', 'and', 'wo4']
];

ReactDOM.render(
  <BrowserRouter>
    <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>CIS Flashcards</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to='/about'>
          <NavItem>
            About
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
    <div className="container">
      <Route exact path="/" render={ () => <Cards cards={ cards } /> } />
      <Route path="/about" component={About} />
      <Route
        path="/card/:id"
        render={ function (props) {
          const id = parseInt(props.match.params.id);
          return <Card card={ cards[id] }
        /> } }
      />
    </div>
    </div>
  </BrowserRouter>,
  document.getElementById('main')
);
