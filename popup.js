window.onload = () => {
    chrome.storage.sync.get((data) => {
        document.querySelector("#main-checkbox").checked = data.main_checkbox;
        document.querySelector("#sidebar-checkbox").checked = data.sidebar_checkbox;
        document.querySelector("#last-checkbox").checked = data.last_checkbox;
        document.querySelector("#auto-checkbox").checked = data.auto_checkbox;
        document.querySelector("#comment-checkbox").checked = data.comment_checkbox;
    })
    document.querySelector("#main-checkbox").onchange = () => {changeCheckbox()}
    document.querySelector("#sidebar-checkbox").onchange = () => {changeCheckbox()}
    document.querySelector("#last-checkbox").onchange = () => {changeCheckbox()}
    document.querySelector("#auto-checkbox").onchange = () => {changeCheckbox()}
    document.querySelector("#comment-checkbox").onchange = () => {changeCheckbox()}
}

function changeCheckbox() {
    let main = document.querySelector("#main-checkbox").checked;
    let sidebar = document.querySelector("#sidebar-checkbox").checked;
    let last = document.querySelector("#last-checkbox").checked;
    let auto = document.querySelector("#auto-checkbox").checked;
    let comment = document.querySelector("#comment-checkbox").checked;
    chrome.storage.sync.set({
        main_checkbox: main,
        sidebar_checkbox: sidebar,
        last_checkbox: last,
        auto_checkbox: auto,
        comment_checkbox: comment
    })
}
