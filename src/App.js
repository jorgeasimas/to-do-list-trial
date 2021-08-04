import CheckoutPage from "./components/table.component";
import "./App.css";
import Input from "./components/input.component";
import Header from "./components/header.component";

function App() {
  return (
      <div class="homepage">
        
        <div class="directory-menu">
          <Header>To-do-list APP</Header>
          <Input />
          
          <CheckoutPage />
        </div>
      </div>
    );
}

export default App;
