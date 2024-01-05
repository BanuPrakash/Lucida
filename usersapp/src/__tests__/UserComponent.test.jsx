import { fireEvent, render, screen } from '@testing-library/react';
import UserComponent from '../components/UserComponent';

let mockUser = {
    "id": 141,
    "name": "Harry",
    "email": "harry@gmail.com"
}

let callback = jest.fn(); // mock callback function


it("<UserComponent /> unit testing renders", () => {
    render(<UserComponent
        delEvent={(id) => callback(id)}
        user={mockUser}  />);

    let nameElem = screen.queryByText(/Harry/);
    expect(nameElem).toBeInTheDocument();
      
});

it("<UserComponent /> unit testing", () => {
    render(<UserComponent
        delEvent={(id) => callback(id)}
        user={mockUser}  />);

    let btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith(141);
});