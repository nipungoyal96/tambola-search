
import React,{useState} from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [ no1, setNo1] = useState(0);  
  const [ ticketList1, setTicketList1 ] = useState();
  const [ no2, setNo2] = useState(0);  
  const [ ticketList2, setTicketList2 ] = useState();
  const [ no3, setNo3] = useState(0);  
  const [ ticketList3, setTicketList3 ] = useState();
  const [ no4, setNo4] = useState(0);  
  const [ ticketList4, setTicketList4 ] = useState();
  const [ no5, setNo5] = useState(0);  
  const [ ticketList5, setTicketList5 ] = useState();
  const [ no6, setNo6] = useState(0);  
  const [ ticketList6, setTicketList6 ] = useState();
  const [ no7, setNo7] = useState(0);  
  const [ ticketList7, setTicketList7 ] = useState();
  const [ no8, setNo8] = useState(0);  
  const [ ticketList8, setTicketList8 ] = useState();
  const [ no9, setNo9] = useState(0);  
  const [ ticketList9, setTicketList9 ] = useState();
  const [ no10, setNo10] = useState(0);  
  const [ ticketList10, setTicketList10 ] = useState();
  const tickets = [];
  const [ticketNo, setTicketNo] = useState();
  const [searchTicketList, setSearchTicketList ] = useState();
  const [ finalSelNums, setFinalSelNums ] = useState();
  const [earlysList, setEarlysList ] = useState();
  const [linesList, setLinesList ] = useState();
  const [housesList, setHousesList ] = useState();
  axios.get('http://localhost:3001/tickets').then((res) => tickets.push(res.data));
  console.log(tickets);
  const selNums = [];
  axios.get('http://localhost:3001/selectedNums').then((res) => selNums.push(res.data));
  const setNum = (setNo,event) => {
    setNo(event.target.value)
  }
  const checkNo = (num,tckList) => {
    const tckts = []
       tickets[0].map((ticket,i) => {

      for(let j=1;j<=3;j++){
    
        ticket[j].map((no) => {
          if(no == num ){
            tckts.push({[i]:j});
          }
          return j;
        })
      }
      return tckts
    })
    tckList(tckts);
    }
  const getTemp = () => {
    setFinalSelNums([...selNums[0],no1,no2,no3,no4,no5,no6,no7,no8,no9,no10])
  }  
  const checkEarly5 = () => {
    const earlys = [];
    tickets[0].map((ticket , i) => {
      let count = 0;
      for(let j=1; j<=3 ; j++){
        ticket[j].map((no) => {
        let found = finalSelNums.find(el => el == no)
        if(found){
          count = count + 1;
        }  
        return j;
      })
      }
      if(count >= 5){
        earlys.push(i+1);
      }
      return earlys
    })
    setEarlysList(earlys);
  }

  const checkFullHouse = () => {
    const houses = [];

    tickets[0].map((ticket , i) => {
      let flag = 1;
      for(let j=1; j<=3 ; j++){
        
        ticket[j].map((no) => {
        let found = finalSelNums.find(el => el == no)
        if(!found){
          flag = 0;
        }  
        return j;
        
      })
      
      }
      if(flag === 1){
        houses.push(i+1)
      }
      return houses
    })
    setHousesList(houses);

  }
  const searchTicket = () => {
    const numbrs = [];
    

      for(let j=1; j<=3 ; j++){
        tickets[0][parseInt(ticketNo) - 1][j].map((no) => {
        let found = finalSelNums.find(el => el == no) 
        if(found){
          numbrs.push({[j]:found})
        } 
      })   
    }
  setSearchTicketList(numbrs);
  }
  const checkLine = () => {
    const lines = [];

    tickets[0].map((ticket , i) => {
      
      for(let j=1; j<=3 ; j++){
        let flag = 1;
        ticket[j].map((no) => {
        let found = finalSelNums.find(el => el == no)
        
        if(!found){
          flag = 0;
        }  
        return j;
        
      })
      if(flag === 1){
        lines.push({[i]:j})
      }
      }
     
      return lines
    })
    setLinesList(lines);
  }
  return (
    <div className="App">
      <div>
      Enter no1:<input type="text" onChange={setNum.bind(this, setNo1 )} value={no1} name="name" />
      <button onClick={checkNo.bind(this,no1,setTicketList1)}>Done</button>
      {ticketList1 
      &&
      ticketList1.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no2:<input type="text" onChange={setNum.bind(this, setNo2 )} value={no2} name="name" />
      <button onClick={checkNo.bind(this,no2,setTicketList2)}>Done</button>
      {ticketList2 
      &&
      ticketList2.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no3:<input type="text" onChange={setNum.bind(this, setNo3 )} value={no3} name="name" />
      <button onClick={checkNo.bind(this,no3,setTicketList3)}>Done</button>
      {ticketList3
      &&
      ticketList3.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no4:<input type="text" onChange={setNum.bind(this, setNo4 )} value={no4} name="name" />
      <button onClick={checkNo.bind(this,no4,setTicketList4)}>Done</button>
      {ticketList4 
      &&
      ticketList4.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no5:<input type="text" onChange={setNum.bind(this, setNo5 )} value={no5} name="name" />
      <button onClick={checkNo.bind(this,no5,setTicketList5)}>Done</button>
      {ticketList5 
      &&
      ticketList5.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no6:<input type="text" onChange={setNum.bind(this, setNo6 )} value={no6} name="name" />
      <button onClick={checkNo.bind(this,no6,setTicketList6)}>Done</button>
      {ticketList6 
      &&
      ticketList6.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no7:<input type="text" onChange={setNum.bind(this, setNo7 )} value={no7} name="name" />
      <button onClick={checkNo.bind(this,no7,setTicketList7)}>Done</button>
      {ticketList7
      &&
      ticketList7.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no8:<input type="text" onChange={setNum.bind(this, setNo8 )} value={no8} name="name" />
      <button onClick={checkNo.bind(this,no8,setTicketList8)}>Done</button>
      {ticketList8
      &&
      ticketList8.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no9:<input type="text" onChange={setNum.bind(this, setNo9 )} value={no9} name="name" />
      <button onClick={checkNo.bind(this,no9,setTicketList9)}>Done</button>
      {ticketList9 
      &&
      ticketList9.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      Enter no10:<input type="text" onChange={setNum.bind(this, setNo10 )} value={no10} name="name" />
      <button onClick={checkNo.bind(this,no10,setTicketList10)}>Done</button>
      {ticketList10 
      &&
      ticketList10.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )
      }
      </div>
      <div>
      <hr/>
      <button onClick={getTemp}>DONE</button>
      </div>
      <div>
        <hr/>
      <button onClick={checkEarly5}>Check Early 5</button>
      {earlysList 
      &&
      earlysList.map((list,id)=>
        <div key={id}>
         Ticket No  {list}
        </div>
      )}
      </div>
      <div>
        <hr/>
      <button onClick={checkLine}>Check Line</button>
      {linesList 
      &&
      linesList.map((list,id)=>
        <div key={id}>
         Ticket No  {parseInt(Object.keys(list)) + 1} : Line No {Object.values(list)}
        </div>
      )}
      </div>

      <div>
        <hr/>
      <button onClick={checkFullHouse}>Check Full House</button>
      {housesList 
      &&
      housesList.map((list,id)=>
        <div key={id}>
         Ticket No  {list}
        </div>
      )}
      </div>

      <div>
        <hr/>
      Enter ticket no :<input type="text" onChange={setNum.bind(this, setTicketNo )} value={ticketNo} name="name" />
      <button onClick={searchTicket}>Done</button>
      {searchTicketList
      &&
      searchTicketList.map((list,id)=>
        <div key={id}>
         Line No  {Object.keys(list) } :  {Object.values(list)}
        </div>
      )
      }
      </div>

    </div>
  );
}

export default App;
