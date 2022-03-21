function addingEventListener(e) {
    const input = document.getElementById('input')
    input.addEventListener(e, () => input.addEventListener())
}
