import { render, screen , within } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {configure } from 'enzyme';
import App2 from './App';
import Pagination from './pagination';
import IndividualData from './Individualdata';
configure({adapter: new Adapter()});

it('Ticket Requests content', () => {
  render(<App2 />);
  const linkElement = screen.getByText('Ticket Requests');
  expect(linkElement).toBeInTheDocument();
});

describe("Individual Data Component test", () => {
const props_ind = {
  data : [{
    subject : 'Hello',
    description : 'Desc',
    priority : 'high',
    status : 'open'
  },{
    subject : 'Hello2',
    description : 'Desc2',
    priority : 'high2',
    status : 'open2'
  }],
  home : false,
  index : 1,
  }
  it('Home button must be present and be enabled', () =>{
  
    render(<IndividualData{...props_ind}/>)
    
    const button = screen.getByText(/HOME/i);

    expect(button).toBeInTheDocument();

    expect(button).not.toBeDisabled();
  });

  it('Individual req contents must be defined', () =>{
  
    render(<IndividualData{...props_ind}/>)
    
    const subject_ele = screen.getByText(/Subject :/i);
    const desc_ele = screen.getByText(/Description :/i);
    const priority_ele = screen.getByText(/Priority :/i);
    const status_ele = screen.getByText(/Status :/i);

    expect(subject_ele).toBeDefined();
    expect(desc_ele).toBeDefined();
    expect(priority_ele).toBeDefined();
    expect(status_ele).toBeDefined();

  });

  it('Individual req contents must equal the values retrieved', () =>{
  
    render(<IndividualData{...props_ind}/>)
    
    const act_sub = props_ind.data[props_ind.index-1].subject;
    const act_desc = props_ind.data[props_ind.index-1].description;
    const act_prio = props_ind.data[props_ind.index-1].priority;
    const act_stat = props_ind.data[props_ind.index-1].status;
    
    const subject_ele = screen.getByText(/Subject :/i).textContent;
    const desc_ele = screen.getByText(/Description :/i).textContent;
    const priority_ele = screen.getByText(/Priority :/i).textContent;
    const status_ele = screen.getByText(/Status :/i).textContent;

    expect(subject_ele).toBe('Subject : '+act_sub);
    expect(desc_ele).toBe('Description : '+act_desc);
    expect(priority_ele).toBe('Priority : '+act_prio);
    expect(status_ele).toBe('Status : '+act_stat);

  });
});

//pagination component
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
  expect(links.length).toBe(4)
});
