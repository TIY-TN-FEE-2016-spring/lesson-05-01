export default function getRepos() {
  // [
  //   {
  //     title: "Assignments",
  //     updated: "3 days ago",
  //     stars: 3,
  //     forks: 10
  //   },
  //   {
  //     title: "Gitbook",
  //     updated: "4 days ago",
  //     stars: 5,
  //     forks: 20
  //   }
  // ]
  const requestPromise = fetch("https://api.github.com/orgs/TIY-TN-FEE-2016-spring/repos").
    then(response => response.json())

  return requestPromise
}
