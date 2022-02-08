import Header from './Components/Header'
import './App.css';
import Footer from './Components/Footer';
import Content from './Components/Content';

import VoteButton from './Components/VoteButton';
import {useCookies} from 'react-cookie'
import Cookies from 'universal-cookie';
import {Fragment, useState} from 'react'

function App() {

    const cookies = new Cookies();
    const [jokesContentId,setJokesContentId] = useState(()=>{
      if(cookies.get('lastVote')){
        return Number(cookies.get('lastVote'))+1
      }
      return 0;
    })

    
  const HandleVote=(JCI,isFunny)=>{
    if(data[jokesContentId].joke==''){alert("That's all the jokes for today! Come back another day!");return}
    isFunny?cookies.set(JCI,true):cookies.set(JCI,false);
    cookies.set('lastVote',JCI);
   
    setJokesContentId(jokesContentId+1)
  }


  return (
    
    <div className="App">
      <Header/>
      <Content title={data[jokesContentId].joke}/>
      <div className='flex-button'>
      <VoteButton className='funny' onClick={()=>HandleVote(jokesContentId,true)} title='This is funny!'/>
      <VoteButton className='notfunny' onClick={()=>HandleVote(jokesContentId,false)} title='This is not funny!'/>
      </div>
      <Footer/>
    </div>
  );
}

const data = [
  {
    joke: <p>A child asked his father, "How were people born?"<br/>
      So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."<br/>
      The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."<br/>
      The child ran back to his father and said, "You lied to me!"<br/>
      His father replied, "No, your mom was talking about her side of the family."</p>,
    jci: '0'
    
  },
  {
    joke: <p>Teacher: "Kids,what does the chicken give you?"<br/>
      Student: "Meat!"<br/>
      Teacher: "Very good! Now what does the pig give you?"<br/>
      Student: "Bacon!"<br/>
      Teacher: "Great! And what does the fat cow give you?"<br/>
      Student: "Homework!"</p>,
    jci: '1'
  },
  {
    joke: <p>The teacher asked Jimmy, "Why is your cat at school today Jimmy?"<br/>
      Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"
    </p>,
    jci: '2'
    
  },
  {
    joke: <p>A housewife, an accountant and a lawyer were asked "How much is 2+2?"<br/>
      The housewife replies: "Four!".<br/>
      The accountant says: "I think it's either 3 or 4.  Let me run those figures through my spreadsheet one more time."<br/>
      The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"</p>,
    jci: '3'
  },
  {
    joke: '',
    jci: '4'
  }
]

export default App;
