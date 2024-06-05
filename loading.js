function showLoading() {
    const loading = document.createElement('div');
    loading.classList.add('loading');

    const label = document.createElement('label');
    label.innerText = 'Loading...';

    loading.appendChild(label);

    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.getElementsByClassName('loading');
    if (loading.length) {
        loading[0].remove();
    }
}