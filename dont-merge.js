console.info('Dory enabled');

function colorButton() {
    const mergeButton = document.querySelector('.btn-group-merge');
    const targetBranch = document.querySelector('#partial-discussion-header .base-ref').textContent;

    console.info('[Dory] target branch: '  + targetBranch);

    if (targetBranch !== 'master') {
        mergeButton.style.backgroundColor = "purple";
        mergeButton.style.color = "white";
        mergeButton.style.backgroundImage = "none";
    }
}

var observer = new MutationObserver(function (mutations, me) {
    const mergeButton = document.querySelector('.btn-group-merge');

    if (mergeButton) {
        me.disconnect();
        colorButton();

        return;
    }
});

observer.observe(document.getElementById('discussion_bucket'), {
    childList: true,
    subtree: true
});
