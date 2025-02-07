import { CollectionConfig } from "payload";
import { date } from "payload/shared";

export const todos: CollectionConfig ={
    slug:"todos",
access:{
    read:()=>true,
    create:()=>true,
    update:()=>true,
    delete:()=>true,

},
    fields:[
      {
        name: "title", // required
        type: "text", // required
       
        required: false,
      },
      {
         
           name: "completed", // required
           type: "checkbox", // required
         
           defaultValue: false,
         
      },
      {
        name: "description", // required
        type: "textarea", // required
      
      },
      {
        name: "media", // required
        type: "upload", // required
        relationTo:'media',  //required eg:media
       
      },
      
      
      {
        name: "createdAt", // required
        type: "date", // required
        
        defaultValue: new Date(),
           
      },
      {
        name: "updatedAt", // required
        type: "date", // required
    
        defaultValue: new Date(),
            
      },
      
        
    ],
}
