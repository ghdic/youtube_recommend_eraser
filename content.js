console.log(window.location.href)
window.onload = () => {
    chrome.storage.sync.get((data) => {
        var main = data.main_checkbox !== undefined ? data.main_checkbox: true;
        var sidebar = data.sidebar_checkbox !== undefined ? data.sidebar_checkbox: true;
        var last = data.last_checkbox !== undefined ? data.last_checkbox: true;
        var auto = data.auto_checkbox !== undefined ? data.auto_checkbox: true;
        var comment = data.comment_checkbox !== undefined ? data.comment_checkbox: true;

        var main_content = document.querySelector("#primary > ytd-rich-grid-renderer");
        var sidebar_content = document.querySelector("#secondary");
        var progress_bar = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar")
        var auto_content = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button:nth-child(1) > div > div");
        var comment_content = document.querySelector("#comments");
        


        if(main && main_content) {
            main_content.style.display = "none";
        }

        if(sidebar && sidebar_content) {
            sidebar_content.style.display = "none";
            sidebar_content.remove();
        }

        if(last && progress_bar) {
            var last_content_1 = document.querySelector("#movie_player > div.ytp-ce-element.ytp-ce-channel.ytp-ce-channel-this.ytp-ce-bottom-left-quad")
            var last_content_2 = document.querySelector("#movie_player > div.ytp-ce-element.ytp-ce-video.ytp-ce-bottom-left-quad")
            var last_content_3 = document.querySelector("#movie_player > div.ytp-ce-element.ytp-ce-video.ytp-ce-bottom-right-quad")
            
            if(last_content_1) {
                last_content_1.style.display = "none";
            }
            if(last_content_2) {
                last_content_2.style.display = "none";
            }
            if(last_content_3) {
                last_content_3.style.display = "none";
            }

            let progress = setInterval(() => {
                if(parseInt(progress_bar.getAttribute("aria-valuemax")) - 10 <= parseInt(progress_bar.getAttribute("aria-valuenow"))){
                    last_content2_none(progress);
                }
            }, 1000)
        }

        if(auto && auto_content) {
            if(auto_content.getAttribute("aria-checked") === "true") {
                document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button:nth-child(1)").click();
            }
        }

        if(comment && comment_content) {
            comment_content.remove();
        }
    })
}

function last_content1_none() {
    var last_content_1 = document.querySelector("#movie_player > div.ytp-ce-element.ytp-ce-channel.ytp-ce-channel-this.ytp-ce-element-show.ytp-ce-bottom-left-quad.ytp-ce-size-853")
    var last_content_2 = document.querySelector("#movie_player > div.ytp-ce-element.ytp-ce-video.ytp-ce-element-show.ytp-ce-bottom-left-quad.ytp-ce-size-853")
    var last_content_3 = document.querySelector("#movie_player > div.ytp-ce-element.ytp-ce-video.ytp-ce-element-show.ytp-ce-bottom-right-quad.ytp-ce-size-853")
    
    if(last_content_1) {
        last_content_1.style.display = "none";
    }
    if(last_content_2) {
        last_content_2.style.display = "none";
    }
    if(last_content_3) {
        last_content_3.style.display = "none";
    }
}

function last_content2_none(progress) {
    var last_content = document.querySelector("#movie_player > div.html5-endscreen.ytp-player-content.videowall-endscreen");
    if(last_content) {
        last_content.remove();
        clearInterval(progress);
        console.log("erase")
    }
}

