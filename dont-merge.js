let targetBranch = document.querySelector('#partial-discussion-header .TableObject .TableObject-item--primary .commit-ref').textContent;
let mergeButton = document.querySelector('.btn-group-merge');

if (targetBranch !== 'master') {
    mergeButton.style.backgroundColor = "purple";
    mergeButton.style.color = "white";
}
