export default class RepoView {
  constructor(repo, node) {
    this.repo = repo

    this.el = document.createElement(`div`);
    node.appendChild(this.el);

    this.render();
  }

  render() {
    this.el.innerHTML = `
      <h2>${this.repo.title}</h2>
      <p>${this.repo.updated}</p>
      <p>${this.repo.stars} stars</p>`
  }
}
