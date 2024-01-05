import { Component, ReactNode } from "react";
import User from "../model/User";
type AppProps = {
    user: User,
    delEvent: (id: number) => void
}

type AppState = {}

// export default function UserComponent({user, delEvent}:AppProps) {
//     return (
//         <div>
//             Name : {user.name} <br />
//             Email : {user.email} <br />
//             <button onClick={() => delEvent(user.id) }>&times;</button>
//         </div>
//     );
// }

export default class UserComponent extends Component<AppProps, AppState> {
    render(): ReactNode {
        return (
            <div className="card">
                Name : {this.props.user.name} <br />
                Email : {this.props.user.email} <br />
                <button onClick={() => this.props.delEvent(this.props.user.id)}>&times;</button>
            </div>
        );
    }
}