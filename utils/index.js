import SITE_URL, { show_per_page }  from "../config";

export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date)
}

export function slugify(title) {
  return title.toLowerCase().trim().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

export function ImageUrl(url) {
  
  return SITE_URL + url
  
}

//  12

export function pageCount(number) {
  
  return Math.ceil(number/show_per_page);
  
}