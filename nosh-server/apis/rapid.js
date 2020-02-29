// fetch(
//   "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?autoCorrect=false&pageNumber=1&pageSize=1&q=Taylor%20Swift&safeSearch=true",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
//       "x-rapidapi-key": "8facdb2319mshe8b03a08b86e172p154a5fjsn2e860721cfd6"
//     }
//   }
// )
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// axios({
//   method: "GET",
//   url:
//     "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
//   headers: {
//     "content-type": "application/octet-stream",
//     "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
//     "x-rapidapi-key": "8facdb2319mshe8b03a08b86e172p154a5fjsn2e860721cfd6"
//   },
//   params: {
//     autoCorrect: "false",
//     pageNumber: "1",
//     pageSize: "10",
//     q: "Taylor Swift",
//     safeSearch: "false"
//   }
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const rapidHost = "contextualwebsearch-websearch-v1.p.rapidapi.com";
const rapidKey = "8facdb2319mshe8b03a08b86e172p154a5fjsn2e860721cfd6";

module.exports = { rapidHost, rapidKey };

// export { rapidHost, rapidKey };
