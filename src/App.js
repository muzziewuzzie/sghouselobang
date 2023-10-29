import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    </>
  );
}

export default withAuthenticator(App);
