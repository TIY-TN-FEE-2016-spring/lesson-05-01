'use strict';

import RepoView from 'repo-view'

const repos = [
  {
    title: "Assignments",
    updated: "3 days ago",
    stars: 3,
    forks: 10
  },
  {
    title: "Gitbook",
    updated: "4 days ago",
    stars: 5,
    forks: 20
  }
]

export default function() {
  const body = document.querySelector(`body`);

  // 1
  // repos.forEach((repo) => new RepoView(repo, body))

  // 2
  // new RepoView(repos[0], body);
  // new RepoView(repos[1], body);

  // 3
  repos.forEach(function(repo) {
    new RepoView(repo, body);
  })
}
