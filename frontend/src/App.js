import { Routing } from './Routes';
import Registration from './screens/registration/registration';
import Login from './screens/login/login';

export const App = () => {
    return (
        <div className="page-container">
            <Registration/>
            <br/>
            <br/>
            <Login></Login>
            <Routing />
        </div>
    );
}