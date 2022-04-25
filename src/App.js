import './App.css';
import Nav from './Views/Nav';
import { useState, useEffect } from 'react'
import Covid from './Views/Covid';
import Todo from './Views/Todos';
import {CountDown, NewCountDown} from './Views/CountDown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Views/Blog';
import DetailBlog from './Views/DetailBlog';
import AddNewBlog from './Views/AddNewBlog';
import NotFound from './Views/NotFound';
import YoutubeSearch from './Views/YoutubeSearch';

function App() {

  let [name, setName] = useState('');
  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Watching TV', type: 'Mike'},
    {id: 'todo2', title: 'Reading book', type: 'John'},
    {id: 'todo3', title: 'Doing Homework', type: 'John'},
    {id: 'todo4', title: 'Playing game', type: 'Jack'}
  ])
  // const [address, setAddress] = useState('')
  
  useEffect(() => {
    console.log('use effect');
  },[])

  const handleEventClick = (e) => {
    e.preventDefault()
    if (!name) {
      alert('please input your task')
      return
    }
    // console.log('>>> Click me')
    let newTodo = {
      id: Math.floor((Math.random()*100000)+1), 
      title: name,
      type: 'Jacky'
    }
    setTodos([...todos, newTodo])
    setName("")
  }

  const handleOnchange = (e) => {
    setName(e.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    // alert('Times up')
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Switch>
          <Route exact path="/">
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown onTimesup={onTimesup} />
            <span>---------------------</span>
            <NewCountDown onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'All todos'}
              deleteDataTodo={deleteDataTodo}
            />
            <input type="text" value={name} onChange={(event) => handleOnchange(event)} />
            <button type="button" onClick={(event) => handleEventClick(event)}>Add Todo</button>
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
          <Route path="/youtube">
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
