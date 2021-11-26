import React from 'react';
import { render, screen , within } from '@testing-library/react';
import App from './App';
import App2 from './App';
import Pagination from './pagination';
import List from './List';
import mockAxios from "jest-mock-axios";

it('Ticket Requests content', () => {
  render(<App2 />);
  const linkElement = screen.getByText('Ticket Requests');
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});



describe("fetchUsers", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe("when API call is successful", () => {
    it("should return users list",() => {
      // given
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      mockAxios.get.mockResolvedValueOnce(users);

      // when
      const result = App2();

      // then
      expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:9000/test');
      expect(result).toEqual(users);
    });
  });

});






//for the pagination trying it here
const abc = {
postsperPage : 25,
totalPosts :100,
paginate : 1
}
it('pagination - number of pages to navigate', () =>{

  render(<Pagination{...abc}/>)

  const list = screen.getByRole("list", {
    name: 'pg',
  })
  const { getAllByRole } = within(list)
  const items = getAllByRole("listitem")
  const links = getAllByRole("link");
  expect(items.length).toBe(4)
  expect(items.length).toBe(4)
});

//listing the tickets
const props = {
  responseData : [{},{}],
  loading : true
  }
  it('loading...', () =>{
  
    render(<List{...props}/>)
  
    const heading = screen.getByRole("heading", {
      name: 'loading....',
    })
    expect(heading).toBeInTheDocument();
  });

  // const props_false = {
  //   responseData : [{
  //     id : 1,
  //     subject : "First one"
  //   },{
  //     id: 2,
  //     subject : "Second one"
  //   }],
  //   loading : false
  //   }
  // it('listing', () =>{
  
  //   render(<List{...props_false}/>)
  
  //   const req_lists = screen.getByRole("list", {
  //     name: 'ls',
  //   })
  // const { getAllByRole } = within(req_lists)
  // const items = getAllByRole("listitem")
  // expect(items.length).toBe(4)
  // });

