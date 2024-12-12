// import axios from 'axios';


// const baseurl = 'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/'

// const headers =  {
//     headers: {
//       Accept: '*/*',
//       Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczMzU0OTk2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzMzNDYzNTY1fQ.zRKhQl52SfA91f_CzF8YRbGWJTCNKoJUMwRrwPerFMep1I3r6zXFvhCjniXqTaku_GkbgIyIKm0_edb0WSnhog',
//       'Access-Control-Allow-Origin': '*', 
//     },
//   }



//  export const fetchComment = async () => {
//     try {
//       const response = await axios.get(`${baseurl}api/user-comments/10`, headers);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.message || 'Error fetching comments');
//     }
//   };