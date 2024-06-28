import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  constructor() { }
  posts=
  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
       
      "address": "Kulas Light",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": "Romaguera-Crona",
        
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email":  "Victor Plains",
        
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": "Deckow-Crist",
    
    },
        
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": "Douglas Extension",
       
     
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": "Romaguera-Jacobson",
      }   
    

]
}