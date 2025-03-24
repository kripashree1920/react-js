
// import Header from "../Header";
// import "@testing-library/jest-dom";
// import { fireEvent, render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";

// it('should load login btn in header component',()=>{
//     render(
//     <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>//for link
    
// ) //here redux and link is used so need to wrap

// const btn = screen.getByRole('button')
// expect(btn).toBeInTheDOcument()
// })

// test("should change login to logout",()=>{
//     render(<Header/>)
//     const loginbutton = screen.getByRole("button",{name:'Login'})
//     fireEvent.click(loginbutton);
//     const logoutbutton = screen.getByRole('button',{name : 'Logout'})
//     expect(logoutbutton).toBeInTheDocument();
// })