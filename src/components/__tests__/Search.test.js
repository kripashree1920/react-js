import { fireEvent, render, screen } from "@testing-library/react"
import AppBody from "../AppBody"
import { MOCK_DATA } from "../../mocks/mockResList"
import { act } from "react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the body componenet with searchbtn",async()=>{
   await act(async()=>{
    render(
<BrowserRouter>
<AppBody/>
</BrowserRouter>
    )
   })

   const cardsbeforesearch = screen.getAllByTestId("restuarantCards")
   console.log(cardsbeforesearch.length);
   
   expect(cardsbeforesearch.length).toBe(11)
   const searchbtn = screen.getByRole('button',{name:'Search'});

   const searchInput = screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target: {value: "burger"}});
   fireEvent.click(searchbtn)
   const cardsaftersearch = screen.getAllByTestId("restuarantCards")
expect(cardsaftersearch.length).toBe(1)

   
   
});