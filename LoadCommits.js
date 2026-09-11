const username = "NatdanaiPuthom";
const repository = "chashack-starter";

// Choose which commits to display
const timelineCommits = [
    {
        title: "Projektet startades",
        commit: "37e0516"
    },
    {
        title: "Vi skapade hemsidan",
        commit: "ad5785b"
    },
    {
        title: "Vi lade till Tisha",
        commit: "31c56d9"
    },
    {
        title: "Vi lade till sidfot",
        commit: "c58cde5"
    },
     {
        title: "Vi lade till klick button tracker",
        commit: "c14d9f8"
    },
    {
        title: "Vi lade till layout/containers",
        commit: "0409bc3"
    },
    {
        title: "Vi lade till Tisha logo",
        commit: "1455269"
    },
    {
        title: "Vi lade till loggboken",
        commit: "f096cd6"
    }
];

const timeline = document.getElementById("commit-timeline");

timeline.innerHTML = "";

timelineCommits.forEach(entry => {

    const url = `https://api.github.com/repos/${username}/${repository}/commits/${entry.commit}`;

    fetch(url)
        .then(response => response.json())
        .then(commit => {

            const item = document.createElement("div");
            item.classList.add("timeline-item");

            const date = new Date(commit.commit.author.date);

            item.innerHTML = `
                <h3>${entry.title}</h3>

                <p>
                    ${date.toLocaleDateString("sv-SE")}
                    ${date.toLocaleTimeString("sv-SE")}
                </p>
            `;

            timeline.appendChild(item);
        })
        .catch(error => {
            console.error("Kunde inte hämta commit:", error);
        });
});