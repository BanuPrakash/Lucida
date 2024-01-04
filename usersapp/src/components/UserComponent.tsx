import { Component, ReactNode } from "react";
import User from "../model/User";
type AppProps = {
    user: User,
    delEvent: (id:number) => void
}

export default function UserComponent({user, delEvent}:AppProps) {
    return (
        <div>
            Name : {user.name} <br />
            Email : {user.email} <br />
            <button onClick={() => delEvent(user.id) }>&times;</button>
        </div>
    );
}

// export default class UserComponent<AppProps, AppState> extends Component {
//     render(): ReactNode {
//             return (
//         <div>
//               Name : {this.props.user.name} <br />
//              Email : {user.email}
//          </div>
//      );
//     }
// }