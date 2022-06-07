import  { show_per_page }  from "../config";

//  array sortByDate
export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date)
}

// slugify the title 
export function slugify(title) {
  return title.toLowerCase().trim().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

// count the page number
export function pageCount(number) {
  
  return Math.ceil(number/show_per_page);
  
}