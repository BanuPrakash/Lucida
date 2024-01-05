import { fireEvent, render, screen } from '@testing-library/react';
import UsersComponent from '../components/UsersComponent';
// test spec
it("<UsersComponent /> renders", () => {
    render(<UsersComponent />);
    //screen.debug();
    let btns = screen.getAllByRole('button');
    expect(btns.length).toBe(10);
});

it("<UsersComponent /> delete operation", () => {
    render(<UsersComponent />);
    let btns = screen.getAllByRole('button');
    // let btns:HTMLElement[] = screen.getAllByRole('button');
    fireEvent.click(btns[3]);
    btns = screen.getAllByRole('button');
    expect(btns.length).toBe(9);
});

it("<UsersComponent /> delete operation 2", () => {
    let { container } = render(<UsersComponent />);
    let btns = container.querySelectorAll('button');
    // let btns:HTMLElement[] = screen.getAllByRole('button');
    fireEvent.click(btns[3]);
    btns = screen.getAllByRole('button');
    expect(btns.length).toBe(9);
});