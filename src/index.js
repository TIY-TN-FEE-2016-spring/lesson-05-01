'use strict';

import RepoView from 'repo-view'
import getRepos from 'fetch-repos'

function closeIssue(id, description) {
  const token = `d062014c3d3f054981bda6331af835e25588098f`;
  const headers = new Headers({ "Authorization": `token ${token}` })

  fetch(`https://api.github.com/repos/TIY-TN-FEE-2016-spring/gitbook/issues/${id}`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      state: 'close',
      body: description
    })
  })
}

export default function() {
  // const reqBody = {
  //   state: `closed`
  // };
  //
  // const str = JSON.stringify(reqBody);

  // console.log("body", reqBody.length, "str", str, str.length)
  // closeIssue(1, "Close from a function")
  // closeIssue(2, "Also closed this one")

  const body = document.querySelector(`body`);

  const repoPromise = getRepos();

  repoPromise.then(function(data) {
    data.forEach(function(x) {
      console.log(x)

      const myRepo = {
        title: x.name,
        updated: x.updated_at,
        stars: x.stargazers_count
      }

      new RepoView(myRepo, body);
    })
  })
}
