

import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

// describe("contact us test cases grouped",()=>{


it("should Check if heading of contact us page is loaded",()=>{
    render(<Contact/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument(); //called Assertion

});

//1st way to show button
test("should Check if button of contact us page is loaded",()=>{
    render(<Contact/>)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument(); //called Assertion

});

//2nd way to check button
test("should Check if button of contact us page is loaded",()=>{
    render(<Contact/>)
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument(); //called Assertion

});

//placeholder

test("should check placeholder in contact component",()=>{
    render(<Contact/>)
    const placeholder = screen.getByPlaceholderText("Name")
    expect(placeholder).toBeInTheDocument()
})

//multiple input test -all

test("should check 2 inputs loaded in contact component",()=>{
    render(<Contact/>)
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
    // expect(inputBox.length).not.toBe(3); another way 

})

// });