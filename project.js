
async function tabApi() {
    const tabDetails = await fetch("https://lms.navaxcollege.com/exam.php");
    const titleTab = document.querySelector(".tab-titles");
    const bodyTab = document.querySelector(".tab-bodies");

    const tabData = await tabDetails.json();

     console.log(tabData);

    for (const tab of tabData.data.tabs) {


        let titleTags = document.createElement("h2");
        titleTags.innerText = tab.title.length > 8 ? tab.title.slice(0,8)+'...' : tab.title;
        titleTab.append(titleTags);

        let tabBodies = document.createElement("div");
        for (let bodies of tab.body) {
            let pTags = document.createElement("p");
            pTags.innerText = bodies.substring(6).replace("-", "");

            tabBodies.append(pTags);
        }

        bodyTab.append(tabBodies);

        if (tab.is_active === true) {
            bodyTab.firstElementChild.classList.add("active");
            titleTab.firstElementChild.classList.add("active");
        }

        titleTags.onclick = () => {
            clearActive()
            titleTags.classList.add("active");
            tabBodies.classList.add("active");
        }
    }
}

function clearActive() {
    const body = document.querySelectorAll(".tab-bodies div");
    const title = document.querySelectorAll(".tab-titles h2");
    body.forEach((item)=>item.classList.remove('active'));
    title.forEach((item)=>item.classList.remove('active'));
}

tabApi();