export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string"
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options:{
        hotspot:true
      }
    },
    {
      name: "phoneNumber",
      title: "PHoneNumber",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{type: "reference", to: {type:"social"}}]
    }
  ],


 
}
