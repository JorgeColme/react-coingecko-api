import Navbar from './components/navbar';
import {Provider} from 'react-redux';
import UserList from './components/userList';
import store from './store'

function App() {
  return (
   <Provider store={store}>
      <Navbar />
      <UserList />
   </Provider>
  );
}

export default App;
